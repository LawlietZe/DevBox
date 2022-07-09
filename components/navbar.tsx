import styled from 'styled-components'
import Link from 'next/link';

const NavbarWrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    width: 100%;
    background: #54BAB9;
    height: 40px;
    a {
        padding: 0 8px;
    }
`;

const Navbar = () => {
    return (
        <NavbarWrapper>
            <Link href={'/'} >{'Home'}</Link>
            <Link href={'/second'} >{'Second'}</Link>
        </NavbarWrapper>
    )
}

export default Navbar;