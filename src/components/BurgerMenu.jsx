import React from "react";
import { useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import mainLogo from "../assets/mainLogo.png";
import documents from "../assets/documents.png";
import githubStar from "../assets/githubStar.png";
import "../styles/BurgerMenu.css";

export default function Burger() {
  const navigate = useNavigate();

  return (
    <Menu width={250} customBurgerIcon={<img src={documents} alt="Documents" />}>
      <img src={mainLogo} alt="SOC Simulator" className="cornerImg" onClick={() => navigate("/")} />
      <h1>Belgeler</h1>
      <div className="menu-section">
        <div className="menu-item" onClick={() => navigate("/guide")}> Adımlar </div>
        <div className="menu-item" onClick={() => navigate("/company")}> Şirket Bilgileri </div>
        <div className="menu-item" onClick={() => navigate("/alerts")}> Uyarılar </div>
      </div>
      <div className="github-section">
        <a href="https://github.com/YagizDemirezen/SOCAnalystSimilation">
        <p>Projemi beğendiysen yıldızlayabilirsin!</p>
        <img src={githubStar} alt="GitHub Star" className="githubStar" />
      </a>
      </div>
    </Menu>
  );
}