export const validateForm = (form) => {
    const errors = {};
  
    const isEmpty = (value) => value === null || value === undefined || value === '';
  
    const isZero = (value) => value === 0 || value <= 0 ;

    const isTrue = (value) => value === true ? true : false;


    const phoneNumberRegex = /^\d{11}$/;
    const landlineNumberRegex = /^\d{11}$/;
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  

    if (isEmpty(form.pr_type.category)) errors.pr_type = 'Category is required';

    if (isZero(form.pr_area.length)) errors.pr_area_length = 'Length value is invalid';
    if (isEmpty(form.pr_area.measure)) errors.pr_area_measure = 'Measure is required';
    if (isEmpty(form.pr_area.location)) errors.pr_area_location = 'Location is required';
    if (isEmpty(form.pr_area.city)) errors.pr_area_city = 'City is required';
  
    // Validate pr_pay
    if (isZero(form.pr_pay.price)) errors.pr_pay_price = 'Price cannot be zero';
    if (isEmpty(form.pr_pay.currency)) errors.pr_pay_currency = 'Currency is required';
  
    // Validate pr_installment_plan
    if (isTrue(form.pr_installment)){
    if (isZero(form.pr_installment_plan.number_of_installments)) errors.pr_installment_plan_number = 'Number of installments cannot be zero';
    if (isEmpty(form.pr_installment_plan.currency)) errors.pr_installment_plan_currency = 'Currency is required';
    if (isZero(form.pr_installment_plan.advance_amount)) errors.pr_installment_plan_advance = 'Advance amount cannot be zero';
    if (isZero(form.pr_installment_plan.monthly_installments)) errors.pr_installment_plan_monthly = 'Monthly installments cannot be zero';
    }
    // Validate pr_description
    if (isEmpty(form.pr_description.title)) errors.pr_description_title = 'Title is required';
    if (isEmpty(form.pr_description.description)) errors.pr_description_description = 'Description is required';
  
    // Validate user_info
    
    if(isEmpty(form.user_info.email)) { errors.user_info_email = "Email is empty" }
    else {
     if(!gmailRegex.test(form.user_info.email)) errors.user_info_email = "Email is invalid"
    }
     if (!phoneNumberRegex.test(form.user_info.phoneNumber)) errors.user_info_phoneNumber = 'Phone number must be exactly 11 digits';
    if (!landlineNumberRegex.test(form.user_info.landlineNumber)) errors.user_info_landlineNumber = 'Landline number must be exactly 11 digits';
    if (isEmpty(form.pr_items.bedrooms)){
    if (isZero(form.pr_items.number_of_bedrooms)) errors.pr_items_number_of_bedrooms = 'Number of bedrooms cannot be zero';
    }
    if (isZero(form.pr_items.washrooms)) errors.pr_items_washrooms = 'Number of washrooms cannot be zero';
  
  
    return errors;
  };
  

  