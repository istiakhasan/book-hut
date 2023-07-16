/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IBook } from "../../../types/globalTypes";
import { api } from "../../api/apiSlice";
import Pick from "../../utils/pick";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (queryParameters) => {
        const query=  Pick(queryParameters,["searchTerm","author","publicationDate"])
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
    getComment: builder.query({
      query: (id: number) => `/comment/${id}`,
      providesTags: ["comments"],
    }),
  }),
});

export const {
  useGetCommentQuery,
  useGetBooksQuery,
  useCreateBookMutation,
  useSingleBookQuery,
} = productApi;
