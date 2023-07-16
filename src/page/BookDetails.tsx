/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/features/books/booksApi";
import { IBook } from "../types/globalTypes";
import RatingPng from "../assets/star.png";
const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useSingleBookQuery(id);
  console.log(data, "data fetch successfully");

  if (isLoading) {
    return;
  }

  let book: IBook | undefined;
  if (data?.success) {
    book = data?.data as IBook;
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={book?.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{book?.title}</h1>
            <p className="py-6 max-w-[500px]">{book?.description}</p>
            <p>
              <strong>Author:</strong>
              {book?.author}
            </p>
            <p>
              <strong>Publication Date:</strong>
              {book?.publicationDate}
            </p>
            <p className="flex gap-2 my-5">
              {[...Array(book?.review).keys()].map((item, i) => (
                <img className="w-[20px] h-[20px]" src={RatingPng} alt="" />
              ))}
            </p>
            <button className="btn btn-sm btn-primary mr-3">Edit</button>
            <button className="btn btn-sm btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
