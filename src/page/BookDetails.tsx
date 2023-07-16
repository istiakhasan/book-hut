/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useParams } from "react-router-dom";
import {
  useCreateReviewMutation,
  useSingleBookQuery,
} from "../redux/features/books/booksApi";
import { IBook } from "../types/globalTypes";
import RatingPng from "../assets/star.png";
import { FormEvent } from 'react';
const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading, refetch } = useSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    // pollingInterval: 20000,
    // refetchOnFocus:true
  });
  const [postReview, { isLoading: loding, isError, isSuccess, error }] =
    useCreateReviewMutation();
  console.log(error, "error");
  if (isLoading) {
    return;
  }

  let book: IBook | undefined;
  if (data?.success) {
    book = data?.data as IBook;
  }

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = e.target?.review?.value;
    await postReview({
      id: id,
      data: inputValue,
    });
    await refetch();
  };
  console.log(data, "data");
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="flex flex-row-reverse">
          <div>
            <img src={book?.image} className="w-[500px] h-[400px] mt-10 rounded-lg shadow-2xl" />
          </div>
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

            <form onSubmit={handleSubmit}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Submit a review</span>
                </label>
                <input
                  type="text"
                  name="review"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <button type="submit" className="btn btn-primary btn-sm my-4">
                  Submit
                </button>
              </div>
            </form>
            <div className="p-4" style={{ border: "1px solid gray" }}>
              <p className="underline text-2xl text-gray-600">
                Review Section{" "}
              </p>
              {book?.review.map((item: string) => (
                <>
                  <hr />
                  <p className="my-5">{item}</p>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
