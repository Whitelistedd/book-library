import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import HeaderBackground from '../../assets/images/headerBackground.webp';
import SearchIcon from '../../assets/images/SearchIcon.svg';
import { AllCategories, AllSorts } from '../../data';
import { SearchBooks, setCategory, setSortBy } from '../../redux/redux';
import { AppDispatch } from '../../redux/store';

export const Header : React.FC = () => {

  const [inputValue,setInputValue] = useState<string>("")
  const dispatch = AppDispatch();

  const handleSearch = (event : KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter") {
      dispatch(SearchBooks(inputValue))
    }
  }

  const handleClickSearch = () => {
    dispatch(SearchBooks(inputValue))
  }

  const handleSelection = (event : ChangeEvent<HTMLSelectElement>) => {
    const targetName = event.target.name
    const targetValue = event.target.value
    if(targetName === "category") {
      dispatch(setCategory(targetValue))
    }
    if(targetName === "sortby") {
      dispatch(setSortBy(targetValue))
    } 
  }

  return (
    <Container>
        <Title>Search for books</Title>
        <SearchBar>
        <Search onKeyDown={(event) => handleSearch(event)} onChange={(event) => setInputValue(event.target.value)} />
        <Image onClick={() => handleClickSearch()} src={SearchIcon} />
        </SearchBar>
        <Selections>
          <Label htmlFor="category" >Categories</Label>
          <Select id="category" name="category" onChange={(event) => handleSelection(event)} >
            {AllCategories.map(category => 
            <option key={category} >{category}</option>  
            )}
          </Select>
          <Label>SortBy</Label>
          <Select name="sortby" onChange={(event) => handleSelection(event)} >
            {AllSorts.map(sort => 
            <option key={sort} >{sort}</option>  
            )}
          </Select>
        </Selections>
    </Container>
  )
}

const Label = styled.label`
  color: white;
  font-size: 1.6em;
`

const Select = styled.select`
  padding: 0.2em 0.6em;
  font-size: 1.2em;
`

const Selections = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
`

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
  width: 40%;
  min-width: 30%;
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
  gap: 1em;
`
