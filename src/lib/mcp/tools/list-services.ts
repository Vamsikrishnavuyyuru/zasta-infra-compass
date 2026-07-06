import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const services = [
  {
    id: "construction-quality-management",
    name: "Construction Quality Management Platform",
    summary:
      "End-to-end digital platform for managing quality, safety, and compliance across construction projects — enabling site inspections, checklists, defect tracking, and real-time reporting.",
    highlights: [
      "Digital site inspections and QA/QC checklists",
      "Defect and snag management with photo evidence",
      "Real-time dashboards for project managers and consultants",
      "Compliance and audit trail reporting",
    ],
  },
  {
    id: "nirmanjobs",
    name: "NirmanJobs",
    url: "https://nirmanjobs.com",
    summary:
      "Dedicated job platform connecting skilled construction, engineering, and infrastructure professionals with employers across India.",
    highlights: [
      "Job listings for civil, MEP, QA/QC, design, and project management roles",
      "Employer branding and CV database access",
      "Focused on the construction and infrastructure industry",
    ],
  },
  {
    id: "workforce-solutions",
    name: "Workforce & Manpower Solutions",
    summary:
      "Providing expert engineers, technicians, and support staff for infrastructure and construction projects across India and abroad.",
  },
  {
    id: "construction-management",
    name: "Construction & Project Management",
    summary:
      "Turnkey construction management, project monitoring, and consultancy for residential, commercial, and industrial developments.",
  },
];

export default defineTool({
  name: "list_services",
  title: "List Zasta Group services",
  description:
    "List the services and products offered by Zasta Group, including the Construction Quality Management Platform and NirmanJobs.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
