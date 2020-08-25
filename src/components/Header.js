import React, {useState} from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import {withRouter , useLocation } from "react-router-dom";
import { toObject } from "../utils/query-string-helpers";
import {
  TOKEN_KEY,
  saveInLocalStorage,
  getValidToken,
} from "../utils/local-storage";



function Header({history}) {

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
        //window.location.href = "http://localhost:3000/protected";
        history.push("/protected");
      }
      if (token) {
        //window.location.href = "http://localhost:3000/protected";
        history.push("/protected");
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
        </div>
    )
}

export default withRouter(Header)
