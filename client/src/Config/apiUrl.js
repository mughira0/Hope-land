export const apiUrl = "http://localhost:5000";
// const apiUrl = "https://4171-110-38-247-71.ngrok-free.app";
// export const apiUrl = "https://letslearnbackend.herokuapp.com";
export const BaseUrl = (url) => `${apiUrl}/api/${url}`;

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
export const recordLimit = 10;
export const handleYearsOptions = () => {
  let years = [];
  let currentYear = new Date().getFullYear();
  console.log(currentYear);
  for (let i = 0; i < 5; i++) {
    years.push({ label: currentYear - i, value: currentYear - i });
  }
  return years;
};
