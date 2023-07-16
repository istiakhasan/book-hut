import { useNavigate } from "react-router-dom";
import { IBook } from "../types/globalTypes";

interface ProductCardProps {
  book: IBook;
}

const BooksCard: React.FC<ProductCardProps> = ({ book }) => {
  const navigate = useNavigate();
  return (
    <div className="h-full relative ">
      <div className="max-w-sm rounded overflow-hidden shadow-lg h-full pb-10">
        <img className="w-full h-[250px] object-fill" src={book.image} alt="Mountain" />
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
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {book.publicationDate}
          </span>
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
