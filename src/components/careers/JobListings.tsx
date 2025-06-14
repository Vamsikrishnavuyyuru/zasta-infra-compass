
import JobCard from './JobCard';

interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  postedDate: string;
}

const JobListings = () => {
  const currentOpenings: JobOpening[] = [
    {
      id: 1,
      title: "Senior Civil Engineer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "5-8 years",
      description: "We are looking for an experienced Civil Engineer to join our infrastructure projects team. The ideal candidate will have expertise in structural design and project management.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "5+ years of experience in infrastructure projects",
        "Proficiency in AutoCAD and project management tools",
        "Strong analytical and problem-solving skills"
      ],
      postedDate: "2024-05-25"
    },
    {
      id: 2,
      title: "Electrical Engineer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time", 
      experience: "3-5 years",
      description: "Join our electrical engineering team to work on power distribution and control systems for major infrastructure projects.",
      requirements: [
        "Bachelor's degree in Electrical Engineering",
        "3+ years of experience in power systems",
        "Knowledge of electrical design software",
        "Understanding of safety standards and regulations"
      ],
      postedDate: "2024-05-20"
    },
    {
      id: 3,
      title: "Project Manager",
      department: "Management",
      location: "Delhi, India",
      type: "Full-time",
      experience: "7-10 years",
      description: "Lead complex infrastructure projects from planning to execution. Manage cross-functional teams and ensure project delivery within timeline and budget.",
      requirements: [
        "Bachelor's degree in Engineering or Management",
        "7+ years of project management experience",
        "PMP certification preferred",
        "Excellent leadership and communication skills"
      ],
      postedDate: "2024-05-18"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
        <p className="text-gray-600">
          Explore exciting career opportunities with us. Updated weekly.
        </p>
      </div>

      {currentOpenings.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobListings;
