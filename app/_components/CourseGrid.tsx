"use client";

import { useState, useMemo } from "react";
import { faculties } from "../_data/Course";
import { FacultyAccordion } from "./FacultyAccordion";

export default function CourseCatalog() {
  const [search, setSearch] = useState("");
  const [openFacultyId, setOpenFacultyId] = useState<string | null>(null);

  const searchTerm = search.trim().toLowerCase();

  const filteredFaculties = useMemo(() => {
    return faculties
      .map((faculty) => {
        const matchedCourses = searchTerm
          ? faculty.courses.filter((course) =>
              course.name.toLowerCase().includes(searchTerm)
            )
          : faculty.courses;

        return {
          ...faculty,
          filteredCourses: matchedCourses,
          autoOpen: searchTerm && matchedCourses.length > 0,
        };
      })
      .filter((faculty) => !searchTerm || faculty.filteredCourses.length > 0);
  }, [searchTerm]);

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <input
        type="text"
        placeholder="Search by course name (MBA, BTech, BCA...)"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setOpenFacultyId(null);
        }}
        className="w-full border p-3 rounded mb-8"
      />

      <div className="space-y-4">
        {filteredFaculties.map((faculty) => (
          <FacultyAccordion
            key={faculty.id}
            faculty={{
              ...faculty,
              courses: faculty.filteredCourses,
            }}
            isOpen={faculty.autoOpen || openFacultyId === faculty.id}
            onToggle={() =>
              setOpenFacultyId((prev) =>
                prev === faculty.id ? null : faculty.id
              )
            }
          />
        ))}
      </div>
    </section>
  );
}
