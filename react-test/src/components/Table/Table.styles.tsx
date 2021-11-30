import styled from "styled-components";
import tw from "twin.macro";

export const StyledTable = styled.table(() => [
  tw`min-w-full divide-y divide-gray-200`,
]);
export const TableHead = styled.thead(() => [tw`bg-gray-50`]);
export const ColumnHeaderCell = styled.th(() => [
  tw`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`,
]);
export const TableBody = styled.tbody<{ isPreviousData: boolean }>(
  ({ isPreviousData }) => [
    tw`bg-white divide-y divide-gray-200 min-h-full`,
    isPreviousData ? tw`opacity-20` : "",
  ]
);
export const TableCell = styled.td(() => [tw`px-6 py-4 whitespace-nowrap`]);
export const TableContainer = styled.div(() => [
  tw`shadow overflow-hidden border-b border-gray-200 sm:rounded-lg`,
]);

export const TableOverflowContainer = styled.div(() => [
  tw`-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8`,
]);

export const TableStylingContainer = styled.div(() => [
  tw`py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8`,
]);
