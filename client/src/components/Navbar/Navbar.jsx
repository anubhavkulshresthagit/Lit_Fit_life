import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";
import {LinkContainer} from 'react-router-bootstrap'
const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="Navbar">
      <div className="containers">
        <LinkContainer to='/'>
        <h1>LIT_FIT_LIFE</h1>
        </LinkContainer>
        <Button onClick={() => loginWithRedirect()} className="logs" color="default">
        <PersonIcon />
      </Button> 
  
        
      </div>
    </div>
  );
};

export default Navbar;
