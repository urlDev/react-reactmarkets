import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 0 20px 0 20px;
  // this will keep the menu bar on bottom in every page, as fixed
  overflow: hidden;
  margin-top: -170px;
  padding-bottom: 80px;
  z-index: 1;
`;

export const Background = styled.div`
  background: linear-gradient(
    135deg,
    rgba(156, 252, 247, 1) 0%,
    rgba(110, 123, 251, 1) 42%
  );
  height: 200px;
  border-radius: 0 0 20px 20px;
  position: relative;
  z-index: -1;
`;
