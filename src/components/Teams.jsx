import React from "react";
import { motion } from "framer-motion";
import {
  Trophy, MapPin, Star, Crown,
  Lightbulb, Cpu, Layers, MonitorPlay, Sparkles, FolderCode, CheckCircle
} from "lucide-react";

import Rank1Member1 from "../assets/1.png";
import Rank1Member2 from "../assets/1.1.png";
import Rank1Member3 from "../assets/1.3.png";
import Rank2Member1 from "../assets/2.1.png";
import Rank2Member2 from "../assets/2.2.png";
import Rank2Member3 from "../assets/2.3.png";
import Rank3Member1 from "../assets/3.1.png";
import Rank3Member2 from "../assets/3.2.png";
import Rank3Member3 from "../assets/3.3.png";
import Rank4Member1 from "../assets/4.1.png";
import Rank4Member2 from "../assets/4.2.png";
import Rank4Member3 from "../assets/4.3.png";
import Rank5Member1 from "../assets/5.1.png";
import Rank5Member2 from "../assets/5.2.png";
import Rank5Member3 from "../assets/5.3.png";

const TEAMS = [
  {
    rank: 1,
    place: "1st Place",
    rankWord: "ONE",
    project: "Stock Market Plotter and Predicter",
    college: "Thiagarajar College of Engineering (TCE), Madurai",
    photos: [Rank1Member1, Rank1Member2, Rank1Member3],
    photoNames: ["Thaanyasri R", "Meenakshi A L", "Noorjahan S"],
    problemsCompleted: 60,
    points: 1570,
    maxPoints: 1600,
    criteria: { innovation: 98, technical: 95, complexity: 92, presentation: 97 },
    theme: {
      rowBorder:      "#004aad",
      rowBg:          "rgba(255,255,255,0.9)",
      rowShadow:      "0 6px 28px rgba(0,74,173,0.12)",
      stripeColor:    "#003366",
      rankBg:         "linear-gradient(135deg,#003366,#004aad,#3b82f6,#004aad,#003366)",
      rankShadow:     "0 0 28px rgba(37,99,235,0.5),0 4px 16px rgba(0,0,0,0.3)",
      accent:         "#004aad",
      accentLight:    "#f0f7ff",
      accentMid:      "#3b82f6",
      evalBarBg:      "linear-gradient(90deg,#003366,#004aad,#3b82f6)",
      evalBarHover:   "linear-gradient(90deg,#0070f3,#00c6ff)",
      photoBorder:    "#004aad",
      photoGlow:      "rgba(0,74,173,0.3)",
      badgeBg:        "rgba(0,74,173,0.08)",
      badgeBorder:    "rgba(0,74,173,0.3)",
      badgeText:      "#003366",
      scoreColor:     "#002b5e",
      scoreShadow:    "0 0 14px rgba(0,74,173,0.2)",
      posterBg:       "linear-gradient(160deg,#003366 0%,#004aad 60%,#1a5fc8 100%)",
      hoverAccent:    "#0070f3",
      hoverScore:     "#004aad",
    },
  },
  {
    rank: 2,
    place: "2nd Place (Shared)",
    rankWord: "TWO",
    project: "Smart Helmet with Accident Detection and SOS Alert",
    college: "Thiagarajar College of Engineering (TCE), Madurai",
    photos: [Rank2Member1, Rank2Member2, Rank2Member3],
    photoNames: ["V. Vaishali", "M. Nivetha", "L. Sandhiya"],
    problemsCompleted: 54,
    points: 1395,
    maxPoints: 1600,
    criteria: { innovation: 88, technical: 91, complexity: 85, presentation: 90 },
    theme: {
      rowBorder:      "rgba(14,165,233,0.3)",
      rowBg:          "rgba(255,255,255,0.9)",
      rowShadow:      "0 6px 28px rgba(14,165,233,0.1)",
      stripeColor:    "#0369a1",
      rankBg:         "linear-gradient(135deg,#0369a1,#0ea5e9,#7dd3fc,#0ea5e9,#0369a1)",
      rankShadow:     "0 0 24px rgba(14,165,233,0.4)",
      accent:         "#0284c7",
      accentLight:    "#f0f9ff",
      accentMid:      "#0ea5e9",
      evalBarBg:      "linear-gradient(90deg,#0369a1,#0ea5e9,#7dd3fc)",
      evalBarHover:   "linear-gradient(90deg,#0ea5e9,#38bdf8)",
      photoBorder:    "#0ea5e9",
      photoGlow:      "rgba(14,165,233,0.2)",
      badgeBg:        "rgba(14,165,233,0.08)",
      badgeBorder:    "rgba(14,165,233,0.25)",
      badgeText:      "#075985",
      scoreColor:     "#075985",
      scoreShadow:    "0 0 12px rgba(14,165,233,0.15)",
      posterBg:       "linear-gradient(160deg,#0c4a6e 0%,#0369a1 60%,#0ea5e9 100%)",
      hoverAccent:    "#0ea5e9",
      hoverScore:     "#0369a1",
    },
  },
  {
    rank: 2,
    place: "2nd Place (Shared)",
    rankWord: "TWO",
    project: "YOLO-Based Object Detector",
    college: "Thiagarajar College of Engineering (TCE), Madurai",
    photos: [Rank3Member1, Rank3Member2, Rank3Member3],
    photoNames: ["Bhavana S", "Dhanujasree B J", "Mohana G"],
    problemsCompleted: 55,
    points: 1370,
    maxPoints: 1600,
    criteria: { innovation: 85, technical: 87, complexity: 83, presentation: 88 },
    theme: {
      rowBorder:      "rgba(99,102,241,0.3)",
      rowBg:          "rgba(255,255,255,0.9)",
      rowShadow:      "0 6px 28px rgba(99,102,241,0.1)",
      stripeColor:    "#312e81",
      rankBg:         "linear-gradient(135deg,#312e81,#4338ca,#818cf8,#4338ca,#312e81)",
      rankShadow:     "0 0 24px rgba(99,102,241,0.4)",
      accent:         "#4338ca",
      accentLight:    "#eef2ff",
      accentMid:      "#6366f1",
      evalBarBg:      "linear-gradient(90deg,#312e81,#4338ca,#818cf8)",
      evalBarHover:   "linear-gradient(90deg,#6366f1,#a5b4fc)",
      photoBorder:    "#6366f1",
      photoGlow:      "rgba(99,102,241,0.2)",
      badgeBg:        "rgba(99,102,241,0.08)",
      badgeBorder:    "rgba(99,102,241,0.25)",
      badgeText:      "#312e81",
      scoreColor:     "#1e1b4b",
      scoreShadow:    "0 0 12px rgba(99,102,241,0.15)",
      posterBg:       "linear-gradient(160deg,#1e1b4b 0%,#312e81 60%,#4338ca 100%)",
      hoverAccent:    "#6366f1",
      hoverScore:     "#4338ca",
    },
  },
  {
    rank: 4,
    place: "4th Place",
    rankWord: "FOUR",
    project: "Autonomous Vehicle Simulation Dashboard",
    college: "Thiagarajar College of Engineering (TCE), Madurai",
    photos: [Rank4Member1, Rank4Member2, Rank4Member3],
    photoNames: ["Chandru A", "Praveen S", "Bala Dharasan V"],
    problemsCompleted: 35,
    points: 830,
    maxPoints: 1600,
    criteria: { innovation: 72, technical: 68, complexity: 65, presentation: 70 },
    theme: {
      rowBorder:      "rgba(37,99,235,0.25)",
      rowBg:          "rgba(255,255,255,0.9)",
      rowShadow:      "0 6px 28px rgba(37,99,235,0.08)",
      stripeColor:    "#1e3a8a",
      rankBg:         "linear-gradient(135deg,#1e3a8a,#2563eb,#60a5fa,#2563eb,#1e3a8a)",
      rankShadow:     "0 0 24px rgba(37,99,235,0.3)",
      accent:         "#1d4ed8",
      accentLight:    "#eff6ff",
      accentMid:      "#3b82f6",
      evalBarBg:      "linear-gradient(90deg,#1e3a8a,#2563eb,#60a5fa)",
      evalBarHover:   "linear-gradient(90deg,#2563eb,#60a5fa)",
      photoBorder:    "#3b82f6",
      photoGlow:      "rgba(37,99,235,0.15)",
      badgeBg:        "rgba(37,99,235,0.06)",
      badgeBorder:    "rgba(37,99,235,0.2)",
      badgeText:      "#1e3a8a",
      scoreColor:     "#1e3a8a",
      scoreShadow:    "0 0 10px rgba(37,99,235,0.1)",
      posterBg:       "linear-gradient(160deg,#0f1f4a 0%,#1e3a8a 60%,#2563eb 100%)",
      hoverAccent:    "#2563eb",
      hoverScore:     "#1e3a8a",
    },
  },
  {
    rank: 5,
    place: "5th Place",
    rankWord: "FIVE",
    project: "Credit Card Fraud Detection Logic Simulator",
    college: "Thiagarajar College of Engineering (TCE), Madurai",
    photos: [Rank5Member1, Rank5Member2, Rank5Member3],
    photoNames: ["Vivek Ram Prakhash S", "Vigneshwarlal B M", "Arunkumar JE"],
    problemsCompleted: 15,
    points: 300,
    maxPoints: 1600,
    criteria: { innovation: 40, technical: 38, complexity: 35, presentation: 42 },
    theme: {
      rowBorder: "rgba(14, 77, 146, 0.25)",
      rowBg: "rgba(255,255,255,0.9)",
      rowShadow: "0 6px 28px rgba(14, 77, 146, 0.08)",
      stripeColor: "#0E4D92",
      rankBg: "linear-gradient(135deg,#0a3666,#0E4D92,#1c68bc,#0E4D92,#0a3666)",
      rankShadow: "0 0 24px rgba(14, 77, 146, 0.3)",
      accent: "#0E4D92",
      accentLight: "#f0f5fa",
      accentMid: "#1c68bc",
      evalBarBg: "linear-gradient(90deg,#0a3666,#0E4D92,#1c68bc)",
      evalBarHover: "linear-gradient(90deg,#1c68bc,#3b82f6)",
      photoBorder: "#0E4D92",
      photoGlow: "rgba(14, 77, 146, 0.2)",
      badgeBg: "rgba(14, 77, 146, 0.08)",
      badgeBorder: "rgba(14, 77, 146, 0.3)",
      badgeText: "#0a3666",
      scoreColor: "#0a3666",
      scoreShadow: "0 0 10px rgba(14, 77, 146, 0.1)",
      posterBg: "linear-gradient(160deg,#072649 0%,#0E4D92 60%,#1c68bc 100%)",
      hoverAccent: "#1c68bc",
      hoverScore: "#0E4D92",
    },
  },
];

