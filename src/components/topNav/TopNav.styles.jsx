import styled from "styled-components";

export const TopNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  max-width: 1250px;
  a {
    display: flex;
    align-items: center;
    img {
      width: 25px;
    }
  }

  h1 {
    font-size: 25px;
  }
  position: absolute;
  @media (min-width: 768px) {
    border-radius: 0 0 20px 20px;
    margin: 0 auto;
    position: static;
  }
`;
