const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const regexNumber = /\d/;

export default function validate(inputs) {
  let errors = {};
  if (
    !regexEmail.test(inputs.email) ||
    !inputs.email ||
    inputs.email.length >= 35
  )
    errors.email = "Debe ser un correo electrónico";
  if (inputs.password.length < 6 || inputs.password.length > 10)
    errors.password = "Debe tener una longitud entre 6 y 10 caracteres";
  if (!regexNumber.test(inputs.password))
    errors.password = "Debe tener al menos un numero";
  return errors;
}
