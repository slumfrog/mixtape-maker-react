import React, { Component } from "react";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

class NavbarPage extends Component {
  state = {
    isOpen: false,
    profile: "",
    stock_profile:
      "https://www.pnglot.com/pngfile/detail/493-4930333_user-icon-my-profile-icon-png.png"
  };

  componentDidMount() {
    this.fetchProfilePic();
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  fetchProfilePic = () => {
    fetch("http://localhost:3000/profile/", {
      headers: {
        ["Authorization"]: localStorage.token
      }
    })
      .then(resp => resp.json())
      .then(profile => {
        this.setState({ profile: profile.profile_pic });
      });
  };

  render() {
    return (
      <MDBNavbar color="black" dark expand="md">
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/create">My Playlists</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/mixtapes">My Mixtapes</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light">
                Signed in as: {this.props.user.spotify_id}
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle className="dopdown-toggle" nav>
                  <img
                    src={
                      this.state.profile === undefined
                        ? this.state.stock_profile
                        : this.state.profile
                    }
                    className="rounded-circle z-depth-0"
                    style={{ height: "35px", padding: 0 }}
                    alt=""
                  />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="#!">My account</MDBDropdownItem>
                  <MDBDropdownItem
                    user={this.props.user}
                    onClick={this.props.logOut}
                  >
                    Log out
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
