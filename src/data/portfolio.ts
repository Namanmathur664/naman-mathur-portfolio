export const profile = {
  name: 'Naman Mathur',
  title: 'Computer Science & Engineering Student',
  headline: 'Building Intelligent Solutions with Data, AI & Engineering.',
  subtitle:
    "CS Engineering student at Manav Rachna College of Engineering with a CGPA of 8.60/10. I design and ship full-stack, database-driven, and machine-learning applications end to end — from schema design to ML pipelines to cloud-deployed interfaces.",
  tagline: 'Full-Stack Developer · ML Engineer · Database Architect',
  email: 'namanmathur664@gmail.com',
  phone: '+91 9311746616',
  location: 'Faridabad, India',
  github: 'https://github.com/namanmathur664', // Replace with your actual GitHub URL
  linkedin: '', // Add your LinkedIn URL here
  resumePath: '/RESUME_1_(1).pdf',
  stats: [
    { label: 'Projects Built', value: '9' },
    { label: 'Certifications', value: '8' },
    { label: 'Research Papers', value: '2' },
    { label: 'CGPA', value: '8.60' },
  ],
};

export const skills = [
  {
    category: 'Programming Languages',
    icon: 'Code2',
    items: ['Python', 'JavaScript', 'SQL', 'C', 'C#', 'R'],
  },
  {
    category: 'Web & Backend',
    icon: 'Globe',
    items: ['React.js', 'Node.js', 'Express.js', 'Flask', 'REST APIs', 'HTML', 'CSS'],
  },
  {
    category: 'Data & Machine Learning',
    icon: 'Brain',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'Streamlit', 'Google Colab'],
  },
  {
    category: 'Databases',
    icon: 'Database',
    items: ['MySQL', 'SQL Server', 'Query Optimization', 'Normalization', 'Indexing'],
  },
  {
    category: 'Cloud & Tools',
    icon: 'Cloud',
    items: ['Microsoft Azure', 'GitHub', 'VS Code'],
  },
  {
    category: 'Core Computer Science',
    icon: 'Cpu',
    items: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'DBMS',
      'Computer Networks',
      'Computer Architecture',
    ],
  },
];

export type ProjectCategory = 'All' | 'ML/AI' | 'Full-Stack' | 'Database' | 'Cloud' | 'Analytics';

