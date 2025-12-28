export type Course = {
  id: string;
  imageUrl: string;
  title: string;
  duration: string;
  certificate: boolean;
  whoCanJoin: string[];
  sections: {
    title: string;
    topics: string[];
  }[];
};

export const courses: Course[] = [
  {
    id: "dca",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    title: "DCA (Diploma in Computer Application)",
    duration: "3 Months",
    whoCanJoin: [
      "School / College Students",
      "Beginners with no computer background",
    ],
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
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    title: "Full Stack Developer",
    duration: "1 Year",
    certificate: true,
    whoCanJoin: ["You Need IT/Software Job"],
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
