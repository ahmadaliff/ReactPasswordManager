import { PersonAddAlt1Rounded } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import Styles from "../styles/style.module.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddAccount = () => {
  const navigate = useNavigate();
  return (
    <Button className={Styles.card} onClick={() => navigate("/add")}>
      <Card className={Styles.card}>
        <div className={Styles.AddAccount}>
          <PersonAddAlt1Rounded />
          <p>add account</p>
        </div>
      </Card>
    </Button>
  );
};

export default AddAccount;
