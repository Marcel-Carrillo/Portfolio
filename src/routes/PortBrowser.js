import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Container } from "react-bootstrap";
import { Principal } from "../components/Principal/Principal";
import { Error } from "../components/Error/Error";

export const PortBrowser = () => {
  return (
    <Container fluid>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Principal" element={<Principal />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
