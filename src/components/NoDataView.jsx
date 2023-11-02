import React from "react";
import Styles from "../styles/style.module.scss";
import AddAccount from "./AddAccount";
const NoDataView = ({ text }) => {
  return (
    <div className={Styles.noDataPage}>
      {text}
      <AddAccount />
    </div>
  );
};

export default NoDataView;
