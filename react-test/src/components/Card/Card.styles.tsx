import styled from "styled-components";
import tw from "twin.macro";

export const CardHeader = styled.div(() => [
  tw`text-xl font-medium  text-gray-700`,
]);
export const CardDescription = styled.span(() => [tw`text-gray-700 text-base`]);
export const CardContainer = styled.div(() => [
  tw`inline-block rounded  shadow-lg p-3 border border-black`,
]);
