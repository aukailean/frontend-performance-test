import styled from "styled-components";
import tw from "twin.macro";

export const LoaderContainer = styled.div(() => [
  tw`w-32 h-32 border-4 border-gray-900 border-solid rounded-full animate-spin`,
]);
