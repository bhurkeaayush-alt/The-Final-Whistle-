export interface TimelineMilestone {
  year: string;
  exactDate?: string;
  era: "Early Years" | "Heartbreak" | "Redemption" | "Twilight & Beyond";
  title: string;
  summary: string;
  description: string;
  venue?: string;
  imageSrc?: string;
  imageAlt?: string;
  badge?: string;
}

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2005",
    exactDate: "August 17, 2005",
    era: "Early Years",
    title: "Senior International Debut",
    summary: "Makes his senior debut for Argentina against Hungary in Budapest at age 18.",
    description: "Coming on as a 63rd-minute substitute under manager José Pékerman, Messi's debut lasted barely 43 seconds when German referee Markus Merk issued a disputed red card for an elbow flail while shaking off defender Vilmos Vanczák. A tearful Messi was consoled by teammates in the dressing room—a bittersweet start to a twenty-year international odyssey.",
    venue: "Ferenc Puskás Stadium, Budapest",
    badge: "Debut"
  },
  {
    year: "2008",
    exactDate: "August 23, 2008",
    era: "Early Years",
    title: "Olympic Gold Medal in Beijing",
    summary: "Champions of Beijing alongside Juan Román Riquelme, Sergio Agüero, and Ángel Di María.",
    description: "After Barcelona initially contested his release, newly appointed coach Pep Guardiola permitted Messi to represent his country at the Summer Games. Messi dazzled throughout the tournament, assisting Ángel Di María’s solitary chip in the final against Nigeria at the Bird's Nest stadium to claim Olympic Gold.",
    venue: "National Stadium, Beijing",
    imageSrc: "/images/messi-olympics-2008.jpg",
    imageAlt: "Messi competing at the 2008 Beijing Olympics",
    badge: "Gold Medal"
  },
  {
    year: "2014",
    exactDate: "July 13, 2014",
    era: "Heartbreak",
    title: "The Maracanã World Cup Final",
    summary: "Guides Argentina to their first World Cup final in 24 years, suffering 1–0 extra-time heartbreak.",
    description: "Captaining Alejandro Sabella’s pragmatic, resolute squad, Messi scored decisive group-stage winners against Bosnia, Iran, and Nigeria. In the final at Rio de Janeiro's iconic Maracanã, Mario Götze’s 113th-minute volley handed Germany the trophy. Messi received the Golden Ball as the tournament’s best player, but his forlorn gaze toward the trophy became a symbol of national agony.",
    venue: "Estádio do Maracanã, Rio de Janeiro",
    imageSrc: "/images/messi-swiss-2014.jpg",
    imageAlt: "Lionel Messi in action during the 2014 World Cup campaign",
    badge: "Golden Ball"
  },
  {
    year: "2016",
    exactDate: "June 26, 2016",
    era: "Heartbreak",
    title: "The Shock Retirement Announcement & Return",
    summary: "Announces his international retirement following Copa América Centenario penalty defeat, then reverses the decision.",
    description: "Following Argentina’s second consecutive Copa América final penalty shootout defeat to Chile at MetLife Stadium—in which Messi missed his spot-kick—an emotionally shattered Messi told journalists in the mixed zone: 'For me, the national team is over. I've done all I can.' The announcement triggered nationwide rallies in Buenos Aires and personal appeals from President Mauricio Macri and Diego Maradona. By August 2016, Messi reaffirmed his commitment: 'I see many problems in Argentine football and I don't intend to create another.'",
    venue: "MetLife Stadium, East Rutherford, New Jersey",
    badge: "Turning Point"
  },
  {
    year: "2021",
    exactDate: "July 10, 2021",
    era: "Redemption",
    title: "First Senior Trophy: Copa América at the Maracanã",
    summary: "Ends Argentina’s 28-year senior trophy drought with a 1–0 victory over arch-rivals Brazil.",
    description: "Under Lionel Scaloni's rejuvenated squad, Messi produced a tour de force tournament—scoring four goals, providing five assists, and winning both Player of the Tournament and top scorer. When Ángel Di María scored the lone goal at Brazil's Maracanã stadium, the final whistle triggered scenes of tears and relief as Messi's teammates tossed him into the Rio night air.",
    venue: "Estádio do Maracanã, Rio de Janeiro",
    imageSrc: "/images/messi-portrait-cropped.jpg",
    imageAlt: "Lionel Messi in Argentina colors",
    badge: "Copa América Champions"
  },
  {
    year: "2022",
    exactDate: "June 1 & Dec 18, 2022",
    era: "Redemption",
    title: "The Finalissima and World Cup Immortalization",
    summary: "Dismantles European champions Italy at Wembley, followed by immortal World Cup glory in Qatar.",
    description: "Messi put on a masterclass at Wembley in June to capture the 2022 Finalissima against Italy (3-0). Months later in Qatar, he orchestrated Argentina's unforgettable march to their third World Cup crown: scoring in every knockout round, bagging a brace in the sensational 3–3 final against France, and calmly slotting his shootout penalty. Awarded his historic second World Cup Golden Ball, Messi lifted the trophy draped in the ceremonial Bisht.",
    venue: "Lusail Iconic Stadium, Qatar & Wembley, London",
    imageSrc: "/images/messi-hero-wc2022.jpg",
    imageAlt: "Lionel Messi celebrating World Cup triumph in Qatar 2022",
    badge: "World Cup Champions"
  },
  {
    year: "2024",
    exactDate: "July 14, 2024",
    era: "Redemption",
    title: "Back-to-Back Copa América Glory",
    summary: "Lifts his second consecutive Copa América title in the United States against Colombia.",
    description: "Overcoming an acute ankle injury in the 66th minute that left him weeping on the bench, Messi watched his teammates battle through extra time before Lautaro Martínez secured the 1–0 winner in Miami. Messi hobbled up the podium alongside Ángel Di María and Nicolás Otamendi to hoist the trophy, sealing Argentina's triple crown (Copa 2021, World Cup 2022, Copa 2024).",
    venue: "Hard Rock Stadium, Miami Gardens",
    badge: "Double Continental Champions"
  },
  {
    year: "Beyond 2024",
    exactDate: "Current Era (2024–2026)",
    era: "Twilight & Beyond",
    title: "The Twilight Chapter: 2026 World Cup Outlook",
    summary: "Active captain in CONMEBOL qualifiers while assessing international longevity and physical demands.",
    description: "Unlike the definitive declaration in 2016, Messi has chosen a measured approach to his eventual international departure. Still wearing the captain's armband in South American World Cup qualifiers and performing for Inter Miami, he has repeatedly stated that whether he features in the 2026 FIFA World Cup will depend entirely on how his body responds: 'I try not to think about the future, but rather live day to day... When the time comes, we will see.' While the end of his international era draws near, football is cherishing every remaining minute.",
    venue: "El Monumental, Buenos Aires & North America",
    imageSrc: "/images/messi-wc2022-celebration.jpg",
    imageAlt: "Lionel Messi saluting Argentine supporters",
    badge: "Active Legend"
  }
];
