import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfo from "./tools/get-company-info";
import listServices from "./tools/list-services";
import listJobOpenings from "./tools/list-job-openings";

export default defineMcp({
  name: "zasta-group-mcp",
  title: "Zasta Group MCP",
  version: "0.1.0",
  instructions:
    "Public tools about Zasta Group — company info, services (including the Construction Quality Management Platform and NirmanJobs), and current job openings.",
  tools: [getCompanyInfo, listServices, listJobOpenings],
});
