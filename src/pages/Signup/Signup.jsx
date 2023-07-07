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

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const user = await AuthAPI.signup(email, password);
        dispatch(setUser(user));
        await toast("success", "Signup success, you are now login");
        navigate("/");
      } catch (error) {
        toast("error", error.message);
      }
    } else {
      toast("error", "Password don't match!");
    }
  };

  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Signup <br />
        to access your team notes
      </h2>
      <form className={s.formGroup} onSubmit={submit}>
        <Input placeholder={"Email"} onTextChange={setEmail} />
        <Input
          type="password"
          placeholder={"Password"}
          onTextChange={setPassword}
        />
        <Input
          type="password"
          placeholder={"Confirm Password"}
          onTextChange={setConfirmPassword}
        />
        <ButtonPrimary className={s.button} type="submit">
          Sign Up
        </ButtonPrimary>
        <span>
          Already have an account ? <Link to={"/signin"}>Signin</Link>
        </span>
      </form>
    </div>
  );

  return <AuthLayout>{form}</AuthLayout>;
}
