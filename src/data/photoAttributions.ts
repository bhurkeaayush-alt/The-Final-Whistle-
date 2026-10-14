export interface PhotoAttribution {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  credit: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  year: string;
  aspectRatio?: string;
}

export const PHOTO_COLLECTION: PhotoAttribution[] = [
  {
    id: "messi-debut-2005",
    src: "/images/Debut.jpeg",
    alt: "Young 18-year-old Lionel Messi during his senior international debut for Argentina in August 2005",
    title: "The Senior International Debut: Budapest 2005",
    caption: "An 18-year-old Lionel Messi entering the international spotlight with Argentina against Hungary, beginning a legendary 20-year career with the Albiceleste.",
    credit: "International Sports Archive",
    license: "Editorial Feature",
    licenseUrl: "https://afavirtual.com.ar",
    sourceUrl: "https://afavirtual.com.ar",
    year: "2005"
  },
  {
    id: "homepage-hero",
    src: "/images/homepage.webp",
    alt: "Lionel Messi in the Argentina national football team jersey with atmospheric stadium floodlights",
    title: "The Albiceleste Icon: Lionel Messi",
    caption: "Lionel Messi proudly wearing the Argentina national jersey, embodying two decades of footballing artistry and national passion.",
    credit: "Editorial Sports Archive",
    license: "Editorial Feature",
    licenseUrl: "https://afavirtual.com.ar",
    sourceUrl: "https://afavirtual.com.ar",
    year: "2022"
  },
  {
    id: "messi-trophy-triumph",
    src: "/images/2022-worldcup.jpeg",
    alt: "Lionel Messi joyfully hoisting the FIFA World Cup trophy high above his head in Qatar 2022 wearing the ceremonial bisht",
    title: "The Ultimate Coronation: Lusail 2022",
    caption: "Lionel Messi hoists the 18-karat solid gold FIFA World Cup trophy into the Qatar night, fulfilling the dreams of a nation that began two decades ago in Rosario.",
    credit: "FIFA / Editorial Sports Archive",
    license: "Editorial Feature",
    licenseUrl: "https://www.fifa.com",
    sourceUrl: "https://www.fifa.com/tournaments/mens/worldcup/qatar2022",
    year: "2022"
  },
  {
    id: "hero-wc2022",
    src: "/images/messi-hero-wc2022.jpg",
    alt: "Lionel Messi in the Argentina national jersey during the 2022 FIFA World Cup",
    title: "The Ultimate Glory: Qatar 2022",
    caption: "Lionel Messi in full focus during Argentina's historic campaign at the Lusail Iconic Stadium in Qatar, December 2022.",
    credit: "Wikimedia Commons Contributor",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lionel-Messi-Argentina-2022-FIFA-World-Cup.jpg",
    year: "2022"
  },
  {
    id: "wc2022-celebration",
    src: "/images/messi-wc2022-celebration.jpg",
    alt: "Lionel Messi celebrating Argentina's 2022 FIFA World Cup triumph",
    title: "A 36-Year Wait Concluded",
    caption: "Messi lifts his arms in jubilation as Argentina captures their third World Cup crown in a breathtaking final against France.",
    credit: "Wikimedia Commons Contributor",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lionel_Messi_WC2022.jpg",
    year: "2022"
  },
  {
    id: "portrait-argentina",
    src: "/images/messi-portrait-cropped.jpg",
    alt: "Portrait of Lionel Messi wearing Argentina's iconic sky-blue and white jersey",
    title: "The Captain in Albiceleste",
    caption: "The unmistakable silhouette and resolute expression of Messi wearing the iconic Number 10 armband.",
    credit: "Wikimedia Commons",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lionel-Messi-Argentina-2022-FIFA-World-Cup_(cropped).jpg",
    year: "2022"
  },
  {
    id: "russia-2018-match",
    src: "/images/messi-2018-match.jpg",
    alt: "Lionel Messi controlling the ball against Nigeria during the 2018 FIFA World Cup",
    title: "Defying the Odds: St. Petersburg 2018",
    caption: "Messi executes a sublime first touch on his thigh before scoring the opening goal against Nigeria in St. Petersburg.",
    credit: "Kirill Venediktov / soccer.ru",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lionel_Messi_20180626.jpg",
    year: "2018"
  },
  {
    id: "olympics-2008",
    src: "/images/messi-olympics-2008.jpg",
    alt: "Lionel Messi challenged during the 2008 Olympic Football Tournament in Beijing",
    title: "Olympic Gold in Beijing",
    caption: "A 21-year-old Messi weaving through Brazil's defense in the 2008 Olympic semi-final in Beijing before securing gold with Angel Di María.",
    credit: "Andre Kiwitz / Flickr",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:ARG-BRA_2008_Olympic_semi-final.jpg",
    year: "2008"
  },
  {
    id: "penalty-2018",
    src: "/images/messi-penalty-2018.jpg",
    alt: "Lionel Messi during an international fixture in Russia",
    title: "Under the Weight of Expectation",
    caption: "Every move scrutinized: Messi during Argentina's high-stakes 2018 World Cup group match.",
    credit: "Wikimedia Commons Contributor",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:FWC_2018_-_Group_D_-_ARG_v_ISL_-_Messi_penalty_kick.jpg",
    year: "2018"
  },
  {
    id: "swiss-2014",
    src: "/images/messi-swiss-2014.jpg",
    alt: "Lionel Messi in action for Argentina at the 2014 World Cup",
    title: "The Marathon in Brazil: 2014",
    caption: "Messi navigating the midfield in the dramatic round-of-16 clash against Switzerland during Argentina's journey to the Maracanã final.",
    credit: "Wikimedia Commons",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Suisse_vs_Argentine_-_Granit_Xhaka_%26_Lionel_Messi.jpg",
    year: "2014"
  },
  {
    id: "vs-ronaldo-2011",
    src: "/images/messi-vs-ronaldo-2011.jpg",
    alt: "Lionel Messi in Argentina colors during an international friendly in Geneva",
    title: "International Showdowns: Geneva 2011",
    caption: "Lionel Messi leading Argentina against Portugal in a thrilling 2-1 victory where he scored the decisive 90th-minute penalty.",
    credit: "Fanny Schertzer / Wikimedia Commons",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cristiano_Ronaldo_and_Lionel_Messi_-_Portugal_vs_Argentina,_9th_February_2011.jpg",
    year: "2011"
  }
];
