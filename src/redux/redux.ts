import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const BookRedux = createSlice({
    name: 'test',
    initialState: {
        Search: "",
        BookId: ""
    },
    reducers: {
      SearchBooks: (state, action: PayloadAction<string>) => {
        state.BookId = ""
        state.Search = action.payload
      },
      setBookId: (state,action: PayloadAction<string>) => {
        state.Search = ""
        state.BookId = action.payload
      }
    },
})

export const { SearchBooks,setBookId } = BookRedux.actions;
export default BookRedux.reducer;