/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { createUser } from "../redux/features/user/userSlice";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface SignUpFormInputs {
  email: string;
  password: string;
  username: string;
}

const SignUp = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading, isError, error } = useAppSelector(
    (state) => state.user
  );
  const { register, handleSubmit } = useForm<SignUpFormInputs>();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const onSubmit = async (data: SignUpFormInputs) => {
    await dispatch(createUser({ email: data.email, password: data.password }));
  };
  useEffect(() => {
    if (user.email && !isLoading) {
      navigate(from as string, { replace: true });
    }
  }, [user.email]);
  if (isError) {
    toast.error(error);
  }
  return (
    <div className="login_wraper">
      <form className="login-div" onSubmit={handleSubmit(onSubmit)}>
        <div className="title">Welcome To Book Fair</div>
        <div className="sub-title">Login</div>
        <div className="fields">
          <div className="username">
            <input
              type="text"
              {...register("username", { required: true })}
              className="user-input px-6"
              placeholder="User name"
            />
          </div>
          <div className="username">
            <input
              type="text"
              {...register("email", { required: true })}
              className="user-input px-6"
              placeholder="email"
            />
          </div>
          <div className="password">
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="password"
              className="pass-input px-5"
            />
          </div>
        </div>
        <button type="submit" className="signin-button bg-red-500">
          Sign Up
        </button>
        {isError&&<small className="block text-red-500 font-semibold my-3">{error}</small>}
      </form>
    </div>
  );
};

export default SignUp;
