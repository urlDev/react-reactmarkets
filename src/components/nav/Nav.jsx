import React from "react";

import{ NavContainer} from "./Nav.styles"

const Nav = () => {
  return (
    <NavContainer style={{display: 'flex', justifyContent: 'space-between'}}>
      <>
        <h1>
          <i className="fas fa-home"></i>
        </h1>
      </>
      <>
        <h1>
          <i className="fas fa-search"></i>
        </h1>
      </>
      <>
        <h1>
          <i className="fas fa-briefcase"></i>
        </h1>
      </>
      <>
        <h1>
          <i className="fas fa-user"></i>
        </h1>
      </>
    </NavContainer>
  );
};

export default Nav;
