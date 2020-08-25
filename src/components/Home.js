import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import MyDrive from './MyDrive'
import { useLocation } from "react-router-dom";
import { toObject } from "../utils/query-string-helpers";
import {
  TOKEN_KEY,
  saveInLocalStorage,
  getValidToken,
} from "../utils/local-storage";

function Home() {

    const location = useLocation();
    const params = toObject(location.search);
    const token = getValidToken(TOKEN_KEY);
    const handleOnClick = () => {
      window.location.href = "http://localhost:8080/login";
    };

    const handleLogout = () => {

    }
  
    React.useEffect(() => {
      if (params.token) {
        saveInLocalStorage(TOKEN_KEY, params.token);
        window.location.href = "http://localhost:3000/protected";
      }
      if (token) {
        window.location.href = "http://localhost:3000/protected";
      }
    }, []);

    
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Nav className="ml-auto">
                {!params.token && !token &&
                <Button variant="outline-info" onClick={handleOnClick}>Login</Button>}
                { (params.token || token) && 
                <Button variant="info" onClick={handleLogout}> Logout </Button>}
            </Nav>
            </Navbar>
            <MyDrive/>
        </div>
    )
}

export default Home
