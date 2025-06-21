
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

interface JobListingsProps {
  onApply?: () => void;
}

const JobListings = ({ onApply }: JobListingsProps) => {
  const currentOpenings: JobOpening[] = [
    {
      id: 1,
      title: "Project Manager",
      department: "Civil Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "18+ years",
      description: "We are looking for an experienced Civil Engineer to join our infrastructure division as a Project Manager in Hyderabad. The ideal candidate will have extensive experience leading large-scale infrastructure projects, demonstrating strong leadership, technical expertise, and a proven track record of successful project delivery.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "18+ years of progressive experience in managing and delivering complex infrastructure projects",
        "Mandatory in-depth knowledge and hands-on experience with all aspects of Mivan construction",
        "Proven proficiency in AutoCAD, MS Project, Primavera P6, or other industry-standard project management tools.",
        "Demonstrated ability to manage project budgets, schedules, and resources effectively to ensure timely and cost-efficient project completion.",
        "PMP (Project Management Professional) or equivalent certification is highly preferred."
      ],
      postedDate: "2025-06-21"
    },
    {
      id: 2,
      title: "Planning Engineer",
      department: "Civil Engineering",
      location: "Hyderabad, India",
      type: "Full-time", 
      experience: "5 years",
      description: "We need a skilled Planning Engineer. You must have at least 5 years of experience. Mandatory expertise in Mivan construction is required. You will develop project schedules. You will also monitor and update them. Ensure efficient resource use. Help achieve timely project completion.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "Minimum 5 years in project planning is a must.",
        "Mandatory, deep knowledge of Mivan technology is required. This includes planning specifics.",
        "Ability to create detailed schedules is vital. Perform critical path analysis. Prepare earned value reports.",
        "Experience tracking project progress is necessary. Identify delays. Suggest solutions",
        "Ability to create progress reports is needed. Also, look-ahead schedules and recovery plans."
      ],
      postedDate: "2025-06-21"
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
        <JobCard key={job.id} job={job} onApply={onApply} />
      ))}
    </div>
  );
};

export default JobListings;
