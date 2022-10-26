import styled from 'styled-components';

const BoxWrapper = styled.div`
  color: ${(props) => props.theme.text};
`;

const Box = (props: any) => {
  return <BoxWrapper>{props.children}</BoxWrapper>;
};

export default Box;
