
import JobCard from './JobCard';

interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  vacancy: number;
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
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "18+ years",
      vacancy: 1,
      description: "We need a Senior Project Manager. You will join our Civil Engineering team. You must have extensive experience. Focus on large projects using Mivan technology. You will lead projects strategically. Ensure timely delivery. Manage budget and quality.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "18+ years of progressive experience in managing and delivering complex infrastructure projects",
        "Mandatory in-depth knowledge and hands-on experience with all aspects of Mivan construction",
        "Proven proficiency in AutoCAD, MS Project, Primavera P6, or other industry-standard project management tools.",
        "Demonstrated ability to manage project budgets, schedules, and resources effectively to ensure timely and cost-efficient project completion.",
        "PMP (Project Management Professional) or equivalent certification is highly preferred."
      ],
      postedDate: "2025-06-20"
    },
    {
      id: 2,
      title: "Planning Engineer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time", 
      experience: "5 years",
      vacancy: 1,
      description: "We need a skilled Planning Engineer. You must have at least 5 years of experience. Mandatory expertise in Mivan construction is required. You will develop project schedules. You will also monitor and update them. Ensure efficient resource use. Help achieve timely project completion.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "Minimum 5 years in project planning is a must.",
        "Mandatory, deep knowledge of Mivan technology is required. This includes planning specifics.",
        "Ability to create detailed schedules is vital. Perform critical path analysis. Prepare earned value reports.",
        "Experience tracking project progress is necessary. Identify delays. Suggest solutions",
        "Ability to create progress reports is needed. Also, look-ahead schedules and recovery plans."
      ],
      postedDate: "2025-06-20"
    },
    {
      id: 3,
      title: "Quality Engineer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "4+ years",
      vacancy: 2, 
      description: "We are looking for a skilled Quality Engineer. You will ensure high standards on our projects. Mandatory experience in Mivan construction is required. You will implement quality control and assurance. This role helps us deliver excellent building projects.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "Minimum 4+ years of experience in construction quality control/assurance",
        "Mandatory, hands-on experience with Mivan construction quality processes",
        "Deep understanding of Mivan formwork quality checks is essential",
        "Ability to develop and implement Quality Management Plans (QMPs)",
        "Good problem-solving skills are important. Identify and resolve quality issues"
      ],
      postedDate: "2025-06-20"
    },
        {
      id: 4,
      title: "RMC Quality Engineer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "7 years",
      vacancy: 1, 
      description: "We are hiring an experienced RMC Quality Engineer. You will manage quality for Ready-Mix Concrete operations. Ensure all RMC products meet high standards. Oversee lab testing and quality checks. This role ensures top-quality concrete delivery for projects.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "Minimum 7 years of experience in Ready-Mix Concrete (RMC) quality control",
        "Deep knowledge of concrete mix design and optimization is essential",
        "Proficiency in all RMC material testing. This includes aggregates, cement, and admixtures",
        "Expertise in fresh and hardened concrete testing. Slump, cube compressive strength, etc",
        "Excellent communication skills for interacting with plant staff and clients"
      ],
      postedDate: "2025-06-23"
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
