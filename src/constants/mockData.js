import React from "react";
import { Trophy, Crown, Star } from "lucide-react";

export const hackathonData = {
  title: "CODEASTHRAM CHALLENGE",
  tagline: "Build Real-World Solutions through Innovation and Teamwork",
  eventDate: "JAN 2025", // Countdown kaga
  location: "TCE Campus",
  stats: { problemstatement: "100's", days: "20", teams: "60+", winners: "3" }
};

export const eliteSquadsData = {
  topSquads: [
    { name: "CASUAL CODERS", mentor: "JOTHISMATHI S", pts: "2780", tasks: "100", iconKey: "trophy" },
    { name: "BINARY BUILDERS", mentor: "LALITHA MOHANA R S", pts: "2847", tasks: "102", iconKey: "crown", featured: true },
    { name: "CODE BEGINNERS", mentor: "JOTHISMATHI S", pts: "2770", tasks: "101", iconKey: "star" },
  ],
  squadList: [
    { rank: 4, name: "TECHIES", mentor: "JOTHISMATHI S", tasks: "93", intel: "2598" },
    { rank: 5, name: "HACKATHON HACKERS", mentor: "LALITHA MOHANA R S", tasks: "90", intel: "2488" },
    { rank: 6, name: "TEAM TECHNO", mentor: "ATCHAYA S", tasks: "80", intel: "2211" },
  ]
};