import styled from "styled-components";
import Sidebar from "components/Sidebar";
import Logo from "assets/vectors/Logo.svg";
import { RiMenu5Fill } from "react-icons/ri";
import React, { Fragment, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (link) => {
    return location.pathname === link;
  };

  return (
    <Fragment>
      <Header>
        <Container>
          <Appbar>
            <RouterLink to="/">
              <Brand src={Logo} />
            </RouterLink>
            <Navbar>
              <NavItem to="/" activelink={isActive("/")}>
                Home
              </NavItem>
              <NavItem to="/about" activelink={isActive("/about")}>
                About
              </NavItem>
              <NavItem to="/projects" activelink={isActive("/projects")}>
                Projects
              </NavItem>
              <Button to="/hire" activelink={isActive("/hire")}>
                Hire Me
              </Button>
            </Navbar>
            <Hamburger onClick={() => setOpen(true)}>
              <RiMenu5Fill size={24} />
            </Hamburger>
          </Appbar>
        </Container>
      </Header>
      <Sidebar open={open} handleClose={() => setOpen(false)} />
      <Main>{children}</Main>
    </Fragment>
  );
}

const Header = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  position: sticky;
  margin-top: 40px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 20px;
  }
`;

const Brand = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin-right: 30px;
`;

const Appbar = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = styled.div`
  flex: 1;
  display: flex;
  margin-left: 30px;
  align-items: center;
  justify-content: flex-end;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

const NavItem = styled(RouterLink)`
  font-weight: 600;
  margin-left: 30px;
  margin-right: 30px;
  position: relative;
  text-decoration-line: none;
  transition: color 0.1s ease-in;

  &:first-child {
    margin-left: 0px;
  }

  &::after {
    left: -10px;
    content: "";
    z-index: -1;
    bottom: -5px;
    position: absolute;
    background-color: white;
    width: calc(100% + 20px);
    transition: height 0.2s ease-out;
    height: ${(props) => (props.activelink ? 1 : 0)}px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.background};

    &::after {
      height: 30px;
    }
  }
`;

const Button = styled(RouterLink)`
  font-weight: 600;
  margin-left: 50px;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration-line: none;
  transition: 0.2s ease-in-out;
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Hamburger = styled.button`
  border: none;
  padding: 5px;
  display: none;
  margin-left: auto;
  background-color: transparent;

  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
  }
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0 10px;
  max-width: ${(props) => props.theme.devices.lg}px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 120px);
`;
