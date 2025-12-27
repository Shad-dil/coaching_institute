export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">
          YOUR Computer Institute
        </h1>
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#courses">Courses</a>
          <a href="#why-us">Why Us</a>
          <a href="#noticeboard">Batches</a>
          <a href="#team">Team</a>
          <a href="#students">Students</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="bg-blue-700 text-white px-4 py-2 rounded">
          Enrol Now
        </button>
      </div>
    </header>
  );
}
