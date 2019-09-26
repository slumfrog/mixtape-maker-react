import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, SidebarItem, GlobalHeader } from "react-rainbow-components";

const dashboard =
  "https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg";
const application =
  "https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg";
const messages =
  "https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg";
const charts =
  "https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg";
const puzzle =
  "https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg";

class SimpleSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: "GettingStarted"
    };
    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect(e, selectedItem) {
    return this.setState({ selectedItem });
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <Sidebar
        selectedItem={selectedItem}
        onSelect={this.handleOnSelect}
        id="sidebar-1"
      >
        <Link to="/">
          <SidebarItem
            icon={<img src={dashboard} />}
            name="Home"
            label="Home"
          />
        </Link>
        <Link to="/create">
          <SidebarItem
            icon={<img src={application} />}
            name="Create"
            label="Create"
          />
        </Link>
        <Link to="/mixtapes">
          <SidebarItem
            icon={<img src={puzzle} />}
            name="Mixtapes"
            label="Mixtapes"
          />{" "}
        </Link>
        <Link to="/about">
          <SidebarItem
            icon={<img src={messages} />}
            name="About"
            label="About"
          />
        </Link>
      </Sidebar>
    );
  }
}

export default SimpleSidebar;
