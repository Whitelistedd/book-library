import React from 'react';
import styled, { keyframes } from 'styled-components';

export const BookSkeleton : React.FC = () => {
  return (
    <Container >
      <Image />
      <InfoWrap>
          <LoadingText></LoadingText>
          <LoadingText></LoadingText>
          <LoadingText></LoadingText>
      </InfoWrap>
    </Container>
  )
}

const animation = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

const LoadingText = styled.p`
  width: 80%;
  height: 20px;
  background-color: grey;
`

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  * {
      animation: 1.5s ${animation} infinite linear ;
  }
`

const Image = styled.img`
    min-width: 45%;
    min-height: 50%;
    align-self: center;
    background-color: grey;
    animation: 1.5s ${animation} infinite linear ;
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