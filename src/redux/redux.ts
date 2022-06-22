import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const BookRedux = createSlice({
    name: 'BookRedux',
    initialState: {
        Search: "",
        BookId: "",
        Category: "all",
        SortBy: "relevance",
        Loading: true,
    },
    reducers: {
      // удалит идентификатор книги, чтобы показать раздел книг и скрыть раздел одной книги
      SearchBooks: (state, action: PayloadAction<string>) => {
        state.BookId = ""
        state.Search = action.payload
      },
      // удалит поиск и установит заданный идентификатор книги, чтобы раздел книг был скрыт
      setBookId: (state,action: PayloadAction<string>) => {
        state.Search = ""
        state.BookId = action.payload
      },
      setCategory: (state,action: PayloadAction<string>) => {
        state.Category = action.payload
      },
      setSortBy: (state,action: PayloadAction<string>) => {
        state.SortBy = action.payload
      },
      ChangeLoadingState: (state) => {
        state.Loading = false
      },
    },
})

export const { SearchBooks,setBookId,setCategory,setSortBy,ChangeLoadingState } = BookRedux.actions;
export default BookRedux.reducer;