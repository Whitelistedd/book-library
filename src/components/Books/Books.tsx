import React from 'react';
import styled from 'styled-components';

import { BooksProps } from '../../types';
import { Book } from '../Book/Book';

export const Books : React.FC<BooksProps> = ({booksCount,allBooks}) => {
  return (
    <Container>
        <Results>Found {booksCount} results</Results>
        <BooksContainer>
          {allBooks?.map((book,index) => (
              <Book
              key={index}
              id={book.id}
              Info={book?.volumeInfo}
              />
          ))}
        </BooksContainer>
    </Container>
  )
}

const BooksContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit,  380px);
  grid-template-rows: repeat(auto-fit, 500px);
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
