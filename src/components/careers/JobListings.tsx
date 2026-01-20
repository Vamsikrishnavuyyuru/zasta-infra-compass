import JobCard from "./JobCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useMemo } from "react";

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
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "title" | "department">("newest");
  const [filterDepartment, setFilterDepartment] = useState<string>("all");
  const [filterLocation, setFilterLocation] = useState<string>("all");

  const currentOpenings: JobOpening[] = [
    {
      id: 1,
      title: "MEP Engineer",
      department: "Mechanical Engineering",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "5+ years",
      vacancy: 1,
      description:
        "We are looking for a dedicated MEP Engineer to oversee the on-site installation and coordination of Mechanical, Electrical, and Plumbing services. The ideal candidate will ensure that all MEP works are executed according to approved drawings and quality standards.",
      requirements: [
        "Bachelor’s degree in Mechanical or Electrical Engineering.",
        "Minimum 5 years of experience in site-level MEP execution for residential projects.",
        "Strong understanding of HVAC, plumbing, and fire fighting system installations.",
        "Ability to coordinate with sub-contractors and site supervisors effectively.",
        "Proficiency in AutoCAD for reviewing and modifying shop drawings.",
      ],
      postedDate: "2026-01-02",
    },
    {
      id: 2,
      title: "Design Coordinator",
      department: "Civil Engineering",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "8+ years",
      vacancy: 1,
      description:
        "The Design Coordinator will act as the bridge between the design consultants and the construction team. This role focuses on streamlining information flow, resolving design conflicts, and ensuring that project timelines are met through efficient technical coordination.",
      requirements: [
        "Bachelor's degree in Architecture or Civil Engineering.",
        "8+ years of experience in design management or coordination within the construction industry.",
        "Expertise in managing architectural, structural, and MEP drawing sets.",
        "High proficiency in Revit, BIM, and AutoCAD.",
        "Strong organizational skills and the ability to manage multiple stakeholders.",
      ],
      postedDate: "2026-01-02",
    },
    {
      id: 3,
      title: "Quality Manager",
      department: "Quality Assurance & Control",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "10+ years",
      vacancy: 1,
      description:
        "We are seeking a Quality Manager to lead our QA/QC department. You will be responsible for developing, implementing, and maintaining quality management systems across our residential projects to ensure excellence in every phase of construction.",
      requirements: [
        "Bachelor's degree in Civil Engineering; QA/QC certifications (ISO) are a plus.",
        "Minimum 10 years of experience in Quality Management for large-scale residential developments.",
        "Expert knowledge of material testing, site inspections, and construction safety standards.",
        "Proven track record in implementing quality audit processes.",
        "Strong leadership skills and attention to detail.",
      ],
      postedDate: "2026-01-02",
    },
    {
      id: 4,
      title: "Quality Manager",
      department: "Quality Assurance & Control",
      location: "Tarnaka, Hyderabad, India",
      type: "Full-time",
      experience: "10+ years",
      vacancy: 1,
      description: "We are seeking a seasoned Quality Manager to oversee the QA/QC functions for our high-end residential projects. This role involves establishing quality benchmarks, conducting rigorous site inspections, and ensuring all construction activities meet international and Indian standards.",
      requirements: [
        "Bachelor's degree in Civil Engineering or related field.",
        "10+ years of experience in Quality Management within the construction industry.",
        "Lead Auditor certification in ISO 9001 is highly preferred.",
        "Proven expertise in material testing, concrete technology, and finish quality.",
        "Strong leadership skills with the ability to manage a team of site inspectors."
      ],
      postedDate: "2026-01-02",
    },
    {
      id: 5,
      title: "QS Engineer",
      department: "Quantity Surveying & Billing",
      location: "Tarnaka, Hyderabad, India",
      type: "Full-time",
      experience: "8 years",
      vacancy: 1,
      description: "The QS Engineer will be responsible for cost estimation, quantity take-offs, and preparation of Bills of Quantities (BOQ). You will manage contractor billing and ensure the project stays within the approved commercial budget.",
      requirements: [
        "Bachelor's degree in Civil Engineering.",
        "Minimum 8 years of experience in Quantity Surveying and Billing.",
        "Proficiency in MS Excel and specialized cost-estimation software.",
        "Strong knowledge of rate analysis and market prices for construction materials.",
        "Excellent negotiation skills for managing sub-contractor claims."
      ],
      postedDate: "2026-01-02",
    },
    {
      id: 6,
      title: "Planning Engineer",
      department: "Civil Engineering",
      location: "Tarnaka, Hyderabad, India",
      type: "Full-time",
      experience: "7-8 years",
      vacancy: 1,
      description: "We are looking for a Planning Engineer to develop and maintain project schedules. You will be responsible for progress monitoring, delay analysis, and resource forecasting to ensure timely project delivery.",
      requirements: [
        "Bachelor's degree in Civil Engineering.",
        "7 to 8 years of core experience in project planning and scheduling.",
        "Expert-level proficiency in Primavera P6 and Microsoft Project.",
        "Experience in generating S-curves, histograms, and daily/weekly progress reports.",
        "Strong analytical skills to identify and mitigate potential project delays."
      ],
      postedDate: "2026-01-02",
    },
    {
      id: 7,
      title: "Construction Manager",
      department: "Civil Engineering",
      location: "Tarnaka, Hyderabad, India",
      type: "Full-time",
      experience: "10+ years",
      vacancy: 1,
      description: "The Construction Manager will lead the overall site execution, ensuring that projects are completed on time, within budget, and to the highest quality. You will manage large site teams and coordinate with consultants and stakeholders.",
      requirements: [
        "Bachelor's or Master's degree in Civil Engineering/Construction Management.",
        "10+ years of proven experience in managing large-scale residential or commercial projects.",
        "Exceptional leadership and onsite problem-solving capabilities.",
        "Deep understanding of safety regulations, labor management, and project lifecycles.",
        "Ability to drive project milestones under tight deadlines."
      ],
      postedDate: "2026-01-02",
    },
    {
  "id": 8,
  "title": "Safety Engineer",
  "department": "HSE (Health, Safety, and Environment)",
  "location": "Chevella, Hyderabad, India",
  "type": "Full-time",
  "experience": "5+ years",
  "vacancy": 1,
  "description": "We are looking for a Safety Engineer to develop and implement health and safety strategies on-site. You will be responsible for identifying potential hazards, conducting safety audits, and ensuring that all construction activities comply with legal and organizational safety standards to maintain a zero-incident environment.",
  "requirements": [
    "Bachelor’s degree in Engineering with a specialized Diploma in Industrial Safety or Fire & Safety.",
    "Minimum 5 years of experience as a Safety Engineer in the construction industry.",
    "Thorough knowledge of Indian Safety Standards, OSHA guidelines, and environmental regulations.",
    "Proven experience in conducting safety induction training and emergency mock drills.",
    "Strong ability to perform Hazard Identification and Risk Assessment (HIRA).",
    "Excellent communication skills for coordinating with workers and project management teams."
  ],
      postedDate: "2026-01-06"
    },
    {
      id: 9,
      title: "Design Coordinator",
      department: "Civil Engineering",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "8 years",
      vacancy: 1,
      description: "The Design Coordinator will be responsible for synchronizing architectural, structural, and MEP drawings. You will ensure that design outputs are consistent, clash-free, and delivered according to the project timeline.",
      requirements: [
        "Bachelor's degree in Architecture or Civil Engineering.",
        "8 years of experience in design coordination for large-scale residential projects.",
        "Proficiency in AutoCAD, Revit, and BIM coordination.",
        "Strong ability to identify design discrepancies and provide technical solutions.",
        "Excellent communication skills to liaison between consultants and site teams."
      ],
      postedDate: "2026-01-13"
    },
    {
      id: 10,
      title: "QS Engineer",
      department: "Quantity Surveying & Billing",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "5 years",
      vacancy: 1,
      description: "We are seeking a QS Engineer to handle quantity take-offs, prepare Bills of Quantities (BOQ), and process contractor bills. You will play a key role in monitoring project costs and material consumption.",
      requirements: [
        "Bachelor's degree in Civil Engineering.",
        "5 years of core experience in Quantity Surveying and material reconciliation.",
        "Expertise in MS Excel and billing software.",
        "Strong understanding of IS codes for measurement and rate analysis.",
        "Detail-oriented with a focus on cost optimization."
      ],
      postedDate: "2026-01-13"
    },
    {
      id: 11,
      title: "Planning Manager",
      department: "Civil Engineering",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "8 years",
      vacancy: 1,
      description: "The Planning Manager will lead the scheduling and progress monitoring functions. You will develop master project schedules, identify critical path risks, and provide strategic reports to senior management.",
      requirements: [
        "Bachelor's degree in Civil Engineering; PMP certification is an advantage.",
        "8 years of experience in project planning, preferably in the residential sector.",
        "Mastery of Primavera P6 and Microsoft Project.",
        "Proven track record in delay analysis and resource leveling.",
        "Analytical mindset with the ability to forecast project trends."
      ],
      postedDate: "2026-01-13"
    },
    {
      id: 12,
      title: "Project Manager",
      department: "Civil Engineering",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "18+ years",
      vacancy: 1,
      description: "We are looking for a veteran Project Manager to lead high-value residential developments from inception to completion. You will be responsible for overall project P&L, stakeholder management, and ensuring world-class construction quality.",
      requirements: [
        "Bachelor's or Master's degree in Civil Engineering.",
        "18+ years of experience with a strong portfolio of successfully delivered high-rise or luxury villa projects.",
        "Exceptional leadership skills and experience managing multi-disciplinary teams.",
        "Strong commercial acumen and contract management expertise.",
        "Ability to represent the company in high-level stakeholder and client meetings."
      ],
      postedDate: "2026-01-13"
    },
    {
      id: 13,
      title: "Safety Engineer",
      department: "HSE (Health, Safety, and Environment)",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "5+ years",
      vacancy: 1,
      description: "The Safety Engineer will implement and enforce rigorous HSE protocols on-site. You will be responsible for maintaining a hazard-free work environment through regular audits, training, and risk assessments.",
      requirements: [
        "Degree in Engineering with a recognized Safety Diploma (ADIS/NEBOSH).",
        "5+ years of experience as a Safety professional in construction.",
        "Expertise in safety documentation, incident reporting, and compliance audits.",
        "Proactive approach to site safety and emergency response management.",
        "Good command of local safety regulations and international standards."
      ],
      postedDate: "2026-01-13"
    },
    {
      id: 14,
      title: "PE Civil",
      department: "Civil Engineering",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "5+ years",
      vacancy: 1,
      description: "We are seeking a PE Civil (Project Engineer) to oversee on-site execution and ensure technical specifications are met. You will bridge the gap between design and physical construction, ensuring structural integrity and efficiency.",
      requirements: [
        "Bachelor's degree in Civil Engineering.",
        "5+ years of experience in site execution and technical engineering roles.",
        "Strong knowledge of structural drawings, concrete technology, and finishing works.",
        "Ability to resolve technical issues on-site and supervise sub-contractors.",
        "Commitment to quality and project timelines."
      ],
      postedDate: "2026-01-13"
    }
  ];

  // Get unique departments and locations for filter options
  const departments = useMemo(() => {
    const unique = [...new Set(currentOpenings.map((job) => job.department))];
    return unique.sort();
  }, []);

  const locations = useMemo(() => {
    const unique = [...new Set(currentOpenings.map((job) => job.location))];
    return unique.sort();
  }, []);

  // Filter and sort jobs
  const filteredAndSortedJobs = useMemo(() => {
    let filtered = currentOpenings;

    // Apply filters
    if (filterDepartment !== "all") {
      filtered = filtered.filter((job) => job.department === filterDepartment);
    }

    if (filterLocation !== "all") {
      filtered = filtered.filter((job) => job.location === filterLocation);
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
        case "oldest":
          return new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime();
        case "title":
          return a.title.localeCompare(b.title);
        case "department":
          return a.department.localeCompare(b.department);
        default:
          return 0;
      }
    });

    return sorted;
  }, [currentOpenings, sortBy, filterDepartment, filterLocation]);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
        <p className="text-gray-600">Explore exciting career opportunities with us. Updated weekly.</p>
      </div>

      {/* Filters and Sort Controls */}
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter & Sort Jobs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort by</label>
            <Select
              value={sortBy}
              onValueChange={(value: "newest" | "oldest" | "title" | "department") => setSortBy(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="title">Job Title (A-Z)</SelectItem>
                <SelectItem value="department">Department (A-Z)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
            <Select value={filterDepartment} onValueChange={setFilterDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <Select value={filterLocation} onValueChange={setFilterLocation}>
              <SelectTrigger>
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredAndSortedJobs.length} of {currentOpenings.length} jobs
        </div>
      </div>

      {filteredAndSortedJobs.map((job) => (
        <JobCard key={job.id} job={job} onApply={onApply} />
      ))}
    </div>
  );
};

export default JobListings;
