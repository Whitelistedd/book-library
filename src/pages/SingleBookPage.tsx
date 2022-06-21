import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../redux/store';
import { BookFetchResponse } from '../types';

export const SingleBookPage = () => {

    const [Book,setBook] = useState<BookFetchResponse>();
    const bookId = useAppSelector(state => state.BookId)
  
    useEffect(() => {
      const getBooks = async () => {
        try {
          const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
          setBook(response.data)
        } catch(err) {
          console.log(err)
        }
      } 
  
      getBooks()
    },[bookId])

    console.log(Book)

    return (
        <Container>
          <ImageWrap>
            <Image src={Book?.volumeInfo?.imageLinks?.medium} />
          </ImageWrap>
          <Info>
            <Category>{Book?.volumeInfo?.categories?.join(",")}</Category>
            <BookName>{Book?.volumeInfo?.title}</BookName>
            <Authors>{Book?.volumeInfo?.authors?.join(",")}</Authors>
            <About>{Book?.volumeInfo?.description}</About>
          </Info>
        </Container>
    )
}

const About = styled.p`
  height: 40%;
  padding: 1em;
  border: 1px solid black;
`

const Authors = styled.p`
  margin-bottom: auto;
`

const BookName = styled.h1`
  margin-top: auto;
`

const Category = styled.div``

const Info = styled.div`
  flex: 1;
  padding: 5em;
  height: 100%;
`

const Image = styled.img`
  min-width: 35%;
  height: 85%;
`

const ImageWrap = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F3F2F1;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
`
