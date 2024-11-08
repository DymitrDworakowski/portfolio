// src/components/Navbar.js
import React, { useState, useEffect, useRef } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Link, Trans } from "gatsby-plugin-react-i18next"

const Navbar = () => {
  const [openDrawer, toggleDrawer] = useState(false)
  const drawerRef = useRef(null)

  useEffect(() => {
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) return
      toggleDrawer(false)
    }

    document.addEventListener("mousedown", closeDrawer)
    return () => document.removeEventListener("mousedown", closeDrawer)
  }, [])

  return (
    <Styles.Wrapper>
      <CSSReset />

      <NavbarWrapper>
        <Logo>
          <Link to="/">
            <Trans>My Portfolio</Trans>
          </Link>
        </Logo>

        <HamburgerButton onClick={() => toggleDrawer(true)}>
          <Lines />
        </HamburgerButton>

        <NavItems ref={drawerRef} openDrawer={openDrawer}>
          <NavItem to="/">
            <Trans>Home</Trans>
          </NavItem>
          <NavItem to="/about">
            <Trans>About Me</Trans>
          </NavItem>
          <NavItem to="/projects">
            <Trans>Projects</Trans>
          </NavItem>
          <NavItem to="/certificates">
            <Trans>Certificates</Trans>
          </NavItem>
        </NavItems>
      </NavbarWrapper>
    </Styles.Wrapper>
  )
}

// Styled Components
const Styles = {
  Wrapper: styled.main`
    display: flex;
    background-color: #eeeeee;
    hight: 100vw;
  `,
}

const NavbarWrapper = styled.nav`
  flex: 1;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
 z-index: 1000;
  @media only screen and (max-width: 640px) {
    position: fixed;
    width: 100vw;
    bottom: 0;
    z-index: 1000;
  }
`

const Logo = styled.h1`
  border: 1px solid gray;
  padding: 0.5rem 1rem;
  
`

const NavItems = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 640px) {
    position: fixed;
    
    right: 0;
    top: 0;
    height: 100%;
    flex-direction: column;
    background-color: white;
    padding: 1rem 2rem;
    transition: 0.2s ease-out;
    transform: ${({ openDrawer }) =>
      openDrawer ? `translateX(0)` : `translateX(100%)`};
  }
`

const NavItem = styled(Link)`
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
  color: black;
 
  @media only screen and (max-width: 640px) {
    padding: 1rem 0;
     
  }
`

const HamburgerButton = styled.button`
  height: 3rem;
  width: 3rem;
  position: relative;
  display: none;
 
  @media only screen and (max-width: 640px) {
    display: block;
    
  }

  border: none;
  background: transparent;
  cursor: pointer;
`

const Lines = styled.div`
  &,
  &:after,
  &:before {
    height: 2px;
    display: block;
    content: "";
    width: 100%;
    background-color: black;
    position: absolute;
   
  }

  &:after {
    top: -0.8rem;
  }

  &:before {
    top: 0.8rem;
  }
`

const CSSReset = createGlobalStyle`
  *, *::before, *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
    
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;      
  }  
  body {
  
    font-size: 1.4rem;
    font-family: sans-serif;
  }
`

export default Navbar
