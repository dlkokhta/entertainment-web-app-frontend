import { useForm } from "react-hook-form";
import axios from "axios";
import { loginpTypes } from "../types/loginTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "./loginSchema";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<loginpTypes>({ resolver: yupResolver(loginSchema) });

  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: loginpTypes) => {
    const url = "http://localhost:3000/api/login";

    const userData = {
      email: data?.email,
      password: data?.password,
    };

    try {
      const response = await axios.post(url, userData);

      const authToken = response.data.token;

      localStorage.setItem("authToken", authToken);
      localStorage.setItem("data.email", data.email);

      navigate("/");

      reset();
    } catch (error: any) {
      setServerError(error.response.data[0].type);
      console.log("errorrrrr", error);
    }
  };
  const navigate = useNavigate();
  const signUpClickHandler = () => {
    navigate("/signUp");
  };

  return (
    <div className="bg-darckBlue px-6 pt-12 pb-[167px] h-full">
      <div className="flex justify-center mb-[58px]">
        <svg width="33" height="27" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
            fill="#FC4747"
          />
        </svg>
      </div>
      <div className="bg-semyDarck clear-start pt-6 px-6 pb-[26px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center "
        >
          <div className="w-full">
            <h1 className="text-white font-outfit font-normal text-[32px] mb-10 ">
              Login
            </h1>
          </div>
          <div className="w-full pl-4 mb-[16px] relative">
            <input
              placeholder="Email address"
              // type="email"
              className="type-text outline-none bg-semyDarck  placeholder-slate-400 placeholder:font-outfit placeholder:font-normal text-base w-full text-white "
              {...register("email")}
            />
            <div className="w-full absolute top-5">
              {errors.email ? (
                <p className="text-red text-[13px]">{errors.email.message}</p>
              ) : serverError ? (
                <p className="text-red text-[13px]">{serverError}</p>
              ) : null}
            </div>
          </div>
          <div className="h-[1px] bg-grey w-full mb-6"></div>
          <div className="w-full pl-4 mb-[16px] relative">
            <input
              type="password"
              placeholder="Password"
              className="type-text outline-none bg-semyDarck placeholder-slate-400  placeholder:font-outfit placeholder:font-normal text-base w-full text-white"
              {...register("password")}
            />
            <div className="absolute top-5">
              {errors.password ? (
                <p className="text-red text-[13px]">
                  {errors.password.message}
                </p>
              ) : null}
            </div>
          </div>
          <div className="h-[1px] bg-grey w-full mb-6"></div>

          <button
            type="submit"
            className="text-white bg-red font-outfit text-base py-[14px] w-full rounded-md mb-6"
          >
            Login to your account
          </button>

          <h2 className="text-white font-outfit text-base">
            Alread have an account?
            <span
              onClick={signUpClickHandler}
              className="font-outfit text-red ml-2"
            >
              Sign Up
            </span>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Login;
