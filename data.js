const profile = {
  name: "พีรพัฒน์ วิไชยวงค์",
  title: "Web Developer & Designer",
  about: "สวัสดีครับ ผม Peerapat นักพัฒนาเว็บไซต์สาย Minimal ที่ชอบสร้างเว็บไซต์เรียบง่ายแต่ดูดี ใช้งานง่าย และ Responsive",
  profileImage: "images/profile.png"
};

const programmingSkills = [
  {
    name: "HTML",
    icon: "fab fa-html5",
    description: "Semantic markup and accessibility",
    proficiency: 95,
    color: "text-orange-500"
  },
  {
    name: "CSS",
    icon: "fab fa-css3-alt",
    description: "Responsive design and animations",
    proficiency: 90,
    color: "text-blue-500"
  },
  {
    name: "JavaScript",
    icon: "fab fa-js-square",
    description: "ES6+, DOM manipulation, APIs",
    proficiency: 85,
    color: "text-yellow-500"
  },
  {
    name: "Python",
    icon: "fab fa-python",
    description: "Web development and automation",
    proficiency: 80,
    color: "text-green-500"
  },
  {
    name: "C++",
    icon: "fas fa-code",
    description: "Data structures and algorithms",
    proficiency: 75,
    color: "text-blue-600"
  },
  {
    name: "React",
    icon: "fab fa-react",
    description: "Component-based development",
    proficiency: 85,
    color: "text-cyan-500"
  },
  {
    name: "Node.js",
    icon: "fab fa-node-js",
    description: "Server-side development",
    proficiency: 80,
    color: "text-green-600"
  },
  {
    name: "Git",
    icon: "fab fa-git-alt",
    description: "Version control and collaboration",
    proficiency: 90,
    color: "text-orange-600"
  }
];

const portfolioProjects = [
  {
    id: 1,
    title: "Restaurant Website",
    description: "Clean and elegant website for a fine dining restaurant.",
    image: "images/work1.jpg",
    images: [
      "images/work1.jpg",
      "images/work1_2.jpg",
      "images/work1_3.jpg"
    ],
    details: "เว็บไซต์นี้ออกแบบด้วยแนวคิดเรียบง่าย ใช้ HTML, CSS, JavaScript พร้อมระบบจองโต๊ะออนไลน์และ Responsive Design ที่รองรับทุกอุปกรณ์."
  },
  {
    id: 2,
    title: "App Landing Page",
    description: "A modern landing page with minimalist layout and UX.",
    image: "images/work2.jpg",
    images: [
      "images/work2.jpg",
      "images/work2_2.jpg",
      "images/work2_3.jpg"
    ],
    details: "Landing Page นี้ออกแบบสำหรับแอปมือถือ เน้นการสื่อสารแบรนด์ให้โดดเด่น มี Animation ลื่นไหลและ SEO Friendly."
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description: "Simple and intuitive UI for managing business data.",
    image: "images/work3.jpg",
    images: [
      "images/work3.jpg",
      "images/work3_2.jpg",
      "images/work3_3.jpg"
    ],
    details: "Dashboard ระบบจัดการข้อมูลธุรกิจที่ใช้ ReactJS + Chart.js มี UI/UX ที่ทันสมัย ทำงานรวดเร็วและปลอดภัย."
  }
];