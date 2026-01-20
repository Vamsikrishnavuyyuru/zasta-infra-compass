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
      department: "Architecture & Design",
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
