export type Course = {
  id: string;
  name: string;
  eligibility: string;
};

export type Faculty = {
  id: string;
  title: string;
  courses: Course[];
};

export const faculties: Faculty[] = [
  /* ================= HOTEL & HOSPITALITY ================= */
  {
    id: "paramedical-health",
    title: "Faculty of Paramedical & Health",
    courses: [
      {
        id: "bmlt",
        name: "BMLT",
        eligibility: "10+2 Biology",
      },
      {
        id: "bpt",
        name: "BPT / BPT-LE",
        eligibility: "10+2 Biology / DPT",
      },
      {
        id: "bsc-paramedical",
        name: "B.Sc Paramedical (All)",
        eligibility: "10+2 Biology",
      },
      {
        id: "msc-paramedical",
        name: "M.Sc Paramedical",
        eligibility: "B.Sc Relevant",
      },
      {
        id: "diploma-paramedical",
        name: "Diploma / PG Diploma / Certificate",
        eligibility: "10th / 12th / Graduation",
      },
      {
        id: "bph-mph",
        name: "BPH / MPH",
        eligibility: "10+2 Science / Graduation",
      },
    ],
  },
  /* ================= PHARMACY ================= */
  {
    id: "pharmacy",
    title: "Faculty of Pharmacy",
    courses: [
      {
        id: "dpharm",
        name: "Diploma in Pharmacy (D.Pharm)",
        eligibility: "10+2 (PCM/PCB)",
      },
      {
        id: "bpharm",
        name: "Bachelor of Pharmacy (B.Pharm)",
        eligibility: "10+2 Science",
      },
    ],
  },
  /* ================= SCIENCE ================= */
  {
    id: "science",
    title: "Faculty of Science",
    courses: [
      {
        id: "bsc",
        name: "B.Sc (PCM / PCB / ZBC)",
        eligibility: "10+2 Science",
      },
      {
        id: "bsc-hons",
        name: "B.Sc (Hons / Hons with Research)",
        eligibility: "10+2 Science",
      },
      {
        id: "msc-2yr",
        name: "M.Sc (All Subjects) – 2 Years",
        eligibility: "Graduation in relevant subject",
      },
      {
        id: "msc-1yr",
        name: "M.Sc – 1 Year",
        eligibility: "NHEQF Level 6",
      },
    ],
  },
  {
    id: "hotel-hospitality",
    title: "Faculty of Hotel & Hospitality",
    courses: [
      { id: "bhmct", name: "BHMCT", eligibility: "10+2" },
      {
        id: "bsc-hotel",
        name: "B.Sc. Hotel & Hospitality",
        eligibility: "10+2",
      },
      {
        id: "mba-tourism",
        name: "MBA Tourism & Hospitality",
        eligibility: "Bachelor Degree",
      },
      {
        id: "pgdhm",
        name: "PG Diploma in Hotel Management",
        eligibility: "Bachelor Degree",
      },
      {
        id: "dhm",
        name: "Diploma in Hotel Management (1 / 3 Year)",
        eligibility: "10+2 / 10th",
      },
    ],
  },

  /* ================= SCIENCE ================= */
  {
    id: "science",
    title: "Faculty of Science",
    courses: [
      {
        id: "bsc",
        name: "B.Sc (PCM / PCB / ZBC)",
        eligibility: "10+2 Science",
      },
      {
        id: "bsc-hons",
        name: "B.Sc (Hons / Hons with Research)",
        eligibility: "10+2 Science",
      },
      {
        id: "msc-2yr",
        name: "M.Sc (All Subjects) – 2 Years",
        eligibility: "Graduation in relevant subject",
      },
      {
        id: "msc-1yr",
        name: "M.Sc – 1 Year",
        eligibility: "NHEQF Level 6",
      },
    ],
  },

  /* ================= ARTS & SOCIAL SCIENCE ================= */
  {
    id: "arts-social-science",
    title: "Faculty of Arts & Social Science",
    courses: [
      { id: "ba", name: "B.A (General)", eligibility: "10+2" },
      {
        id: "ba-hons",
        name: "B.A (Hons / Hons with Research)",
        eligibility: "10+2",
      },
      {
        id: "ma-2yr",
        name: "M.A (All Subjects) – 2 Years",
        eligibility: "Graduation with 45%",
      },
      {
        id: "ma-1yr",
        name: "M.A – 1 Year",
        eligibility: "NHEQF Level 6",
      },
      { id: "bsw", name: "BSW", eligibility: "10+2" },
      { id: "bsw-hons", name: "BSW (Hons)", eligibility: "10+2" },
      {
        id: "msw",
        name: "MSW",
        eligibility: "BSW / BA Sociology",
      },
    ],
  },

  /* ================= COMPUTER & IT ================= */
  {
    id: "computer-it",
    title: "Faculty of Computer & IT",
    courses: [
      { id: "bca", name: "BCA", eligibility: "10+2" },
      {
        id: "bca-hons",
        name: "BCA (Hons)",
        eligibility: "10+2 with Maths",
      },
      {
        id: "bsc-cs",
        name: "B.Sc (Hons) CS / IT / AI",
        eligibility: "10+2 with 45%",
      },
      {
        id: "mca-2yr",
        name: "MCA – 2 Years",
        eligibility: "Graduation (CS / IT / Maths)",
      },
      {
        id: "mca-1yr",
        name: "MCA – 1 Year",
        eligibility: "NHEQF Level 6",
      },
      {
        id: "msc-it",
        name: "M.Sc IT / CS",
        eligibility: "BCA / B.Sc IT",
      },
      {
        id: "pgd-it",
        name: "PG Diploma / Diploma (IT Courses)",
        eligibility: "Graduation / 10+2",
      },
    ],
  },

  /* ================= ENGINEERING & TECHNOLOGY ================= */
  {
    id: "engineering-technology",
    title: "Faculty of Engineering & Technology",
    courses: [
      {
        id: "btech",
        name: "B.Tech (All Branches)",
        eligibility: "10+2 / ITI / Diploma",
      },
      {
        id: "btech-le",
        name: "B.Tech (Lateral Entry)",
        eligibility: "Diploma / D.Voc",
      },
      {
        id: "diploma-eng",
        name: "Diploma Engineering",
        eligibility: "10th",
      },
      {
        id: "diploma-le",
        name: "Diploma (Lateral Entry)",
        eligibility: "10+2 (PCM) / ITI",
      },
      {
        id: "mtech",
        name: "M.Tech (All Specializations)",
        eligibility: "B.Tech / B.E / M.Sc",
      },
    ],
  },

  /* ================= PARAMEDICAL & HEALTH ================= */

  /* ================= YOGA ================= */
  {
    id: "yoga",
    title: "Faculty of Yoga",
    courses: [
      { id: "bnys", name: "BNYS", eligibility: "10+2 Biology" },
      {
        id: "bnys-le",
        name: "BNYS (LE)",
        eligibility: "10+2 + DNYS",
      },
      { id: "dnys", name: "DNYS", eligibility: "10+2" },
      { id: "ba-yoga", name: "BA/BSc Yoga", eligibility: "10+2" },
      {
        id: "ma-yoga",
        name: "MA/MSc Yoga",
        eligibility: "Graduation",
      },
      {
        id: "pgdy",
        name: "PG Diploma Yoga",
        eligibility: "Graduation",
      },
    ],
  },

  /* ================= LAW ================= */
  {
    id: "law",
    title: "Faculty of Law",
    courses: [
      {
        id: "llb",
        name: "LLB",
        eligibility: "Graduation with 45%",
      },
      { id: "ba-llb", name: "BA LLB", eligibility: "10+2" },
      {
        id: "llm",
        name: "LLM",
        eligibility: "LLB / BA-LLB",
      },
    ],
  },

  /* ================= EDUCATION & VOCATION ================= */
  {
    id: "education-vocation",
    title: "Faculty of Education & Vocation",
    courses: [
      {
        id: "ba-education",
        name: "B.A Education / Physical Education",
        eligibility: "10+2",
      },
      {
        id: "ma-education",
        name: "M.A Education / Physical Education",
        eligibility: "Graduation",
      },
      {
        id: "bvoc",
        name: "B.Voc / M.Voc / D.Voc / Advanced Diploma",
        eligibility: "10th / 10+2 / Graduation",
      },
      {
        id: "phd",
        name: "Ph.D",
        eligibility: "Master Degree with 55%",
      },
    ],
  },
];
