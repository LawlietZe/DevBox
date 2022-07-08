// import Footer from './footer'
import styled from 'styled-components'
import Navbar from './navbar'

const LayoutWrapper = styled.div`
    display: grid;
`;

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </LayoutWrapper>
  )
}