const CRITERIA_CONFIG = [
  { key: "innovation",   label: "Innovation",   icon: Lightbulb },
  { key: "technical",    label: "Technical",    icon: Cpu },
  { key: "complexity",   label: "Complexity",   icon: Layers },
  { key: "presentation", label: "Presentation", icon: MonitorPlay },
];

function PosterPanel({ team, idx }) {
  const t = team.theme;
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      style={{
        width: 148, flexShrink: 0, borderRadius: 16,
        background: t.posterBg, overflow: "hidden", position: "relative",
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "16px 12px", gap: 10,
        boxShadow: `inset 0 0 40px rgba(0,0,0,0.25), ${t.rankShadow}`,
        border: "1px solid rgba(255,255,255,0.12)", minHeight: 160,
      }}
    >
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)`,
        backgroundSize: "18px 18px", pointerEvents: "none",
      }} />

      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", alignItems: "center", gap: 5,
        background: "rgba(255,255,255,0.08)", borderRadius: 6,
        padding: "3px 8px", border: "1px solid rgba(255,255,255,0.15)",
      }}>
        <Trophy size={9} color="rgba(255,255,255,0.7)" strokeWidth={2} />
        <span style={{ fontSize: 8, fontWeight: 800, color: "rgba(255,255,255,0.7)", letterSpacing: 1.5, textTransform: "uppercase" }}>
          TARCIN
        </span>
      </div>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        {team.rank === 1 && (
          <motion.div animate={{ y: [0,-3,0] }} transition={{ repeat: Infinity, duration: 1.8 }}
            style={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
            <Crown size={16} fill="#ffd700" color="#ffd700" style={{ filter: "drop-shadow(0 0 6px rgba(255,215,0,0.8))" }} />
          </motion.div>
        )}
        <div style={{
          fontSize: team.rankWord.length > 4 ? 18 : 26, fontWeight: 900, color: "#ffffff",
          letterSpacing: 2, lineHeight: 1, textTransform: "uppercase",
          textShadow: "0 2px 16px rgba(0,0,0,0.5)", fontFamily: "Georgia, serif",
        }}>
          {team.rankWord}
        </div>
        {team.place.includes("Shared") && (
          <div style={{ fontSize: 7, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: 2, textTransform: "uppercase", marginTop: 3 }}>
            SHARED
          </div>
        )}
      </div>

      <div style={{
        position: "relative", zIndex: 1,
        background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: 20, padding: "3px 10px",
        fontSize: 8, fontWeight: 800, color: "rgba(255,255,255,0.85)",
        letterSpacing: 1.2, textTransform: "uppercase", textAlign: "center",
      }}>
        {team.place.replace(" (Shared)", "")}
      </div>

      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
        background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 8, padding: "6px 12px", width: "100%",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <CheckCircle size={10} color="rgba(255,255,255,0.6)" strokeWidth={2} />
          <span style={{ fontSize: 18, fontWeight: 900, color: "#fff", lineHeight: 1, textShadow: "0 0 14px rgba(255,255,255,0.3)", fontFamily: "Georgia, serif" }}>
            {team.problemsCompleted}
          </span>
        </div>
        <span style={{ fontSize: 7, fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: 1.3, textTransform: "uppercase" }}>
          Problems Solved
        </span>
      </div>

      <div style={{
        position: "absolute", bottom: -8, right: -4,
        fontSize: 72, fontWeight: 900, color: "rgba(255,255,255,0.05)",
        lineHeight: 1, fontFamily: "Georgia, serif", userSelect: "none", pointerEvents: "none", zIndex: 0,
      }}>
        {team.rank}
      </div>
    </motion.div>
  );
}

function PhotoStrip({ photos, names, theme, baseDelay, isHovered }) {
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "flex-end" }}>
      {photos.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: baseDelay + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.12, y: -4, transition: { duration: 0.18 } }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}
        >
          <div style={{
            width: 100, height: 100, borderRadius: 9, overflow: "hidden",
            border: `2px solid ${isHovered ? theme.hoverAccent : theme.photoBorder}`,
            boxShadow: `0 0 12px ${theme.photoGlow}, 0 2px 8px rgba(0,0,0,0.1)`,
            background: "#f5f5f5",
            transition: "border-color 0.3s ease",
          }}>
            {src ? (
              <img src={src} alt={names[i]} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
            ) : (
              <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: theme.accent }}>
                {names[i] ? names[i][0] : ""}
              </div>
            )}
          </div>
          <span style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center", maxWidth: 100, overflow: "hidden", color: "#000" }}>
            {(names[i] || "").split("").map((letter, j) => (
              <motion.span
                key={j}
                animate={{ color: "#000" }}
                transition={{ duration: 0.22, delay: isHovered ? (i * 0.08 + j * 0.018) : 0 }}
                style={{ fontSize: 8.5, fontWeight: 700, display: "inline-block", whiteSpace: "pre", color: "#000" }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function PerLetterText({ text, baseColor, hoverColor, isHovered, style = {}, staggerDelay = 0.02 }) {
  return (
    <span style={{ display: "inline-flex", flexWrap: "wrap", ...style }}>
      {text.split("").map((letter, i) => (
        <motion.span
          key={i}
          animate={{ color: isHovered ? hoverColor : baseColor }}
          transition={{ duration: 0.25, delay: isHovered ? i * staggerDelay : (text.length - 1 - i) * staggerDelay * 0.5 }}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}

function TeamRowWrapper({ team, idx }) {
  const t = team.theme;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: idx % 2 === 0 ? -120 : 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -12 }}
      whileTap={{ y: -6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative p-[2px] rounded-[22px] transition-all duration-500"
      style={{ cursor: "pointer" }}
    >
      <div className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"
        style={{ background: `linear-gradient(135deg,${t.accentMid},#ffffff,${t.accent})`, filter: "blur(15px)" }} />
      <div className="absolute inset-0 rounded-[22px] opacity-10 group-hover:opacity-100 transition-all duration-500"
        style={{ background: `linear-gradient(135deg,${t.accent},${t.accentMid},#ffffff)` }} />

      <div style={{
        position: "relative", background: t.rowBg,
        border: `1.5px solid ${t.rowBorder}44`, borderLeft: `5px solid ${t.stripeColor}`,
        borderRadius: 20, padding: "20px 26px 20px 20px",
        display: "flex", alignItems: "center", gap: 16,
        boxShadow: t.rowShadow, overflow: "hidden", transition: "box-shadow 0.5s ease",
      }} className="group-hover:shadow-[0_0_30px_rgba(0,112,243,0.12)]">

        <div style={{ position: "absolute", top: -14, right: -22, width: 160, height: 160, background: `radial-gradient(circle at 100% 0%,${t.accentLight} 0%,transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `${t.accentMid}22`, zIndex: 0 }} />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `${t.accentMid}22`, zIndex: 0 }} />

        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 16, width: "100%" }}>

          <PosterPanel team={team} idx={idx} />

          <div style={{ flex: "0 0 auto", width: 138 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 4 }}>
              <MapPin size={9} strokeWidth={2} style={{ marginTop: 1, flexShrink: 0, color: isHovered ? t.hoverAccent : "#aaa", transition: "color 0.3s ease" }} />
              <span style={{ display: "inline-flex", flexWrap: "wrap", fontSize: 9.5, lineHeight: 1.35, fontWeight: 700, color: "#000" }}>
                {team.college.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    animate={{ color: "#000" }}
                    transition={{ duration: 0.22, delay: isHovered ? i * 0.012 : 0 }}
                    style={{ display: "inline-block", whiteSpace: "pre", fontWeight: 700, color: "#000" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </div>
          </div>

          <div style={{ width: 1, alignSelf: "stretch", background: `linear-gradient(180deg,transparent,${t.rowBorder}88,transparent)`, flexShrink: 0 }} />

          <div style={{ flex: "0 0 auto" }}>
            <div style={{ fontSize: 7.5, fontWeight: 700, color: "#bbb", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>
              Members
            </div>
            <PhotoStrip photos={team.photos} names={team.photoNames} theme={t} baseDelay={0.18 + idx * 0.1} isHovered={isHovered} />
          </div>

          <div style={{ width: 1, alignSelf: "stretch", background: `linear-gradient(180deg,transparent,${t.rowBorder}88,transparent)`, flexShrink: 0 }} />

          <div style={{ flex: 1, minWidth: 130 }}>

            <div style={{ fontSize: 9.5, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", marginBottom: 5, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 4 }}>
              <PerLetterText
                text={team.place.replace(" (Shared)", "")}
                baseColor={t.accent}
                hoverColor={t.hoverAccent}
                isHovered={isHovered}
                staggerDelay={0.025}
              />
              {team.place.includes("Shared") && (
                <span style={{ fontSize: 7, fontWeight: 700, color: "#aaa", letterSpacing: 2 }}>SHARED</span>
              )}
            </div>

            <div style={{
              display: "flex", alignItems: "flex-start", gap: 5, marginBottom: 8,
              background: t.badgeBg, border: `1px solid ${t.badgeBorder}55`,
              borderRadius: 7, padding: "5px 9px",
            }}>
              <FolderCode size={9} strokeWidth={2} style={{ marginTop: 1, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 7, fontWeight: 700, color: "#bbb", letterSpacing: 1.4, textTransform: "uppercase", marginBottom: 2 }}>
                  Problem Statement
                </div>
                <PerLetterText
                  text={team.project}
                  baseColor={t.accent}
                  hoverColor={t.hoverAccent}
                  isHovered={isHovered}
                  style={{ fontSize: 9, fontWeight: 700, lineHeight: 1.35 }}
                  staggerDelay={0.015}
                />
              </div>
            </div>

            <div style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 7.5, fontWeight: 700, color: "#bbb", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 3 }}>
                Total Score
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Star size={13} strokeWidth={1.5}
                  style={{
                    color: isHovered ? t.hoverAccent : t.accentMid,
                    fill: isHovered ? t.hoverAccent : t.accentMid,
                    transition: "color 0.3s, fill 0.3s",
                  }}
                />
                <motion.span
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55 + idx * 0.1, type: "spring", stiffness: 200 }}
                  animate={{
                    color: isHovered ? t.hoverScore : t.scoreColor,
                    scale: isHovered ? 1.05 : 1,
                  }}
                  style={{
                    fontSize: 26, fontWeight: 900, lineHeight: 1,
                    textShadow: t.scoreShadow, fontFamily: "Georgia,serif",
                    originX: 0,
                  }}
                >
                  {team.points.toLocaleString()}
                </motion.span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default function Teams() {
  return (
    <section id="teams" className="py-24 bg-white text-slate-900 relative overflow-hidden font-sans border-b-0">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(#004aad 1.5px,transparent 1.5px),linear-gradient(90deg,#004aad 1.5px,transparent 1.5px)`, backgroundSize: "40px 40px" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-left">
          <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
            className="inline-flex items-center gap-3 mb-8 px-6 py-2.5 rounded-full bg-white border border-slate-200 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
            <motion.div animate={{ rotate:[0,20,-20,0], scale:[1,1.2,1.2,1] }} transition={{ repeat:Infinity, duration:2 }}>
              <Star size={16} className="text-[#004aad] fill-[#004aad]" />
            </motion.div>
            <span className="text-slate-900 uppercase tracking-[0.25em] font-black text-[11px]">LIVE STANDINGS — TEAM TRACK</span>
            <motion.div animate={{ opacity:[0,1,0], scale:[0.5,1,0.5] }} transition={{ repeat:Infinity, duration:1.5, delay:0.5 }}>
              <Sparkles size={12} className="text-blue-400" />
            </motion.div>
          </motion.div>

          <div className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none flex flex-wrap items-baseline gap-x-4 mb-8">
            <div className="flex">
              {["E","L","I","T","E"].map((l,i) => (
                <motion.span key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.05 }} className="inline-block text-slate-900">{l}</motion.span>
              ))}
            </div>
            <div className="flex">
              {["S","Q","U","A","D","R","O","N","S"].map((l,i) => (
                <motion.span key={i} initial={{ opacity:0, y:20, scale:0.8 }} whileInView={{ opacity:1, y:0, scale:1 }} viewport={{ once:true }} transition={{ delay:0.3+i*0.05 }} className="inline-block bg-[radial-gradient(circle,_#2563eb_0%,_#1e3a8a_40%,_#0b1f5e_100%)] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(37,99,235,0.3)]">{l}</motion.span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <motion.div initial={{ width:0 }} whileInView={{ width:"130px" }} transition={{ duration:1, ease:"circOut" }} className="h-[6px] bg-gradient-to-r from-[#004aad] to-blue-400 rounded-full shadow-lg shadow-blue-100" />
            <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <span className="flex items-center gap-1.5"><Trophy size={12} className="text-amber-500" /> {TEAMS.length} Squads</span>
              <span className="w-px h-3 bg-slate-200" />
              <span className="flex items-center gap-1.5"><Sparkles size={12} className="text-blue-500" /> Top Tier</span>
            </div>
          </div>
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:14, maxWidth:"2000px", margin:"0 auto", width:"100%" }}>
          {TEAMS.map((team, i) => <TeamRowWrapper key={i} team={team} idx={i} />)}
        </div>
      </div>
    </section>
  );
}