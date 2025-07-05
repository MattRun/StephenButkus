// Mock Job Data
interface Job {
    id: number;
    title: string;
    department: string;
    location: string;
    description: string;
    image: string; // Replace with real image paths as needed
  }
  
  const jobData: Job[] = [
    {
      id: 1,
      title: "Mold Analyst",
      department: "Mold Lab",
      location: "Lawndale, CA",
      description:
        "Responsible for identifying and analyzing mold samples using advanced microscopy techniques. Must ensure quality control and regulatory compliance.",
      image: "/adrian-lange-Wk902ZLaA7M-unsplash.jpg",
    },
    {
      id: 2,
      title: "Asbestos Analyst",
      department: "Asbestos Lab",
      location: "Lawndale, CA",
      description:
        "Perform asbestos fiber analysis using PCM and TEM methods to meet strict safety standards. Requires experience in fiber counting and microscopy.",
      image: "/LabPhoto.png",
    },
    // {
    //   id: 3,
    //   title: "Field Sampler",
    //   department: "Field Work",
    //   location: "Remote",
    //   description:
    //     "Collect environmental samples (air, water, soil) from client sites while maintaining chain-of-custody protocols. Must be able to travel and work in various conditions.",
    //   image: "/images/field-sampler.jpg",
    // },
    {
      id: 3,
      title: "Laboratory Assistant",
      department: "Administration",
      location: "Lawndale, CA",
      description:
        "Provide support for lab operations including data entry, sample management, and equipment maintenance. Excellent organizational skills required.",
      image: "/AS_Viles.jpeg",
    },
    {
      id: 4,
      title: "Heavy Metal Analyst",
      department: "Environmental Analysis",
      location: "Lawndale, CA",
      description:
        "Analyze soil, water, and dust samples for heavy metal contamination using ICP and other advanced analytical methods. Attention to detail and knowledge of safety protocols required.",
      image: "/pinnaclelab/Sample Photos/ICP_HeavyMetals.jpeg",
    },
    {
      id: 5,
      title: "Customer Service Representative",
      department: "Client Relations",
      location: "Lawndale, CA",
      description:
        "Act as a primary point of contact for clients, providing information on our services and assisting with inquiries. Must have excellent communication and problem-solving skills.",
      image: "/pinnaclelab/Lab Pictures/JLMEnvironmental-36.jpg",
    },
    {
      id: 6,
      title: "Accounting Specialist",
      department: "Finance",
      location: "Lawndale, CA",
      description:
        "Manage financial records, process invoices, and assist in budgeting. Requires experience with accounting software and a strong attention to detail.",
      image: "/pinnaclelab/Lab Pictures/Accounting.jpeg",
    },
    {
      id: 7,
      title: "Chemist",
      department: "Research & Development",
      location: "Lawndale, CA",
      description:
        "Conduct chemical analyses, develop testing methods, and ensure quality control in the lab. A strong background in chemistry and laboratory techniques is required.",
      image: "/marvin-radke-bWo7bCnez68-unsplash.jpg",
    },
  ];
  
  export default jobData;
  