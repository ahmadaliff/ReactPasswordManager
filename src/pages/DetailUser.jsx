import React, { useLayoutEffect, useState } from "react";
import Styles from "../styles/style.module.scss";
import CardDetail from "../components/CardDetail";
import { useParams } from "react-router-dom";
import { callAPI } from "../domain/api";
import NoDataView from "../components/NoDataView";

const DetailUser = () => {
  const { id } = useParams();
  const [account, setAccount] = useState();
  useLayoutEffect(() => {
    getAccountById();
  }, []);
  const getAccountById = async () => {
    try {
      const response = await callAPI({ endpoint: `password/${id}` });
      setAccount(response);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      {account ? (
        <div className={Styles.Page}>
          <CardDetail account={account} />
        </div>
      ) : (
        <NoDataView text={"No Account with that Id"} />
      )}
    </>
  );
};

export default DetailUser;
