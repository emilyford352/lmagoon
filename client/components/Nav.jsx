import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class MagoonNav extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="faded" light toggleable>
                    <NavbarToggler right />
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/Home/">Home</NavLink>
                        </NavItem>
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
