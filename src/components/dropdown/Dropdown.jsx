import React from "react";
import "./DropdownMenu.css";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onClick = this.onClick.bind(this);
  }
  dropdownRef = React.createRef();

  render() {
    return (
      <div className="menu-container">
        <button onClick={this.onClick} className="menu-trigger">
          <span>User</span>
        </button>
        <nav
          ref={this.dropdownRef}
          className={`menu ${this.state.isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="/messages">Messages</a>
            </li>
            <li>
              <a href="/trips">Trips</a>
            </li>
            <li>
              <a href="/saved">Saved</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  onClick = () => {
    this.setState({ isActive: !this.state.isActive });
  };
}

export default Dropdown;
