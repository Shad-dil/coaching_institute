import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import CoursesGrid from "./_components/CourseGrid";
import WhyUs from "./_components/WhyUs";
import NoticeBoard from "./_components/NoticeBoard";
import Teams from "./_components/Teams";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <NoticeBoard />
      <CoursesGrid />
      <WhyUs />
      <Teams />
      <Contact />
      <Footer />
    </>
  );
}
