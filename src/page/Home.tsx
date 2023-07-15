import { Fragment, useState } from "react";

import { IBook } from "../types/globalTypes";
import BooksCard from "../components/BooksCard";
import Banner from "../components/Banner";
import { useGetBooksQuery } from "../redux/features/books/booksApi";

const Home = () => {
  const { data } = useGetBooksQuery(undefined);
  console.log(data,"log data");
  const [books, setBooks] = useState<IBook[]>([
    {
      id: 1,
      title: "Prottaborton",
      genre: "Motivation",
      publicationDate: "10-12-2012",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 1,
      title: "Prottaborton",
      genre: "Motivation",
      publicationDate: "10-12-2012",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 1,
      title: "Prottaborton",
      genre: "Motivation",
      publicationDate: "10-12-2012",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 1,
      title: "Prottaborton",
      genre: "Motivation",
      publicationDate: "10-12-2012",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 1,
      title: "Prottaborton",
      genre: "Motivation",
      publicationDate: "10-12-2012",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 1,
      title: "Prottaborton",
      genre: "Motivation",
      publicationDate: "10-12-2012",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 1,
      title: "Prottaborton",
      genre: "Motivation",
      publicationDate: "10-12-2012",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 1,
      title: "Prottaborton",
      genre: "Motivation",
      publicationDate: "10-12-2012",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 1,
      title: "Prottaborton",
      genre: "Motivation",
      publicationDate: "10-12-2012",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 1,
      title: "Prottaborton",
      genre: "Motivation",
      publicationDate: "10-12-2012",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 1,
      title: "Prottaborton",
      genre: "Motivation",
      publicationDate: "10-12-2012",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 1,
      title: "Prottaborton",
      genre: "Motivation",
      publicationDate: "10-12-2012",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 1,
      title: "Prottaborton",
      genre: "Motivation",
      publicationDate: "10-12-2012",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 1,
      title: "Prottaborton",
      genre: "Motivation",
      publicationDate: "10-12-2012",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 1,
      title: "Prottaborton",
      genre: "Motivation",
      publicationDate: "10-12-2012",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    {
      id: 1,
      title: "Prottaborton",
      genre: "Motivation",
      publicationDate: "10-12-2012",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
  ]);
  return (
    <div>
      <Banner />
      <h1 className="text-center text-3xl text-gray-700 font-semibold my-10 underline">
        Recently Added Books Collecton
      </h1>

      <div className="grid grid-cols-4">
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
