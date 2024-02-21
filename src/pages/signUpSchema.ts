import * as yup from "yup";

const signUpSchema = yup.object({
  email: yup.string().email().required("Can’t be empty"),

  password: yup
    .string()
    .min(8, "password must be 8 or more characters")
    .max(25, "password must contain 25 ot less charachters")
    .required("password is required"),

  repeatPassword: yup
    .string()
    .min(8, "password must be 8 or more characters")
    .max(25, "password must contain 25 ot less charachters")
    .required("password is required"),
});

export default signUpSchema;
