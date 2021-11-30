import styled from "styled-components";
import tw from "twin.macro";

export const Nav = styled.nav(() => [tw`bg-rw-pink-500`]);

export const DesktopNavContainer = styled.div(() => [
  tw`mx-auto px-2 sm:px-6 lg:px-8`,
]);

export const MenuContainer = styled.div(() => [
  tw`relative flex items-center justify-between h-16`,
]);

export const MobileMenuButtonContainer = styled.div(() => [
  tw`absolute inset-y-0 left-0 flex items-center sm:hidden`,
]);

export const MobileMenuButton = styled.button(() => [
  tw`inline-flex items-center justify-center`,
  tw`p-2 rounded-md`,
  tw`text-gray-900 hover:bg-rw-pink-700`,
  tw`focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`,
]);

export const OptionsContainer = styled.div(() => [
  tw`flex-1 flex items-center justify-center sm:items-stretch sm:justify-start`,
]);

export const LogoContainer = styled.div(() => [
  tw`flex-shrink-0 flex items-center`,
]);

export const MobileLogo = styled.img(() => [tw`block lg:hidden h-8 w-auto`]);

export const DesktopLogo = styled.img(() => [tw`hidden lg:block h-8 w-auto`]);
export const DesktopMenuOptions = styled.div(() => [
  tw`hidden sm:block sm:ml-6`,
]);

export const DesktopMenuOptionsSeparator = styled.div(() => [
  tw`flex space-x-4`,
]);

export const DesktopOption = styled.div(() => [
  tw`bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium`,
]);

export const StyledSVG = styled.svg(() => [tw`block h-6 w-6`]);

export const UserMenuContainer = styled.div(() => [tw`ml-3 relative`]);
export const UserMenuButton = styled.button(() => [
  tw`bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`,
]);
export const UserMenuImage = styled.img(() => [tw`h-8 w-8 rounded-full`]);

export const UserMenuPopoutContainer = styled.div(() => [
  tw`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`,
]);

export const UserMenuPopoutOption = styled.a(() => [
  tw`block px-4 py-2 text-sm text-gray-700`,
]);

export const MobileMenuOptionsContainer = styled.div(() => [tw`sm:hidden`]);

export const MobileMenuOptionsSeparator = styled.div(() => [tw`p-2`]);

export const MobileOption = styled.div(() => [
  tw`bg-gray-900 text-white block px-3 py-2 my-1 rounded-md text-base font-medium`,
]);
