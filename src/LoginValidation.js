function Validation(values) {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]{8,}$/;

    if (values.email.trim() === "") {
      errors.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "Email is not valid";
    } else {
      errors.email = "";
    }
  
    if (values.password.trim() === "") {
      errors.password = "Password should not be empty";
    } else if (!passwordPattern.test(values.password)) {
      errors.password =
        "Password should be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@#$%^&+=)";
    } else {
      errors.password = "";
    }
  
    return errors;
  }
  
  export default Validation;
  