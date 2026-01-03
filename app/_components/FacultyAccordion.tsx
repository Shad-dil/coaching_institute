import { Faculty } from "../_data/Course";

type Props = {
  faculty: Faculty;
  isOpen: boolean;
  onToggle: () => void;
};

export function FacultyAccordion({ faculty, isOpen, onToggle }: Props) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-5 py-4 bg-gray-100 font-semibold text-left"
      >
        {faculty.title}
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="divide-y bg-white">
          {faculty.courses.map((course) => (
            <div
              key={course.id}
              className="px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            >
              <div>
                <p className="font-medium">{course.name}</p>
                <p className="text-sm text-gray-600 mt-1">
                  Eligibility: {course.eligibility}
                </p>
              </div>

              <a
                href={`https://wa.me/9321506675?text=Hi%20Sir,%20I%20want%20to%20book%20a%20free%20appointment%20for%20${course.name}.`} // replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded text-sm w-fit"
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
