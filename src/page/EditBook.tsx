/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import {
  useSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/books/booksApi";
import { useForm } from "react-hook-form";
import moment from "moment";
import { IBook } from "../types/globalTypes";
import { toast } from "react-toastify";
import { useAppSelector } from "../redux/hook";

const EditBook = () => {
  const [updateBook, { isLoading: loding, isError, isSuccess }] =
    useUpdateBookMutation();
  const { isLoading: userLoading } = useAppSelector((state) => state.user);
  const { id } = useParams();

  const {
    data: bookData,
    isLoading,
    refetch,
  } = useSingleBookQuery(id as string, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 20000,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const { register, handleSubmit } = useForm({});
  if (isLoading || loding || userLoading) {
    return <h1>Loading...</h1>;
  }
  if (isSuccess) {
    toast.success("Updated SuccessFully");
  }
  if (isError) {
    toast.error("Something went wrong");
  }
  const onSubmit = async (data: Partial<IBook>): Promise<void> => {
    console.log(data);
    await updateBook({
      id: id,
      data: {
        ...data,
        publicationDate: moment(data.publicationDate).format("L"),
      },
    });

    await refetch();
  };

  return (
    <div className="login_wraper">
      <form className="login-div" onSubmit={handleSubmit(onSubmit)}>
        <div className="title">Add New Books</div>

        <div className="fields">
          <div className="username">
            <input
              type="text"
              defaultValue={bookData?.data?.title}
              {...register("title", { required: true })}
              className="user-input px-6"
              placeholder="Title"
            />
          </div>
          <div className="username">
            <input
              type="text"
              defaultValue={bookData?.data?.author}
              {...register("author", { required: true })}
              className="user-input px-6"
              placeholder="author"
            />
          </div>
          <div className="password">
            <input
              type="text"
              defaultValue={bookData?.data?.genre}
              {...register("genre", { required: true })}
              placeholder="Genre"
              className="pass-input px-5"
            />
          </div>
          <div className="password">
            <input
              type="date"
              defaultValue={moment(
                bookData?.data?.publicationDate,
                "MM-DD-YYYY"
              ).format("YYYY-MM-D")}
              {...register("publicationDate")}
              placeholder="Publication date"
              className="pass-input px-5"
            />
          </div>
          <div className="password">
            <input
              type="text"
              defaultValue={bookData?.data?.image}
              {...register("image", { required: true })}
              placeholder="Image url"
              className="pass-input px-5"
            />
          </div>
          <div className="password">
            <input
              type="text"
              defaultValue={bookData?.data?.description}
              {...register("description", { required: true })}
              placeholder="description"
              className="pass-input px-5"
            />
          </div>
        </div>
        <button type="submit" className="signin-button bg-[#4CAF50]">
          Create
        </button>
      </form>
    </div>
  );
};

export default EditBook;
