import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BookFetchResponse, initialStateType } from '../types';

const initialState : initialStateType = {
  allBooks: [],
  Search: "",
  BookId: "",
  Category: "all",
  SortBy: "relevance",
  Loading: true,
  PageCount: 0,
}

const BookRedux = createSlice({
    name: 'BookRedux',
    initialState: initialState,
    reducers: {
      // удалит идентификатор книги, чтобы показать раздел книг и скрыть раздел одной книги
      SearchBooks: (state, action: PayloadAction<string>) => {
        state.allBooks = []
        state.PageCount = 0
        state.BookId = ""
        state.Search = action.payload
      },
      // удалит поиск и установит заданный идентификатор книги, чтобы раздел книг был скрыт
      setBookId: (state,action: PayloadAction<string>) => {
        state.Search = ""
        state.BookId = action.payload
      },
      setCategory: (state,action: PayloadAction<string>) => {
        state.allBooks = []
        state.PageCount = 0
        state.BookId = ""
        state.Category = action.payload
      },
      setSortBy: (state,action: PayloadAction<string>) => {
        state.allBooks = []
        state.PageCount = 0
        state.BookId = ""
        state.SortBy = action.payload
      },
      addMorePageCount: (state) => {
        state.PageCount += 30
      },
      addBooks: (state,action: PayloadAction<BookFetchResponse[]>) => {
        state.Loading = false;
        state.allBooks.push(...action.payload)
      }
    },
})

export const { SearchBooks,setBookId,setCategory,setSortBy,addMorePageCount,addBooks } = BookRedux.actions;
export default BookRedux.reducer;