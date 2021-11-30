import styled from "styled-components";
import tw from "twin.macro";

export const PaginationContainer = styled.nav<{ disabled: boolean }>(
  ({ disabled }) => [
    tw`relative z-0 inline-flex rounded-md shadow-sm -space-x-px`,
    disabled ? tw`opacity-20` : "",
  ]
);

export const BackButton = styled.button<{ disabled: boolean }>(
  ({ disabled }) => [
    tw`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`,
    disabled ? tw`bg-gray-300 hover:bg-gray-300 cursor-not-allowed` : "",
  ]
);

export const PageButton = styled.button<{ isCurrentPage: boolean }>(
  ({ isCurrentPage }) => [
    tw`bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium`,
    isCurrentPage
      ? tw`z-10 bg-indigo-50 border-indigo-500 text-indigo-600`
      : "",
  ]
);

export const NextButton = styled.button<{ disabled: boolean }>(
  ({ disabled }) => [
    tw`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`,
    disabled ? tw`bg-gray-300 hover:bg-gray-300 cursor-not-allowed` : "",
  ]
);

export const SVGIcon = styled.svg(() => [tw`h-5 w-5`]);
