import { BrowserRouter } from "react-router-dom";
import { AppRoutes as Routes } from "components/Routes/Routes";
import { Navbar } from "components/Navbar/Navbar";
import styled from "styled-components";
import tw from "twin.macro";

const Layout = styled.div(() => [tw`p-2 sm:px-6 lg:px-8`]);

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
};
