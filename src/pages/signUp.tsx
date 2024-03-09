import { useForm } from "react-hook-form";
import axios from "axios";
import { signUpTypes } from "../types/signUpTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import signUpSchema from "./signUpSchema";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<signUpTypes>({ resolver: yupResolver(signUpSchema) });

  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: signUpTypes) => {
    const url = "http://localhost:3000/api/register";

    const userData = {
      email: data.email,
      password: data.password,
      repeatPassword: data.repeatPassword,
    };

    try {
      await axios.post(url, userData);

      reset();
    } catch (error: any) {
      
      setServerError(error.response.data[0].type);
      console.log("errorrrrr", error);
    }
  };
  const navigate = useNavigate();
  const signUpClickhandler = () => {
    navigate("/login");
  };

  return (
    <div className="px-6 pt-12 pb-[88px] h-full lg:min-h-screen lg:px-[184px] xl:px-[520px]">
      <div
        className="flex justify-center mb-[58px]"
        onClick={() => {
          navigate("/");
        }}
      >
        <svg width="33" height="27" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
            fill="#FC4747"
          />
        </svg>
      </div>
      <div className="bg-semyDarck clear-start pt-6 px-6 pb-[26px] lg:px-8 lg:pt-8 lg:pb-8 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center "
        >
          <div className="w-full">
            <h1 className="text-white font-outfit font-normal text-[32px] mb-10 ">
              Sign Up
            </h1>
          </div>
          <div className="w-full pl-4 mb-[16px] relative ">
            <input
              placeholder="Email address"
              type="email"
              className="type-text outline-none bg-semyDarck placeholder-slate-400 placeholder:font-outfit placeholder:font-normal text-base w-full text-white "
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
          <div className="w-full pl-4 mb-[16px] relative">
            <input
              type="password"
              placeholder="Repeat Password"
              className="type-text outline-none bg-semyDarck placeholder-slate-400  placeholder:font-outfit placeholder:font-normal text-base w-full text-white"
              {...register("repeatPassword")}
            />
            <div className="absolute top-5">
              {errors.repeatPassword ? (
                <p className="text-red text-[13px]">
                  {errors.repeatPassword.message}
                </p>
              ) : null}
            </div>
          </div>
          <div className="h-[1px] bg-grey w-full mb-10"></div>

          <button
            type="submit"
            className="text-white bg-red font-outfit text-base py-[14px] w-full rounded-lg mb-6"
          >
            Create an Account
          </button>

          <h2 className="text-white font-outfit text-base">
            Alread have an account?
            <span
              onClick={signUpClickhandler}
              className="font-outfit text-red ml-2"
            >
              Login
            </span>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
