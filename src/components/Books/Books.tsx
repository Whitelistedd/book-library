import React from 'react';
import styled from 'styled-components';

import { addMorePageCount } from '../../redux/redux';
import { AppDispatch, useAppSelector } from '../../redux/store';
import { BooksProps } from '../../types';
import { Book } from '../Book/Book';
import { BookSkeleton } from '../BookSkeleton/BookSkeleton';

export const Books : React.FC<BooksProps> = ({booksCount,allBooks}) => {

  const {Loading} = useAppSelector(state => state)
  const dispatch = AppDispatch()

  const LoadMoreBooks = () => {
    dispatch(addMorePageCount())
  }

  return (
    <Container>
        <Results>Found {booksCount} results</Results>
        <BooksContainer>
          {Loading &&
          [1,2,3,4].map((index) => 
          <BookSkeleton key={index} />  
          )
          }
          {!Loading && allBooks?.map((book,index) => (
              <Book
              key={index}
              id={book.id}
              Info={book?.volumeInfo}
              />
          ))}
        </BooksContainer>
        {!Loading && <Button onClick={() => LoadMoreBooks()} >Load More</Button>}
    </Container>
  )
}

const Button = styled.button`
  padding:  0.5em 1em;
  font-size: 1em;
  background-color: #84caca;
  border: none;
  &:hover {
    cursor: pointer;
  }
`

const BooksContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit,  minmax(350px,380px));
  grid-template-rows: repeat(auto-fit, 450px);
  flex-wrap: wrap;
  gap: 1em;
  padding: 1em;
  width: 100%;
  min-height: 100%;
`

const Results = styled.h2``

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1em;
`
