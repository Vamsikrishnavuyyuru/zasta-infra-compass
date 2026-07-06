import { defineTool } from "@lovable.dev/mcp-js";

const company = {
  name: "Zasta Enterprises Private Limited",
  brand: "Zasta Group",
  tagline: "Based in Hyderabad, delivering infrastructure excellence.",
  headquarters: "Hyderabad, Telangana, India",
  website: "https://zastagroup.com",
  contactEmail: "hr@zastagroup.com",
  sectors: [
    "Construction & Infrastructure",
    "Engineering Consultancy",
    "Workforce Solutions",
    "Digital Construction Technology",
  ],
  products: [
    {
      name: "Construction Quality Management Platform",
      description:
        "Digital platform for construction quality, safety, and compliance management.",
    },
    {
      name: "NirmanJobs",
      url: "https://nirmanjobs.com",
      description:
        "Job platform for construction, engineering, and infrastructure professionals.",
    },
  ],
  stats: {
    expertEngineers: "170+",
    projectsCompleted: "40+",
  },
};

export default defineTool({
  name: "get_company_info",
  title: "Get company information",
  description:
    "Get an overview of Zasta Group — headquarters, sectors served, products, and key stats.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(company, null, 2) }],
    structuredContent: { company },
  }),
});
