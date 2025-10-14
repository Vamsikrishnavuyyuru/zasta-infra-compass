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
      id: 7,
      title: "Quantity Surveyor & Billing Engineer",
      department: "Engineering",
      location: "Delhi, India",
      type: "Full-time",
      experience: "5-6 years",
      vacancy: 3,
      description:
        "We are seeking skilled Quantity Surveyors and Billing Engineers. We have 2-3 positions available. Mandatory experience in high-rise building projects is required. You will handle cost estimation, tendering, and billing. Ensure financial control for our projects.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "Minimum 5-6 years of experience in Quantity Surveying and Billing roles",
        "Mandatory proven experience on high-rise building projects",
        "Expertise in preparing Bill of Quantities (BoQ) is essential",
        "Proficiency in MS Excel is a must. Knowledge of ERP systems is a plus",
        "Excellent negotiation and communication skills",
        "Strong analytical and numerical abilities",
        "Location - Gurgaon, Delhi",
      ],
      postedDate: "2025-07-05",
    },
    {
      id: 8,
      title: "Quantity Surveyor Engineer",
      department: "Engineering",
      location: "Gurgaon, India",
      type: "Full-time",
      experience: "5-8 years",
      vacancy: 1,
      description:
        "We are looking for a skilled Quantity Surveyor Engineer. You must have experience in interior works. This role is based in Gurgaon. You will manage cost estimation and billing for interior projects. Ensure financial accuracy and control.",
      requirements: [
        "Bachelor's degree in Civil Engineering or Quantity Surveying is required",
        "Minimum 5-8 years of experience in Quantity Surveying",
        "Proven experience specifically in interior fit-out and finishing works is mandatory",
        "Expertise in preparing Bill of Quantities (BoQ) for interior elements",
        "Familiarity with tender analysis and contract administration for interior fit-outs",
        "Proficiency in MS Excel is essential. Knowledge of relevant software is a plus",
        "Good communication and negotiation skills are needed",
        "Strong analytical and problem-solving abilities",
        "Location - Gurgaon, India",
      ],
      postedDate: "2025-07-07",
    },
    {
      id: 9,
      title: "Planning & Quantity Surveyor",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "9+ years",
      vacancy: 1,
      description:
        "We are seeking a seasoned professional for a combined Planning and Quantity Surveyor role. You must have extensive experience in high-rise Mivan projects. This position requires strong skills in project scheduling and cost management. You will ensure efficient project execution and financial control.",
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
        "Location - Kollur, Hyderabad, India",
      ],
      postedDate: "2025-07-08",
    },
    {
      id: 10,
      title: "MEP Engineer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "5+ years",
      vacancy: 2,
      description:
        "We are hiring two experienced MEP Engineers. You will work on high-rise projects. Mandatory experience with Mivan construction is essential. You will manage Mechanical, Electrical, and Plumbing systems. This includes design, installation, and commissioning. Ensure all MEP systems integrate well with Mivan structures.",
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
        "Location - Hyderabad Kollur and Tarnaka",
      ],
      postedDate: "2025-07-08",
    },
    {
      id: 11,
      title: "Junior RMC Quality Engineer",
      department: "Engineering",
      location: "Kokapeta and Tellapur, Hyderabad, India",
      type: "Full-time",
      experience: "3-5 years",
      vacancy: 4,
      description:
        "We are seeking Junior RMC Quality Engineers for our Tellapur plant. You will assist in maintaining high-quality standards for Ready-Mix Concrete. This involves lab testing and on-site quality checks. Support senior engineers in ensuring concrete quality.",
      requirements: [
        "Bachelor's degree or Diploma in Civil Engineering",
        "Minimum 3-5 years of experience in Ready-Mix Concrete (RMC) quality control",
        "Basic knowledge of concrete mix design and testing procedures",
        "Familiarity with RMC plant operations is a plus",
        "Ability to perform basic material and concrete tests (slump, cube casting)",
        "Good observation and attention to detail",
        "Basic computer skills for data entry and reporting",
        "Good communication and teamwork abilities",
        "Location - Hyderabad Kokapeta and Tellapur",
      ],
      postedDate: "2025-07-21",
    },
    {
      id: 12,
      title: "Quality Lead",
      department: "Engineering",
      location: "Shankarpally, Hyderabad, India",
      type: "Full-time",
      experience: "10-12 years",
      vacancy: 1,
      description:
        "We are seeking an experienced Quality Lead for our villa project. You will oversee all quality aspects. Ensure high standards are met throughout construction. Implement and maintain quality management systems.",
      requirements: [
        "Bachelor's degree in Civil Engineering is preferred",
        "Minimum 10-12 years of experience in construction quality control/assurance",
        "Mandatory experience leading quality teams for residential/villa projects",
        "Strong knowledge of construction materials, processes, and quality standards",
        "Ability to develop and implement Quality Management Plans (QMPs)",
        "Experience in conducting site audits and resolving quality issues",
        "Excellent leadership, communication, and reporting skills",
        "Location - Shankarpally, Hyderabad, India",
      ],
      postedDate: "2025-07-22",
    },
    {
      id: 13,
      title: "MEP Engineer",
      department: "Engineering",
      location: "Shankarpally, Hyderabad, India",
      type: "Full-time",
      experience: "4+ years",
      vacancy: 5,
      description:
        "We are hiring MEP Engineers for our villa project. You will manage Mechanical, Electrical, and Plumbing systems. This includes design, installation, and supervision. Ensure all MEP systems are installed correctly and efficiently.",
      requirements: [
        "Bachelor's degree in Electrical or Mechanical Engineering is required",
        "Minimum 4+ years of experience in MEP design and execution for building projects",
        "Mandatory experience with MEP systems in residential/villa projects",
        "Strong knowledge of HVAC, electrical, plumbing, and fire fighting systems",
        "Proficiency in AutoCAD is essential. Revit MEP knowledge is a plus",
        "Experience in site supervision and coordination with other trades",
        "Good problem-solving and communication skills",
        "Location - Shankarpally, Hyderabad, India",
      ],
      postedDate: "2025-07-22",
    },
    {
      id: 14,
      title: "Finishing Engineer",
      department: "Engineering",
      location: "Shankarpally, Hyderabad, India",
      type: "Full-time",
      experience: "4+ years",
      vacancy: 1,
      description:
        "We are hiring MEP Finishing Engineers for our villa project. You will focus on the final stages of MEP installation. Ensure aesthetic integration and functionality of all MEP components. Coordinate closely with finishing teams.",
      requirements: [
        "Bachelor's degree in Electrical or Mechanical Engineering is required",
        "Minimum 4+ years of experience specifically in MEP finishing works for residential/villa projects",
        "Expertise in final testing and commissioning of MEP systems",
        "Strong knowledge of fixtures, fittings, and aesthetic aspects of MEP installations",
        "Ability to ensure quality and compliance with design specifications in finished areas",
        "Good coordination skills with interior designers, civil finishing teams, and clients",
        "Attention to detail and a keen eye for quality in finished products",
        "Excellent communication and problem-solving abilities",
        "Location - Shankarpally, Hyderabad, India",
      ],
      postedDate: "2025-07-22",
    },
    {
      id: 15,
      title: "Civil QA/QC Engineer - Structural",
      department: "Engineering",
      location: "Western Mumbai suburbs, Mumbai, India",
      type: "Full-time",
      experience: "10+ years",
      vacancy: 5,
      description:
        "We are looking for a Civil QA/QC Engineer for our high-rise luxury project in Mumbai. You must have 10+ years of experience in structural quality. Work on a prestigious luxury development. Ensure the highest quality standards throughout construction.",
      requirements: [
        "Bachelor's degree in Civil Engineering.",
        "10+ years of experience in Quality Assurance/Quality Control for structural engineering.",
        "Deep expertise in structural concrete work.",
        "Proven experience in high-rise building projects. Luxury projects are preferred.",
        "Strong knowledge of Indian IS codes (455, 456, 13920, etc.).",
        "Excellent documentation skills and attention to detail.",
        "Ability to supervise and guide junior engineers.",
        "Excellent communication skills.",
      ],
      postedDate: "2025-08-15",
    },
    {
      id: 16,
      title: "Civil Engineer - Structural",
      department: "Engineering",
      location: "Western Mumbai suburbs, Mumbai, India",
      type: "Full-time",
      experience: "5-8 years",
      vacancy: 3,
      description:
        "We are seeking Civil Engineers for structural work on our Mumbai high-rise project. You will focus on structural design and supervision. Work on a luxury development in Mumbai. Ensure structural integrity and timely completion.",
      requirements: [
        "Bachelor's degree in Civil Engineering.",
        "5-8 years of experience in structural engineering and construction supervision.",
        "Mandatory experience in high-rise building projects.",
        "Proficiency in structural design software like ETABS or STAAD Pro.",
        "Strong knowledge of RCC design and detailing.",
        "Ability to read and interpret structural drawings.",
        "Good coordination skills with other engineering disciplines.",
        "Site supervision experience is highly desirable.",
      ],
      postedDate: "2025-08-15",
    },
    {
      id: 17,
      title: "Quality Engineer - Civil",
      department: "Engineering",
      location: "Western Mumbai suburbs, Mumbai, India",
      type: "Full-time",
      experience: "4+ years",
      vacancy: 2,
      description:
        "We are looking for Quality Engineers to ensure high standards on our Mumbai project. You will monitor construction quality and implement QA/QC procedures. Focus on maintaining luxury project standards throughout construction.",
      requirements: [
        "Bachelor's degree in Civil Engineering.",
        "Minimum 4 years of experience as a Quality Engineer.",
        "Mandatory proven experience in high-rise building projects with Miven technology.",
        "Strong knowledge of quality management systems and construction materials testing.",
        "Experience in conducting on-site inspections and preparing quality reports.",
        "Familiarity with relevant Indian building codes and quality standards.",
        "Excellent communication, documentation, and problem-solving skills.",
      ],
      postedDate: "2025-08-28",
    },
    {
      id: 18,
      title: "Project Manager",
      department: "Project Management",
      location: "Tarnaka, Hyderabad, India",
      type: "Full-time",
      experience: "18 years",
      vacancy: 1,
      description:
        "We are seeking a highly experienced Project Manager with mandatory experience in high-rise building projects. The successful candidate will be responsible for the overall planning, execution, and closing of projects, ensuring they are completed on time, within budget, and to the highest quality standards.",
      requirements: [
        "Bachelor's degree in Civil Engineering or a related field is mandatory.",
        "Minimum 18 years of experience in project management.",
        "Mandatory proven experience in managing high-rise building projects.",
        "Strong leadership, team management, and stakeholder communication skills.",
        "Proficiency in project management software and tools.",
        "Expert knowledge of project planning, budgeting, and risk management.",
        "Familiarity with relevant Indian building codes, safety standards, and regulations.",
        "Excellent problem-solving and decision-making abilities.",
      ],
      postedDate: "2025-08-18",
    },
    {
      id: 19,
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
      postedDate: "2025-08-18",
    },
    {
      id: 20,
      title: "MEP Engineer",
      department: "MEP Engineering",
      location: "Tarnaka, Hyderabad, India",
      type: "Full-time",
      experience: "4+ years",
      vacancy: 1,
      description:
        "We are seeking a skilled MEP Engineer with mandatory experience in high-rise Miven projects. The candidate will be responsible for the design, execution, and supervision of all Mechanical, Electrical, and Plumbing systems, ensuring they meet project specifications and quality standards.",
      requirements: [
        "Bachelor's degree in Electrical or Mechanical Engineering is mandatory.",
        "Minimum 4 years of experience in MEP engineering.",
        "Mandatory proven experience in high-rise building projects using Miven technology.",
        "Strong knowledge of HVAC, electrical, plumbing, and fire fighting systems.",
        "Proficiency in AutoCAD is essential. Knowledge of Revit MEP is a plus.",
        "Experience in site supervision and coordination with other trades.",
        "Familiarity with relevant Indian MEP codes and standards.",
        "Good communication and problem-solving skills.",
      ],
      postedDate: "2025-08-18",
    },
    {
      id: 21,
      title: "Planning Engineer",
      department: "Planning and Scheduling",
      location: "Tarnaka, Hyderabad, India",
      type: "Full-time",
      experience: "8 years",
      vacancy: 1,
      description:
        "We are looking for a highly skilled Planning Engineer with mandatory experience in high-rise building projects using Miven technology. The candidate will be responsible for developing, updating, and monitoring project schedules, ensuring all construction phases are aligned and on track for timely completion.",
      requirements: [
        "Bachelor's degree in Civil Engineering or a related field is mandatory.",
        "Minimum 8 years of experience as a Planning Engineer.",
        "Mandatory proven experience in planning and scheduling for high-rise building projects with Miven technology.",
        "Proficiency in project management software such as Primavera P6 or Microsoft Project.",
        "Strong analytical and problem-solving skills to manage project timelines and resource allocation.",
        "Experience in risk analysis and mitigation planning.",
        "Excellent communication and coordination skills to work with project teams and stakeholders.",
        "Familiarity with relevant Indian building codes and standards.",
      ],
      postedDate: "2025-08-18",
    },
    {
      id: 22,
      title: "Quality Engineer",
      department: "Quality Assurance",
      location: "Kollur, Hyderabad, India",
      type: "Full-time",
      experience: "4 years",
      vacancy: 1,
      description:
        "We are seeking a diligent Quality Engineer with mandatory experience in high-rise Miven projects. The candidate will be responsible for implementing and overseeing quality control procedures, conducting inspections, and ensuring all construction work adheres to project specifications and industry standards.",
      requirements: [
        "Bachelor's degree in Civil Engineering or a related field is mandatory.",
        "Minimum 4 years of experience as a Quality Engineer.",
        "Mandatory proven experience in high-rise building projects with Miven technology.",
        "Strong knowledge of quality management systems and construction materials testing.",
        "Experience in conducting on-site inspections and preparing quality reports.",
        "Familiarity with relevant Indian building codes and quality standards.",
        "Excellent communication, documentation, and problem-solving skills.",
      ],
      postedDate: "2025-08-18",
    },
    {
      id: 23,
      title: "Quality Engineer",
      department: "Quality Assurance",
      location: "Kollur, Hyderabad, India",
      type: "Full-time",
      experience: "4 years",
      vacancy: 1,
      description:
        "We are seeking a diligent Quality Engineer with mandatory experience in high-rise Miven projects. The candidate will be responsible for implementing and overseeing quality control procedures, conducting inspections, and ensuring all construction work adheres to project specifications and industry standards.",
      requirements: [
        "Bachelor's degree in Civil Engineering or a related field is mandatory.",
        "Minimum 4 years of experience as a Quality Engineer.",
        "Mandatory proven experience in high-rise building projects with Miven technology.",
        "Strong knowledge of quality management systems and construction materials testing.",
        "Experience in conducting on-site inspections and preparing quality reports.",
        "Familiarity with relevant Indian building codes and quality standards.",
        "Excellent communication, documentation, and problem-solving skills.",
      ],
      postedDate: "2025-08-28",
    },
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
