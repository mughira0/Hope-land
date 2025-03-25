import mongoose from 'mongoose'

const PropertySchema = new mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref : "User"
  },
  pr_purpose: {
    type: String,
    enum: ['Sell', 'Rent'],
    required: true
  },
  pr_type: {
    category: {
      type: String,
      enum: ['Home', 'Plots', 'Commercial'],
      required: true
    },
    type: {
      type: [String],
      required: true
    }
  },
  pr_area: {
    length: {
      type: Number,
      required: true
    },
    measure: {
      type: String,
      enum: ['Marla', 'Sq. Ft.', 'Sq. M.', 'Sq. Yd.', 'Kanal'],
      required: true
    },
    location: {
      type: String,
      required: true
    },
    city: {
      type: String,
      enum: ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Multan'],
      required: true
    }
  },
  pr_pay: {
    price: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      enum: ['USD', 'PKR'],
      required: true
    }
  },
  pr_installment: {
    type: Boolean,
    required: true
  },
  pr_installment_plan: {
    number_of_installments: {
      type: Number,
      required: function() { return this.pr_installment; }
    },
    currency: {
      type: String,
      enum: ['USD', 'PKR'],
      required: function() { return this.pr_installment; }
    },
    advance_amount: {
      type: Number,
      required: function() { return this.pr_installment; }
    },
    monthly_installments: {
      type: Number,
      required: function() { return this.pr_installment; }
    }
  },
  pr_possession: {
    type: Boolean,
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  pr_description: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  user_info: {
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    number_of_phonenumber: {
      type: Number,
      required: true
    },
    landlineNumber: {
      type: String,
      required: true
    }
  },
  pr_items: {
    bedrooms: {
      type: String,
      required: true
    },
    number_of_bedrooms: {
      type: Number,
      required: true
    },
    washrooms: {
      type: Number,
      required: true
    }
  },
  additional_information: {
    type: String
  }
}, { timestamps: true });

const propertyModal  = mongoose.model('Property', PropertySchema);
export default propertyModal;