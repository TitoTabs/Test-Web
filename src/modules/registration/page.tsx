import { FC } from "react";
import { useForm } from "react-hook-form";
import { VerifiedArgs, verifiedSchema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import useUser from "../../hooks/register";

const Container: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<VerifiedArgs>({
    mode: "onChange",
    resolver: yupResolver(verifiedSchema),
    defaultValues: {
      user_type: "seller",
    },
  });

  const user = useUser();

  const onSubmit = async (data: VerifiedArgs) => {
    const response = (await user).postRegister(data);

    console.log(response);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <div className="mb-4">
          <label
            htmlFor="firstname"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            {...register("first_name")}
          />
          {errors.first_name && (
            <p className="text-red-500 text-xs mb-4">
              {errors.first_name.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("last_name")}
          />
          {errors.last_name && (
            <p className="text-red-500 text-xs mb-4">
              {errors.last_name.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="userType"
            className="block text-sm font-medium text-gray-700"
          >
            User Type
          </label>
          <select
            id="userType"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            {...register("user_type")}
          >
            <option value="seller">Seller</option>
            <option value="customer">Customer</option>
          </select>
          {errors.user_type && (
            <p className="text-red-500 text-xs mb-4">
              {errors.user_type.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            {...register("user_name")}
          />
          {errors.user_name && (
            <p className="text-red-500 text-xs mb-4">
              {errors.user_name.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mb-4">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mb-4">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirm_password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm_password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            {...register("confirm_password")}
          />
          {errors.confirm_password && (
            <p className="text-red-500 text-xs mb-4">
              {errors.confirm_password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Container;
