import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().email().required("Can’t be empty"),
  password: yup
    .string()

    .required("password is required"),
});

export default loginSchema;
