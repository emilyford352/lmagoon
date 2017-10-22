import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class MagoonNav extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Nav pills color="faded">
                    <NavItem>
                        <NavLink href="/#/Home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#/About">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#/Listen">Listen</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#/Trainings">Trainings</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#/Contact">Contact Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <h4>
                            <NavLink className="site-title" href="/#/Home">Self Empowerment NH, LLC</NavLink>
                        </h4>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}
