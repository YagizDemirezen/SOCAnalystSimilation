import React from "react";
import {useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import mainLogo from "../assets/mainLogo.png";
import "../styles/BurgerMenu.css";

export default function Burger() {
    const navigate = useNavigate();
    const GoHome = () => {
        navigate(`/`);
    }
  return (
    <Menu width={250}>
        <img src={mainLogo} alt="SOC Simulator" className="cornerImg" onClick={GoHome}/>
        <a className="menu-item" href="/">Ana Sayfa</a>
        <a className="menu-item" href="/scenarios/phishing">Phishing Senaryosu</a>
        <a className="menu-item" href="/scenarios/ransomware">Ransomware Senaryosu</a>
        <a className="menu-item" href="/scenarios/ddos">DDoS Senaryosu</a>

    </Menu>
  );
}

