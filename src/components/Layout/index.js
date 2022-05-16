import styled from 'styled-components';

const Layout = styled.div`
  height: 100%;
  @media screen and (max-width: 1347px){
      padding: 5rem 14rem;
  }
  @media screen and (max-width: 1186px){
      padding: 5rem 8rem;
  }
  @media screen and (max-width: 990px){
      padding: 5rem 4rem;
  }
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export default Layout;
