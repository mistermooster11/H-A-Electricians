export type Review = {
  name: string;
  rating: number;
  text: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Called H&A NYC Electrician for a panel upgrade in our Manhattan apartment. They arrived on time, explained everything clearly before starting, and had the job done same day. Pricing was exactly what they quoted — no hidden charges. Will absolutely use them again.",
    avatar: "https://ui-avatars.com/api/?name=Sarah+M&background=133380&color=fff&size=40",
  },
  {
    name: "James K.",
    rating: 5,
    text: "Had knob-and-tube wiring flagged during a home inspection. H&A came out, assessed the full scope, gave me a clear written estimate, and completed the rewire over two days. Clean work, no surprises on price, and passed inspection on the first try.",
    avatar: "https://ui-avatars.com/api/?name=James+K&background=133380&color=fff&size=40",
  },
  {
    name: "Rachel T.",
    rating: 5,
    text: "I manage a 20-unit building in the Upper West Side and H&A NYC Electrician has been our go-to for two years. Fast response on tenant calls, straightforward pricing, and they document every job properly. Exactly what a property manager needs.",
    avatar: "https://ui-avatars.com/api/?name=Rachel+T&background=133380&color=fff&size=40",
  },
  {
    name: "David L.",
    rating: 5,
    text: "Needed an EV charger installed in my building's parking spot — H&A handled the entire permitting and installation process. Clean installation, passed ConEd inspection first time. Extremely professional from start to finish.",
    avatar: "https://ui-avatars.com/api/?name=David+L&background=133380&color=fff&size=40",
  },
  {
    name: "Monica R.",
    rating: 5,
    text: "Emergency call at 11pm — two circuits tripped and wouldn't reset. H&A picked up immediately and had a technician at my apartment within an hour. Fixed the issue fast, explained what caused it, and the price was completely reasonable for after-hours service.",
    avatar: "https://ui-avatars.com/api/?name=Monica+R&background=133380&color=fff&size=40",
  },
  {
    name: "Brian C.",
    rating: 5,
    text: "Replaced all the outlets in my pre-war apartment with grounded receptacles. The team was respectful of my space, cleaned up completely after the job, and the price matched the quote. This is now the only electrician I recommend in Manhattan.",
    avatar: "https://ui-avatars.com/api/?name=Brian+C&background=133380&color=fff&size=40",
  },
  {
    name: "Natalie W.",
    rating: 5,
    text: "H&A upgraded our 100A panel to 200A — a full-day job they completed without drama. They coordinated directly with ConEd, pulled all required permits, and gave us a final walkthrough of everything they installed. Professional from the first call to the last handshake.",
    avatar: "https://ui-avatars.com/api/?name=Natalie+W&background=133380&color=fff&size=40",
  },
  {
    name: "Carlos F.",
    rating: 5,
    text: "Used H&A for a kitchen renovation — new dedicated circuits for the refrigerator, dishwasher, and microwave. They worked around our contractor's schedule perfectly and the rough-in was exactly what the inspector wanted. Great communication throughout.",
    avatar: "https://ui-avatars.com/api/?name=Carlos+F&background=133380&color=fff&size=40",
  },
];
