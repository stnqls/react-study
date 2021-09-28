import { useRef } from "react";
import "./DropdownMenu.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

const DropdownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>User</span>
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
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
};

export default DropdownMenu;
