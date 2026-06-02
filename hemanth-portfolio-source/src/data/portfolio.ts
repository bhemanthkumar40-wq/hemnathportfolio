import blinkit from "@/assets/project-blinkit.jpg";
import hr from "@/assets/project-hr.jpg";
import ola from "@/assets/project-ola.jpg";
import meta from "@/assets/project-meta.jpg";

export const profile = {
  name: "Hemanth Kumar",
  role: "Data Analyst | Python | SQL | Power BI | Excel",
  tagline:
    "MCA student & Data Analyst turning complex datasets into actionable business intelligence.",
  about:
    "I am an MCA student and aspiring Data Analyst with skills in Python, SQL, Power BI, Excel, and Data Visualization. I enjoy transforming raw data into meaningful insights and building interactive dashboards for business decision-making.",
  email: "yourmail@gmail.com",
  linkedin: "https://linkedin.com/in/hemanth",
  github: "https://github.com/hemanth",
};

export const skillGroups = [
  { label: "Analysis", items: "Python, SQL, Excel" },
  { label: "Visualization", items: "Power BI, Tableau" },
  { label: "Libraries", items: "Pandas, NumPy" },
  { label: "Database & Tools", items: "MySQL, Git & GitHub" },
];

export const skills = [
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "Tableau",
  "Pandas & NumPy",
  "MySQL",
  "Git & GitHub",
];

export const projects = [
  {
    title: "Blinkit Sales Dashboard",
    subtitle: "Revenue & Inventory Optimization",
    description:
      "Analyzed retail sales data and built an interactive Power BI dashboard for revenue and customer insights.",
    tags: ["Power BI", "SQL"],
    image: blinkit,
  },
  {
    title: "HR Analytics Dashboard",
    subtitle: "Predictive Performance Insights",
    description:
      "Employee attrition analysis with workforce and department performance insights.",
    tags: ["Power BI", "Excel"],
    image: hr,
  },
  {
    title: "Ola Ride Analytics Dashboard",
    subtitle: "Mobility & Revenue Tracking",
    description:
      "Ride booking analysis, cancellations, ratings, and revenue tracking.",
    tags: ["Tableau", "SQL"],
    image: ola,
  },
  {
    title: "Meta Ads Dashboard",
    subtitle: "Campaign Performance Analytics",
    description:
      "Campaign analytics with CTR, conversions, and engagement tracking.",
    tags: ["Power BI", "Python"],
    image: meta,
  },
];

export const certifications = [
  "Career Essentials in Data Analysis",
  "SQL and Relational Databases 101",
  "Power BI Data Modelling Basics",
  "Deloitte Data Analytics Job Simulation",
  "Data Analyst 101",
];
