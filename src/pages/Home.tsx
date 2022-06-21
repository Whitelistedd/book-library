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

    useEffect(() => {
      const getBooks = async () => {
        try {
          const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${SearchValue ? SearchValue : `""`}&key=AIzaSyBl9KhX_Ft0D2LvxwV-6bnS_2xLPPGSTpg`)
          setBooksCount(response.data.totalItems)
          setAllBooks(response.data.items)
        } catch(err) {
          console.log(err)
        }
      } 
    
      getBooks()
    },[SearchValue])
  
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
