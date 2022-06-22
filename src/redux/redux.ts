import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const BookRedux = createSlice({
    name: 'test',
    initialState: {
        Search: "",
        BookId: "",
        Category: "all",
        SortBy: "relevance",
    },
    reducers: {
      SearchBooks: (state, action: PayloadAction<string>) => {
        state.BookId = ""
        state.Search = action.payload
      },
      setBookId: (state,action: PayloadAction<string>) => {
        state.Search = ""
        state.BookId = action.payload
      },
      setCategory: (state,action: PayloadAction<string>) => {
        state.Category = action.payload
      },
      setSortBy: (state,action: PayloadAction<string>) => {
        state.SortBy = action.payload
      }
    },
})

export const { SearchBooks,setBookId,setCategory,setSortBy } = BookRedux.actions;
export default BookRedux.reducer;