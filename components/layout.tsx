// import Footer from './footer'
import styled from 'styled-components'
import Navbar from './navbar'

const LayoutWrapper = styled.div`
  background: #F7ECDE;
`;

const Container = styled.div`
    margin: 0 auto;
    max-width: 1400px;
    height: 800px;
`;


export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Navbar />
      <Container>
        <main>{children}</main>
      </Container>
      {/* <Footer /> */}
    </LayoutWrapper>
  )
}