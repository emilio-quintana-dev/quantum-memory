import React, { useState, useEffect } from "react";

import {
  MobileIcon,
  Nav,
  NavBarContainer,
  NavIcon,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./style";

import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

interface Props {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ loggedIn, setLoggedIn }: Props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const closeMobileMenu = () => setClick(false);

  const logOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("Authorization");
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#5DD39E" }}>
        <Nav>
          <NavBarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              Quantum Memory
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {
                click ? <FaTimes /> : <FaBars />
              }
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/about" onClick={closeMobileMenu}>
                  About
                </NavLinks>
              </NavItem>

              {loggedIn ? (
                <NavItem>
                  <NavLinks to="/" onClick={logOut}>
                    Log out
                  </NavLinks>
                </NavItem>
              ) : (
                <>
                  <NavItem>
                    <NavLinks to="/login" onClick={closeMobileMenu}>
                      Login
                    </NavLinks>
                  </NavItem>

                  <NavItem>
                    <NavLinks to="/register" onClick={closeMobileMenu}>
                      Sign up
                    </NavLinks>
                  </NavItem>
                </>
              )}
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default React.memo(Navbar);
