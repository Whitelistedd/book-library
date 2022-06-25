import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';

import HeaderBackground from '../../assets/images/headerBackground.webp';
import SearchIcon from '../../assets/images/SearchIcon.svg';
import { AllCategories, AllSorts, devices } from '../../data';
import { SearchBooks, setCategory, setSortBy } from '../../redux/redux';
import { AppDispatch } from '../../redux/store';

export const Header : React.FC = () => {

  const [inputValue,setInputValue] = useState<string>("")
  const dispatch = AppDispatch();

  // изменит состояние, только если вы нажмете ввод в строке поиска
  const handleSearch = (event : KeyboardEvent<HTMLInputElement>) => { 
    if(event.key === "Enter") {
      dispatch(SearchBooks(inputValue))
    }
  }

   // изменит состояние, если вы нажмете на значок поиска
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
        <Title>Search for book</Title>
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
          <Label htmlFor='sortby' >SortBy</Label>
          <Select id="sortby" name="sortby" onChange={(event) => handleSelection(event)} >
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
  text-shadow: 0px 0px 10px black;
`

const Select = styled.select`
  padding: 0.2em 0.6em;
  font-size: 1.2em;
`

const Selections = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  &:hover {
    opacity:0.8;
    cursor: pointer;
  }
`

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
`

const Title = styled.h1`
  color: white;
  font-size: 2.5em;
  text-shadow: 0px 0px 10px black;
`

const Container = styled.header`
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
  
  @media only screen and (max-width: ${devices.Tablet}) {
    ${Selections} {
      font-size: 10px;
    }
    ${SearchBar} {
      min-width: 80%;
    }
  }
`
