import { useState } from "react";
import { Trash } from "react-bootstrap-icons";
import s from "./style.module.css";

export function TextCard({ title, subtitle, content, onClick, onClickTrash }) {
  const [isCardHover, setIsCardHover] = useState(false);
  const [isTrashHover, setIsTrashHover] = useState(false);

  function _onClickTrash(e) {
    onClickTrash();
    e.stopPropagation();
  }

  return (
    <div
      className={`card ${s.container}`}
      style={{ borderColor: isCardHover ? "#0d6efd" : "transparent" }}
      onClick={onClick}
      onMouseEnter={() => setIsCardHover(true)}
      onMouseLeave={() => setIsCardHover(false)}
    >
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className="card-title">{title}</h5>
          <Trash
            size={20}
            style={{ color: isTrashHover ? "#FF7373" : "#b8b8b8" }}
            onMouseEnter={() => setIsTrashHover(true)}
            onMouseLeave={() => setIsTrashHover(false)}
            onClick={_onClickTrash}
          />
        </div>
        <h6 className={`card-subtitle mb-2 text-muted`}>
          {subtitle}
        </h6>
        <p className={`card-text ${s.text_content}`}>{content}</p>
      </div>
    </div>
  );
}
