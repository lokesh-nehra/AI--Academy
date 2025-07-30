import course_img from "../../assets/images/ai-academy_img1.jpg";

export const courseData = [
  {
    id: 1,
    title: "Data Engineering",
    type: "Specialization",
    description:
      "Build strong foundations in data engineering by working on real-life projects, from ETL pipelines to designing scalable data warehouses.",
    image: course_img,
    collaborators: [
      { name: "AI-Academy", logo: openai },
      { name: "AWS", logo: AWS },
    ],
  },
  {
    id: 2,
    title: "AI Python for Beginners",
    type: "Short Course",
    description:
      "This course introduces Python for AI, covering the basics of data structures, libraries like NumPy and Pandas, and building your first AI models.",
    image: course_img,
    collaboratorName: "OpenAI",
    collaboratorLogo: openai,
    whatYouWillLearn: [
      "Understand the core architecture of voice agents, including the trade-offs between modular pipelines and real-time APIs, and how components like STT, LLMs, and TTS work together.",
      "Build and deploy a voice agent that handles speech input, generates LLM responses, and replies using custom voices while managing latency and user interruptions.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
    ],
    aboutCourse: `Join Building AI Voice Agents for Production, created in collaboration with LiveKit and RealAvatar, and taught by Russ d’Sa (Co-founder & CEO of LiveKit), Shayne Parmelee (Developer Advocate, LiveKit), and Nedelina Teneva (Head of AI at RealAvatar, an AI Fund portfolio company). The course also incorporates voice technology from ElevenLabs, a supporting contributor to the project.

Voice agents combine speech and reasoning capabilities to enable real-time, human-like conversations. They’re already being used to enhance learning, support customer service, and improve accessibility in healthcare and talk therapy.

In this course, you’ll learn how to build voice agents that listen, reason, and respond naturally. You’ll follow the architecture used to create Andrew Avatar, a collaborative project between DeepLearning.AI and RealAvatar that responds to users in Andrew Ng’s voice. You’ll build a voice agent from scratch and deploy it to the cloud, enabling support for many simultaneous users.

By the end of this course, you’ll have learned the components of an AI voice agent pipeline, combined them into a system with low-latency communication, and deployed them on cloud infrastructure so it scales to many users.`,
    whoShouldJoin:
      "Anyone who wants to build conversational voice applications using LLMs. You’ll get the most out of this course if you’re already familiar with basic Python and foundational AI workflows.",
    courseOutline: [
      {
        title: "Introduction",
        type: "Video",
        duration: "3 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      { title: "Why MCP", type: "Video", duration: "7 mins", hasCode: false },
      {
        title: "MCP Architecture",
        type: "Video",
        duration: "14 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Chatbot Example",
        type: "Video",
        duration: "7 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Creating MCP Server",
        type: "Video",
        duration: "8 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Creating MCP Client",
        type: "Video",
        duration: "9 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Connecting Chatbot to Reference Server",
        type: "Video",
        duration: "12 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Prompt & Resource Features",
        type: "Video",
        duration: "11 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Claude Desktop Setup",
        type: "Video",
        duration: "6 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Deploying Remote Servers",
        type: "Video",
        duration: "7 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Conclusion",
        type: "Video",
        duration: "9 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      { title: "Quiz", type: "Quiz", duration: "1 min", hasCode: false },
      {
        title: "Appendix – Tips & Help",
        type: "Reading",
        duration: "—",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
    ],
  },

  {
    id: 3,
    title: "Generative AI for Software Development",
    type: "Specialization",
    description:
      "Master the tools and techniques for integrating generative AI into software projects. Learn about LLMs, prompt engineering, and practical deployments.",
    image: course_img,
    collaboratorName: "Meta",
    collaboratorLogo: openai,
  },
  {
    id: 4,
    title: "DSPy: Build and Optimize Agentic Apps",
    type: "Short Course",
    description:
      "Dive deep into DSPy to build and optimize agentic applications. From architecture to deployment, get hands-on with powerful AI workflows.",
    image: course_img,
    collaboratorName: "AI-Academy",
    collaboratorLogo: openai,
    whatYouWillLearn: [
      "Understand the core architecture of voice agents, including the trade-offs between modular pipelines and real-time APIs, and how components like STT, LLMs, and TTS work together.",
      "Build and deploy a voice agent that handles speech input, generates LLM responses, and replies using custom voices while managing latency and user interruptions.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
    ],
    aboutCourse: `Join Building AI Voice Agents for Production, created in collaboration with LiveKit and RealAvatar, and taught by Russ d’Sa (Co-founder & CEO of LiveKit), Shayne Parmelee (Developer Advocate, LiveKit), and Nedelina Teneva (Head of AI at RealAvatar, an AI Fund portfolio company). The course also incorporates voice technology from ElevenLabs, a supporting contributor to the project.

Voice agents combine speech and reasoning capabilities to enable real-time, human-like conversations. They’re already being used to enhance learning, support customer service, and improve accessibility in healthcare and talk therapy.

In this course, you’ll learn how to build voice agents that listen, reason, and respond naturally. You’ll follow the architecture used to create Andrew Avatar, a collaborative project between DeepLearning.AI and RealAvatar that responds to users in Andrew Ng’s voice. You’ll build a voice agent from scratch and deploy it to the cloud, enabling support for many simultaneous users.

By the end of this course, you’ll have learned the components of an AI voice agent pipeline, combined them into a system with low-latency communication, and deployed them on cloud infrastructure so it scales to many users.`,
    whoShouldJoin:
      "Anyone who wants to build conversational voice applications using LLMs. You’ll get the most out of this course if you’re already familiar with basic Python and foundational AI workflows.",
    courseOutline: [
      {
        title: "Introduction 2nd",
        type: "Video",
        duration: "3 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      { title: "Why MCP", type: "Video", duration: "7 mins", hasCode: false },
      {
        title: "MCP Architecture",
        type: "Video",
        duration: "14 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Chatbot Example",
        type: "Video",
        duration: "7 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Creating MCP Server",
        type: "Video",
        duration: "8 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Creating MCP Client",
        type: "Video",
        duration: "9 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Connecting Chatbot to Reference Server",
        type: "Video",
        duration: "12 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Prompt & Resource Features",
        type: "Video",
        duration: "11 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Claude Desktop Setup",
        type: "Video",
        duration: "6 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Deploying Remote Servers",
        type: "Video",
        duration: "7 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Conclusion",
        type: "Video",
        duration: "9 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      { title: "Quiz", type: "Quiz", duration: "1 min", hasCode: false },
      {
        title: "Appendix – Tips & Help",
        type: "Reading",
        duration: "—",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
    ],
  },
  {
    id: 5,
    title: "Orchestrating Workflows for GenAI Applications",
    type: "Course",
    description:
      "Understand and implement orchestration patterns for GenAI applications. Work with modern tools to create robust and scalable AI workflows.",
    image: course_img,
    collaboratorName: "Stanford Online",
    collaboratorLogo: openai,
  },
  {
    id: 6,
    title: "Getting Structured LLM Output",
    type: "Specialization",
    description:
      "Learn how to design prompts and integrate APIs to ensure structured outputs from large language models for your projects.",
    image: course_img,
    collaboratorName: "Hugging Face",
    collaboratorLogo: huggingface,
  },

  // 🆕 Additional courses
  {
    id: 7,
    title: "Advanced Prompt Engineering",
    type: "Short Course",
    description:
      "Explore advanced techniques in prompt engineering and design effective AI workflows.",
    image: course_img,
    collaboratorName: "OpenAI",
    collaboratorLogo: openai,
    whatYouWillLearn: [
      "Understand the core architecture of voice agents, including the trade-offs between modular pipelines and real-time APIs, and how components like STT, LLMs, and TTS work together.",
      "Build and deploy a voice agent that handles speech input, generates LLM responses, and replies using custom voices while managing latency and user interruptions.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
    ],
    aboutCourse: `Join Building AI Voice Agents for Production, created in collaboration with LiveKit and RealAvatar, and taught by Russ d’Sa (Co-founder & CEO of LiveKit), Shayne Parmelee (Developer Advocate, LiveKit), and Nedelina Teneva (Head of AI at RealAvatar, an AI Fund portfolio company). The course also incorporates voice technology from ElevenLabs, a supporting contributor to the project.

Voice agents combine speech and reasoning capabilities to enable real-time, human-like conversations. They’re already being used to enhance learning, support customer service, and improve accessibility in healthcare and talk therapy.

In this course, you’ll learn how to build voice agents that listen, reason, and respond naturally. You’ll follow the architecture used to create Andrew Avatar, a collaborative project between DeepLearning.AI and RealAvatar that responds to users in Andrew Ng’s voice. You’ll build a voice agent from scratch and deploy it to the cloud, enabling support for many simultaneous users.

By the end of this course, you’ll have learned the components of an AI voice agent pipeline, combined them into a system with low-latency communication, and deployed them on cloud infrastructure so it scales to many users.`,
    whoShouldJoin:
      "Anyone who wants to build conversational voice applications using LLMs. You’ll get the most out of this course if you’re already familiar with basic Python and foundational AI workflows.",
    courseOutline: [
      {
        title: "Introduction 2nd",
        type: "Video",
        duration: "3 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      { title: "Why MCP", type: "Video", duration: "7 mins", hasCode: false },
      {
        title: "MCP Architecture",
        type: "Video",
        duration: "14 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Chatbot Example",
        type: "Video",
        duration: "7 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Creating MCP Server",
        type: "Video",
        duration: "8 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Creating MCP Client",
        type: "Video",
        duration: "9 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Connecting Chatbot to Reference Server",
        type: "Video",
        duration: "12 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Prompt & Resource Features",
        type: "Video",
        duration: "11 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Claude Desktop Setup",
        type: "Video",
        duration: "6 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Deploying Remote Servers",
        type: "Video",
        duration: "7 mins",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      {
        title: "Conclusion",
        type: "Video",
        duration: "9 mins",
        hasCode: false,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
      { title: "Quiz", type: "Quiz", duration: "1 min", hasCode: false },
      {
        title: "Appendix – Tips & Help",
        type: "Reading",
        duration: "—",
        hasCode: true,
        videoUrl: "https://www.youtube.com/embed/arch789",
      },
    ],
  },
  {
    id: 8,
    title: "AI for Business Leaders",
    type: "Course",
    description:
      "Equip yourself with the knowledge to leverage AI in strategic business decisions.",
    image: course_img,
    collaboratorName: "AWS",
    collaboratorLogo: AWS,
  },
  {
    id: 9,
    title: "Machine Learning Foundations",
    type: "Specialization",
    description:
      "Cover machine learning basics, including supervised and unsupervised learning techniques.",
    image: course_img,
    collaboratorName: "Meta",
    collaboratorLogo: openai,
  },
  {
    id: 10,
    title: "Full Stack AI Applications",
    type: "Short Course",
    description:
      "Learn how to integrate AI into full stack applications with React and Django.",
    image: course_img,
    collaboratorName: "AI-Academy",
    collaboratorLogo: openai,
    whatYouWillLearn: [
      "Understand the core architecture of voice agents, including the trade-offs between modular pipelines and real-time APIs, and how components like STT, LLMs, and TTS work together.",
      "Build and deploy a voice agent that handles speech input, generates LLM responses, and replies using custom voices while managing latency and user interruptions.",
      "Measure and optimize latency across your voice pipeline, and apply strategies to make your agent feel more natural, responsive, and scalable in real-world settings.",
    ],
    aboutCourse: `Join Building AI Voice Agents for Production, created in collaboration with LiveKit and RealAvatar, and taught by Russ d’Sa (Co-founder & CEO of LiveKit), Shayne Parmelee (Developer Advocate, LiveKit), and Nedelina Teneva (Head of AI at RealAvatar, an AI Fund portfolio company). The course also incorporates voice technology from ElevenLabs, a supporting contributor to the project.

Voice agents combine speech and reasoning capabilities to enable real-time, human-like conversations. They’re already being used to enhance learning, support customer service, and improve accessibility in healthcare and talk therapy.

In this course, you’ll learn how to build voice agents that listen, reason, and respond naturally. You’ll follow the architecture used to create Andrew Avatar, a collaborative project between DeepLearning.AI and RealAvatar that responds to users in Andrew Ng’s voice. You’ll build a voice agent from scratch and deploy it to the cloud, enabling support for many simultaneous users.

By the end of this course, you’ll have learned the components of an AI voice agent pipeline, combined them into a system with low-latency communication, and deployed them on cloud infrastructure so it scales to many users.`,
    whoShouldJoin:
      "Anyone who wants to build conversational voice applications using LLMs. You’ll get the most out of this course if you’re already familiar with basic Python and foundational AI workflows.",
  },

  {
  id: 101,
  type: "Specialization",
  title: "Data Analytics Specialization",
  instructor: "Alex Aklson",
  instructorTitle: "Senior Data Scientist, IBM",
  instructorImage: "https://coursera.org/images/instructors/alex-aklson.jpg",
  partner: "IBM",
  logo: "https://coursera.org/images/logos/ibm.png",
  level: "Beginner",
  duration: "4 months",
  aboutCourse: "This specialization will guide you through the foundations of deep learning, helping you build neural networks and understand the key aspects of AI development.",
  about:
    "Launch your career in data analytics. Build job-ready skills for an in-demand career.",
  whatYouWillLearn: [
    "Basic data analytic methods using spreadsheets",
    "SQL for data extraction and manipulation",
    "Data visualization using IBM Cognos Analytics",
    "Applying Python for data analysis"
  ],
  outcomes: [
    "Gain foundational understanding of data analysis",
    "Work with real-world datasets",
    "Prepare for entry-level data analyst roles"
  ],
  skills: [
    "Data Analysis",
    "Excel",
    "SQL",
    "Data Visualization",
    "Python",
    "IBM Cognos Analytics"
  ],
  videoUrl: "https://www.youtube.com/embed/3kSKniM0M8g",
  courseOutline: [
    {
      title: "Introduction to Data Analytics",
      description:
        "Learn about the world of data analytics and gain insights into the data ecosystem.",
      duration: "6 hours"
    },
    {
      title: "Excel Basics for Data Analysis",
      description:
        "Use Excel to perform data wrangling and analysis with functions and pivot tables.",
      duration: "8 hours"
    }
  ],
  faqs: [
    {
      question: "What background knowledge is required?",
      answer: "No prior experience is required. This specialization is designed for beginners."
    },
    {
      question: "Can I get a job after completing this specialization?",
      answer: "Yes, it prepares you for entry-level data analyst roles."
    }
  ]
},
{
  id: 102,
  type: "Specialization",
  title: "Deep Learning Specialization",
  instructor: "Andrew Neg",
  instructorTitle: "Founder, DeepLearning.AI",
  instructorImage: "https://www.coursera.org/instructor/~andrewng/photo.jpg",
  partner: "DeepLearning.AI",
  logo: "https://www.coursera.org/partner-logo/deeplearningai.png",
  level: "Intermediate",
  duration: "3 months (10 hours/week)",
  aboutCourse: "This specialization teaches how to apply machine learning to production environments, including data pipelines, model deployment, and performance monitoring.",
  about:
    "Master Deep Learning, and break into AI. Learn from Andrew Ng, a pioneer in machine learning and co-founder of Coursera.",
  whatYouWillLearn: [
    "Understand the major technology trends driving Deep Learning",
    "Build, train and apply fully connected deep neural networks",
    "Implement vectorized neural networks and deep learning algorithms",
    "Build and apply convolutional networks, recurrent networks, and more"
  ],
  outcomes: [
    "Gain hands-on experience with deep learning tools and techniques",
    "Build and optimize deep neural networks",
    "Apply deep learning to computer vision and natural language processing",
    "Advance your career in AI and Machine Learning"
  ],
  skills: [
    "Deep Learning",
    "Neural Networks",
    "Machine Learning",
    "TensorFlow",
    "Computer Vision",
    "Sequence Models",
    "Artificial Neural Networks"
  ],
  videoUrl: "https://www.youtube.com/embed/CS4cs9xVecg",
  courseOutline: [
    {
      title: "Neural Networks and Deep Learning",
      description:
        "Understand the foundations of deep learning and build your first neural networks.",
      duration: "15 hours"
    },
    {
      title: "Improving Deep Neural Networks",
      description:
        "Tune hyperparameters and apply regularization techniques to improve performance.",
      duration: "12 hours"
    },
    {
      title: "Structuring Machine Learning Projects",
      description:
        "Learn strategies for structuring machine learning projects and diagnosing errors.",
      duration: "8 hours"
    },
    {
      title: "Convolutional Neural Networks",
      description:
        "Apply deep learning to computer vision tasks using CNNs.",
      duration: "14 hours"
    },
    {
      title: "Sequence Models",
      description:
        "Build models for sequence data using RNNs and LSTMs for tasks like speech recognition and music generation.",
      duration: "16 hours"
    }
  ],
  faqs: [
    {
      question: "Do I need to know machine learning beforehand?",
      answer: "Yes, basic understanding of machine learning and Python is recommended."
    },
    {
      question: "Will I get hands-on practice?",
      answer: "Yes, you will build deep learning models and apply them in real-world projects."
    }
  ]
},
{
  id: 103,
  type: "Specialization",
  title: "TensorFlow Developer Specialization",
  instructor: "Laurence Moroney",
  instructorTitle: "AI Lead at Google",
  instructorImage: "https://www.coursera.org/instructor/~laurencemoroney/photo.jpg",
  partner: "DeepLearning.AI",
  logo: "https://www.coursera.org/partner-logo/deeplearningai.png",
  level: "Intermediate",
  duration: "4 months (5 hours/week)",
  aboutCourse: "This specialization teaches you how to use TensorFlow to build and deploy machine learning models, including deep learning applications.",
  about:
    "Learn how to build deep learning applications with TensorFlow. Master computer vision, NLP, and time series forecasting using the most powerful open-source ML framework.",
  whatYouWillLearn: [
    "Understand the basics of TensorFlow and how it works",
    "Build image recognition, object detection, and text classification models",
    "Implement real-world AI applications including style transfer and NLP",
    "Train neural networks and improve accuracy with data augmentation"
  ],
  outcomes: [
    "Gain fluency in TensorFlow for a career in AI development",
    "Create deep learning models for real-world apps",
    "Prepare for the TensorFlow Developer Certificate exam",
    "Develop computer vision, NLP, and sequence models"
  ],
  skills: [
    "TensorFlow",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing (NLP)",
    "Time Series Forecasting",
    "Image Classification",
    "Object Detection"
  ],
  videoUrl: "https://www.youtube.com/embed/tPYj3fFJGjk",
  courseOutline: [
    {
      title: "Introduction to TensorFlow for AI",
      description:
        "Build your first neural network and use it to recognize images of clothing.",
      duration: "12 hours"
    },
    {
      title: "Convolutional Neural Networks in TensorFlow",
      description:
        "Apply CNNs to real-world problems like sign language recognition.",
      duration: "10 hours"
    },
    {
      title: "Natural Language Processing in TensorFlow",
      description:
        "Use NLP tools to analyze text and train models like RNNs and LSTMs.",
      duration: "14 hours"
    },
    {
      title: "Sequences, Time Series and Prediction",
      description:
        "Forecast time series data using deep learning methods.",
      duration: "11 hours"
    }
  ],
  faqs: [
    {
      question: "Do I need previous experience with TensorFlow?",
      answer: "No prior TensorFlow experience is needed, but Python and ML basics help."
    },
    {
      question: "Will I be ready for the TensorFlow Developer Certificate?",
      answer: "Yes, this specialization is designed to prepare you for the certification."
    }
  ]
},
{
  id: 104,
  type: "Specialization",
  title: "AI For Everyone",
  instructor: "Andrew Ng",
  instructorTitle: "Founder of DeepLearning.AI",
  instructorImage: "https://www.coursera.org/instructor/~andrewng/photo.jpg",
  partner: "DeepLearning.AI",
  logo: "https://www.coursera.org/partner-logo/deeplearningai.png",
  level: "Beginner",
  duration: "4 weeks (2 hours/week)",
  aboutCourse: "This course is designed for non-technical professionals to understand AI concepts, applications, and how to implement AI strategies in their organizations.",
  about:
    "AI is not only for engineers. Learn what AI can and cannot do, how to navigate through an AI-powered world, and how to build an AI strategy in your company.",
  whatYouWillLearn: [
    "Understand what AI can and cannot do",
    "Learn how to navigate ethical and societal issues surrounding AI",
    "Develop strategies for applying AI in business",
    "Gain non-technical knowledge that will help you work with AI teams"
  ],
  outcomes: [
    "Understand the basic concepts and limitations of AI",
    "Communicate more effectively with AI teams",
    "Contribute to AI strategy in your organization",
    "Make informed decisions around AI-powered products"
  ],
  skills: [
    "AI Strategy",
    "Ethical AI",
    "AI Applications",
    "AI in Business",
    "Artificial Intelligence Basics",
    "Team Collaboration with AI Engineers"
  ],
  videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
  courseOutline: [
    {
      title: "What is AI?",
      description:
        "Understand how AI works and its capabilities and limitations.",
      duration: "5 hours"
    },
    {
      title: "Building AI Projects",
      description:
        "Learn the workflow and roles involved in AI projects.",
      duration: "6 hours"
    },
    {
      title: "AI in Your Organization",
      description:
        "Discover how to identify AI opportunities in your workplace.",
      duration: "4 hours"
    },
    {
      title: "AI and Society",
      description:
        "Explore the societal impacts, fairness, and ethics of AI.",
      duration: "5 hours"
    }
  ],
  faqs: [
    {
      question: "Is this course technical?",
      answer: "No, this course is designed for non-technical professionals."
    },
    {
      question: "Do I need any programming experience?",
      answer: "Not at all. This specialization is for learners of all backgrounds."
    }
  ]
},
{
  id: 105,
  type: "Specialization",
  title: "Generative Adversarial Networks (GANs)",
  instructor: "Sharon Zhou",
  instructorTitle: "Instructor at Stanford University",
  instructorImage: "https://www.coursera.org/instructor/~sharonzhou/photo.jpg",
  partner: "DeepLearning.AI",
  logo: "https://www.coursera.org/partner-logo/deeplearningai.png",
  level: "Advanced",
  duration: "4 months (5 hours/week)",
  aboutCourse: "This specialization focuses on building and applying Generative Adversarial Networks (GANs) for various applications, including image generation and data synthesis.",
  about:
    "This Specialization teaches you to build Generative Adversarial Networks (GANs), which are widely used for image generation, data synthesis, and unsupervised learning.",
  whatYouWillLearn: [
    "Understand the intuition behind GANs and how they work",
    "Build and train basic and deep convolutional GANs",
    "Apply GANs to image and data generation tasks",
    "Explore conditional GANs and advanced techniques"
  ],
  outcomes: [
    "Build GAN architectures from scratch using TensorFlow",
    "Apply GANs to solve real-world image generation tasks",
    "Understand and troubleshoot training instability in GANs",
    "Use GANs for creative applications like art and style transfer"
  ],
  skills: [
    "Generative Adversarial Networks",
    "Deep Learning",
    "TensorFlow",
    "Image Generation",
    "Convolutional Neural Networks",
    "Training GANs"
  ],
  videoUrl: "https://www.youtube.com/embed/8L11aMN5KY8",
  courseOutline: [
    {
      title: "Build Basic GANs",
      description:
        "Understand the structure and training process of simple GANs.",
      duration: "10 hours"
    },
    {
      title: "Deep Convolutional GANs",
      description:
        "Create deep convolutional networks for more complex image generation.",
      duration: "12 hours"
    },
    {
      title: "Conditional GANs",
      description:
        "Generate images based on labels using Conditional GANs.",
      duration: "9 hours"
    },
    {
      title: "Advanced GAN Techniques",
      description:
        "Study techniques to improve GAN performance and stability.",
      duration: "11 hours"
    }
  ],
  faqs: [
    {
      question: "What are the prerequisites?",
      answer:
        "You should have prior knowledge of Python, deep learning, and neural networks."
    },
    {
      question: "Do I need to use TensorFlow?",
      answer:
        "Yes, this specialization focuses on building GANs using TensorFlow and Keras."
    }
  ]
},
{
  id: 106,
  type: "Specialization",
  title: "Natural Language Processing Specialization",
  instructor: "Younes Bensouda Mourri, Łukasz Kaiser",
  instructorTitle: "Stanford University & Google Brain",
  instructorImage: "https://www.coursera.org/instructor/~younesmourri/photo.jpg", // you can add Kaiser separately if needed
  partner: "DeepLearning.AI",
  logo: "https://www.coursera.org/partner-logo/deeplearningai.png",
  level: "Intermediate",
  duration: "4 months (5 hours/week)",
  aboutCourse: "This specialization covers the fundamentals of natural language processing (NLP) using deep learning techniques, including text classification, sentiment analysis, and machine translation.",
  about:
    "This Specialization will equip you with the fundamental tools and techniques to process and understand natural language data using deep learning.",
  whatYouWillLearn: [
    "Classify and cluster text using traditional and deep learning techniques",
    "Build sentiment analysis and translation models",
    "Use RNNs, GRUs, LSTMs, and transformers for NLP tasks",
    "Apply attention mechanisms to improve NLP performance"
  ],
  outcomes: [
    "Build end-to-end Natural Language Processing pipelines",
    "Translate languages using encoder-decoder architecture",
    "Summarize text and perform named entity recognition",
    "Understand how state-of-the-art NLP models like BERT and transformers work"
  ],
  skills: [
    "Natural Language Processing",
    "Recurrent Neural Networks (RNN)",
    "Transformer Models",
    "Text Classification",
    "Sequence-to-Sequence Models",
    "Attention Mechanism"
  ],
  videoUrl: "https://www.youtube.com/embed/HMYY7fyeIuI",
  courseOutline: [
    {
      title: "Classification and Vector Spaces",
      description:
        "Explore text preprocessing, vector space models, and text classification.",
      duration: "10 hours"
    },
    {
      title: "Sequence Models",
      description:
        "Learn about RNNs, GRUs, and LSTMs for text generation and classification.",
      duration: "12 hours"
    },
    {
      title: "Attention Models",
      description:
        "Implement attention mechanisms and understand how transformers work.",
      duration: "11 hours"
    },
    {
      title: "Transformer Models and BERT",
      description:
        "Use state-of-the-art NLP models like BERT for downstream tasks.",
      duration: "12 hours"
    }
  ],
  faqs: [
    {
      question: "Is this course suitable for beginners?",
      answer:
        "This specialization is best for learners with prior knowledge of Python and deep learning."
    },
    {
      question: "What libraries are used?",
      answer:
        "You'll use TensorFlow and HuggingFace's Transformers library in some exercises."
    }
  ]
},
{
  id: 107,
  type: "Specialization",
  title: "AI For Everyone",
  instructor: "Andrew Ng",
  instructorTitle: "Founder, DeepLearning.AI | Co-founder, Coursera",
  instructorImage: "https://www.deeplearning.ai/_next/image?url=%2Fimages%2Finstructors%2Fandrew-ng.png&w=256&q=75",
  partner: "DeepLearning.AI",
  logo: "https://www.coursera.org/partner-logo/deeplearningai.png",
  level: "Beginner",
  duration: "4 weeks (3 hours/week)",
  aboutCourse: "This course is designed for non-technical professionals to understand AI concepts, applications, and how to implement AI strategies in their organizations.",
  about:
    "AI is not just for engineers. If you want your organization to become better at using AI, this is the course to tell everyone – especially your non-technical colleagues – to take.",
  whatYouWillLearn: [
    "Understand what AI can and cannot do",
    "Learn how to navigate through an AI-transformed industry",
    "Identify opportunities to apply AI to problems in your own organization",
    "Work with an AI team and build an AI strategy"
  ],
  outcomes: [
    "Gain a non-technical introduction to AI",
    "Understand how AI impacts business strategy",
    "Prepare your team for AI transformation",
    "Communicate effectively with AI engineers"
  ],
  skills: [
    "Artificial Intelligence",
    "AI Strategy",
    "AI Applications",
    "Business Transformation",
    "Team Collaboration"
  ],
  videoUrl: "https://www.youtube.com/embed/21EiKfQYZXc",
  courseOutline: [
    {
      title: "What is AI?",
      description: "Understand the definition of AI and its business implications.",
      duration: "2 hours"
    },
    {
      title: "Building AI Projects",
      description: "Learn the workflow for building AI applications.",
      duration: "2.5 hours"
    },
    {
      title: "Working with AI Teams",
      description: "Discover how to manage and collaborate with AI experts.",
      duration: "3 hours"
    },
    {
      title: "AI and Society",
      description: "Explore how AI is changing the world and the ethical concerns it raises.",
      duration: "2 hours"
    }
  ],
  faqs: [
    {
      question: "Is coding required for this course?",
      answer: "No, this course is non-technical and requires no programming knowledge."
    },
    {
      question: "Who should take this course?",
      answer: "It’s ideal for business leaders, professionals, and anyone interested in AI."
    }
  ]
},
{
  id: 108,
  type: "Specialization",
  title: "Generative Adversarial Networks (GANs) Specialization",
  instructor: "Sharon Zhou",
  instructorTitle: "Lecturer, Stanford University",
  instructorImage: "https://www.deeplearning.ai/_next/image?url=%2Fimages%2Finstructors%2Fsharon-zhou.png&w=256&q=75",
  partner: "DeepLearning.AI",
  logo: "https://www.coursera.org/partner-logo/deeplearningai.png",
  level: "Intermediate",
  duration: "3 months (4 hours/week)",
  aboutCourse: "This specialization teaches you how to build and apply Generative Adversarial Networks (GANs) for various applications, including image generation and data synthesis.",
  about:
    "This Specialization teaches you how to build Generative Adversarial Networks (GANs), a class of machine learning frameworks where two neural networks contest with each other. You'll learn how to implement GANs using TensorFlow, understand their architecture, and apply them to generate images.",
  whatYouWillLearn: [
    "Build a GAN from scratch using TensorFlow and Keras",
    "Understand the theory behind GAN loss functions",
    "Train GANs with different architectures: DCGAN, Conditional GANs, CycleGANs",
    "Evaluate GAN outputs and apply them to real-world projects"
  ],
  outcomes: [
    "Develop foundational understanding of GANs",
    "Apply different types of GANs to image generation tasks",
    "Enhance creativity in AI-driven generative tasks",
    "Work on industry-level GAN projects"
  ],
  skills: [
    "TensorFlow",
    "Keras",
    "Computer Vision",
    "Deep Learning",
    "Generative Models",
    "Neural Networks"
  ],
  videoUrl: "https://www.youtube.com/embed/Yy2Rfbvjj6w",
  courseOutline: [
    {
      title: "Introduction to GANs",
      description: "Understand the core idea and mathematics of GANs.",
      duration: "3 hours"
    },
    {
      title: "Building Basic GANs",
      description: "Start coding your first GAN with TensorFlow and Keras.",
      duration: "4 hours"
    },
    {
      title: "Advanced GAN Architectures",
      description: "Implement Conditional GANs and CycleGANs.",
      duration: "4 hours"
    },
    {
      title: "GAN Applications",
      description: "Explore creative and industrial use-cases of GANs.",
      duration: "3 hours"
    }
  ],
  faqs: [
    {
      question: "Do I need prior deep learning experience?",
      answer: "Yes, prior knowledge of neural networks and Python programming is expected."
    },
    {
      question: "What tools will be used?",
      answer: "You will work with TensorFlow, Keras, and Python-based environments."
    }
  ]
},
{
  id: 109,
  type: "Specialization",
  title: "Natural Language Processing Specialization",
  instructor: "Younes Bensouda Mourri, Łukasz Kaiser, Eddy Shyu",
  instructorTitle: "Instructors from DeepLearning.AI and Google",
  instructorImage: "https://www.deeplearning.ai/_next/image?url=%2Fimages%2Finstructors%2Fnlp.png&w=256&q=75",
  partner: "DeepLearning.AI",
  logo: "https://www.coursera.org/partner-logo/deeplearningai.png",
  level: "Intermediate",
  duration: "4 months (4 hours/week)",
  aboutCourse: "This specialization covers the fundamentals of natural language processing (NLP) using deep learning techniques, including text classification, sentiment analysis, and machine translation.",
  about:
    "This Specialization will teach you to process and understand human language to perform tasks like sentiment analysis, translation, and chatbot creation. You'll explore both classical and deep learning approaches.",
  whatYouWillLearn: [
    "Apply logistic regression and Naive Bayes to sentiment analysis",
    "Use word embeddings like Word2Vec and GloVe",
    "Implement RNNs, GRUs, and LSTMs for sequence modeling",
    "Build and deploy attention-based models like Transformers"
  ],
  outcomes: [
    "Understand NLP pipelines and applications",
    "Gain practical experience with real datasets",
    "Master deep learning architectures for NLP tasks",
    "Deploy NLP models to real-world applications"
  ],
  skills: [
    "Natural Language Processing",
    "Word Embeddings",
    "Sequence Models",
    "Transformer Architecture",
    "Sentiment Analysis",
    "Machine Translation"
  ],
  videoUrl: "https://www.youtube.com/embed/8rXD5-xhemo",
  courseOutline: [
    {
      title: "Classical NLP Techniques",
      description: "Sentiment classification, tokenization, POS tagging, and more.",
      duration: "4 hours"
    },
    {
      title: "Word Embeddings",
      description: "Learn how to represent words in dense vectors.",
      duration: "3 hours"
    },
    {
      title: "Sequence Models",
      description: "Build RNNs and LSTMs from scratch.",
      duration: "5 hours"
    },
    {
      title: "Attention and Transformers",
      description: "Implement modern transformer-based architectures.",
      duration: "4 hours"
    }
  ],
  faqs: [
    {
      question: "Is NLP beginner-friendly?",
      answer: "Some experience with Python and basic ML is expected."
    },
    {
      question: "Are projects included?",
      answer: "Yes, each course includes practical projects using real-world text datasets."
    }
  ]
},
{
  id: 110,
  type: "Specialization",
  title: "TensorFlow Developer Professional Certificate",
  instructor: "Laurence Moroney",
  instructorTitle: "AI Advocate, Google",
  instructorImage: "https://www.deeplearning.ai/_next/image?url=%2Fimages%2Finstructors%2Flaurence-moroney.png&w=256&q=75",
  partner: "DeepLearning.AI",
  logo: "https://www.coursera.org/partner-logo/deeplearningai.png",
  level: "Intermediate",
  duration: "4 months (5 hours/week)",
  aboutCourse: "This specialization prepares you for the TensorFlow Developer Certificate exam, teaching you how to build and train neural networks for computer vision, NLP, and time series tasks using TensorFlow and Keras.",
  about:
    "Prepare for the TensorFlow Developer Certificate exam with this hands-on Specialization. You'll build and train neural networks for computer vision, NLP, and time series tasks using TensorFlow and Keras.",
  whatYouWillLearn: [
    "Build ML models with TensorFlow and Keras",
    "Handle real-world image and text data",
    "Understand convolutions and time series forecasting",
    "Prepare for the TensorFlow certification exam"
  ],
  outcomes: [
    "Develop scalable models using TensorFlow",
    "Apply TensorFlow for computer vision and NLP",
    "Earn TensorFlow Developer Certificate",
    "Understand deep learning principles and implementation"
  ],
  skills: [
    "TensorFlow",
    "Keras",
    "Image Classification",
    "Natural Language Processing",
    "Time Series Forecasting"
  ],
  videoUrl: "https://www.youtube.com/embed/tPYj3fFJGjk",
  courseOutline: [
    {
      title: "Introduction to TensorFlow",
      description: "Understand the basics of TensorFlow and model building.",
      duration: "4 hours"
    },
    {
      title: "Computer Vision with CNNs",
      description: "Use convolutional layers to build image classifiers.",
      duration: "5 hours"
    },
    {
      title: "NLP with TensorFlow",
      description: "Process and classify text using LSTMs and embeddings.",
      duration: "5 hours"
    },
    {
      title: "Time Series and Deployment",
      description: "Build forecasting models and learn model deployment.",
      duration: "4 hours"
    }
  ],
  faqs: [
    {
      question: "Does this prepare for the TensorFlow exam?",
      answer: "Yes, this Specialization is aligned with the TensorFlow Developer Certificate exam."
    },
    {
      question: "Do I need a GPU?",
      answer: "A GPU is recommended but not required. Colab can be used."
    }
  ]
},
{
  id: 111,
  type: "Specialization",
  title: "AI For Everyone",
  instructor: "Andrew Ng",
  instructorTitle: "Founder, DeepLearning.AI",
  instructorImage: "https://www.deeplearning.ai/_next/image?url=%2Fimages%2Finstructors%2Fandrew-ng.png&w=256&q=75",
  partner: "DeepLearning.AI",
  logo: "https://www.coursera.org/partner-logo/deeplearningai.png",
  level: "Beginner",
  duration: "4 weeks (3 hours/week)",
  aboutCourse: "This course is designed for non-technical professionals to understand AI concepts, applications, and how to implement AI strategies in their organizations.",
  about:
    "This course is a non-technical introduction to artificial intelligence. You will learn how AI is impacting society and how to navigate the AI-powered future from a business and policy perspective.",
  whatYouWillLearn: [
    "Understand AI terminology and concepts",
    "Learn the workflow of an AI project",
    "Discover how AI can be applied in business",
    "Explore ethical and societal issues in AI"
  ],
  outcomes: [
    "Communicate effectively with AI teams",
    "Make informed decisions about AI adoption",
    "Understand the risks and limitations of AI",
    "Explore career paths in the AI ecosystem"
  ],
  skills: [
    "AI Literacy",
    "Business Strategy",
    "AI Ethics",
    "Project Scoping",
    "Societal Impacts"
  ],
  videoUrl: "https://www.youtube.com/embed/8OYOelSjJ7U",
  courseOutline: [
    {
      title: "What is AI?",
      description: "Get familiar with key terms and examples.",
      duration: "2 hours"
    },
    {
      title: "AI in Practice",
      description: "How companies apply AI in real workflows.",
      duration: "3 hours"
    },
    {
      title: "Working with AI Teams",
      description: "Role of AI teams and business collaboration.",
      duration: "3 hours"
    },
    {
      title: "AI and Society",
      description: "Challenges, risks, and opportunities of AI.",
      duration: "2 hours"
    }
  ],
  faqs: [
    {
      question: "Do I need programming knowledge?",
      answer: "No, this course is non-technical and designed for all backgrounds."
    },
    {
      question: "Is there a project involved?",
      answer: "There are reflective exercises, but no coding assignments."
    }
  ]
},
{
  id: 112,
  type: "Specialization",
  title: "AI For Good Specialization",
  instructor: "DeepLearning.AI Team & Guest Experts",
  instructorTitle: "Global AI Practitioners",
  instructorImage: "https://www.deeplearning.ai/_next/image?url=%2Fimages%2Finstructors%2Fai4g.png&w=256&q=75",
  partner: "DeepLearning.AI",
  logo: "https://www.coursera.org/partner-logo/deeplearningai.png",
  level: "Intermediate",
  duration: "3 months (3 hours/week)",
  aboutCourse: "This soecialization explores how AI can be used to address global challenges like healthcare, climate change, and education. Learn how to design AI systems for social good and apply them responsibly.",
  about:
    "This Specialization explores how AI can be used to address global challenges like healthcare, climate change, and education. Learn how to design AI systems for social good and apply them responsibly.",
  whatYouWillLearn: [
    "Identify opportunities to use AI for social impact",
    "Apply responsible AI development practices",
    "Explore case studies in health, justice, and environment",
    "Build prototype AI tools with real-world datasets"
  ],
  outcomes: [
    "Build AI projects focused on social good",
    "Analyze the ethics and fairness of AI systems",
    "Contribute to AI innovation with societal benefit",
    "Explore collaborations in AI4Good ecosystem"
  ],
  skills: [
    "Responsible AI",
    "Data Ethics",
    "Social Innovation",
    "Impact Analysis",
    "AI Prototyping"
  ],
  videoUrl: "https://www.youtube.com/embed/SEogVAMxwKU",
  courseOutline: [
    {
      title: "AI for Health",
      description: "Understand applications in diagnostics and accessibility.",
      duration: "3 hours"
    },
    {
      title: "AI for Environment",
      description: "Use satellite and sensor data to monitor changes.",
      duration: "3 hours"
    },
    {
      title: "AI for Justice",
      description: "Analyze bias and transparency in legal tech.",
      duration: "4 hours"
    },
    {
      title: "Capstone Project",
      description: "Develop your own AI for Good prototype.",
      duration: "5 hours"
    }
  ],
  faqs: [
    {
      question: "Do I need coding experience?",
      answer: "Some Python experience is helpful but not strictly required.",
    },
    {
      question: "Are case studies real?",
      answer: "Yes, we feature real-world AI4Good applications and experts."
    }
  ]
},
{
  id: 113,
  type: "Specialization",
  title: "AI & Machine Learning for Business Specialization",
  instructor: "Various Instructors",
  instructorTitle: "Industry Experts",
  instructorImage: "https://www.deeplearning.ai/_next/image?url=%2Fimages%2Finstructors%2Fai-ml-business.png&w=256&q=75",
  partner: "DeepLearning.AI",
  logo: "https://www.coursera.org/partner-logo/deeplearningai.png",
  level: "Beginner",
  duration: "3 months (3 hours/week)",
  aboutCourse: "This specialization teaches how AI and machine learning are transforming business. Learn to identify opportunities, lead AI initiatives, and assess ROI from a non-technical, strategic lens.",
  about:
    "This Specialization teaches how AI and ML are transforming business. Learn to identify opportunities, lead AI initiatives, and assess ROI from a non-technical, strategic lens.",
  whatYouWillLearn: [
    "Understand ML use cases in business",
    "Explore tools and techniques without coding",
    "Lead AI strategy in an organization",
    "Evaluate data and model lifecycle from a business view"
  ],
  outcomes: [
    "Lead AI projects from a business perspective",
    "Build AI-driven solutions in your company",
    "Create data-informed strategies",
    "Bridge the gap between data teams and leadership"
  ],
  skills: [
    "AI Strategy",
    "Business Analytics",
    "Leadership",
    "Data-Driven Decision Making",
    "AI Implementation"
  ],
  videoUrl: "https://www.youtube.com/embed/FU_C8Gw-8IQ",
  courseOutline: [
    {
      title: "AI Basics for Business",
      description: "Understand what AI is and why it matters for business.",
      duration: "2.5 hours"
    },
    {
      title: "ML Applications in Industry",
      description: "Explore case studies in retail, finance, and healthcare.",
      duration: "3.5 hours"
    },
    {
      title: "Leading AI Projects",
      description: "Scoping, team setup, and working with data scientists.",
      duration: "3 hours"
    },
    {
      title: "AI Ethics and Risk",
      description: "Address fairness, privacy, and explainability.",  
      duration: "3 hours"
    }
  ],
  faqs: [
    {
      question: "Is this suitable for non-technical leaders?",
      answer: "Yes, this course is designed for business professionals without coding experience."
    },
    {
      question: "What industries are covered?",
      answer: "Finance, retail, healthcare, manufacturing, and more."
    }
  ]
}
];

// collab logos

import AIForGoodlab from "../../assets/collab-logos/collab-AI-for-good-lab.png";
import AWS from "../../assets/collab-logos/collab-AWS.png";
import Cohere from "../../assets/collab-logos/collab-Cohere.png";
import coursera from "../../assets/collab-logos/collab-coursera.png";
import Google_Cloud from "../../assets/collab-logos/collab-Google_Cloud.png";
import huggingface from "../../assets/collab-logos/collab-huggingface.webp";
import Lamini from "../../assets/collab-logos/collab-Lamini.png";
import langchain from "../../assets/collab-logos/collab-langchain.png";
import microsoft from "../../assets/collab-logos/collab-microsoft.webp";
import openai from "../../assets/collab-logos/collab-openai.png";
import stanford from "../../assets/collab-logos/collab-stanford.webp";
import weights from "../../assets/collab-logos/collab-weights.png";
import Google from "../../assets/collab-logos/collab-Google.png";

export const collabLogos = [
  AIForGoodlab,
  AWS,
  Cohere,
  coursera,
  Google_Cloud,
  huggingface,
  Lamini,
  langchain,
  microsoft,
  openai,
  stanford,
  weights,
  Google,
];

//sidebar

export const topics = [
  "Agents",
  "AI Frameworks",
  "AI in Software Development",
  "AI Safety",
  "Anomaly Detection",
  "Chatbots",
  "Compression and Quantization",
  "Computer Vision",
  "Data Engineering",
  "Data Processing",
  "Deep Learning",
  "Diffusion Models",
  "Document Processing",
  "Embeddings",
  "Evaluation and Monitoring",
  "Event-Driven AI",
  "Fine-Tuning",
  "GenAI Applications",
  "Generative Models",
  "LLM Serving",
  "LLMOps",
  "Machine Learning",
  "Mathematical Foundations",
  "MLOps",
  "MultiModal",
  "NLP",
  "On-Device AI",
  "Prompt Engineering",
  "RAG",
  "Search and Retrieval",
  "Supervised Learning",
  "Synthetic Data",
  "Task Automation",
  "Time Series",
  "Transformers",
  "Unsupervised Learning",
  "Vector Databases",
];

export const collaborators = [
  "AGI Inc",
  "AI Dungeon",
  "AI21 labs",
  "Anthropic",
  "Arize AI",
  "Astronomer",
  "AWS",
  "Chroma",
  "CircleCI",
  'Co-authors of "Hands-On Large Language Models"',
  "Cohere",
  "Comet",
  "crewAI",
  "Databricks",
  "DeepLearning.AI",
  "DotTxt",
  "Flower Labs",
  "Giskard",
  "Google",
  "Google Cloud",
  "GuardrailsAI",
  "Haystack",
  "Hugging Face",
  "IBM Research's BeeAI",
  "Intel",
  "Lamini",
  "LangChain",
  "Letta",
  "Livekit, RealAvatar",
  "LlamaIndex",
  "Meta",
  "Microsoft",
  "Mistral AI",
  "MongoDB",
  "Neo4j",
  "NexusFlow",
  "OpenAI",
  "Penn State University",
  "Pinecone",
  "Predibase",
  "Qdrant",
  "Qualcomm",
  "Replit",
  "Stanford Online",
  "StatQuest",
  "Tavily",
  "Together AI",
  "TruEra",
  "University of Washington",
  "Unstructured",
  "Upstage",
  "Vectara",
  "Weaviate",
  "Weights and Biases",
  "WhyLabs",
  "Windsurf",
];

//my learning

export const coursesYouMightLike = [
  {
    id: 1,
    title: "Post-training of LLMs",
    type: "Short Course · 1 hour 16 mins",
    description:
      "Adapt LLMs for specific tasks and behaviors using post-training.",
    image: course_img,
    collaborators: [
      {
        name: "University of Washington",
        logo: AWS,
      },
      {
        name: "NexusFlow",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 2,
    title: "ACP: Agent Communication Protocol",
    type: "Short Course · 1 hour 41 mins",
    description:
      "Learn how autonomous agents communicate effectively and securely.",
    image: course_img,
    collaborators: [
      {
        name: "IBM Research's BeeAI",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 3,
    title: "Building with Llama 4",
    type: "Short Course · 1 hour",
    description:
      "Understand and build applications with Meta’s Llama 4, covering setup",
    image: course_img,
    collaborators: [
      {
        name: "Meta",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 4,
    title: "Introduction to Generative AI",
    type: "Short Course · 50 mins",
    description:
      "Discover the fundamentals of generative AI and how models like GPT..",
    image: course_img,
    collaborators: [
      {
        name: "OpenAI",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 5,
    title: "Ethics in AI Development",
    type: "Short Course · 45 mins",
    description:
      "Explore the ethical considerations and challenges involved in building AI.",
    image: course_img,
    collaborators: [
      {
        name: "Stanford University",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 6,
    title: "Deploying AI Applications",
    type: "Short Course · 1 hour 10 mins",
    description:
      "Learn how to deploy AI-powered applications efficiently using.",
    image: course_img,
    collaborators: [
      {
        name: "Google Cloud",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
  {
    id: 7,
    title: "Fine-Tuning Transformers",
    type: "Short Course · 1 hour 30 mins",
    description:
      "Master fine-tuning techniques for transformer-based models for NLP.",
    image: course_img,
    collaborators: [
      {
        name: "Hugging Face",
        logo: AWS,
      },
    ],
    tags: [
      "AI Frameworks",
      "Agents",
      "Security",
      "AI Frameworks",
      "Agents",
      "Security",
    ],
  },
];
