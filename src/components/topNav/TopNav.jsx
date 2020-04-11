import React from 'react';

import { TopNavContainer } from "./TopNav.styles"

const TopNav = () => {
    return (
        <TopNavContainer>
            <img src={require("../../assets/Logo.svg")} alt="logo"/>
            <h1><i className="fas fa-bell"></i></h1>
        </TopNavContainer>
    );
}

export default TopNav;