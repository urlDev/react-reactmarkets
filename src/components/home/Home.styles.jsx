import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0 20px 0 20px;
  // this will keep the menu bar on bottom in every page, as fixed
  overflow: hidden;
  margin-top: -180px;
  padding-bottom: 80px;
  z-index: 1;
`;

export const Background = styled.div`
  background-image: linear-gradient(
    109.6deg,
    rgba(218, 185, 252, 1) 11.2%,
    rgba(125, 89, 252, 1) 91.1%
  );
  height: 200px;
  border-radius: 0 0 20px 20px;
  position: relative;
  z-index: -1;
`;
