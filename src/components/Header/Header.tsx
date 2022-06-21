import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import HeaderBackground from '../../assets/images/headerBackground.webp';
import SearchIcon from '../../assets/images/SearchIcon.svg';
import { SearchBooks } from '../../redux/redux';
import { AppDispatch } from '../../redux/store';

export const Header : React.FC = () => {

  const [inputValue,setInputValue] = useState<string>("")
  const dispatch = AppDispatch();

  const handleSearch = (event : any) => {
    if(event.key === "Enter") {
      dispatch(SearchBooks(inputValue))
    }
  }

  const handleClickSearch = () => {
    dispatch(SearchBooks(inputValue))
  }

  return (
    <Container>
        <Title>Search for books</Title>
        <SearchBar>
        <Search onKeyDown={(event) => handleSearch(event)} onChange={(event) => setInputValue(event.target.value)} />
        <Image onClick={() => handleClickSearch()} src={SearchIcon} />
        </SearchBar>
    </Container>
  )
}

const Image = styled.img``

const Search = styled.input`
  border: none;
  padding: 1em 0em;
  width: 100%;
  outline: none;
  font-size: 1em;
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0em 1em;
  width: 30%;
`

const Title = styled.h1`
  color: white;
  font-size: 2.5em;
`

const Container = styled.div`
  background: url(${HeaderBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 30vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
