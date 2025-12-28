"use client";

import { useState } from "react";
import { courses, Course } from "../_data/Course";
import CourseModal from "../_components/CourseModal";
import Image from "next/image";

export default function CoursesGrid() {
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);

  return (
    <>
      <section className="py-20 px-6" id="courses">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Popular Courses
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border p-6 rounded-lg hover:shadow transition"
            >
              <Image
                src={course.imageUrl}
                alt={course.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />

              <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.duration} Course</p>
              <p className="font-bold">Who This Course is For</p>
              {course.whoCanJoin.map((join) => (
                <p key={join} className="m-1">
                  {join}
                </p>
              ))}

              <div className="flex justify-between space-x-2 mt-2">
                <button className="text-white font-semibold bg-blue-700 p-2 cursor-pointer">
                  Book Demo
                </button>
                <button
                  onClick={() => setActiveCourse(course)}
                  className="text-blue-700 font-semibold cursor-pointer"
                >
                  See Details
                </button>
              </div>
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
