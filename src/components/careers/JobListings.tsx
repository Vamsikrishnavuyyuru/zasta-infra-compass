
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
        "PMP (Project Management Professional) or equivalent certification is highly preferred.",
        "Location - Tarnaka, Hyderabad"
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
        "Ability to create progress reports is needed. Also, look-ahead schedules and recovery plans.",
        "Location - Miyapur, Hyderabad"
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
        "Good problem-solving skills are important. Identify and resolve quality issues",
        "Location - Tellapur and Kokapeta Hyderabad"
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
        "Excellent communication skills for interacting with plant staff and clients",
        "Location - Tellapur, Hyderabad"
      ],
      postedDate: "2025-06-23"
    },
            {
      id: 5,
      title: "Civil Engineer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "5-6 years",
      vacancy: 1, 
      description: "We are seeking an experienced Civil Engineer. You will work on various civil projects. This includes design, supervision, and coordination. You will ensure project quality and timely completion. This role is crucial for our engineering team in Hyderabad.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "Minimum 5-6 years of hands-on experience in civil construction projects",
        "Strong understanding of civil engineering principles and practices",
        "Proficiency in AutoCAD is essential. Knowledge of other design software is a plus",
        "Experience in site supervision and project execution is required",
        "Ability to read and interpret engineering drawings and specifications",
        "Strong analytical and problem-solving skills are needed",
        "Excellent communication and teamwork abilities",
        "Location - Tellapur, Hyderabad"
      ],
      postedDate: "2025-06-25"
    },
                {
      id: 6,
      title: "Finishing Engineer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "5-6 years",
      vacancy: 1, 
      description: "We are seeking a dedicated Finishing Engineer. You will manage all final stage works. This includes interior and exterior finishes. Ensure high-quality workmanship and timely completion. This role is vital for delivering ready-to-use properties.",
      requirements: [
        "Bachelor's degree in Civil Engineering or Architecture is required",
        "Minimum 5-6 years of experience in managing finishing works for building projects",
        "Strong knowledge of various finishing materials. This includes flooring, painting, tiling, and carpentry",
        "Experience in quality inspection of finished surfaces and installations",
        "Ability to coordinate with different finishing contractors and trades",
        "Ability to ensure adherence to project specifications and quality standards.",
        "Strong problem-solving skills for resolving site finishing issues",
        "Excellent communication and supervision skills",
        "Location - Tellapur, Hyderabad"
      ],
      postedDate: "2025-06-25"
    },
                {
      id: 7,
      title: "Quantity Surveyor & Billing Engineer",
      department: "Engineering",
      location: "Delhi, India",
      type: "Full-time",
      experience: "5-6 years",
      vacancy: 3, 
      description: "We are seeking skilled Quantity Surveyors and Billing Engineers. We have 2-3 positions available. Mandatory experience in high-rise building projects is required. You will handle cost estimation, tendering, and billing. Ensure financial control for our projects.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "Minimum 5-6 years of experience in Quantity Surveying and Billing roles",
        "Mandatory proven experience on high-rise building projects",
        "Expertise in preparing Bill of Quantities (BoQ) is essential",
        "Proficiency in MS Excel is a must. Knowledge of ERP systems is a plus",
        "Excellent negotiation and communication skills",
        "Strong analytical and numerical abilities",
        "Location - Gurgaon, Delhi"
      ],
      postedDate: "2025-07-05"
    },
                  {
      id: 8,
      title: "Quantity Surveyor Engineer",
      department: "Engineering",
      location: "Gurgaon, India",
      type: "Full-time",
      experience: "5-8 years",
      vacancy: 1, 
      description: "We are looking for a skilled Quantity Surveyor Engineer. You must have experience in interior works. This role is based in Gurgaon. You will manage cost estimation and billing for interior projects. Ensure financial accuracy and control.",
      requirements: [
        "Bachelor's degree in Civil Engineering or Quantity Surveying is required",
        "Minimum 5-8 years of experience in Quantity Surveying",
        "Proven experience specifically in interior fit-out and finishing works is mandatory",
        "Expertise in preparing Bill of Quantities (BoQ) for interior elements",
        "Familiarity with tender analysis and contract administration for interior fit-outs",
        "Proficiency in MS Excel is essential. Knowledge of relevant software is a plus",
        "Good communication and negotiation skills are needed",
        "Strong analytical and problem-solving abilities",
        "Location - Gurgaon, India"
      ],
      postedDate: "2025-07-07"
    },
                  {
      id: 9,
      title: "Planning & Quantity Surveyor",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "9+ years",
      vacancy: 1, 
      description: "We are seeking a seasoned professional for a combined Planning and Quantity Surveyor role. You must have extensive experience in high-rise Mivan projects. This position requires strong skills in project scheduling and cost management. You will ensure efficient project execution and financial control.",
      requirements: [
        "Bachelor's degree in Civil Engineering is mandatory",
        "Minimum 9+ years of experience in both project planning and quantity surveying",
        "Mandatory and extensive proven experience on high-rise building projects using Mivan technology",
        "Expertise in developing and monitoring project schedules. Use Primavera P6 and MS Project",
        "In-depth knowledge of contract administration, variations, and claims management",
        "Excellent analytical and problem-solving skills for complex project scenarios",
        "Strong communication, negotiation, and leadership abilities",
        "Proficiency in MS Excel and relevant ERP software",
        "Thorough understanding of local building codes and construction standards",
        "Location - Kollur, Hyderabad, India"
      ],
      postedDate: "2025-07-08"
    },
                  {
      id: 10,
      title: "MEP Engineer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "5+ years",
      vacancy: 2, 
      description: "We are hiring two experienced MEP Engineers. You will work on high-rise projects. Mandatory experience with Mivan construction is essential. You will manage Mechanical, Electrical, and Plumbing systems. This includes design, installation, and commissioning. Ensure all MEP systems integrate well with Mivan structures.",
      requirements: [
        "Bachelor's degree in Electrical, Mechanical, or Civil Engineering is required",
        "Minimum 5+ years of experience in MEP design and execution for building projects",
        "Mandatory proven experience in high-rise building projects",
        "Mandatory specific experience in MEP coordination and execution for projects using Mivan construction technology",
        "Strong knowledge of HVAC, electrical, plumbing, and fire fighting systems",
        "Proficiency in AutoCAD is essential. Knowledge of Revit MEP is highly desirable.",
        "Experience in site supervision, installation, testing, and commissioning of MEP systems",
        "Ability to review and interpret complex MEP drawings and specifications",
        "Good understanding of project coordination with other disciplines (Civil, Architecture) in a fast-paced Mivan environment",
        "Strong problem-solving skills for on-site MEP challenges",
        "Excellent communication and teamwork abilities",
        "Location - Hyderabad Kollur and Tarnaka"
      ],
      postedDate: "2025-07-08"
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
