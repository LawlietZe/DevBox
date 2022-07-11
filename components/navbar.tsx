import styled from 'styled-components';
import Link from 'next/link';
import { useDarkMode } from '../hooks/useDarkModel';
import { appContext } from '../context/appcontext';
import { useContext } from 'react';

const NavbarWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  width: 100%;
  background: #54bab9;
  height: 40px;
  a {
    padding: 0 8px;
  }
`;

const Navbar = () => {
  const { themeToggler } = useContext(appContext);
  return (
    <NavbarWrapper>
      <Link href={'/'}>{'Home'}</Link>
      <Link href={'/second'}>{'Second'}</Link>
      <button onClick={themeToggler}>{'Swith theme'}</button>
    </NavbarWrapper>
  );
};

export default Navbar;
