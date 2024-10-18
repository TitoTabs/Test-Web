import * as yup from "yup";

export type VerifiedArgs = {
  first_name: string;
  last_name: string;
  user_type: string;
  email: string;
  user_name: string;
  password: string;
  confirm_password: string;
};

const verifiedSchema = yup.object().shape({
  first_name: yup.string().required("First Name is required!"),
  last_name: yup.string().required("Last Name is required!"),
  user_type: yup.string().required("User Type is required!"),
  email: yup.string().required("Email is required!"),
  user_name: yup.string().required("User Name is required!"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32)
    .required("Password is required!")
    .matches(/\d/, "Must contain at least one number")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required!"),
});

export { verifiedSchema };
