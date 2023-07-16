/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { useAppSelector } from "../redux/hook";
import { useCreateBookMutation } from "../redux/features/books/booksApi";
import { IBook } from "../types/globalTypes";
import moment from "moment";

const AddNewBooks = () => {
  const [createBook, { isLoading, isError, isSuccess, error }] =
    useCreateBookMutation();
  const { register, handleSubmit } = useForm();
  const { user } = useAppSelector((state) => state.user);
  const onSubmit = async (data: Partial<IBook>) => {
    const publicationDate =moment(data.publicationDate).format('L')
   
    await createBook({
      data: { ...data, email: user.email,publicationDate:publicationDate },
    });
  };

  return (
    <div className="login_wraper">
      <form className="login-div" onSubmit={handleSubmit(onSubmit)}>
        <div className="title">Add New Books</div>

        <div className="fields">
          <div className="username">
            <input
              type="text"
              {...register("title", { required: true })}
              className="user-input px-6"
              placeholder="Title"
            />
          </div>
          <div className="username">
            <input
              type="text"
              {...register("author", { required: true })}
              className="user-input px-6"
              placeholder="author"
            />
          </div>
          <div className="password">
            <input
              type="text"
              {...register("genre", { required: true })}
              placeholder="Genre"
              className="pass-input px-5"
            />
          </div>
          <div className="password">
            <input
              type="date"
              {...register("publicationDate", { required: true })}
              placeholder="password"
              className="pass-input px-5"
            />
          </div>
          <div className="password">
            <input
              type="text"
              {...register("image", { required: true })}
              placeholder="Image url"
              className="pass-input px-5"
            />
          </div>
          <div className="password">
            <input
              type="text"
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

export default AddNewBooks;
