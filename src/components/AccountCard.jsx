import { Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import {
  AlternateEmail,
  Language,
  Category,
  KeyboardDoubleArrowRightTwoTone,
  PersonRemoveRounded,
} from "@mui/icons-material";
import Styles from "../styles/style.module.scss";
import ModalDeleteAccount from "./ModalDeleteAccount";
import { Link } from "react-router-dom";
const AccountCard = ({ account, refreshFunc }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card className={Styles.card}>
        <div className={Styles.contentEmail}>
          <AlternateEmail />
          <p>{account?.email}</p>
        </div>
        <CardContent className={Styles.cardContentWrap}>
          <div className={Styles.leftSideCard}>
            <div className={Styles.delButtonWrap}>
              <PersonRemoveRounded
                className={Styles.detailButton}
                onClick={() => {
                  setOpen(true);
                }}
              />
            </div>
            <div className={Styles.cardContentTextWrap}>
              <div className={Styles.cardContentText}>
                <Language />
                <p>Domain : {account.provider}</p>
              </div>
              <div className={Styles.cardContentText}>
                <Category />
                <p>Category : {account.category}</p>
              </div>
            </div>
          </div>
          <Link to={`/detail/${account?.id}`}>
            <KeyboardDoubleArrowRightTwoTone className={Styles.detailButton} />
          </Link>
        </CardContent>
      </Card>
      <ModalDeleteAccount
        open={open}
        handleClose={() => setOpen(false)}
        account={account}
        refresh={() => refreshFunc()}
      />
    </>
  );
};

export default AccountCard;
