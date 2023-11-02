import {
  Button,
  FormGroup,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Styles from "../styles/style.module.scss";
import { callAPI } from "../domain/api";
import { useNavigate, useParams } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const FormAccount = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [isShowPass, setIsShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    category: "",
    provider: "",
  });
  useLayoutEffect(() => {
    id && getAccById();
  }, []);
  useEffect(() => {
    setError(
      formData.email === "" ||
        formData.password === "" ||
        formData.provider === "" ||
        formData.category === "" ||
        formData.password.length < 6
    );
  }, [formData]);

  const getAccById = async () => {
    try {
      const response = await callAPI({ endpoint: `password/${id}` });
      setFormData(response);
    } catch (error) {
      alert(error.message);
    }
  };
  const handleSubmit = async () => {
    try {
      if (!error) {
        setLoading(true);
        await callAPI({
          endpoint: id ? `password/${formData?.id}` : "password",
          method: id ? "PUT" : "POST",
          data: formData,
        });
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
    navigate("/");
  };

  return (
    <div className={Styles.Page}>
      <h2>{id ? "Edit Account" : "Add Account"}</h2>
      <FormGroup className={Styles.form}>
        <TextField
          error={formData.email === ""}
          label="Email"
          value={formData.email}
          placeholder="Email"
          variant="standard"
          type="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          helperText={formData.email === "" ? "Email Required" : ""}
          required
        />
        <TextField
          error={formData.password === "" || formData.password.length < 6}
          label="Password"
          value={formData.password}
          variant="standard"
          placeholder="Password"
          type={isShowPass ? "text" : "password"}
          sx={{ position: "relative" }}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
          helperText={
            formData.password === ""
              ? "Password Required"
              : formData.password.length < 6
              ? "Password Minimum 6 Char"
              : ""
          }
          InputProps={{
            endAdornment: (
              <div
                className={Styles.iconShowpassForm}
                onClick={() => setIsShowPass(!isShowPass)}
              >
                {isShowPass ? <VisibilityOff /> : <Visibility />}
              </div>
            ),
          }}
        />
        <div>
          <InputLabel
            variant="standard"
            htmlFor="category"
            error={formData.category === ""}
          >
            Category
          </InputLabel>
          <NativeSelect
            error={formData.category === ""}
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            inputProps={{
              name: "cateory",
              id: "category",
            }}
            className={Styles.formSelect}
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value={"Work"}>Work</option>
            <option value={"Family"}>Family</option>
            <option value={"Personal"}>Personal</option>
          </NativeSelect>
          <p className={Styles.optionError}>
            {formData.category === "" && "Category required"}
          </p>
        </div>
        <TextField
          error={formData.provider === ""}
          label="Provider"
          value={formData.provider}
          variant="standard"
          type="text"
          placeholder="Provider"
          onChange={(e) =>
            setFormData({ ...formData, provider: e.target.value })
          }
          helperText={formData.provider === "" ? "Provider Required" : ""}
          required
        />
        <Button
          variant="contained"
          type="submit"
          disabled={loading || error}
          onClick={() => handleSubmit()}
        >
          {id ? "Edit Account" : "Add Account"}
        </Button>
      </FormGroup>
    </div>
  );
};

export default FormAccount;
