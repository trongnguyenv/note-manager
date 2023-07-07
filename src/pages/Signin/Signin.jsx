import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import s from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "components/Input/Input";
import { AuthLayout } from "layouts/AuthLayout";
import { useState } from "react";
import { AuthAPI } from "api/auth";
import { setUser } from "store/auth/auth-slice";
import { useDispatch } from "react-redux";
import { toast } from "utils/sweet-alert";

export function Signin() {
  const [email, setEmail] = useState("tomasznguyen@gmail.com");
  const [password, setPassword] = useState("123456aA@");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await AuthAPI.signin(email, password);
      dispatch(setUser(user));
      await toast("success", "Login successfuly");
      navigate("/");
    } catch (error) {
      toast("error", error.message);
    }
  };

  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Signin <br />
        to access your team notes
      </h2>
      <form className={s.formGroup} onSubmit={submit}>
        <Input placeholder={"Email"} onTextChange={setEmail} />
        <Input
          type="password"
          placeholder={"Password"}
          onTextChange={setPassword}
        />
        <ButtonPrimary className={s.button} type="submit">
          Sign In
        </ButtonPrimary>
        <span>
          Don't have account yet? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
    </div>
  );

  return <AuthLayout>{form}</AuthLayout>;
}
