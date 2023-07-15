/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../redux/hook";
import { loginUser } from "../redux/features/user/userSlice";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const onSubmit = async (data: LoginFormInputs) => {
    await dispatch(loginUser({ email: data.email, password: data.password }));
    // console.log(data);
  };

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
