import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";
import { Link } from "react-router-dom";

import {
  Nav,
  DesktopNavContainer,
  MenuContainer,
  MobileMenuButtonContainer,
  MobileMenuButton,
  OptionsContainer,
  LogoContainer,
  MobileLogo,
  DesktopLogo,
  DesktopMenuOptions,
  DesktopMenuOptionsSeparator,
  DesktopOption,
  StyledSVG,
  UserMenuContainer,
  UserMenuButton,
  UserMenuImage,
  UserMenuPopoutContainer,
  UserMenuPopoutOption,
  MobileMenuOptionsContainer,
  MobileMenuOptionsSeparator,
  MobileOption,
} from "./Navbar.styles";

import logo from "roboware_logo.png";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <Nav>
      <DesktopNavContainer>
        <MenuContainer>
          <MobileMenuButtonContainer>
            <MobileMenuButton
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {mobileMenuOpen ? (
                <StyledSVG
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </StyledSVG>
              ) : (
                <StyledSVG
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </StyledSVG>
              )}
            </MobileMenuButton>
          </MobileMenuButtonContainer>
          <OptionsContainer>
            <Link to="/">
              <LogoContainer>
                <MobileLogo src={logo} alt="Workflow" />
                <DesktopLogo src={logo} alt="Workflow" />
              </LogoContainer>
            </Link>
            <DesktopMenuOptions>
              <DesktopMenuOptionsSeparator>
                <Link to="/shipping/dashboard">
                  <DesktopOption>Dashboard</DesktopOption>
                </Link>
                <Link to="/inventory/inventory_list">
                  <DesktopOption>Inventory List</DesktopOption>
                </Link>
              </DesktopMenuOptionsSeparator>
            </DesktopMenuOptions>
          </OptionsContainer>
          <UserMenuContainer>
            <Disclosure>
              <DisclosureButton>
                <div>
                  <UserMenuButton
                    type="button"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <UserMenuImage
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </UserMenuButton>
                </div>
              </DisclosureButton>
              <DisclosurePanel>
                <UserMenuPopoutContainer
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  <UserMenuPopoutOption
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </UserMenuPopoutOption>
                  <UserMenuPopoutOption
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-1"
                  >
                    Settings
                  </UserMenuPopoutOption>
                  <UserMenuPopoutOption
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-2"
                  >
                    Sign out
                  </UserMenuPopoutOption>
                </UserMenuPopoutContainer>
              </DisclosurePanel>
            </Disclosure>
          </UserMenuContainer>
        </MenuContainer>
      </DesktopNavContainer>
      {mobileMenuOpen ? (
        <MobileMenuOptionsContainer id="mobile-menu">
          <MobileMenuOptionsSeparator>
            <Link to="/shipping/dashboard">
              <MobileOption>Dashboard</MobileOption>
            </Link>
            <Link to="/inventory/inventory_list">
              <MobileOption>Team</MobileOption>
            </Link>
          </MobileMenuOptionsSeparator>
        </MobileMenuOptionsContainer>
      ) : null}
    </Nav>
  );
};
