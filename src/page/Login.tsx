/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { loginUser } from "../redux/features/user/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading, isError, error } = useAppSelector(
    (state) => state.user
  );
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const onSubmit = async (data: LoginFormInputs) => {
    await dispatch(loginUser({ email: data.email, password: data.password }));
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
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
