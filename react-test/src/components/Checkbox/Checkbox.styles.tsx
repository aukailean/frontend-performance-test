import styled, { css, keyframes } from "styled-components";

import tw from "twin.macro";

export const CheckboxContainer = styled.div(() => [
  tw`inline-flex  items-center`,
  tw`relative`,
  tw`cursor-pointer`,
]);

export const StyledCheckbox = styled.span<{ checked: boolean }>(
  ({ checked }) => [
    tw`rounded-sm  h-4 w-4 mr-4 border-2 border-gray-800`,
    tw`flex justify-center items-center `,
    tw`transition-all bg-transparent`,
    checked && checkboxStyling,
    checked && checkboxContainerStyling,
  ]
);

const shrinkBounceAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(1);
  }
`;

const checkboxCheckAnimation = keyframes`  
  0% {
    width: 0;
    height: 0;
    border-color: white;
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
  33% {
    width: 3px;
    height: 0;
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
  100% {
    width: 3px;
    height: 7px;
    border-color: white;
    transform: translate3d(0, -0.5rem, 0) rotate(45deg);
  }`;

const checkboxStyling = css`
  &:before {
    content: "";
    position: absolute;
    top: 6px;
    left: 2px;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: ${checkboxCheckAnimation} 125ms 250ms
      cubic-bezier(0.4, 0, 0.23, 1) forwards;
    box-sizing: content-box;
  }
`;

const checkboxContainerStyling = css`
  border: 0.5rem solid black;
  animation: ${shrinkBounceAnimation} 200ms cubic-bezier(0.4, 0, 0.23, 1);
`;
