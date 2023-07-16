import {  useGetWishListQuery } from "../redux/features/books/booksApi";
import { useAppSelector } from "../redux/hook";
import { useEffect } from "react";

const WishList = () => {
  const { user } = useAppSelector((state) => state.user);
  const {data} = useGetWishListQuery({ email: user.email,status:1 });
  console.log(data,"data");

  return <div></div>;
};

export default WishList;
