import logo from "assets/marvel-logo.png";
import React from "react";
import styled from "styled-components";

const Logo = () => {
    return (
        <ImageWrapper>
            <Img src={logo} alt="logo marvel"/>
        </ImageWrapper>
    )
}

const ImageWrapper = styled.div`
  flex: 1 1 0;
  align-items: center;
  display: flex;
`

const Img = styled.img`
  max-width: 150px;
  
  @media (min-width: 768px) {
    max-width: 250px;
  }
`

export default Logo;