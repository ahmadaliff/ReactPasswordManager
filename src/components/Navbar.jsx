import React, { useEffect, useState } from "react";
import Styles from "../styles/style.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CloseRounded, MenuOpenRounded } from "@mui/icons-material";

const Navbar = () => {
  const category = ["Work", "Family", "Personal"];
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return (
    <nav className={Styles.navComp}>
      <div className={Styles.navButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseRounded /> : <MenuOpenRounded />}
      </div>
      <div className={Styles.logo} onClick={() => navigate("/")}>
        PassManager
      </div>
      <ul className={`${Styles.navLinkWrap} ${isOpen && Styles.open}`}>
        <li>
          <Link
            to={"/"}
            className={location.pathname === `/` ? Styles.active : ""}
          >
            Home
          </Link>
        </li>
        {category?.map((val, key) => (
          <li key={key}>
            <Link
              to={`/${val}`}
              className={location.pathname === `/${val}` ? Styles.active : ""}
            >
              {val}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
