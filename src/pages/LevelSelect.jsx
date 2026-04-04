import { useState } from "react";
import "../styles/LevelSelect.css";
import LevelSelectBackground from "../components/ColorBends";
import TextTypeAnimation from "../components/TextType";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";

const levels = [
  {
    id: 1,
    title: "Phishing E-posta Tespiti",
    difficulty: "Kolay",
    description: "Şüpheli bir e-posta başlığı ve link analizi yap.",
    mitre: "T1566.001",
  },
  {
    id: 2,
    title: "Brute Force Login Anomalisi",
    difficulty: "Kolay",
    description: "Başarısız giriş denemelerini analiz et, saldırgan IP'yi bul.",
    mitre: "T1110",
  },
  {
    id: 3,
    title: "C2 Beacon Trafiği",
    difficulty: "Orta",
    description: "Düzenli aralıklarla dış sunucuya giden trafiği tespit et.",
    mitre: "T1071.001",
  },
  {
    id: 4,
    title: "Lateral Movement — Pass the Hash",
    difficulty: "Orta",
    description: "İç ağda yatay hareketi takip et, pivot noktasını bul.",
    mitre: "T1550.002",
  },
  {
    id: 5,
    title: "Ransomware İlk Belirtileri",
    difficulty: "Zor",
    description: "Şifreleme başlamadan önce erken uyarı sinyallerini yakala.",
    mitre: "T1486",
  },
  {
    id: 6,
    title: "APT — Çok Aşamalı Saldırı",
    difficulty: "Uzman",
    description: "Haftalara yayılan gelişmiş tehdit zincirini baştan sona çöz.",
    mitre: "T1059",
  },
];

const difficultyClass = {
  Kolay: "badge-easy",
  Orta: "badge-medium",
  Zor: "badge-hard",
  Uzman: "badge-expert",
};

export default function LevelSelect({ onStart }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="wrapper">

      <div className="bg">
        <LevelSelectBackground />
      </div>

      <div className="page">
        <h1 className="mainTitle">SOC Analist Simülasyonu</h1>
        <div className="header">
          <h1>
          <TextTypeAnimation />
          </h1>
          <p>Bir senaryo seç ve analiz etmeye başla.</p>
        </div>

        <div className="grid">
          {levels.map((level) => (
            <div
              key={level.id}
              className={`card ${hovered === level.id ? "card-hovered" : ""}`}
              onMouseEnter={() => setHovered(level.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="card-top">
                <span className="level-num">LVL-0{level.id}</span>
                <span className={`badge ${difficultyClass[level.difficulty]}`}>
                  {level.difficulty}
                </span>
              </div>

              <h2 className="card-title">{level.title}</h2>
              <p className="card-desc">{level.description}</p>

              <div className="card-bottom">
                <span className="mitre">{level.mitre}</span>
                <button className="btn" onClick={() => onStart(level)}>
                  Başlat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="logoContainer">
        <a href="https://github.com/YagizDemirezen" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="Github" className="logoImg-g" />
        </a>
        <a href="https://www.linkedin.com/in/yagizdemirezen/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="Linkedin" className="logoImg-l" />
        </a>
      </div>

    </div>
  );
}