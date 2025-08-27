export const checkValidData = (email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
    if(!isEmailValid) return 'Email is not valid';
    if(!passwordValid) return 'Password is not valid';
    return null;
};
