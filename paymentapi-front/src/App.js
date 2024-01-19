import { useContext } from "react";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import Home from "./Home";
import Login from "./Login";
import { AccountList, PaymentList } from "./components";
// import Profile from "./Profile";
import RouteGuard from "./RouteGuard";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  const {logout, isLoggedIn } = useContext(AuthContext);
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        {isLoggedIn ? (
            <>
              <Nav className="me-auto">
                <Nav.Link href="/accounts">Accounts</Nav.Link>
                <NavDropdown title="Payments" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="/payments">See Payment</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">More action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Generate Statement</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
                <NavDropdown title="Profile" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="/">Edit Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/">Settings</NavDropdown.Item>
                  <NavDropdown.Item href="/">Remove Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Switch Account</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              </>
        ): (
            <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        )}
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
            <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                    path="/payments"
                    element={
                        <RouteGuard>
                        <PaymentList />
                        </RouteGuard>
                    }
                    />
                    <Route
                    path="/accounts"
                    element={
                        <RouteGuard>
                        <AccountList />
                        </RouteGuard>
                    }
                    />
                </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;