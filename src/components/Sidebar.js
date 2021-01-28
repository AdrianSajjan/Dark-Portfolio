import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import React, { Fragment, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ open, handleClose }) {
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("click", handleClickAway);
    return () => {
      window.removeEventListener("click", handleClickAway);
    };
    //eslint-disable-next-line
  }, []);

  const handleClickAway = (event) => {
    const id = event.target.id;
    const targetId = "sidebar-overlay";

    if (id === targetId) handleClose();
  };

  const isNavActive = (name) => {
    const path = location.pathname.replace("/", "");
    return name === path;
  };

  return (
    <Fragment>
      <Drawer open={open}>
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
        <Content>
          <NavLinks>
            <NavLink to="" onClick={handleClose} active={isNavActive("")}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={handleClose} active={isNavActive("about")}>
              About
            </NavLink>
            <NavLink to="/projects" onClick={handleClose} active={isNavActive("projects")}>
              Projects
            </NavLink>
            <NavLink to="/contact" onClick={handleClose} active={isNavActive("contact")}>
              Contact
            </NavLink>
          </NavLinks>
        </Content>
      </Drawer>
      <Overlay open={open} id="sidebar-overlay" />
    </Fragment>
  );
}

const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 500;
  display: none;
  position: fixed;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: opacity 0.2s ease;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${(props) => (props.open ? 1 : 0)};
  pointer-events: ${(props) => (props.open ? "all" : "none")};

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
  }
`;

const Drawer = styled.div`
  top: 0;
  width: 300px;
  height: 100vh;
  display: none;
  z-index: 1000;
  overflow: auto;
  position: fixed;
  transition: left 0.3s ease-out;
  left: ${(props) => (props.open ? 0 : -300)}px;
  background-color: ${(props) => props.theme.colors.background};

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
  }
`;

const CloseButton = styled.button`
  top: 10px;
  width: 50px;
  right: 10px;
  height: 50px;
  border: none;
  outline: none;
  display: flex;
  position: absolute;
  border-radius: 50px;
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  background-color: transparent;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => `${props.theme.colors.primary}33`};
  }
`;

const CloseIcon = styled(IoIosClose)`
  font-size: 40px;
  color: ${(props) => props.theme.colors.accent};
`;

const Content = styled.div`
  display: flex;
  padding: 30px;
  padding-top: 60px;
  flex-direction: column;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NavLink = styled(Link)`
  color: white;
  margin: 15px 0;
  font-size: 18px;
  padding-bottom: 5px;
  text-decoration-line: none;
  text-transform: capitalize;
  transition: transform 0.2s ease-out;
  font-weight: ${(props) => (props.active ? 600 : 400)};

  &:hover {
    transform: translateX(10px);
  }
`;
