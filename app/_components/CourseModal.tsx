// "use client";

// import { Course } from "../_data/Course";

// type Props = {
//   course: Course;
//   onClose: () => void;
// };

// export default function CourseModal({ course, onClose }: Props) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50">
//       <div
//         className="
//           bg-white w-full md:max-w-3xl
//           h-[90vh] md:h-auto
//           rounded-t-xl md:rounded-xl
//           overflow-hidden
//           animate-slideUp
//         "
//       >
//         {/* Header */}
//         <div className="sticky top-0 bg-white border-b px-5 py-4 flex justify-between items-center">
//           <div>
//             <h2 className="text-xl font-bold">{course.title}</h2>
//             <p className="text-sm text-gray-600">
//               {course.duration} •{" "}
//               {course.certificate ? "Certificate Included" : ""}
//             </p>
//           </div>
//           <button
//             onClick={onClose}
//             className="text-xl text-gray-500 hover:text-black"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Content */}
//         <div className="p-5 overflow-y-auto max-h-[calc(90vh-80px)]">
//           <div className="space-y-6">
//             {course.sections.map((section) => (
//               <div key={section.title}>
//                 <h3 className="font-semibold text-lg text-blue-700 mb-2">
//                   {section.title}
//                 </h3>
//                 <ul className="list-disc list-inside text-gray-700 space-y-1">
//                   {section.topics.map((topic) => (
//                     <li key={topic}>{topic}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <div className="mt-8 flex flex-col sm:flex-row gap-3">
//             <button className="bg-blue-700 text-white px-6 py-3 rounded">
//               Enroll Now
//             </button>
//             <button className="border px-6 py-3 rounded">
//               Download Syllabus
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
