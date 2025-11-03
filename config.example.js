// Portfolio Configuration Example File
// คัดลอกไฟล์นี้เป็น config.js และแก้ไขข้อมูลของคุณ

// ตัวอย่างโครงสร้างข้อมูลสำหรับ Portfolio

const portfolioConfig = {
    // ข้อมูลทั่วไปของเว็บไซต์
    site: {
        title: "Portfolio - ผลงานคอมพิวเตอร์",
        brand: "Portfolio"
    },

    // Hero Section - ส่วนแสดงชื่อและคำต้อนรับ
    hero: {
        greeting: "สวัสดีครับ",
        name: "นักพัฒนา",
        nameHighlight: "นักพัฒนา",
        description: "ที่หลงใหลในเทคโนโลยีและนวัตกรรม",
        subtitle: "ยินดีต้อนรับสู่ Portfolio ของฉัน",
        profileImage: "images/profile/profile.jpg", // หรือ null
        profileImageAlt: "โปรไฟล์"
    },

    // About Section - ข้อมูลเกี่ยวกับตัวคุณ
    about: {
        title: "เกี่ยวกับฉัน",
        paragraphs: [
            "ใส่ข้อความแนะนำตัวของคุณที่นี่",
            "ย่อหน้าที่สอง..."
        ],
        stats: [
            { number: 10, label: "โปรเจกต์", suffix: "+" },
            { number: 5, label: "เทคโนโลยี", suffix: "+" },
            { number: 2, label: "ปีประสบการณ์", suffix: "+" }
        ],
        aboutImage: "images/profile/about.jpg" // หรือ null
    },

    // Skills - ทักษะและเทคโนโลยี
    skills: {
        title: "ทักษะและเทคโนโลยี",
        items: [
            {
                icon: "fab fa-html5",
                name: "Frontend",
                description: "HTML, CSS, JavaScript, React, Vue.js",
                level: 85
            }
        ]
    },

    // Projects - ผลงานโปรเจกต์
    projects: {
        title: "ผลงาน",
        items: [
            {
                title: "ชื่อโปรเจกต์",
                description: "คำอธิบายโปรเจกต์",
                image: "images/projects/project.jpg", // หรือ null
                imageAlt: "ชื่อโปรเจกต์",
                placeholderIcon: "fas fa-laptop-code",
                tags: ["React", "Node.js"],
                links: {
                    demo: "#",
                    github: "#"
                }
            }
        ]
    },

    // Contact - ข้อมูลติดต่อ
    contact: {
        title: "ติดต่อฉัน",
        description: "ข้อความอธิบายส่วนติดต่อ",
        methods: [
            {
                icon: "fas fa-envelope",
                type: "อีเมล",
                value: "your.email@example.com",
                link: "mailto:your.email@example.com"
            }
        ]
    },

    // Social Links - ลิงก์โซเชียลมีเดีย
    social: {
        links: [
            {
                icon: "fab fa-github",
                url: "https://github.com/yourusername"
            }
        ],
        copyright: "© 2024 Portfolio. สร้างด้วย HTML, CSS และ JavaScript"
    },

    // Navigation - เมนูนำทาง
    navigation: {
        items: [
            { label: "หน้าแรก", href: "#home" },
            { label: "เกี่ยวกับ", href: "#about" },
            { label: "ทักษะ", href: "#skills" },
            { label: "ผลงาน", href: "#projects" },
            { label: "ติดต่อ", href: "#contact" }
        ]
    }
};

