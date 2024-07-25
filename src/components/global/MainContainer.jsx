import React from 'react';
import styled from 'styled-components';
import Nav from '../Nav';
import Footer from '../Footer';

function MainContainer({ children, isChat }) {
  return (
    <Container>
      <Nav />
      <Content isChat={isChat}>{children}</Content>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70dvh;
  margin: 0 auto;
  height: 100dvh;
`;

const Content = styled.div`
  flex: 1;
  overflow-y: scroll;
  height: ${({ isChat }) => (isChat ? '76dvh' : '84dvh')};
  margin-bottom: ${({ isChat }) => (isChat ? '8dvh' : '0px')};
`;

export default MainContainer;
