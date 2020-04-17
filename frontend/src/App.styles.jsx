import styled from "styled-components";

export const AppContainer = styled.div`
margin: 0 auto;
max-width: 1250px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    margin-top:50px;
  }

`;

export const TopNavAppContainer = styled.div`
  @media (min-width: 768px){
    background: linear-gradient(
      135deg,
      rgba(156, 252, 247, 1) 0%,
      rgba(110, 123, 251, 1) 42%
    );
    border-radius: 0 0 20px 20px;
  }
`;

export const MidGradientDiv = styled.div`
  @media (min-width: 768px){
    background: linear-gradient(
      135deg,
      rgba(156, 252, 247, 1) 0%,
      rgba(110, 123, 251, 1) 42%
    );
    border-radius: 20px 20px 0 0;
    height:100px;
    width:100%;
    // position:absolute;
    // top:500px;
    // z-index:-1;
  }
`
