import { Component } from 'react';
import { Navbar , Nav , NavDropdown , NavItem , Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render(){
      return(
        <div>
        <Navbar collapseOnSelect bg="dark" expand="sm" variant="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
              <Navbar.Brand href="https://github.com/RusyaDeWitt">Github</Navbar.Brand>
              <Navbar.Brand href="https://www.linkedin.com/in/ruslan-kashayev-b657a7179/">LinkedIn</Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
        </div>
      )
    }
}

export default Navigation;
