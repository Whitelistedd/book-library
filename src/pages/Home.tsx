import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Books } from '../components/Books/Books';
import { Header } from '../components/Header/Header';
import { SingleBookSection } from '../components/SingleBookSection/SingleBookSection';
import { ChangeLoadingState } from '../redux/redux';
import { AppDispatch, useAppSelector } from '../redux/store';
import { BookFetchResponse } from '../types';

export const Home = () => {

    const [allBooks,setAllBooks] = useState<BookFetchResponse[]>()
    const [booksCount,setBooksCount] = useState<number>(0)
    const {Search,BookId,Category,SortBy,Loading} = useAppSelector(state => state)
    const dispatch = AppDispatch()

    useEffect(() => {
      const getBooks = async () => {
        try {
          const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?orderBy=${SortBy}&q=${Search ? Search : `""`}${Category !== "all" ? `subject:${Category}` : ""}&maxResults=30`)
          setBooksCount(response.data.totalItems)
          setAllBooks(response.data.items)
          dispatch(ChangeLoadingState())
        } catch(err) {
          console.log(err)
        }
      } 
    
      getBooks()
    },[Search,Category,SortBy])
  
    return (
      <Container>
        <Header />
        {
          Loading && <Books booksCount={0} />
        }
        {/* будет отображать книги только тогда, когда книга не выбрана */}
        {!BookId && !Loading  ?
          <Books booksCount={booksCount} allBooks={allBooks} />
        :
        /* он будет отображать только одну книгу, если книга выбрана и в поиске ничего нет */
        (BookId && !Search  && !Loading
          ?
          <SingleBookSection /> 
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
