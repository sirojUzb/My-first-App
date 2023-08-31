import React, { Component } from 'react'
import { Wrapper, Container, Logo, PaginationWrapper, PageTitle, } from "./style"; 
import Button from '../Generic/Button';
 
export default class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Logo>Cootels</Logo>
          <PaginationWrapper>
            <PageTitle>Rooms</PageTitle>
            <PageTitle>Reservation</PageTitle>
            <PageTitle>Contacts</PageTitle>
          </PaginationWrapper>
          <Button>Get Started</Button>
        </Container>
      </Wrapper>
    )
  }
}
