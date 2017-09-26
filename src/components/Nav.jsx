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
                <Navbar color="faded" light toggleable>
                    <NavbarToggler right onClick={this.toggle}/>
                    <NavbarBrand href="/">Self Empowerment LLC</NavbarBrand>
                    <Collapse navbar isOpen={this.state.isOpen}>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/About/">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Listen/">Listen</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Contact/">Contact Us</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
