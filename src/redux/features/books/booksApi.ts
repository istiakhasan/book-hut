/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IBook } from "../../../types/globalTypes";
import { api } from "../../api/apiSlice";
import Pick from "../../utils/pick";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (queryParameters) => {
        const query=  Pick(queryParameters,["searchTerm","genre","publicationDate"])
        return {
          url: `books`,
          params: query,
        };
      },
    }),
    singleBook: builder.query({
      query: (id: string | undefined ) => `/books/${id as string}`,
    }),
    createBook: builder.mutation({
      query: ({data}) => ({
        url: `/books`,
        method: "POST",
        body: data as IBook,
      }),
      invalidatesTags: ["comments"],
    }),
    createReview: builder.mutation({
      query: ({id,data}) => ({
        url: `/books/review/${id as string}`,
        method: "PATCH",
        body: {data:data},
      }),
      invalidatesTags: ["comments"],
    }),
    createWishList: builder.mutation({
      query: ({data}) => ({
        url: `/wishlist`,
        method: "PUT",
        body: {data:data},
      }),
      invalidatesTags: ["comments"],
    }),
    updateBook: builder.mutation({
      query: ({id,data}) => ({
        url: `/books/${id as string}`,
        method: "PATCH",
        body: {data:data},
      }),
      invalidatesTags: ["comments"],
    }),
    deleteBook: builder.mutation({
      query: ({id}) => ({
        url: `/books/${id as string}`,
        method: "DELETE"
      }),
      invalidatesTags: ["comments"],
    }),
  
  }),
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useSingleBookQuery,
  useCreateReviewMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useCreateWishListMutation
} = productApi;
