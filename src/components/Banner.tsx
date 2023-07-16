import { Link } from "react-router-dom";
import {  useAppSelector } from "../redux/hook";

const Banner = () => {
  const {user}=useAppSelector(state=>state.user)
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://www.shift4shop.com/2015/images/build-bookstore-ecommerce/build-ecommerce-banner.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Welcome to our enchanting realm of books, where the pages come
              alive and imagination knows no bounds! Prepare to embark on a
              literary journey like no other as we guide you through a vast and
              diverse universe of stories, characters, and ideas.
            </p>
           {!user.email && <Link to="/login" className="btn btn-primary">
              Get Started
            </Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
