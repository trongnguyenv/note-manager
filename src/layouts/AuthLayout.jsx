import s from "./style.module.css";
import { ReactComponent as LogoSVG } from "assets/images/logo.svg";

export function AuthLayout({ children }) {
  const _title = "Notomatic";
  const _descriptions = "One place for the team notes";

  const header = (
    <div className={s.header}>
      <LogoSVG className={s.logoTop} />
      <h3 className={s.logoTitle}>{_title}</h3>
    </div>
  );

  const background = (
    <div>
      <div className="d-flex">
        <LogoSVG className={s.logo} />
        <h1 className={s.backgroundTitle}>{_title}</h1>
      </div>
      <p style={{ color: "white" }}>{_descriptions}</p>
    </div>
  );

  return (
    <div className={s.root}>
      {header}
      <div className={s.leftSection}>{children}</div>
      <div className={`${s.rightSection} d-none d-lg-flex`}>{background}</div>
    </div>
  );
}
