import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Books } from '../components/Books/Books';
import { Header } from '../components/Header/Header';
import { useAppSelector } from '../redux/store';
import { BookFetchResponse } from '../types';
import { SingleBookPage } from './SingleBookPage';

export const Home = () => {

    const [allBooks,setAllBooks] = useState<BookFetchResponse[]>()
    const [booksCount,setBooksCount] = useState<number>(0)
    const SearchValue = useAppSelector(state => state.Search)
    const BookId = useAppSelector(state => state.BookId)
    const Category = useAppSelector(state => state.Category)
    const SortBy = useAppSelector(state => state.SortBy)

    useEffect(() => {
      const getBooks = async () => {
        try {
          const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?orderBy=${SortBy}&q=${SearchValue ? SearchValue : `""`}${Category !== "all" ? `subject:${Category}` : ""}&maxResults=30`)
          setBooksCount(response.data.totalItems)
          setAllBooks(response.data.items)
        } catch(err) {
          console.log(err)
        }
      } 
    
      getBooks()
    },[SearchValue,Category,SortBy])
  
    return (
      <Container>
        <Header />
        {!BookId ?
          <Books booksCount={booksCount} allBooks={allBooks} />
        :
        (BookId && !SearchValue 
          ?
          <SingleBookPage /> 
          :
          <></>
          )
        }
      </Container>
    );
  }

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Home;
