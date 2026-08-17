// OWNERSHIP SKILLS MAP
// Sections = areas I own. Nodes = skills I need to build for each area.
// Edit freely — this is the only file you need to change.

const ROADMAP = {
  title: "Ownership Skills Map",
  subtitle: "The skills behind each area I own",
  intro:
    "The operational areas I'm responsible for, and the skills I need to build (or deepen) under each one — with open-access resources to learn from. Each area is tagged with my role on it.",
  sections: [
    {
      id: "weekly-reporting",
      number: "01",
      title: "Weekly Metrics Reporting (QA & Issues)",
      ownership: "2nd owner · under Karol",
      blurb:
        "Monday report on the previous week — headline QA metrics, issues/business ops metrics, posted across Slack channels, with the data-pull method kept in line with governance.",
      nodes: [
        {
          id: "qa-metrics-definition",
          title: "Defining QA Metrics",
          level: "core",
          description:
            "Knowing exactly what each headline QA metric measures, how it's calculated, and what a 'good' vs 'concerning' number looks like — so the report is trustworthy and you can defend any figure in it.",
          resources: [],
        },
        {
          id: "ops-metrics",
          title: "Issues / Business Ops Metrics",
          level: "core",
          description:
            "Understanding the operational metrics that sit alongside QA — volumes, resolution, backlog health — and how they tell a story together rather than as isolated numbers.",
          resources: [],
        },
        {
          id: "sql-snowflake-pulls",
          title: "SQL / Snowflake Data Pulls",
          level: "core",
          description:
            "Pulling the underlying numbers yourself so you're not dependent on someone else's export. Enough SQL to query, filter, and aggregate the source data behind the report.",
          resources: [
            { label: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/" },
            { label: "SQLZoo (interactive)", url: "https://sqlzoo.net" },
            { label: "Snowflake Docs", url: "https://docs.snowflake.com" },
          ],
        },
        {
          id: "claude-skill-governance",
          title: "Claude Skill / Prompt Upkeep",
          level: "core",
          description:
            "Maintaining the Claude skill/prompt (or other data-pull method) and updating it whenever governance or process changes — including versioning it so you can see what changed and why.",
          resources: [
            { label: "Anthropic Prompt Engineering Guide", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview" },
          ],
        },
        {
          id: "data-storytelling",
          title: "Data Storytelling for Slack",
          level: "core",
          description:
            "Turning a table of metrics into a post people actually read and act on — leading with the 'so what', and tailoring the same data for an internal audience vs. the external Sierra channel.",
          resources: [
            { label: "Storytelling with Data (blog)", url: "https://www.storytellingwithdata.com/blog" },
          ],
        },
      ],
    },
    {
      id: "daily-qa-review",
      number: "02",
      title: "Daily QA Data Review",
      ownership: "Primary owner",
      blurb:
        "The 0.5hr daily check: scan Zendesk / Sierra / Snowflake / other reporting for anomalies, flag discrepancies, and surface emerging trends before they become problems.",
      nodes: [
        {
          id: "anomaly-detection",
          title: "Anomaly Detection Intuition",
          level: "core",
          description:
            "Developing a feel for what 'normal' looks like across your data sources, so a real anomaly jumps out at you fast — and knowing the difference between noise and a genuine signal worth flagging.",
          resources: [],
        },
        {
          id: "multi-source-fluency",
          title: "Multi-Source Data Fluency",
          level: "core",
          description:
            "Being comfortable moving between Zendesk, Sierra, and Snowflake, and knowing which source is authoritative for which question so you're comparing like with like.",
          resources: [],
        },
        {
          id: "basic-stats",
          title: "Basic Statistics",
          level: "core",
          description:
            "Enough grounding in averages, distributions, and variance to tell a meaningful shift from normal fluctuation — the difference between 'this looks off' and 'this is off'.",
          resources: [
            { label: "Khan Academy — Statistics & Probability", url: "https://www.khanacademy.org/math/statistics-probability" },
          ],
        },
        {
          id: "trend-spotting",
          title: "Trend Surfacing",
          level: "advanced",
          description:
            "Spotting emerging patterns early and framing them so others can act — moving from 'here's today's anomaly' to 'here's a direction this is heading'.",
          resources: [],
        },
        {
          id: "adhoc-querying",
          title: "Ad-hoc Querying",
          level: "core",
          description:
            "Writing quick, throwaway queries to chase down a discrepancy the moment you spot it, instead of waiting on a formal report.",
          resources: [
            { label: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/" },
          ],
        },
      ],
    },
    {
      id: "issue-trackers",
      number: "03",
      title: "Issue Trackers: Jira / Sierra / Sheets",
      ownership: "2nd owner · under Zsofia",
      blurb:
        "Weekly EOW review (1hr) of data cleanliness and Sierra↔Jira alignment, plus a bi-weekly SOW review of on-hold / monitored issues.",
      nodes: [
        {
          id: "jira-proficiency",
          title: "Jira Proficiency",
          level: "core",
          description:
            "Confident with Jira workflows, statuses, and hygiene — plus JQL (Jira Query Language) to slice issues quickly rather than clicking through them one by one.",
          resources: [
            { label: "Atlassian Jira Guides", url: "https://www.atlassian.com/software/jira/guides" },
            { label: "JQL — Advanced Search Docs", url: "https://support.atlassian.com/jira-software-cloud/docs/use-advanced-search-with-jira-query-language-jql/" },
          ],
        },
        {
          id: "data-cleanliness",
          title: "Data Cleanliness & Reconciliation",
          level: "core",
          description:
            "Keeping tracker data accurate and consistent, and reconciling records that have drifted apart across systems — the unglamorous work that everything downstream depends on.",
          resources: [],
        },
        {
          id: "cross-system-alignment",
          title: "Cross-System Alignment",
          level: "core",
          description:
            "Making sure what's shown in the Sierra interface matches what's tracked in Jira, and building a repeatable way to catch where they diverge.",
          resources: [],
        },
        {
          id: "sheets-skills",
          title: "Spreadsheet Skills",
          level: "core",
          description:
            "Solid Sheets/Excel for tracking, reconciling, and quick analysis — lookups, pivots, and formulas that make a messy tracker legible.",
          resources: [
            { label: "GCFGlobal — Excel Basics (free)", url: "https://edu.gcfglobal.org/en/excel/" },
          ],
        },
        {
          id: "claude-skills-scan",
          title: "Claude Skills Anomaly Scanning",
          level: "advanced",
          description:
            "Reviewing the Claude skills that feed this area for anomalies or drift, so an automated data pull isn't quietly producing wrong results.",
          resources: [],
        },
      ],
    },
    {
      id: "sampling-strategy",
      number: "04",
      title: "Sampling Strategy & Targets",
      ownership: "Thought partner · 2nd role",
      blurb:
        "Shaping the QA base sampling strategy, drafting post-release and pre-release QA programs, and baselining team/individual targets to role scope and time allocation.",
      nodes: [
        {
          id: "sampling-methodology",
          title: "Sampling Methodology",
          level: "advanced",
          description:
            "The core statistical skill for this area: how to sample so results are representative — sample size, randomisation vs. targeted sampling, and the biases that quietly invalidate a QA program.",
          resources: [
            { label: "Khan Academy — Sampling & Study Design", url: "https://www.khanacademy.org/math/statistics-probability/designing-studies" },
          ],
        },
        {
          id: "qa-program-design",
          title: "QA Program Design",
          level: "advanced",
          description:
            "Designing pre-release testing and post-release QA programs from scratch — what to check, when, and how to structure it so it actually catches the failures that matter.",
          resources: [],
        },
        {
          id: "target-setting",
          title: "Target Setting & Baselining",
          level: "core",
          description:
            "Setting team and individual targets grounded in role scope and realistic time allocation, so targets are fair, defensible, and actually achievable.",
          resources: [],
        },
        {
          id: "experimental-thinking",
          title: "Experimental Design Thinking",
          level: "advanced",
          description:
            "Thinking like an experimenter — control vs. variable, what you're actually measuring, and how to tell whether a change in QA results came from the thing you changed or from chance.",
          resources: [],
        },
      ],
    },
  ],
};
