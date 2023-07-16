/* eslint-disable @typescript-eslint/no-misused-promises */
import { useNavigate } from "react-router-dom";
import { IBook } from "../types/globalTypes";
import { useAppSelector } from "../redux/hook";

import { useCreateWishListMutation } from "../redux/features/books/booksApi";
import { toast } from 'react-toastify';

interface ProductCardProps {
  book: IBook;
}

const BooksCard: React.FC<ProductCardProps> = ({ book }) => {
  const [createWishList,{isSuccess,error}] = useCreateWishListMutation();
  const { user } = useAppSelector((state) => state.user);
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = async (status: string, bookId: string) => {
    if(!user.email){
      return toast.error("Please log in then add your wish list ")
    }
    const data = {
      email: user.email,
      status: status,
      book: bookId,
    };
    await createWishList({ data: data });
  };

  if(isSuccess){
    toast.success("added successfully")
  }
  console.log(error,"error");
  return (
    <div className="h-full relative ">
      <div className="max-w-sm rounded overflow-hidden shadow-lg h-full pb-10">
        <img
          className="w-full h-[250px] object-fill"
          src={book.image}
          alt="Mountain"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.title}</div>
          <p className="text-gray-700 text-base">{book.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <span>Author</span>:{book.author}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {book.genre}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3  py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {book.publicationDate}
          </span>

          <div>
            <select
              onChange={async(e) =>await handleChange(e.target.value, book.id)}
              className="select select-info w-full max-w-xs"
            >
              <option disabled selected>
                Select language
              </option>
              <option value={"1"}>WishList</option>
              <option value={"2"}>Continue Reading</option>
              <option value={"3"}>Finish Reading</option>
            </select>
          </div>
          <div className="text-end">
            <span
              className="bg-gray-600 cursor-pointer text-white text-sm px-10 py-[3px] rounded-[5px] font-semibold absolute right-0 bottom-0"
              onClick={() => navigate(`/book/${book.id}`)}
            >
              Details
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
