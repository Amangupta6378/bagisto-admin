import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import StorefrontIcon from "@mui/icons-material/Storefront";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            width="150px"
            src="https://demo.bagisto.com/bagisto-common/themes/admin/default/build/assets/logo-f02a1643.svg"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Form.Control
              style={{ width: "500px" }}
              type="text"
              placeholder="Mega search"
              className=" mr-sm-2"
            />
          </Nav>
          <div className="d-flex justify-around">
            <DarkModeIcon className="me-3 text-secondary" />
            <StorefrontIcon className="me-3 text-secondary" />
            <NotificationsActiveIcon className="me-5 text-secondary" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
