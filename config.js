// Portfolio Configuration File
// แก้ไขข้อมูลในไฟล์นี้เพื่ออัปเดตเว็บไซต์ Portfolio ของคุณ

const portfolioConfig = {
    // ข้อมูลทั่วไป
    site: {
        title: "Portfolio - ผลงานคอมพิวเตอร์",
        brand: "Portfolio"
    },

    // ข้อมูลส่วนตัว - Hero Section
    hero: {
        greeting: "สวัสดีครับ",
        name: "นักพัฒนา",
        nameHighlight: "นักพัฒนา",
        description: "ที่หลงใหลในเทคโนโลยีและนวัตกรรม",
        subtitle: "ยินดีต้อนรับสู่ Portfolio ของฉัน",
        // รูปภาพโปรไฟล์ - ใส่ path ของรูป หรือ null สำหรับ placeholder
        profileImage: "images/profile/profile.png",
        profileImageAlt: "โปรไฟล์"
    },

    // ข้อมูล About Section
    about: {
        title: "เกี่ยวกับฉัน",
        paragraphs: [
            "ฉันเป็นนักศึกษาคอมพิวเตอร์ที่มีความสนใจในด้านการพัฒนาโปรแกรมประยุกต์ เว็บไซต์ และเทคโนโลยีต่างๆ ฉันมีความกระตือรือร้นในการเรียนรู้เทคโนโลยีใหม่ๆ และพร้อมที่จะสร้างสรรค์ผลงานที่สร้างคุณค่าให้กับผู้ใช้",
            "นอกจากทักษะด้านการเขียนโค้ดแล้ว ฉันยังมีความสามารถในการแก้ไขปัญหา การทำงานเป็นทีม และการสื่อสารที่ดี ซึ่งช่วยให้สามารถทำงานได้อย่างมีประสิทธิภาพ"
        ],
        stats: [
            {
                number: 10,
                label: "โปรเจกต์",
                suffix: "+"
            },
            {
                number: 5,
                label: "เทคโนโลยี",
                suffix: "+"
            },
            {
                number: 2,
                label: "ปีประสบการณ์",
                suffix: "+"
            }
        ],
        aboutImage: "images/profile/about.jpg", // ใส่ path ของรูป หรือ null สำหรับ placeholder
        aboutImageAlt: "เกี่ยวกับฉัน"
    },

    // ทักษะและเทคโนโลยี
    skills: {
        title: "ทักษะและเทคโนโลยี",
        items: [
            {
                icon: "fab fa-html5",
                name: "Frontend",
                description: "HTML, CSS, JavaScript, React, Vue.js",
                level: 85
            },
            {
                icon: "fas fa-server",
                name: "Backend",
                description: "Node.js, Python, Java, PHP, Database",
                level: 75
            },
            {
                icon: "fab fa-mobile-alt",
                name: "Mobile",
                description: "React Native, Flutter, Android",
                level: 70
            },
            {
                icon: "fab fa-git-alt",
                name: "Tools & Others",
                description: "Git, Docker, Linux, Cloud Services",
                level: 80
            }
        ]
    },

    // ผลงานโปรเจกต์
    projects: {
        title: "ผลงาน",
        items: [
            {
                title: "เว็บแอปพลิเคชัน",
                description: "พัฒนาเว็บแอปพลิเคชันด้วย React และ Node.js สำหรับจัดการระบบออนไลน์ พร้อมฐานข้อมูลและ API",
                image: "images/projects/webapp.jpg", // ใส่ path ของรูป หรือ null สำหรับ placeholder
                imageAlt: "เว็บแอปพลิเคชัน",
                placeholderIcon: "fas fa-laptop-code",
                tags: ["React", "Node.js", "MongoDB"],
                links: {
                    demo: "#", // ใส่ URL ของ demo
                    github: "#" // ใส่ URL ของ GitHub
                }
            },
            {
                title: "แอปมือถือ",
                description: "สร้างแอปพลิเคชันมือถือด้วย React Native สำหรับการใช้งานในชีวิตประจำวัน",
                image: null,
                imageAlt: "แอปมือถือ",
                placeholderIcon: "fas fa-mobile-alt",
                tags: ["React Native", "Firebase", "UI/UX"],
                links: {
                    demo: "#",
                    github: "#"
                }
            },
            {
                title: "AI/ML Project",
                description: "โปรเจกต์เกี่ยวกับ Machine Learning และ Data Science ใช้ Python, TensorFlow สำหรับการวิเคราะห์ข้อมูล",
                image: null,
                imageAlt: "AI/ML Project",
                placeholderIcon: "fas fa-robot",
                tags: ["Python", "TensorFlow", "Data Science"],
                links: {
                    demo: "#",
                    github: "#"
                }
            },
            {
                title: "เกมพัฒนาเอง",
                description: "พัฒนาเกมด้วย Unity และ C# เป็นเกม 2D แพลตฟอร์มพร้อมฟีเจอร์ครบถ้วน",
                image: null,
                imageAlt: "เกมพัฒนาเอง",
                placeholderIcon: "fas fa-gamepad",
                tags: ["Unity", "C#", "Game Development"],
                links: {
                    demo: "#",
                    github: "#"
                }
            },
            {
                title: "ระบบความปลอดภัย",
                description: "ระบบการจัดการความปลอดภัยเครือข่าย พัฒนาด้วย Python และใช้หลักการ Cybersecurity",
                image: null,
                imageAlt: "ระบบความปลอดภัย",
                placeholderIcon: "fas fa-shield-alt",
                tags: ["Python", "Security", "Network"],
                links: {
                    demo: "#",
                    github: "#"
                }
            },
            {
                title: "Cloud Application",
                description: "แอปพลิเคชันบนคลาวด์ใช้ AWS หรือ Azure สำหรับการจัดการข้อมูลและบริการออนไลน์",
                image: null,
                imageAlt: "Cloud Application",
                placeholderIcon: "fas fa-cloud",
                tags: ["AWS", "Cloud", "DevOps"],
                links: {
                    demo: "#",
                    github: "#"
                }
            }
        ]
    },

    // ข้อมูลติดต่อ
    contact: {
        title: "ติดต่อฉัน",
        description: "หากคุณสนใจในผลงานของฉัน หรือต้องการติดต่อเพื่อสอบถาม หรือร่วมงานกัน กรุณาติดต่อผ่านช่องทางด้านล่าง",
        methods: [
            {
                icon: "fas fa-envelope",
                type: "อีเมล",
                value: "your.email@example.com",
                link: "mailto:your.email@example.com"
            },
            {
                icon: "fab fa-github",
                type: "GitHub",
                value: "github.com/yourusername",
                link: "https://github.com/yourusername"
            },
            {
                icon: "fab fa-linkedin",
                type: "LinkedIn",
                value: "linkedin.com/in/yourprofile",
                link: "https://linkedin.com/in/yourprofile"
            },
            {
                icon: "fas fa-phone",
                type: "เบอร์โทร",
                value: "+66 XX XXX XXXX",
                link: "tel:+66XXXXXXXXX"
            }
        ]
    },

    // Social Media Links (Footer)
    social: {
        links: [
            {
                icon: "fab fa-github",
                url: "https://github.com/yourusername"
            },
            {
                icon: "fab fa-linkedin",
                url: "https://linkedin.com/in/yourprofile"
            },
            {
                icon: "fab fa-facebook",
                url: "https://facebook.com/yourprofile"
            },
            {
                icon: "fab fa-twitter",
                url: "https://twitter.com/yourusername"
            }
        ],
        copyright: "© 2024 Portfolio. สร้างด้วย HTML, CSS และ JavaScript"
    },

    // Navigation Menu
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

// Export config for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}

