export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "image",
      options: {
        hotspot: true,
      },
    }, 
    {
      name: "companyName",
      title: "Company Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "company",
      title: "Company",
      type: "text",
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "string",
    }, 
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "isCurrentlyWorkingHere",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" }}],
    },
    {
      name: "points", 
      title: "Points", 
      type: "array", 
      of: [{ type: "string" }],
    },
  ],
}
