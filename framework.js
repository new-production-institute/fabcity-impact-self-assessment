/*
 * Fab City Full Stack – self-assessment content
 * ------------------------------------------------
 * This file holds ALL the wording of the tool.
 * Edit it to change questions or level descriptions –
 * you do not need to touch index.html for that.
 *
 * - layers[].levels must contain exactly 5 texts (level 0 to level 4).
 */
window.FRAMEWORK = {
  title: "Fab City Full Stack Self-Assessment",
  intro:
    "Rate your city or region on the seven layers of the Fab City Full Stack. " +
    "For each layer, pick the description that fits best today. Then rate three " +
    "cross-cutting lenses that apply across all layers.",

  layers: [
    {
      name: "Accessibility of technologies and infrastructures",
      short: "Accessibility",
      focus: "Availability, distribution, and strategic integration of spaces, tools, and technologies",
      levels: [
        "There are currently no active makerspaces / fab labs in our city.",
        "A few isolated makerspaces exist; access is limited or not publicly oriented. No strategic planning.",
        "Multiple access points exist (labs, hubs), but coverage is uneven and coordination is ad hoc.",
        "The city / region has a deliberate strategy for distributed production infrastructure. Partnerships and shared resources exist, and the city / region has created permanent legislation.",
        "Local production infrastructure is embedded in urban planning or digital policy; inclusive, data-informed, and widely accessible."
      ]
    },
    {
      name: "New Forms of Learning",
      short: "Learning",
      focus: "Lifelong learning, informal education, and skills development",
      levels: [
        "There are currently no (maker) workshops / trainings offered in our city / region.",
        "Occasional workshops or pilot programs exist, disconnected from broader education systems.",
        "Maker education is present through partnerships with schools or NGOs, but not yet mainstream.",
        "Structured collaborations with schools, universities, and job training initiatives exist; impact is tracked.",
        "New learning models are part of regional education strategies; supported by public policy and long-term programs."
      ]
    },
    {
      name: "Value-Generating Projects",
      short: "Value generation",
      focus: "Supporting innovation, entrepreneurship, and product development",
      levels: [
        "No creation of value-generating projects.",
        "Makers create innovative projects, but there's no support for further development or scaling.",
        "Some incubation programs or maker competitions exist, with limited continuity.",
        "Integrated support structures exist (e.g. incubators, funding, mentoring); makers can move from idea to enterprise.",
        "Fab City / Region innovation is linked to the regional economy; policies and programs exist for scaling open, local enterprises."
      ]
    },
    {
      name: "Collaboration and local ecosystems",
      short: "Collaboration",
      focus: "Governance, stakeholder collaboration, and ecosystem cohesion",
      levels: [
        "There is currently no articulation of our city / region as a local ecosystem.",
        "Individual actors work in silos; no coordination between sectors.",
        "Some networking exists, often informal or project-based.",
        "Formalized multi-stakeholder collaboration exists (e.g. working groups, alliances); ecosystem mapping is done.",
        "The city/region has a shared vision, governance structures, and joint programming across public, private, academic, and civil society actors."
      ]
    },
    {
      name: "Place-based prototyping",
      short: "Place-based prototyping",
      focus: "Urban experimentation, real-world testing, and community-driven design",
      levels: [
        "There are no project interventions in the hyperlocal and/or urban/regional scales.",
        "Prototyping occurs inside labs only; no engagement with public space or local needs.",
        "Some pilot interventions happen in collaboration with communities or local government.",
        "City / region supports testbeds and experiments in public spaces; learnings are documented and influence planning.",
        "Place-based innovation is structurally embedded in urban development; feedback loops exist between citizens, designers, and policymakers."
      ]
    },
    {
      name: "Bioregional strategies",
      short: "Bioregional strategies",
      focus: "Alignment with local ecosystems, historical legacies, cultural practices, and regenerative potential",
      levels: [
        "There is no awareness of bioregional strategies (e.g. history, ecosystem, cultural practices, regenerative potential).",
        "Our city / region operates on generic sustainability goals, but there is no specific connection to local context (e.g. history, ecosystem, cultural practices, regenerative potential).",
        "Awareness exists; some pilot projects acknowledge place-based factors (e.g. material heritage, water cycles).",
        "Strategies are adapted to the region's ecological and historical characteristics; initiatives link to local practices, traditions, and natural assets.",
        "The city / region develops integrated regenerative strategies that honor its ecological systems and its historical material/cultural identity. These inform urban/rural planning, innovation policy, and economic transformation."
      ]
    },
    {
      name: "Global knowledge sharing",
      short: "Knowledge sharing",
      focus: "Open-source practices, global-local learning, and digital commons",
      levels: [
        "Nothing is currently documented.",
        "Documentation and sharing only among local partners.",
        "Some projects are shared online or presented at events, but not systematically.",
        "Open-source principles are practiced; city/region contributes to global platforms (e.g. GitHub, Wikifactory, SDG networks).",
        "Knowledge sharing is a strategic priority; city / region actively leads or co-develops global frameworks, toolkits, and standards."
      ]
    }
  ],

  /* Cross-cutting lenses, each rated once (0–3) for the city / region as a whole.
     Every lens needs the same number of level texts. */
  lenses: [
    {
      name: "Equity & Inclusion",
      question: "Do you ensure marginalized groups aren’t just “invited” but leading?",
      levels: [
        "Who takes part, and who doesn't, is not considered.",
        "Spaces and programs are open to everyone in principle, but there are no targeted measures and participation is not tracked.",
        "Targeted programs and outreach exist; marginalized groups take part and are consulted on what is offered.",
        "Marginalized groups hold decision-making roles, control budgets, and lead programs; this is anchored in rules and structures rather than dependent on individuals."
      ]
    },
    {
      name: "Decentralized Governance",
      question: "Do local hubs make decisions together?",
      levels: [
        "Decisions are taken by a single organization, or each hub decides for itself without coordination.",
        "Hubs are informed or occasionally consulted, but decisions are taken centrally.",
        "Hubs regularly make decisions together on shared programs and resources, e.g. in recurring meetings or working groups.",
        "Shared decision-making is formalized: hubs have defined rights and mandates, and decisions are transparent and documented."
      ]
    },
    {
      name: "Digital–Physical Integration",
      question: "Do you use open source platforms and open benches?",
      levels: [
        "Digital tools and physical workspaces are not connected; open source platforms are not used.",
        "Individual spaces use open source platforms or offer open benches, but each on its own.",
        "Open source platforms and open benches are used across several spaces; designs documented online are regularly made locally.",
        "Open platforms and open workspaces form a shared infrastructure: documentation, machine access, and production are linked across the city / region and maintained long term."
      ]
    }
  ]
};
