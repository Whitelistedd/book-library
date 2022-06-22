import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { devices } from '../devices';
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

    const limitWords = (text: string = "") => {
      if(text.length > 400) {
        return `${text?.substring(0,400)}...`
      } else {
        return text
      }
    }

    return (
        <Container>
          <ImageWrap>
            <Image src={Book?.volumeInfo?.imageLinks?.thumbnail} />
          </ImageWrap>
          <Info>
            <Category>{Book?.volumeInfo?.categories?.join(",")}</Category>
            <BookName>{Book?.volumeInfo?.title}</BookName>
            <Authors>{Book?.volumeInfo?.authors?.join(",")}</Authors>
            <About>{limitWords(Book?.volumeInfo?.description)}</About>
          </Info>
        </Container>
    )
}

const About = styled.p`
  padding: 1em;
  border: 1px solid grey;
  font-size: 1.2em;
  font-weight: 600;
`

const Authors = styled.p`
  text-decoration: underline;
  color: grey;
`

const BookName = styled.h3`
  font-size: 30px;
`

const Category = styled.div``

const Info = styled.div`
  flex: 1;
  padding: 5em;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
`

const Image = styled.img`
  min-width: 35%;
  min-height: 400px;
  height: 30vw;
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

  @media only screen and (max-width: ${devices.Laptop}) {
    ${Info} {
      padding: 3em;
    }
  }
  @media only screen and (max-width: ${devices.Tablet}) {
    height: 80vh;
    flex-direction: column;
    ${ImageWrap} {
      padding: 1em;
    }
    ${BookName} {
      font-size:25px;
    }
  }
  @media only screen and (max-width: ${devices.Phone}) {
    ${Info} {
      padding: 1em;
    }
  }
`
