/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { books } from "../assets/data";
import BooksCard from "../components/BooksCard";
import { FormEvent } from "react";
import YearDropdown from "../components/YearDropdown";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import { IBook } from "../types/globalTypes";
import { useState } from "react";
const AllBooks = () => {
  const [paraMeters, setPerameters] = useState<
    | { searchTerm?: string; genre?: string; publicationDate?: string }
    | undefined
  >(undefined);
  const { data, isLoading, error } = useGetBooksQuery(paraMeters,{
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true,
  });

  if (isLoading) {
    return;
  }
  if (error) {
    console.log(error);
  }
  let books: IBook[] | undefined = [];
  if (data?.success) {
    books = data?.data;
  }

  const handleYearChange = (event: FormEvent<HTMLFormElement>) => {
    const selectedYear = event?.target?.value ;
    setPerameters({ ...paraMeters, publicationDate: selectedYear });
  };
  return (
    <div className="grid grid-cols-4  mt-10">
      <div className="px-5">
        <div className="card bg-base-100 shadow-xl p-5">
          <p className="text-md font-semibold text-gray-500">Search Books...</p>
          <input
            type="text"
            onChange={(e) =>
              setPerameters({ ...paraMeters, searchTerm: e.target.value })
            }
            placeholder="Search"
            className="input input-sm input-bordered w-full  max-w-xs"
          />

          <p className="text-md font-semibold text-gray-500 mt-5  underline">
            Filter by Genre
          </p>

          <input
            type="text"
            onChange={(e) =>
              setPerameters({ ...paraMeters, genre: e.target.value })
            }
            placeholder="Search"
            className="input input-sm input-bordered w-full  max-w-xs"
          />
          <p className="text-md font-semibold text-gray-500 mt-5  underline">
            Filter by Year
          </p>
          {/* <input
            type="text"
            onChange={(e) =>
              setPerameters({ ...paraMeters, publicationDate: e.target.value })
            }
            placeholder="Search"
            className="input input-sm input-bordered w-full  max-w-xs mb-3"
          /> */}

          <YearDropdown
            startYear={2023}
            endYear={1800}
            onChange={handleYearChange}
          />
        </div>
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-3 gap-10 mx-20">
          {books?.map((book, i) => (
            <BooksCard book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
