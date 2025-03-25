import mongoose from "mongoose";
import Stripe from "stripe";
import packageModel from "../models/packageModel.js";
import paymentHistoryModel from "../models/paymentHistoryModel.js";
import userModel from "../models/userModel.js";

export const handleStripePaymentIntent = async (req, res) => {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return res.status(400).send({
        status: false,
        message: "Please provide Stripe Secret Key",
      });
    }
    const StripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

    const { packageId, userId, email } = req.body;
    if (!packageId || !userId || !email) {
      return res.status(400).send({
        status: false,
        message: "All fields are required",
      });
    }
    if (!mongoose.isValidObjectId(packageId)) {
      return res.status(400).send({
        status: false,
        message: "Invalid Package ID",
      });
    }

    const packageFound = await packageModel.findById(packageId);
    if (!packageFound) {
      return res.status(400).send({
        status: false,
        message: "Invalid Package",
      });
    }

    const paymentIntent = await StripeInstance.paymentIntents.create({
      amount: packageFound.price * 100,
      currency: "usd",
      metadata: {
        subscriptionPlanId: packageId,
        userId,
        userEmail: email,
      },
    });
    const payment = new paymentHistoryModel({
      userId,
      packageId,
      paymentIntentId: paymentIntent.id,
      amount: packageFound.price * 100,
      currency: "usd",
      status: paymentIntent.status,
      email,
    });

    await payment.save();

    return res.status(200).send({
      status: true,
      message: "Payment Intent Created",
      data: {
        clientSecret: paymentIntent.client_secret,
        email,
        packageId,
        userId,
      },
    });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Server Error: " + err.message,
    });
  }
};

export const handlePaymentStatus = async (req, res) => {
  try {
    const StripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

    const paymentId = req.params.paymentId;
    if (!paymentId) {
      return res.status(400).send({
        status: false,
        message: "Payment ID is required",
      });
    }

    const paymentIntent = await StripeInstance.paymentIntents.retrieve(
      paymentId
    );
    if (paymentIntent.status !== "succeeded") {
      return res.status(400).send({
        status: false,
        message: "Payment Failed",
      });
    }

    const { subscriptionPlanId, userId } = paymentIntent.metadata;
    const userFound = await userModel.findById(userId);
    if (!userFound) {
      return res.status(400).send({
        status: false,
        message: "Invalid User",
      });
    }

    const paymentHistory = await paymentHistoryModel.create({
      userId,
      packageId: subscriptionPlanId,
      paymentIntentId: paymentIntent.id,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    });

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      {
        isSubscribed: true,
        package: subscriptionPlanId,
      },
      { new: true }
    );

    return res.status(200).send({
      status: true,
      message: "Payment Success",
      data: { history: paymentHistory, user: updatedUser },
    });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Server Error: " + err.message,
    });
  }
};
