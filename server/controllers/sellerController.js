import propertyModal from '../models/propertiesModel.js';

export const handleProperties = async (req, res) => {
    const { _id } = req.user;
    console.log("user information from middleware : ", _id);
    console.log("output:", req.body);

    const measure = req.body.pr_area.measure;
    console.log("after Spanning: ", measure.value);

    const {
        pr_purpose, pr_type, pr_area, pr_pay, pr_installment,
        pr_installment_plan, pr_possession, images,
        pr_description, user_info, pr_items, additional_information
    } = req.body;

    const newProperty = {
        userId: _id,
        pr_purpose,
        pr_type,
        pr_area: {
            length: pr_area.length,
            measure: pr_area.measure.value,
            location: pr_area.location,
            city: pr_area.city.value // Assuming pr_area.city is an object with a value property
        },
        pr_pay: {
            price: pr_pay.price,
            currency: pr_pay.currency.value
        },
        pr_installment,
        pr_installment_plan: pr_installment ? {
            number_of_installments: pr_installment_plan.number_of_installments,
            currency: pr_installment_plan.currency.value,
            advance_amount: pr_installment_plan.advance_amount, // Make sure this value is provided in the request
            monthly_installments: pr_installment_plan.monthly_installments
        } : undefined,
        pr_possession,
        images: images.map(image => image), // Assuming each image object has a url property
        pr_description,
        user_info,
        pr_items,
        additional_information
    };

    try {
        const property = await propertyModal.create(newProperty);

        if (property) {
            console.log(property);
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};
