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
      id: 24,
      title: "Construction Manager",
      department: "Construction Management",
      location: "Tarnaka, Hyderabad, India",
      type: "Full-time",
      experience: "10 years",
      vacancy: 1,
      description:
        "We are seeking an experienced Construction Manager with mandatory expertise in high-rise building projects using Miven technology. The candidate will be responsible for overseeing all on-site construction activities, managing teams, and ensuring project completion on time, within budget, and to the required quality and safety standards.",
      requirements: [
        "Bachelor's degree in Civil Engineering or a related field is mandatory.",
        "Minimum 10 years of experience in construction management.",
        "Mandatory proven experience in high-rise building projects using Miven technology.",
        "Strong leadership, planning, and communication skills.",
        "Expert knowledge of construction methods, safety regulations, and quality control procedures.",
        "Experience in coordinating with various stakeholders, including architects, engineers, and subcontractors.",
        "Familiarity with relevant Indian building codes and standards.",
        "Excellent problem-solving and decision-making abilities.",
      ],
      postedDate: "2025-09-01",
    },
    {
      id: 25,
      title: "Senior Civil Engineer",
      department: "Civil Engineering",
      location: "Hyderabad, Telangana, India",
      type: "Full-time",
      experience: "10-15 years",
      vacancy: 1,
      description:
        "We are seeking a highly experienced Senior Civil Engineer to manage and lead construction activities for our premium villas projects. The candidate will be responsible for overseeing the entire construction lifecycle, ensuring quality, timely delivery, and adherence to project specifications and safety standards.",
      requirements: [
        "Bachelor's degree in Civil Engineering is mandatory.",
        "Minimum 10 to 15 years of experience in civil engineering and construction.",
        "Mandatory proven experience in managing and executing villas or independent residential projects.",
        "Strong knowledge of construction methods, materials, structural elements, and quality control procedures.",
        "Experience in site management, team leadership, and coordination with subcontractors and consultants.",
        "Familiarity with relevant Indian building codes and safety regulations.",
        "Excellent communication, project planning, and problem-solving skills.",
      ],
      postedDate: "2025-09-26",
    },
    {
      id: 26,
      title: "Junior Finishing Engineer",
      department: "Civil Engineering",
      location: "Hyderabad, Telangana, India",
      type: "Full-time",
      experience: "5-7 years",
      vacancy: 1,
      description:
        "We are seeking a dedicated Junior Finishing Engineer with experience in villa projects. The candidate will assist the senior team in supervising all finishing works, ensuring quality standards, coordinating site activities, and maintaining project schedules.",
      requirements: [
        "Bachelor's degree in Civil Engineering or a related field is mandatory.",
        "Minimum 5 to 7 years of experience as a Finishing Engineer, preferably in a junior or similar capacity.",
        "Mandatory proven experience in villas or residential construction projects.",
        "Strong knowledge of finishing materials, quality control checks, and construction processes (tiling, painting, joinery, etc.).",
        "Experience in site supervision and coordination with subcontractors.",
        "Familiarity with relevant Indian building codes and quality standards.",
        "Good communication and organizational skills.",
      ],
      postedDate: "2025-09-26",
    },
    {
      id: 27,
      title: "Project Manager",
      department: "Project Management",
      location: "Jodhpur, Rajasthan, India",
      type: "Full-time",
      experience: "15 years",
      vacancy: 1,
      description:
        "We are seeking a seasoned Project Manager to oversee large-scale construction projects in Jodhpur, Rajasthan. The ideal candidate will be responsible for the overall planning, execution, monitoring, and closing of projects, ensuring they are completed on time, within budget, and meet all quality and safety specifications.",
      requirements: [
        "Bachelor's degree in Civil Engineering or a related field is mandatory.",
        "Minimum 15 years of experience in project management within the construction industry.",
        "Mandatory proven experience in managing and delivering large residential or commercial projects.",
        "Strong leadership, team management, and stakeholder communication skills.",
        "Proficiency in project management software (e.g., Primavera P6, MS Project).",
        "Expert knowledge of project planning, budgeting, risk management, and resource allocation.",
        "Familiarity with relevant Indian building codes, safety standards, and local regulations in Rajasthan.",
        "Excellent problem-solving and decision-making abilities.",
      ],
      postedDate: "2025-10-04",
    },
    {
      id: 28,
      title: "Planning & QS Engineer",
      department: "Planning and Quantity Surveying",
      location: "Jodhpur, Rajasthan, India",
      type: "Full-time",
      experience: "6+ years",
      vacancy: 1,
      description:
        "We are seeking a versatile Planning and Quantity Surveying (QS) Engineer to join our team in Jodhpur. The candidate will be responsible for both developing and monitoring project schedules and managing all aspects of quantity surveying, cost estimation, and contract administration for construction projects.",
      requirements: [
        "Bachelor's degree in Civil Engineering is mandatory.",
        "Minimum 6 years of experience in both project planning/scheduling and quantity surveying.",
        "Proficiency in project management software (e.g., Primavera P6, MS Project) is essential.",
        "Strong knowledge of taking off quantities, preparing Bills of Quantities (BOQ), and estimating costs for civil works.",
        "Experience in contract administration, rate analysis, and vendor/subcontractor billing.",
        "Familiarity with relevant Indian building codes and measurement standards.",
        "Excellent analytical, negotiation, and communication skills.",
      ],
      postedDate: "2025-10-04",
    },
    {
      id: 29,
      title: "Project Engineer - Civil & PEB",
      department: "Civil Engineering",
      location: "Jodhpur, Rajasthan, India",
      type: "Full-time",
      experience: "6+ years",
      vacancy: 1,
      description:
        "We are seeking a qualified Project Engineer with mandatory experience in both Civil construction and Pre-Engineered Building (PEB) structures. The candidate will be responsible for the execution, supervision, and quality control of on-site civil and PEB works, ensuring timely and quality project delivery.",
      requirements: [
        "Bachelor's degree in Civil Engineering is mandatory.",
        "Minimum 6 years of experience as a Project Engineer.",
        "Mandatory proven experience in managing and executing Civil construction projects.",
        "Mandatory proven experience in handling Pre-Engineered Building (PEB) structures.",
        "Strong knowledge of foundation works, concrete technology, and structural steel erection processes.",
        "Experience in site supervision, coordination with subcontractors, and adherence to safety protocols.",
        "Familiarity with relevant Indian building codes and standards.",
        "Excellent communication and problem-solving skills.",
      ],
      postedDate: "2025-10-04",
    },
    {
      id: 30,
      title: "Project Engineer - MEP",
      department: "MEP Engineering",
      location: "Jodhpur, Rajasthan, India",
      type: "Full-time",
      experience: "6+ years",
      vacancy: 1,
      description:
        "We are seeking an experienced Project Engineer to manage the execution and supervision of Mechanical, Electrical, and Plumbing (MEP) systems for our projects in Jodhpur. The candidate will ensure all MEP installations comply with design specifications, quality standards, and project schedules.",
      requirements: [
        "Bachelor's degree in Electrical or Mechanical Engineering is mandatory.",
        "Minimum 6 years of experience as a Project Engineer in MEP execution.",
        "Mandatory proven experience in managing and supervising site installation of HVAC, electrical, plumbing, and fire fighting systems.",
        "Strong technical knowledge of MEP system design, installation, and testing & commissioning procedures.",
        "Experience in site coordination with civil teams and subcontractors.",
        "Proficiency in reading and interpreting MEP drawings and specifications.",
        "Familiarity with relevant Indian MEP codes and safety standards.",
        "Good communication and problem-solving skills.",
      ],
      postedDate: "2025-10-04",
    },
    {
      id: 31,
      title: "Project Engineer - Safety",
      department: "Health, Safety, and Environment (HSE)",
      location: "Jodhpur, Rajasthan, India",
      type: "Full-time",
      experience: "6+ years",
      vacancy: 1,
      description:
        "We are seeking a dedicated Project Engineer focused on Safety (HSE) to manage and implement all safety protocols and regulations at our construction sites in Jodhpur. The candidate will be responsible for ensuring a safe working environment, conducting regular audits, and leading safety training programs.",
      requirements: [
        "Bachelor's degree in Civil/Mechanical Engineering with a Post Graduate Diploma in Industrial Safety or relevant certification (e.g., NEBOSH) is mandatory.",
        "Minimum 6 years of experience in site safety management for construction projects.",
        "Mandatory proven experience in developing, implementing, and enforcing site-specific safety plans.",
        "Strong knowledge of construction safety hazards, risk assessment techniques, and mitigation strategies.",
        "Experience in conducting safety training, toolbox talks, and incident investigation.",
        "Familiarity with relevant Indian safety codes, standards, and labor laws.",
        "Excellent communication and leadership skills to promote a strong safety culture.",
      ],
      postedDate: "2025-10-04",
    },
    {
      id: 32,
      title: "Planning Engineer",
      department: "Planning and Scheduling",
      location: "Tarnaka, Hyderabad, India",
      type: "Full-time",
      experience: "8 years",
      vacancy: 1,
      description:
        "We are looking for a highly skilled Planning Engineer responsible for developing, updating, and monitoring detailed project schedules. The candidate will ensure all construction activities are planned, coordinated, and executed to achieve timely project completion.",
      requirements: [
        "Bachelor's degree in Civil Engineering or a related field is mandatory.",
        "Minimum 8 years of experience as a Planning Engineer in the construction industry.",
        "Mandatory proven experience in developing and managing project schedules for large-scale construction projects.",
        "Proficiency in project management software such as Primavera P6 or Microsoft Project is essential.",
        "Strong analytical skills to analyze project progress, identify critical paths, and recommend corrective actions.",
        "Experience in resource leveling, earned value analysis, and progress reporting.",
        "Excellent communication and coordination skills to work with project teams and stakeholders.",
        "Familiarity with relevant Indian building codes and construction processes.",
      ],
      postedDate: "2025-10-10",
    },
    {
      id: 33,
      title: "Construction Manager",
      department: "Construction Management",
      location: "Tarnaka, Hyderabad, India",
      type: "Full-time",
      experience: "12 years",
      vacancy: 1,
      description:
        "We are seeking an experienced Construction Manager to oversee all on-site construction activities in Tarnaka, Hyderabad. The candidate will be responsible for managing day-to-day operations, ensuring project execution aligns with plans, and achieving project completion on time, within budget, and to the highest quality and safety standards.",
      requirements: [
        "Bachelor's degree in Civil Engineering or a related field is mandatory.",
        "Minimum 12 years of experience in construction management.",
        "Mandatory proven experience in managing and delivering large-scale residential or commercial building projects.",
        "Strong leadership, planning, and communication skills.",
        "Expert knowledge of construction methods, safety regulations, and quality control procedures.",
        "Experience in coordinating with various stakeholders, including architects, engineers, and subcontractors.",
        "Familiarity with relevant Indian building codes and standards.",
        "Excellent problem-solving and decision-making abilities.",
      ],
      postedDate: "2025-10-10",
    },
    {
      id: 34,
      title: "Quality Engineer",
      department: "Quality Assurance",
      location: "Tarnaka, Hyderabad, India",
      type: "Full-time",
      experience: "5 years",
      vacancy: 1,
      description:
        "We are seeking a diligent Quality Engineer to implement and oversee quality control procedures for our construction projects. The candidate will be responsible for conducting inspections, testing materials, and ensuring all work adheres to project specifications and industry standards.",
      requirements: [
        "Bachelor's degree in Civil Engineering or a related field is mandatory.",
        "Minimum 5 years of experience as a Quality Engineer in the construction industry.",
        "Mandatory proven experience in implementing quality assurance/quality control (QA/QC) protocols on construction sites.",
        "Strong knowledge of construction materials testing, quality management systems, and inspection procedures.",
        "Experience in preparing quality documentation, inspection reports (IRs), and non-conformance reports (NCRs).",
        "Familiarity with relevant Indian building codes and quality standards.",
        "Excellent communication, documentation, and problem-solving skills.",
      ],
      postedDate: "2025-10-10",
    },
    {
      id: 35,
      title: "MEP Manager",
      department: "MEP Engineering",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "10-12 years",
      vacancy: 1,
      description:
        "We are seeking an experienced MEP Manager to lead the Mechanical, Electrical, and Plumbing team for our residential projects (villas or apartments). The candidate will be responsible for the overall design review, planning, execution, budget control, and quality assurance of all MEP systems.",
      requirements: [
        "Bachelor's degree in Electrical or Mechanical Engineering is mandatory.",
        "Minimum 10 to 12 years of experience in MEP management in the construction sector.",
        "Mandatory proven experience in managing and executing villas or large residential projects.",
        "Expert knowledge of HVAC, electrical, plumbing, and fire fighting systems and latest industry trends.",
        "Experience in team leadership, vendor management, project planning, and cost control.",
        "Proficiency in design software and project management tools is a plus.",
        "Familiarity with relevant Indian MEP codes and safety standards.",
        "Excellent communication and decision-making skills.",
      ],
      postedDate: "2025-10-18",
    },
    {
      id: 36,
      title: "QS and Contracts Manager",
      department: "Quantity Surveying and Contracts",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "10-12 years",
      vacancy: 1,
      description:
        "We are seeking a highly experienced QS and Contracts Manager to oversee all commercial aspects of our residential projects (villas or apartments). The candidate will be responsible for quantity surveying, cost control, contract administration, procurement management, and vendor/subcontractor billing.",
      requirements: [
        "Bachelor's degree in Civil Engineering or Quantity Surveying is mandatory.",
        "Minimum 10 to 12 years of experience in Quantity Surveying and Contracts Management.",
        "Mandatory proven experience in managing and executing villas or large residential projects.",
        "Expert knowledge of tender documentation, contract drafting, B.O.Q. preparation, and cost estimation.",
        "Strong understanding of contract laws and administration (e.g., FIDIC, Indian standard contracts).",
        "Experience in vendor negotiation, procurement, and managing subcontractor billing and claims.",
        "Proficiency in relevant QS software and MS Excel.",
        "Excellent communication, negotiation, and analytical skills.",
      ],
      postedDate: "2025-10-18",
    },
    {
      id: 37,
      title: "Document Controller",
      department: "Bachelor's degree in Engineering",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "5+ years",
      vacancy: 1,
      description:
        "We are seeking an experienced Document Controller responsible for managing all project documentation, including drawings, technical specifications, correspondence, and reports. The role ensures proper document control processes are implemented, maintained, and accessible to the project team.",
      requirements: [
        "Bachelor's degree or equivalent certification in Document Control, Administration, or a related field is preferred.",
        "Minimum 5 years of experience as a Document Controller in the construction or engineering industry.",
        "Mandatory proven experience in setting up and maintaining document control systems (electronic and hard copy).",
        "Proficiency in software like MS Office, and document management systems (DMS/EDMS) is essential.",
        "Strong organizational skills, attention to detail, and ability to manage large volumes of data.",
        "Experience in handling confidential documents, tracking revisions, and issuing controlled copies to the site team.",
        "Good communication and coordination skills to interact with various departments.",
        "Familiarity with standard construction documentation procedures is a plus.",
      ],
      postedDate: "2025-10-18",
    },
    {
      id: 38,
      title: "Planning Engineer",
      department: "Civil Engineering",
      location: "Tarnaka, Hyderabad, India",
      type: "Full-time",
      experience: "10+ years",
      vacancy: 1,
      description:
        "We are looking for a highly experienced Planning Engineer with mandatory expertise in high-rise building projects using Miven technology. The role involves developing, updating, and monitoring detailed project schedules, ensuring timely and efficient execution across all phases.",
      requirements: [
        "Bachelor's degree in Civil Engineering or a related field is mandatory.",
        "Minimum 10 years of experience as a Planning Engineer.",
        "Mandatory proven experience in planning and scheduling for high-rise building projects with Miven technology.",
        "Proficiency in project management software such as Primavera P6 or Microsoft Project is essential.",
        "Strong analytical skills to analyze progress, identify critical paths, and manage resource allocation.",
        "Experience in risk analysis and mitigation planning.",
        "Excellent communication and coordination skills.",
        "Familiarity with relevant Indian building codes and standards.",
      ],
      postedDate: "2025-10-30",
    },
    {
      id: 39,
      title: "Planning Engineer",
      department: "Civil Engineering",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "10+ years",
      vacancy: 1,
      description:
        "We are seeking a senior Planning Engineer with mandatory experience in residential construction projects. The candidate will be responsible for creating, monitoring, and controlling project timelines and resources to ensure efficient and timely delivery of residential developments.",
      requirements: [
        "Bachelor's degree in Civil Engineering or a related field is mandatory.",
        "Minimum 10 years of experience as a Planning Engineer.",
        "Mandatory proven experience in planning and scheduling for large residential projects (villas or apartments).",
        "Proficiency in project management software such as Primavera P6 or Microsoft Project is essential.",
        "Expertise in resource leveling, earned value management, and progress reporting.",
        "Strong understanding of residential construction sequences and timelines.",
        "Excellent communication and coordination skills.",
        "Familiarity with relevant Indian building codes and standards.",
      ],
      postedDate: "2025-10-30",
    },
    {
      id: 40,
      title: "MEP Manager",
      department: "Mechanical Engineering",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "10-12 years",
      vacancy: 1,
      description:
        "We are seeking an experienced MEP Manager to lead and manage the entire Mechanical, Electrical, and Plumbing (MEP) scope for our residential projects. The role covers design review, resource planning, execution, budget control, and quality assurance of all MEP systems.",
      requirements: [
        "Bachelor's degree in Electrical or Mechanical Engineering is mandatory.",
        "Minimum 10 to 12 years of experience in MEP management in the construction sector.",
        "Mandatory proven experience in managing and executing **residential projects** (villas or apartments).",
        "Expert knowledge of HVAC, electrical (low and high tension), plumbing, and fire fighting systems.",
        "Experience in team leadership, budget management, contract administration, and vendor negotiation.",
        "Proficiency in design software and project management tools.",
        "Familiarity with relevant Indian MEP codes and safety standards.",
        "Excellent communication and decision-making skills.",
      ],
      postedDate: "2025-10-30",
    },
    {
      id: 41,
      title: "Civil Engineer",
      department: "Civil Engineering",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "5-8 years",
      vacancy: 1,
      description:
        "We are seeking an experienced Civil Engineer to manage and supervise core construction activities for our residential projects. The role involves overseeing structural work, foundational work, concrete placement, and ensuring all stages of construction comply with engineering plans, safety standards, and quality specifications.",
      requirements: [
        "Bachelor's degree in Civil Engineering is mandatory.",
        "Minimum 5 to 8 years of experience as a Site/Civil Engineer.",
        "Mandatory proven experience in **residential construction projects** (villas or apartments).",
        "Strong knowledge of construction methods, materials, structural elements, and quality control procedures.",
        "Experience in site supervision, labor management, resource allocation, and coordination of core civil activities.",
        "Familiarity with relevant Indian building codes and safety regulations.",
        "Proficiency in reading engineering drawings and excellent communication skills.",
      ],
      postedDate: "2025-11-01",
    },
    {
      id: 42,
      title: "Planning Engineer",
      department: "Civil Engineering",
      location: "Tarnaka, Hyderabad, India",
      type: "Full-time",
      experience: "10+ years",
      vacancy: 1,
      description:
        "We are looking for a highly experienced Planning Engineer with mandatory expertise in high-rise building projects using Miven technology. The role involves developing, updating, and monitoring detailed project schedules, ensuring timely and efficient execution across all phases.",
      requirements: [
        "Bachelor's degree in Civil Engineering or a related field is mandatory.",
        "Minimum 10 years of experience as a Planning Engineer.",
        "Mandatory proven experience in planning and scheduling for high-rise building projects with Miven technology.",
        "Proficiency in project management software such as Primavera P6 or Microsoft Project is essential.",
        "Strong analytical skills to analyze progress, identify critical paths, and manage resource allocation.",
        "Experience in risk analysis and mitigation planning.",
        "Excellent communication and coordination skills.",
        "Familiarity with relevant Indian building codes and standards.",
      ],
      postedDate: "2025-11-06",
    },
    {
      id: 43,
      title: "QS and Billing Engineer",
      department: "Quantity Surveying and Contracts",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "6-8 years",
      vacancy: 1,
      description:
        "We are seeking a detail-oriented QS and Billing Engineer responsible for managing all aspects of quantity surveying, cost estimation, and financial billing for our residential projects. The role ensures accurate measurement of work and timely processing of payments to subcontractors.",
      requirements: [
        "Bachelor's degree in Civil Engineering or Quantity Surveying is mandatory.",
        "Minimum 6 to 8 years of experience in Quantity Surveying and Billing.",
        "Mandatory proven experience in **residential construction projects** (villas or apartments).",
        "Strong knowledge of taking off quantities, preparing Bills of Quantities (BOQ), and cost estimation.",
        "Expertise in preparing and checking interim and final bills for subcontractors and vendors.",
        "Experience in rate analysis, budget monitoring, and reconciliation of material consumption.",
        "Familiarity with relevant Indian measurement and contract codes.",
        "Excellent analytical, negotiation, and documentation skills.",
      ],
      postedDate: "2025-11-06",
    },
    {
      id: 44,
      title: "Quality Lead",
      department: "Quality Assurance & Control (QA/QC)",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "10+ years",
      vacancy: 1,
      description:
        "We are seeking a highly experienced Quality Lead to manage and drive the entire quality assurance and quality control program for our residential construction projects. The successful candidate will be responsible for implementing, monitoring, and enforcing the highest quality standards across all stages of construction.",
      requirements: [
        "Bachelor's degree in Civil Engineering or a related field is mandatory.",
        "Minimum 10 years of progressive experience in Quality Assurance/Control, with supervisory experience.",
        "Mandatory proven experience in leading QA/QC efforts for **residential construction projects** (villas or apartments).",
        "Expert knowledge of quality management systems, construction materials testing, and inspection protocols.",
        "Experience in developing Inspection and Test Plans (ITP), conducting site audits, and managing Non-Conformance Reports (NCRs).",
        "Strong understanding of Indian building codes, safety standards, and international quality certifications.",
        "Excellent leadership, communication, and training skills to mentor and guide the site team.",
      ],
      postedDate: "2025-11-06",
    },
    {
      id: 45,
      title: "Document Controller",
      department: "Bachelor's degree in Engineering",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "5+ years",
      vacancy: 1,
      description:
        "We are seeking an experienced Document Controller responsible for managing all project documentation, including drawings, technical specifications, correspondence, and reports. The role ensures proper document control processes are implemented, maintained, and accessible to the project team.",
      requirements: [
        "Bachelor's degree or equivalent certification in Document Control, Administration, or a related field is preferred.",
        "Minimum 5 years of experience as a Document Controller in the construction or engineering industry.",
        "Mandatory proven experience in setting up and maintaining document control systems (electronic and hard copy).",
        "Proficiency in software like MS Office, and document management systems (DMS/EDMS) is essential.",
        "Strong organizational skills, attention to detail, and ability to manage large volumes of data.",
        "Experience in handling confidential documents, tracking revisions, and issuing controlled copies to the site team.",
        "Good communication and coordination skills to interact with various departments.",
        "Familiarity with standard construction documentation procedures is a plus.",
      ],
      postedDate: "2025-11-06",
    },
    {
      id: 46,
      title: "MEP Engineer",
      department: "Mechanical Engineer",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "5-8 years",
      vacancy: 1,
      description:
        "We are seeking a skilled MEP Engineer with mandatory experience in residential projects. The candidate will be responsible for the execution, supervision, and quality control of all Mechanical, Electrical, and Plumbing systems, ensuring they meet project specifications and quality standards for residential developments.",
      requirements: [
        "Bachelor's degree in Electrical or Mechanical Engineering is mandatory.",
        "Minimum 5 to 8 years of experience in MEP engineering.",
        "Mandatory proven experience in **residential construction projects** (villas or apartments).",
        "Strong knowledge of HVAC, electrical (including low tension), plumbing, and fire fighting systems.",
        "Proficiency in AutoCAD is essential. Knowledge of Revit MEP is a plus.",
        "Experience in site supervision, testing & commissioning, and coordination with civil and finishing teams.",
        "Familiarity with relevant Indian MEP codes and standards.",
        "Good communication and problem-solving skills.",
      ],
      postedDate: "2025-11-10",
    },
    {
      id: 47,
      title: "Planning Engineer",
      department: "Civil Engineering",
      location: "Tarnaka, Hyderabad, India",
      type: "Full-time",
      experience: "10+ years",
      vacancy: 1,
      description:
        "We are looking for a highly experienced Planning Engineer with mandatory expertise in high-rise building projects using Miven technology. The role involves developing, updating, and monitoring detailed project schedules, ensuring timely and efficient execution across all phases.",
      requirements: [
        "Bachelor's degree in Civil Engineering or a related field is mandatory.",
        "Minimum 10 years of experience as a Planning Engineer.",
        "Mandatory proven experience in planning and scheduling for high-rise building projects with Miven technology.",
        "Proficiency in project management software such as Primavera P6 or Microsoft Project is essential.",
        "Strong analytical skills to analyze progress, identify critical paths, and manage resource allocation.",
        "Experience in risk analysis and mitigation planning.",
        "Excellent communication and coordination skills.",
        "Familiarity with relevant Indian building codes and standards.",
      ],
      postedDate: "2025-11-12",
    },
    {
      id: 48,
      title: "QS and Billing Engineer",
      department: "Quantity Surveying and Contracts",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "6-8 years",
      vacancy: 1,
      description:
        "We are seeking a detail-oriented QS and Billing Engineer responsible for managing all aspects of quantity surveying, cost estimation, and financial billing for our residential projects. The role ensures accurate measurement of work and timely processing of payments to subcontractors.",
      requirements: [
        "Bachelor's degree in Civil Engineering or Quantity Surveying is mandatory.",
        "Minimum 6 to 8 years of experience in Quantity Surveying and Billing.",
        "Mandatory proven experience in **residential construction projects** (villas or apartments).",
        "Strong knowledge of taking off quantities, preparing Bills of Quantities (BOQ), and cost estimation.",
        "Expertise in preparing and checking interim and final bills for subcontractors and vendors.",
        "Experience in rate analysis, budget monitoring, and reconciliation of material consumption.",
        "Familiarity with relevant Indian measurement and contract codes.",
        "Excellent analytical, negotiation, and documentation skills.",
      ],
      postedDate: "2025-11-12",
    },
    {
      id: 49,
      title: "Billing Engineer",
      department: "Quantity Surveying and Contracts",
      location: "Chevella, Hyderabad, India",
      type: "Full-time",
      experience: "5 years",
      vacancy: 1,
      description:
        "We are seeking a dedicated Billing Engineer responsible for managing all aspects of financial billing, measurement of work, and contract administration for our residential projects. The role ensures timely and accurate processing of payments to subcontractors and suppliers.",
      requirements: [
        "Bachelor's degree in Civil Engineering or Quantity Surveying is mandatory.",
        "Minimum 5 years of experience as a Billing Engineer.",
        "Mandatory proven experience in **residential construction projects** (villas or apartments).",
        "Strong knowledge of taking off quantities, preparing Bills of Quantities (BOQ), and cost estimation.",
        "Expertise in preparing and checking interim and final bills for subcontractors and vendors based on measured work.",
        "Experience in rate analysis, budget monitoring, and reconciliation of material consumption.",
        "Familiarity with relevant Indian measurement and contract codes.",
        "Excellent analytical, negotiation, and documentation skills.",
      ],
      postedDate: "2025-11-12",
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
