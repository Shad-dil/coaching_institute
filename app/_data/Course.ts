export type Course = {
  id: string;
  title: string;
  duration: string;
  certificate: boolean;
  sections: {
    title: string;
    topics: string[];
  }[];
};

export const courses: Course[] = [
  {
    id: "dca",
    title: "DCA (Diploma in Computer Application)",
    duration: "3 Months",
    certificate: true,
    sections: [
      {
        title: "Fundamental",
        topics: [
          "History of Computer",
          "Basic Knowledge",
          "Notepad",
          "WordPad",
          "MS Paint",
          "Search",
        ],
      },
      {
        title: "Office Package",
        topics: ["MS Word", "MS Excel", "MS PowerPoint"],
      },
      {
        title: "Extra Knowledge",
        topics: ["Control Panel", "Software Installation", "DOS"],
      },
      {
        title: "Internet Course",
        topics: [
          "Email Account Creation",
          "Video Call",
          "Online Banking",
          "Railway / Airline Ticket Booking",
          "PAN / Aadhaar Status",
        ],
      },
    ],
  },

  {
    id: "fullstack",
    title: "Full Stack Developer",
    duration: "1 Year",
    certificate: true,
    sections: [
      {
        title: "Frontend",
        topics: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Backend",
        topics: ["PHP", "MySQL"],
      },
    ],
  },
];
