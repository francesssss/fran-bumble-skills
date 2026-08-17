// RESPONSIBILITIES GRID CONTENT
// Edit this file to change tasks, links, or cadences. Nothing else needs editing.
// Each "card" is one cadence bucket. Each task gets its own checkbox.

const GRID = {
  title: "CX / QA Operations Grid",
  subtitle: "My recurring responsibilities, by cadence",
  intro:
    "A daily launchpad for the operational responsibilities I own. Tick items as I go; hit reset to start a fresh day. Links jump straight to the channels and tools each task needs.",

  // Quick links shown as chips at the top — edit freely.
  quickLinks: [
    { label: "#cx-metrics-weekly", url: "https://slack.com/archives/C07LMLG33UL" },
    { label: "#sierra-ai-internal", url: "https://slack.com/archives/C0718CSTL8H" },
    { label: "#ext-sierra-bumble", url: "https://slack.com/archives/C0703BS4P1Q" },
  ],

  cards: [
    {
      id: "daily",
      cadence: "Daily",
      time: "0.5 hr",
      title: "QA Data Check",
      accent: "teal",
      tasks: [
        { id: "d1", text: "Scan for anomalies: Zendesk / Sierra / Snowflake / other reporting" },
        { id: "d2", text: "Flag discrepancies" },
        { id: "d3", text: "Surface emerging trends" },
      ],
      links: [],
    },
    {
      id: "weekly-report",
      cadence: "Weekly",
      time: "—",
      title: "Weekly Report (previous week)",
      accent: "gold",
      tasks: [
        { id: "wr1", text: "Compile headline QA metrics" },
        { id: "wr2", text: "Compile issues / business operations metrics" },
        { id: "wr3", text: "Post in #cx-metrics-weekly + cross-post to #sierra-ai-internal" },
        { id: "wr4", text: "Post Sierra-specific metrics in #ext-sierra-bumble" },
        { id: "wr5", text: "Update Claude skill / prompt (or other data-pull method) per governance & process changes" },
      ],
      links: [
        { label: "#cx-metrics-weekly", url: "https://slack.com/archives/C07LMLG33UL" },
        { label: "#sierra-ai-internal", url: "https://slack.com/archives/C0718CSTL8H" },
        { label: "#ext-sierra-bumble", url: "https://slack.com/archives/C0703BS4P1Q" },
      ],
    },
    {
      id: "eow",
      cadence: "Weekly · EOW",
      time: "1 hr",
      title: "End-of-Week Review",
      accent: "teal",
      tasks: [
        { id: "e1", text: "Check data cleanliness" },
        { id: "e2", text: "Verify alignment between Sierra interface × Jira" },
        { id: "e3", text: "Scan Claude skills for anomalies" },
      ],
      links: [],
    },
    {
      id: "meeting",
      cadence: "Weekly · Meeting",
      time: "45 min",
      title: "Prioritised Cases Meeting",
      accent: "gold",
      tasks: [
        { id: "m1", text: "Present prioritised cases" },
        { id: "m2", text: "Post summary in #ext-sierra-bumble" },
        { id: "m3", text: "Update relevant Jira issues" },
        { id: "m4", text: "Handle async follow-ups as relevant" },
      ],
      links: [
        { label: "#ext-sierra-bumble", url: "https://slack.com/archives/C0703BS4P1Q" },
      ],
    },
    {
      id: "biweekly",
      cadence: "Bi-weekly · SOW",
      time: "0.5 hr",
      title: "On-Hold / Monitored Review",
      accent: "muted",
      tasks: [
        { id: "b1", text: "Review on-hold / monitored issues" },
      ],
      links: [],
    },
  ],
};
