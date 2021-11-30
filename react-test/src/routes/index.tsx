import { Link, Outlet } from "react-router-dom";

import styled from "styled-components";
import tw from "twin.macro";

const LinkTitle = styled.h3(() => [tw`text-xl underline my-4`]);
const Button = styled.div(() => [
  tw`bg-gray-900 text-white px-3 my-2 py-2 inline rounded-md text-sm font-medium`,
]);

export const IndexRoute = () => {
  return (
    <>
      <LinkTitle>Shipping</LinkTitle>
      <Link to="/shipping/dashboard">
        <Button>Dashboard</Button>
      </Link>

      <LinkTitle>Inventory</LinkTitle>
      <Link to="/inventory/inventory_list">
        <Button>Inventory List</Button>
      </Link>
      <Outlet />
    </>
  );
};

export * from "./inventory";
export * from "./shipping";
