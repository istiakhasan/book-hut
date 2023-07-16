import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";
import { toast } from "react-toastify";

interface IBooksInitState {
  wishlist: IBook[];
  currentLyReading: IBook[];
}

const initialState: IBooksInitState = {
  wishlist: [],
  currentLyReading: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<IBook>) => {
      const isExist = state?.wishlist?.find(
        (item) => item.id === action.payload.id
      );
      if (isExist) {
        toast.error("Already added");
      } else {
        state?.wishlist?.push(action.payload);
        toast.success("Book added to wishlist");
      }
    },
  },
});

export const { addToWishList } = bookSlice.actions;

export default bookSlice.reducer;
