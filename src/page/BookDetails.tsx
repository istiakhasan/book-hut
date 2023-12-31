/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useNavigate, useParams } from "react-router-dom";
import {
  useCreateReviewMutation,
  useDeleteBookMutation,
  useSingleBookQuery,
} from "../redux/features/books/booksApi";
import { IBook } from "../types/globalTypes";
import { useAppSelector } from "../redux/hook";
import { toast } from "react-toastify";
const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const { data, isLoading, refetch } = useSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 20000,
    refetchOnFocus: true,
  });
  const [
    deleBook,
    {
      isError: deleError,
      error: deleteErrorMessage,
      isSuccess: deleteIsSuccess,
    },
  ] = useDeleteBookMutation();
  const [postReview] =
    useCreateReviewMutation();
  if (isLoading) {
    return;
  }

  let book: IBook | undefined;
  if (data?.success) {
    book = data?.data as IBook;
  }

  const handleSubmit = async (e:any)=> {
    e.preventDefault();
    const inputValue = e.target?.review?.value;
    await postReview({
      id: id,
      data: inputValue,
    });
    await refetch();
    toast.success('Review successfully..')
   
  };
  if (deleError) {
    toast.error(deleteErrorMessage as string);
  }
  if (deleteIsSuccess) {
    toast.success("Book deleted successfully");
    navigate("/all-books");
  }
  const handleDeleteBook = async () => {
    await deleBook({ id: book!.id });
  };
  const myObject: any = window; // Assuming 'my_modal_1' exists on the window object
  const myModal = myObject.my_modal_1;
  return (
    <div>
      {/* modal */}

      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Alert!</h3>
          <p className="py-4">Are you sure want to delete this book?</p>
          <div className="modal-action">
            <button
              onClick={handleDeleteBook}
              className="btn btn-error text-white btn-xs"
            >
              Delete
            </button>
            <button className="btn btn-xs btn-primary">Close</button>
          </div>
        </form>
      </dialog>
      <div className="hero min-h-screen bg-base-200">
        <div className="lg:flex flex-row-reverse gap-10">
          <div className="mb-4">
            <img
              src={book?.image}
              className="lg:w-[500px] mx-auto h-[400px] object-fill mt-10 rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h1 className="lgtext-3xl font-bold">{book?.title}</h1>
            <p className="py-6 max-w-[500px]">{book?.description}</p>
            <p>
              <strong>Author:</strong>
              {book?.author}
            </p>
            <p>
              <strong>Publication Date:</strong>
              {book?.publicationDate}
            </p>

            {true && (
              <>
                {user?.email !== book?.email && (
                  <small className="block text-red-600 font-semibold">
                    Only you can delete or edit your own book
                  </small>
                )}
                <button
                  onClick={() => navigate(`/edit-book/${id as string}`)}
                  className="btn btn-sm btn-primary mr-3 my-4"
                  disabled={user?.email !== book?.email}
                >
                  Edit
                </button>
                <button
                  onClick={() => myModal.showModal()}
                  // onClick={handleDeleteBook}
                  disabled={user?.email !== book?.email}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </>
            )}

            {user.email && (
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
            )}
            <div className="p-4" style={{ border: "1px solid gray" }}>
              <p className="underline text-2xl text-gray-600">
                Review Section{" "}
              </p>
              {book?.review?.map((item: string) => (
                <>
                  <p className="my-5">
                    <strong>**</strong>
                    {item}
                  </p>
                  <hr />
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
