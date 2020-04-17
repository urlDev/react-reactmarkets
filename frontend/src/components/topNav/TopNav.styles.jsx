import styled from "styled-components";

export const TopNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  max-width: 1250px;

  img {
    width: 25px;
  }
  h1 {
    font-size: 25px;
  }
  position: absolute;
  @media (min-width: 768px) {
    // background: linear-gradient(
    //   135deg,
    //   rgba(156, 252, 247, 1) 0%,
    //   rgba(110, 123, 251, 1) 42%
    // );
    border-radius: 0 0 20px 20px;
    margin: 0 auto;
    position: static;
  }
`;
