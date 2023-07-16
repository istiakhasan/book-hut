/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Fragment } from "react";

import { IBook } from "../types/globalTypes";
import BooksCard from "../components/BooksCard";
import Banner from "../components/Banner";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
const Home = () => {
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  if(isLoading){
    return
  }
  if(error){
    console.log(error);
  }
  let books: IBook[] | undefined =[]
  if(data.success){
     books= data?.data;
  }
  

  
  
  return (
    <div>
      <Banner />
      <h1 className="text-center text-3xl text-gray-700 font-semibold my-10 underline">
        Recently Added Books Collecton
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:mx-20 mx-2">
        {books?.slice(0,10)?.map((book: IBook, i: number) => (
          <Fragment key={i}>
            <BooksCard book={book} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Home;
