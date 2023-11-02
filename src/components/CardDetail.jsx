import React, { useState } from "react";
import {
  AlternateEmail,
  Category,
  Edit,
  Key,
  KeyboardDoubleArrowRightTwoTone,
  Language,
  PersonRemoveRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Box, Card, CardContent } from "@mui/material";
import Styles from "../styles/style.module.scss";
import ModalDeleteAccount from "./ModalDeleteAccount";
import { useNavigate } from "react-router-dom";

const CardDetail = ({ account }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  return (
    <>
      <Card className={Styles.card}>
        <div className={Styles.delWrap}>
          <h2>Detail Account</h2>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <div className={Styles.delButtonWrapFromDetail}>
              <PersonRemoveRounded
                className={Styles.detailButton}
                onClick={() => setOpen(true)}
              />
            </div>
            <div
              className={`${Styles.delButtonWrapFromDetail} ${Styles.editButton}`}
            >
              <Edit
                className={Styles.detailButton}
                onClick={() => navigate(`/edit/${account?.id}`)}
              />
            </div>
          </Box>
        </div>
        <CardContent className={Styles.cardContentWrap}>
          <div className={Styles.leftSideCard}>
            <div className={Styles.cardContentTextWrap}>
              <div className={Styles.cardContentText}>
                <AlternateEmail />
                <p>Email : {account?.email}</p>
              </div>
              <div className={Styles.cardContentText}>
                <Key />
                <p>Password : </p>
                <input
                  value={account?.password}
                  type={isShowPass ? "text" : "password"}
                  disabled
                />
                <div
                  className={Styles.iconShowpass}
                  onClick={() => setIsShowPass(!isShowPass)}
                >
                  {isShowPass ? <VisibilityOff /> : <Visibility />}
                </div>
              </div>
              <div className={Styles.cardContentText}>
                <Language />
                <p>Domain : {account?.provider}</p>
              </div>
              <div className={Styles.cardContentText}>
                <Category />
                <p>Category : {account?.category}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <ModalDeleteAccount
        open={open}
        handleClose={() => setOpen(false)}
        account={account}
        refresh={() => navigate("/")}
      />
    </>
  );
};

export default CardDetail;
