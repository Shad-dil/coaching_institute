"use client";

import { useState } from "react";
import { courses, Course } from "../_data/Course";
import CourseModal from "../_components/CourseModal";

export default function CoursesGrid() {
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);

  return (
    <>
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Popular Courses
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border p-6 rounded-lg hover:shadow transition"
            >
              <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.duration} Course</p>
              <button
                onClick={() => setActiveCourse(course)}
                className="text-blue-700 font-semibold"
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {activeCourse && (
        <CourseModal
          course={activeCourse}
          onClose={() => setActiveCourse(null)}
        />
      )}
    </>
  );
}