export const projects = [
  {
    id: 1,
    name: 'Student Grading System Model',
    description:
      'End-to-end machine learning pipeline that predicts student final grades from attendance, study hours, assignment scores, and prior exam performance.',
    problem:
      'Educators needed a data-driven way to identify at-risk students before it was too late in the semester.',
    highlights: [
      'Built complete ML pipeline with data preprocessing and feature engineering',
      'Trained and evaluated multiple regression and classification models',
      'Deployed interactive Streamlit/Flask interface for real-time grade predictions',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit', 'Flask'],
    category: 'ML/AI' as ProjectCategory,
    date: 'Jun 2026',
    featured: true,
    color: 'from-cyan-500 to-blue-600',
    icon: 'GraduationCap',
    github: '',
    demo: '',
  },
  {
    id: 2,
    name: 'Plant Disease Detection',
    description:
      'Machine learning classification model to detect plant diseases from images using preprocessing and feature extraction techniques.',
    problem:
      'Automated early detection of plant diseases to reduce crop losses and assist agricultural decision-making.',
    highlights: [
      'Applied image preprocessing and feature extraction to improve accuracy',
      'Developed classification model using Python and ML frameworks',
      'Ongoing research and model improvement',
    ],
    tech: ['Python', 'Machine Learning', 'Image Classification'],
    category: 'ML/AI' as ProjectCategory,
    date: 'Jan 2026 – Present',
    featured: true,
    color: 'from-green-500 to-teal-600',
    icon: 'Leaf',
    github: '',
    demo: '',
  },
  {
    id: 3,
    name: 'Employee Payroll & Admin Dashboard',
    description:
      'Full-stack admin dashboard consolidating user management, transaction monitoring, and inventory tracking into a single centralized interface.',
    problem:
      'Organizations needed a unified control panel for HR, finance, and inventory operations.',
    highlights: [
      'Built RESTful APIs connecting React.js frontend to SQL-backed Node/Express server',
      'Real-time analytics and interactive data visualization',
      'Scalable component-based architecture across modules',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'SQL', 'REST APIs'],
    category: 'Full-Stack' as ProjectCategory,
    date: 'Jun 2026',
    featured: true,
    color: 'from-blue-500 to-violet-600',
    icon: 'LayoutDashboard',
    github: '',
    demo: '',
  },
  {
    id: 4,
    name: 'Library Database Management System',
    description:
      'Full-stack library management platform with complete CRUD operations across books, members, and transactions.',
    problem:
      'Libraries needed to eliminate manual record-keeping and automate overdue fine calculations.',
    highlights: [
      'Automated borrowing/return tracking with fine-calculation engine',
      'Normalized MySQL schema with real-time statistics dashboard',
      'Surfaces library-wide lending trends in real time',
    ],
    tech: ['Node.js', 'Express.js', 'MySQL', 'JavaScript', 'HTML/CSS'],
    category: 'Full-Stack' as ProjectCategory,
    date: 'May 2026 – Jun 2026',
    featured: false,
    color: 'from-amber-500 to-orange-600',
    icon: 'BookOpen',
    github: '',
    demo: '',
  },
  {
    id: 5,
    name: 'Azure Student Management System',
    description:
      'Cloud-integrated student records system deployed on Microsoft Azure with a dynamic statistics dashboard.',
    problem:
      'Educational institutions needed a scalable, cloud-hosted solution to manage student records at scale.',
    highlights: [
      'Full CRUD operations through a responsive Flask web interface',
      'Dynamic dashboard with real-time student statistics by year, grade, and course',
      'Cloud deployment on Microsoft Azure',
    ],
    tech: ['Flask', 'Microsoft Azure', 'Python'],
    category: 'Cloud' as ProjectCategory,
    date: 'May 2026',
    featured: false,
    color: 'from-sky-500 to-blue-700',
    icon: 'Cloud',
    github: '',
    demo: '',
  },
  {
    id: 6,
    name: 'Hotel Booking Database',
    description:
      'Normalized relational database managing complete hotel operations — rooms, guests, bookings, payments, and staff records.',
    problem:
      'Hotels needed a reliable, integrity-enforced database to handle complex booking and check-in workflows.',
    highlights: [
      'Implemented primary/foreign key constraints and indexing',
      'Optimized query performance for room availability and check-in/check-out workflows',
      'Full normalization to reduce data redundancy',
    ],
    tech: ['SQL', 'Relational Database Design'],
    category: 'Database' as ProjectCategory,
    date: 'Jun 2026 – Present',
    featured: false,
    color: 'from-rose-500 to-pink-600',
    icon: 'Building2',
    github: '',
    demo: '',
  },
  {
    id: 7,
    name: 'Sales Analysis Dashboard',
    description:
      'Interactive dashboard to visualize sales trends and generate actionable insights for business decision-making.',
    problem:
      'Businesses needed clear visual analytics to identify sales patterns and inform strategy.',
    highlights: [
      'Interactive data visualizations for sales trends',
      'Actionable business insights from raw data',
    ],
    tech: ['Data Visualization', 'Analytics'],
    category: 'Analytics' as ProjectCategory,
    date: 'Apr 2026',
    featured: false,
    color: 'from-violet-500 to-purple-700',
    icon: 'BarChart3',
    github: '',
    demo: '',
  },
  {
    id: 8,
    name: 'Placement Management System',
    description:
      'Relational database system managing a student-job matching workflow with optimized reporting queries.',
    problem:
      'Placement cells needed a structured, query-optimized database for managing campus recruitment data.',
    highlights: [
      'Referential-integrity constraints for student-job matching workflow',
      'Optimized JOIN and GROUP BY queries for placement analytics',
    ],
    tech: ['SQL', 'Relational Database Design'],
    category: 'Database' as ProjectCategory,
    date: 'Mar 2026 – Apr 2026',
    featured: false,
    color: 'from-teal-500 to-cyan-700',
    icon: 'Briefcase',
    github: '',
    demo: '',
  },
  {
    id: 9,
    name: 'University Timetable Scheduling System',
    description:
      'Scheduling system implementing priority-based timetable generation with deadlock detection and resolution.',
    problem:
      'Universities needed automated, conflict-free timetable generation with robust deadlock handling.',
    highlights: [
      'Priority scheduling with deadlock detection via preemption and resource allocation',
      'Simulated real-world scenarios with detailed conflict logging',
    ],
    tech: ['Scheduling Algorithms', 'Deadlock Detection', 'Python'],
    category: 'Full-Stack' as ProjectCategory,
    date: 'Feb 2026 – Present',
    featured: false,
    color: 'from-indigo-500 to-blue-700',
    icon: 'CalendarDays',
    github: '',
    demo: '',
  },
];

export const research = [
  {
    id: 1,
    title: 'Research Paper',
    conference: 'ICES ET',
    year: '2025',
    description:
      'Published research contribution at the International Conference on Emerging Sciences and Engineering Technology (ICES ET).',
    area: 'Computer Science & Engineering',
  },
  {
    id: 2,
    title: 'Research Paper',
    conference: 'ICIPAIMAR',
    year: '2026',
    description:
      'Published research contribution at ICIPAIMAR (2026), advancing knowledge in the field of applied intelligent and machine-assisted research.',
    area: 'Applied Machine Intelligence',
  },
];

export const certifications = [
  {
    id: 1,
    name: 'Azure Developer Associate',
    issuer: 'Microsoft',
    issuerShort: 'Microsoft',
    color: 'from-blue-500 to-cyan-500',
    icon: 'Cloud',
  },
  {
    id: 2,
    name: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    issuerShort: 'IBM',
    color: 'from-blue-700 to-blue-500',
    icon: 'Brain',
  },
  {
    id: 3,
    name: 'Google Analytics IQ',
    issuer: 'Google',
    issuerShort: 'Google',
    color: 'from-green-500 to-emerald-500',
    icon: 'BarChart3',
  },
  {
    id: 4,
    name: 'Foundations of Prompt Engineering',
    issuer: 'AWS',
    issuerShort: 'AWS',
    color: 'from-orange-500 to-amber-500',
    icon: 'Zap',
  },
  {
    id: 5,
    name: 'DSA, C++, Computer Networks & Internet Security, Unix',
    issuer: 'Infosys Springboard',
    issuerShort: 'Infosys',
    color: 'from-violet-500 to-purple-600',
    icon: 'Code2',
  },
  {
    id: 6,
    name: 'DBMS (RDBMS) & Microsoft Fabric SQL',
    issuer: 'Udemy',
    issuerShort: 'Udemy',
    color: 'from-red-500 to-rose-500',
    icon: 'Database',
  },
  {
    id: 7,
    name: 'Computer Architecture and Essentials',
    issuer: 'LinkedIn Learning',
    issuerShort: 'LinkedIn',
    color: 'from-sky-500 to-blue-600',
    icon: 'Cpu',
  },
  {
    id: 8,
    name: 'Skill Certification',
    issuer: 'One Roadmap',
    issuerShort: 'One Roadmap',
    color: 'from-teal-500 to-cyan-600',
    icon: 'Award',
  },
  {
   id: 9,
  name: 'Data Analytics Essentials',
  issuer: 'Cisco Networking Academy',
  color: 'from-blue-500 to-cyan-500', // gradient
  icon: 'Award', // lucide-react icon
 
  },
  
];

export const achievements = [
  {
    id: 1,
    title: 'Published at ICES ET',
    description: 'Research paper accepted and published at the International Conference on Emerging Sciences and Engineering Technology.',
    year: '2025',
    icon: 'FileText',
    type: 'Research',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Published at ICIPAIMAR',
    description: 'Research paper accepted and published at ICIPAIMAR, an international conference on applied intelligent and machine-assisted research.',
    year: '2026',
    icon: 'BookOpen',
    type: 'Research',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 3,
    title: 'DedSec Debugging Competition',
    description: 'Participated in the DedSec Debugging Competition, demonstrating competitive problem-solving and debugging skills under pressure.',
    year: '2024',
    icon: 'Trophy',
    type: 'Competition',
    color: 'from-amber-500 to-orange-600',
  },
];

export const education = [
  {
    id: 1,
    institution: 'Manav Rachna College of Engineering',
    degree: 'B.Tech, Computer Science & Engineering',
    duration: '2024 – 2028',
    detail: 'CGPA: 8.60 / 10.00',
    location: 'Faridabad, India',
    current: true,
  },
  {
    id: 2,
    institution: 'Eicher School, Faridabad',
    degree: 'Senior Secondary (XII) — CBSE, Science',
    duration: '2024',
    detail: '78.00%',
    location: 'Faridabad, India',
    current: false,
  },
  {
    id: 3,
    institution: 'Eicher School, Faridabad',
    degree: 'Secondary (X) — CBSE',
    duration: '2021',
    detail: '85.00%',
    location: 'Faridabad, India',
    current: false,
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
