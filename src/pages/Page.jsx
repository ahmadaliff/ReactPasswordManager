import React, { useLayoutEffect, useState } from "react";
import AccountCard from "../components/AccountCard";
import Styles from "../styles/style.module.scss";
import { useParams } from "react-router-dom";
import { callAPI } from "../domain/api";
import NoDataView from "../components/NoDataView";
import AddAccount from "../components/AddAccount";

const Page = () => {
  const { category } = useParams();
  const [dataAccount, setDataAccount] = useState();
  useLayoutEffect(() => {
    getAccountList();
  }, [category]);
  const getAccountList = async () => {
    try {
      const response = await callAPI({
        endpoint: category ? `password?category=${category}` : "/password",
      });
      setDataAccount(response);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      {dataAccount?.length > 0 ? (
        <div className={Styles.Page}>
          <h2>Account List</h2>
          <AddAccount />
          {dataAccount?.map((val, key) => (
            <AccountCard
              account={val}
              key={key}
              refreshFunc={() => getAccountList()}
            />
          ))}
        </div>
      ) : (
        <NoDataView text={"No Account on this category"} />
      )}
    </>
  );
};

export default Page;
