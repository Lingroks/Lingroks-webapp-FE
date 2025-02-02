  
  export  const validatePassword = (password) => {
    return {
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      isLongEnough: password.length >= 8,
    };
  };