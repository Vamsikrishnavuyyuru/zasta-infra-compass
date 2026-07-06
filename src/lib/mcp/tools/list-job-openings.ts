import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const openings = [
  {
    id: 1,
    title: "MEP Engineer",
    department: "Mechanical Engineering",
    location: "Chevella, Hyderabad, India",
    type: "Full-time",
    experience: "5+ years",
    vacancy: 1,
    postedDate: "2026-01-02",
    description:
      "Oversee on-site installation and coordination of Mechanical, Electrical, and Plumbing services for residential projects.",
  },
  {
    id: 2,
    title: "Design Coordinator",
    department: "Civil Engineering",
    location: "Chevella, Hyderabad, India",
    type: "Full-time",
    experience: "8+ years",
    vacancy: 1,
    postedDate: "2026-01-02",
    description:
      "Bridge between design consultants and the construction team; streamline information flow and resolve design conflicts.",
  },
  {
    id: 3,
    title: "Quality Manager",
    department: "Quality Assurance & Control",
    location: "Chevella, Hyderabad, India",
    type: "Full-time",
    experience: "10+ years",
    vacancy: 1,
    postedDate: "2026-01-02",
    description:
      "Lead the QA/QC department; develop and maintain quality management systems across residential projects.",
  },
  {
    id: 4,
    title: "Quality Manager",
    department: "Quality Assurance & Control",
    location: "Tarnaka, Hyderabad, India",
    type: "Full-time",
    experience: "10+ years",
    vacancy: 1,
    postedDate: "2026-01-02",
    description:
      "Oversee QA/QC functions for high-end residential projects; establish quality benchmarks and site inspections.",
  },
];

export default defineTool({
  name: "list_job_openings",
  title: "List current job openings",
  description:
    "List current job openings at Zasta Group, optionally filtered by location or department (case-insensitive substring match).",
  inputSchema: {
    location: z
      .string()
      .optional()
      .describe("Optional location filter, e.g. 'Hyderabad'."),
    department: z
      .string()
      .optional()
      .describe("Optional department filter, e.g. 'Quality'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ location, department }) => {
    const loc = location?.toLowerCase();
    const dep = department?.toLowerCase();
    const filtered = openings.filter(
      (o) =>
        (!loc || o.location.toLowerCase().includes(loc)) &&
        (!dep || o.department.toLowerCase().includes(dep)),
    );
    return {
      content: [{ type: "text", text: JSON.stringify(filtered, null, 2) }],
      structuredContent: { openings: filtered, count: filtered.length },
    };
  },
});
