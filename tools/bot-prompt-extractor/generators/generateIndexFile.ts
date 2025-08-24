import fs from "fs";
import path from "path";

interface WorkflowSummary {
  name: string;
  path: string;
  promptCount: number;
  nodes: Array<{
    nodeName: string;
    promptFiles: string[];
    instructionLabels: string[];
  }>;
}

interface ExtractionSummary {
  totalWorkflows: number;
  workflowsWithPrompts: number;
  totalPrompts: number;
  extractionDate: string;
  workflows: WorkflowSummary[];
}

/**
 * Generates an INDEX.md file with extraction summary and structure
 */
export function generateIndexFile(
  targetDir: string,
  extractionSummary: ExtractionSummary
): void {
  const lines: string[] = [];

  // Header
  lines.push("# Prompts Extraction Index");
  lines.push("");
  lines.push(`Generated on: **${extractionSummary.extractionDate}**`);
  lines.push("");

  // Summary
  lines.push("## Extraction Summary");
  lines.push("");
  lines.push("| Metric | Value |");
  lines.push("|--------|-------|");
  lines.push(`| Total Workflows | ${extractionSummary.totalWorkflows} |`);
  lines.push(
    `| Workflows with Prompts | ${extractionSummary.workflowsWithPrompts} |`
  );
  lines.push(`| Total AI Prompts | ${extractionSummary.totalPrompts} |`);
  lines.push(
    `| Workflows without Prompts | ${
      extractionSummary.totalWorkflows - extractionSummary.workflowsWithPrompts
    } |`
  );
  lines.push("");

  // Structure with hyperlinks
  lines.push("## Generated Structure");
  lines.push("");
  lines.push("```");
  lines.push("src/prompts/");

  // Group workflows by their parent directory
  const groupedWorkflows = new Map<string, WorkflowSummary[]>();

  extractionSummary.workflows
    .filter((w) => w.promptCount > 0)
    .forEach((workflow) => {
      const pathParts = workflow.path.split("/");
      const parentDir = pathParts[0];

      if (!groupedWorkflows.has(parentDir)) {
        groupedWorkflows.set(parentDir, []);
      }
      groupedWorkflows.get(parentDir)!.push(workflow);
    });

  const sortedGroups = Array.from(groupedWorkflows.entries()).sort(([a], [b]) =>
    a.localeCompare(b)
  );

  sortedGroups.forEach(([parentDir, workflows], groupIndex) => {
    const isLastGroup = groupIndex === sortedGroups.length - 1;
    const groupPrefix = isLastGroup ? "└──" : "├──";

    if (workflows.length === 1 && workflows[0].path === parentDir) {
      // Single workflow at root level (no subdirectory)
      lines.push(`${groupPrefix} ${workflows[0].path}/`);
      const allFiles = workflows[0].nodes.flatMap((node) => node.promptFiles);
      allFiles.forEach((file, fileIndex) => {
        const isLastFile = fileIndex === allFiles.length - 1;
        const filePrefix = isLastGroup
          ? isLastFile
            ? "    └──"
            : "    ├──"
          : isLastFile
          ? "│   └──"
          : "│   ├──";
        lines.push(`${filePrefix} ${file}`);
      });
    } else {
      // Multiple workflows in this directory
      lines.push(`${groupPrefix} ${parentDir}/`);

      workflows.forEach((workflow, workflowIndex) => {
        const isLastWorkflow = workflowIndex === workflows.length - 1;
        const workflowPrefix = isLastGroup
          ? isLastWorkflow
            ? "    └──"
            : "    ├──"
          : isLastWorkflow
          ? "│   └──"
          : "│   ├──";

        const subPath = workflow.path.replace(`${parentDir}/`, "");
        lines.push(`${workflowPrefix} ${subPath}/`);

        const allFiles = workflow.nodes.flatMap((node) => node.promptFiles);
        allFiles.forEach((file, fileIndex) => {
          const isLastFile = fileIndex === allFiles.length - 1;
          const filePrefix = isLastGroup
            ? isLastWorkflow
              ? isLastFile
                ? "        └──"
                : "        ├──"
              : isLastFile
              ? "    │   └──"
              : "    │   ├──"
            : isLastWorkflow
            ? isLastFile
              ? "│       └──"
              : "│       ├──"
            : isLastFile
            ? "│   │   └──"
            : "│   │   ├──";
          lines.push(`${filePrefix} ${file}`);
        });
      });
    }
  });

  lines.push("```");
  lines.push("");

  // Quick navigation with hyperlinks
  lines.push("## Quick Navigation");
  lines.push("");
  lines.push("Click on any prompt file to navigate directly:");
  lines.push("");

  extractionSummary.workflows.forEach((workflow) => {
    if (workflow.promptCount > 0) {
      lines.push(`### ${workflow.name}`);
      lines.push(`*Path: \`${workflow.path}\`*`);
      lines.push("");

      workflow.nodes.forEach((node) => {
        if (node.promptFiles.length > 1) {
          lines.push(`**${node.nodeName}:**`);
        }
        node.promptFiles.forEach((file, index) => {
          const label = node.instructionLabels[index] || "untitled";
          const filePath = `${workflow.path}/${file}`;
          if (node.promptFiles.length > 1) {
            lines.push(`- [${file}](./${filePath}) - *${label}*`);
          } else {
            lines.push(
              `**${node.nodeName}:** [${file}](./${filePath}) - *${label}*`
            );
          }
        });
        if (node.promptFiles.length > 1) {
          lines.push("");
        }
      });
      lines.push("");
    }
  });

  // Workflows without prompts
  const workflowsWithoutPrompts = extractionSummary.workflows.filter(
    (w) => w.promptCount === 0
  );
  if (workflowsWithoutPrompts.length > 0) {
    lines.push("## Workflows Without AI Prompts");
    lines.push("");
    lines.push(
      "These workflows were processed but contained no AI prompt instructions:"
    );
    lines.push("");
    workflowsWithoutPrompts.forEach((workflow) => {
      lines.push(`- **${workflow.name}** (\`${workflow.path}\`)`);
    });
    lines.push("");
  }

  // Footer
  lines.push("---");
  lines.push("");
  lines.push(
    "*This index was automatically generated by the bot-prompt-extractor utility.*"
  );

  // Write file
  const filePath = path.join(targetDir, "INDEX.md");
  fs.writeFileSync(filePath, lines.join("\n") + "\n");
}

export type { ExtractionSummary, WorkflowSummary };
