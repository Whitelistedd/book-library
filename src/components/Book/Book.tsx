import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { setBookId } from '../../redux/redux';
import { AppDispatch } from '../../redux/store';
import { BookProps } from '../../types';

export const Book : React.FC<BookProps> = ({id,Info}) => {

    const dispatch = AppDispatch()

    const handleBookId = (id: string) => {
        dispatch(setBookId(id))
    }

    return (
    <Container onClick={() => handleBookId(id)} >
        <Image src={Info?.imageLinks?.thumbnail} />
        <InfoWrap>
            <Category>{Info?.categories?.join(",")}</Category>
            <BookName>{Info?.title}</BookName>
            <Authors>{Info?.authors?.join(",")}</Authors>
        </InfoWrap>
    </Container>
  )
}

const Authors = styled.p`
    color: grey;
`

const BookName = styled.h3`
    font-size: 1.2em
`

const Category = styled.p`
    color: grey;
    text-decoration: underline;
    margin-top: auto;
`

const InfoWrap = styled.div``

const Image = styled.img`
    
    min-width: 45%;
    min-height: 50%;
    object-fit: contain;
    align-self: center;
    box-shadow: 10px 5px 30px;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F2F3F1;
    display: flex;
    padding: 2em 1em;
    gap: 3em;
    justify-content: center;
    flex-direction: column;
    &:hover {
        cursor: pointer;
        outline: 5px solid brown;
    }
`

const StyledLink = styled(Link)`
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: black;
`