export interface StatCardItem {
  id: string;
  metric: string;
  value: string;
  label: string;
  category: "Trophy" | "Individual Award" | "Career Record";
  yearsOrContext: string;
  description: string;
  highlight?: boolean;
}

export const OFFICIAL_TROPHIES: StatCardItem[] = [
  {
    id: "world-cup",
    metric: "1",
    value: "1",
    label: "FIFA World Cup",
    category: "Trophy",
    yearsOrContext: "2022 (Qatar)",
    description: "The pinnacle of football. Captained Argentina to their third world title, scoring 7 goals with 3 assists, including two goals in the historic final against France.",
    highlight: true
  },
  {
    id: "copa-america",
    metric: "2",
    value: "2",
    label: "Copa América Titles",
    category: "Trophy",
    yearsOrContext: "2021 (Brazil), 2024 (USA)",
    description: "Broke Argentina's 28-year senior trophy drought at the Maracanã in 2021 before repeating the continental triumph at Hard Rock Stadium in 2024.",
    highlight: true
  },
  {
    id: "finalissima",
    metric: "1",
    value: "1",
    label: "CONMEBOL–UEFA Finalissima",
    category: "Trophy",
    yearsOrContext: "2022 (London)",
    description: "Intercontinental showpiece between South American and European champions. Provided two assists as Argentina defeated Italy 3–0 at Wembley.",
    highlight: false
  },
  {
    id: "olympic-gold",
    metric: "1",
    value: "1",
    label: "Olympic Gold Medal",
    category: "Trophy",
    yearsOrContext: "2008 (Beijing) • U-23 Tournament",
    description: "Youth & Olympic achievement. Guided Argentina's Under-23 side with 2 goals and 3 assists, culminating in gold against Nigeria in Beijing.",
    highlight: false
  },
  {
    id: "golden-ball",
    metric: "2",
    value: "2",
    label: "World Cup Golden Balls",
    category: "Individual Award",
    yearsOrContext: "2014 (Brazil), 2022 (Qatar)",
    description: "The only male footballer in history to win the FIFA World Cup Golden Ball twice as the tournament's most valuable player.",
    highlight: true
  }
];

export const CAREER_RECORD_STATS = [
  {
    id: "caps",
    number: "191+",
    label: "International Caps",
    detail: "All-time most capped player in Argentine and South American football history.",
    asOfDate: "Verified CONMEBOL Qualification Cycle"
  },
  {
    id: "goals",
    number: "112+",
    label: "International Goals",
    detail: "Top international goalscorer in South American history; 2nd highest in global men's football.",
    asOfDate: "Verified CONMEBOL Qualification Cycle"
  },
  {
    id: "assists",
    number: "57+",
    label: "International Assists",
    detail: "Record number of assists registered in senior international football competition.",
    asOfDate: "Verified Match Records"
  },
  {
    id: "finals",
    number: "8",
    label: "Major Finals Contested",
    detail: "World Cup (2014, 2022), Copa América (2007, 2015, 2016, 2021, 2024), Finalissima (2022).",
    asOfDate: "Senior Men's Tournaments"
  }
];
