/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Sunny Bommasani",
  title: "Hi all, I'm Sunny",
  subTitle: emoji(
    "A passionate Software Developer and problem solver 🕹️ having diverse experience in project management, designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1K8p6CUg06C8-48ClJlmTRw44zl1h3Qcp/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sunny3699",
   linkedin: "https://www.linkedin.com/in/sunny-bommasani/",
  gmail: "sunny.bommasani@gmail.com",
  // gitlab: "https://gitlab.com/",
   facebook: "https://www.facebook.com/sunny.bommasani.9",
  //medium: "https://medium.com/@davidrakosi",
  //stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: 'https://www.instagram.com/sunny.bommasani/',
  //twitter: 'https://twitter.com/davidrakosi_',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "COMPUTER SCIENCE ENTHUSIAST WORKING ON IMPROVING EFFIENCY FOR SOLUTIONS WHO WANTS TO EXPLORE LATEST TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Designing effective algorithms and obtaining insights from raw data"),
    emoji(
      "⚡ In my mean time, I work on hard problems (NP-complete), expand my knowledge on quantum computing, quantum physics and Quantitative research for trading."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, Davis",
      logo: require("./assets/images/ucdavis.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2020 - June 2022",
      desc: "GPA - 4",
      descBullets: [
        "Coursework - Artificial Intelligence in Game Design, Computer Networks and Theory of Computation"
      ]
    },
    {
      schoolName: "Vellore Institute of technology, Vellore",
      logo: require("./assets/images/vit.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "July 2014 - May 2018",
      desc:
        "CGPA - 8.35/10",
      descBullets: ["Coursework - Operating Systems, Data Mining and Warehousing, Web Development, Agent based Intelligent systems and Database management systems"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Project Engineer",
      company: "WIPRO",
      companylogo: require("./assets/images/wipro.jpg"),
      date: "June 2018 – September 2020",
      desc:
        "Sofware Engineer for SHELL Petroleum providing solutions.",
      descBullets: [
        "Providing insights from data and forecast budget for retail sites around the world.",
        "COverseeing multiple large scale applications and involved in Root cause analysis.",
        "Developed several architectural solutions and enhanced modules for smooth stream line flow of fuel price data."
      ]
    },
    {
      role: "MEAN Stack Developer",
      company: "MagikMinds",
      companylogo: require("./assets/images/magik.png"),
      date: "December 2017 – March 2018",
      descBullets: [
        "Involved in both front-end and back-end development of dynamic forms product using MEAN stack and Apache tom for server. Git is used for version control.",
        "Developed multiple custom directives and services in Angular JS.",
        "Designed resource sharing and protecting it from multiple classes using mutex and conditional variables."
      ]
    },
    {
      role: "Sofware Engineer - Intern",
      company: "TATA Consultancy Services",
      companylogo: require("./assets/images/tcs.png"),
      date: "December 2016 – January 2017",
      descBullets:[
        "Presented a Proof of concept for optimization of indexing in large-scale database (oracle 11g) using data analysis.",
        "Projected Indexing is correlated to memory management to avoid any overkill in database.",
        "Designed complex views on power supply database using nested queries."
      ]
    },
    {
      role: "Teaching Assistant",
      company: "University of California, Davis",
      companylogo: require("./assets/images/davis.jpg"),
      date: "January 2021 – March 2021",
      descBullets:[
        "Conducted lab session, office hours and created assignements for chemistry course.",
        "Assisted proffesor in lectures and worked on simulating molecules project using quantum computing."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Testimonials "),
  subtitle:
    "What people who worked with me had to say",

  achievementsCards: [
    {
      title: "Vekatakrishnan Raghavendran",
      subtitle:[
        "Operate Landscape Manager - SHELL",
        ""
      ],
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Prof. Srivani A",
      subtitle:[
        "Senior Professor - Department of software systems",
        "Sunny has a generous spirit and he willingly shared time and expertise with classmates, helping and enabling them in need. He was a good team player and adept at making individual contributions towards shared endeavours. I can state with pride that he proved to be an efficient leader, gentle and decisive at once, capable of bringing the students together in common endeavours. I must highlight Sunny’s ability to present impressive results in a wide range of areas. I have also seen astonishing results on his image & vision project ‘Recognition of vehicle number plate in MATLAB’ that demanded uncompromised attention to detail and programming. He was able to develop and improve his hands-on skills and also effectively communicate the results of the project."
    ],
      //image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📧"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "(323) 768 0674",
  email_address: "sunny.bommasani@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
