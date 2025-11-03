// Portfolio Configuration File
// แก้ไขข้อมูลในไฟล์นี้เพื่ออัปเดตเว็บไซต์ Portfolio ของคุณ
// ไฟล์นี้เป็นไฟล์ข้อมูลหลักที่ใช้ในการแสดงผลหน้าเว็บ Portfolio

const portfolioConfig = {
    // ============================================
    // ข้อมูลทั่วไปของเว็บไซต์
    // ============================================
    site: {
        title: "Portfolio - ผลงานคอมพิวเตอร์", // ชื่อ title ที่แสดงในแท็บเบราว์เซอร์
        brand: "Portfolio" // ชื่อที่แสดงใน navigation bar (มุมซ้ายบน)
    },

    // ============================================
    // ข้อมูลส่วนตัว - Hero Section (ส่วนบนสุดของหน้า)
    // ============================================
    hero: {
        greeting: "สวัสดีครับ", // คำทักทายที่แสดงด้านบนสุด
        name: "นายพีรพัฒน์ วิไชยวงค์", // ชื่อจริงที่ต้องการแสดง (จะถูก highlight)
        nameHighlight: "นักพัฒนา", // คำที่ต้องการเน้นในชื่อ (เช่น "นักพัฒนา", "Programmer")
        description: "ที่ชื่นชอบในเทคโนโลยีและนวัตกรรม", // คำอธิบายสั้นๆ เกี่ยวกับตัวคุณ
        subtitle: "ยินดีต้อนรับสู่ Portfolio Website ของฉัน", // ข้อความย่อย (ถ้าต้องการใช้งาน)
        namePrefix: "กระผม", // คำนำหน้าชื่อที่แสดงก่อนชื่อ (เช่น "ฉันคือ", "กระผม", "ผมคือ") - ใช้สำหรับการแสดงผลใน Hero Section
        
        // รูปภาพโปรไฟล์ที่แสดงใน Hero Section
        profileImage: "images/profile/profile.png", // ใส่ path ของรูปภาพ เช่น "images/profile/profile.png" หรือ null ถ้าไม่มีรูป (จะแสดง placeholder แทน)
        profileImageAlt: "โปรไฟล์" // ข้อความ alt สำหรับรูปภาพ (สำหรับ accessibility)
    },

    // ============================================
    // ข้อมูล About Section (ส่วนแนะนำตัว)
    // ============================================
    about: {
        title: "เกี่ยวกับฉัน", // หัวข้อของส่วน About
        
        // เนื้อหาเกี่ยวกับตัวคุณ (สามารถมีหลายย่อหน้าได้)
        paragraphs: [
            "กระผม นายพีรพัฒน์ วิไชยวงค์ เริ่มมีความสนใจด้านคอมพิวเตอร์ตั้งแต่ระดับประถมศึกษา โดยเริ่มจากการเขียนโปรแกรมควบคุมหุ่นยนต์และเริ่มลองสร้างเว็บไซต์ในช่วงมัธยมศึกษา จากนั้นสิ่งที่ผมศึกษาและทดลองก็ทำให้เห็นว่าผมอยากศึกษาในวิทยาการคอมพิวเตอร์ ผมจึงเลือกที่จะศึกษาต่อด้านวิทยาการคอมพิวเตอร์เพื่อศึกษาหลักการทำงานและเทคโนโลยีเบื้องหลัง",
            "กระผมเป็นคนที่ชื่นชอบในการเรียนรู้ด้วยตนเอง ผ่านหลักสูตรและกิจกรรมต่างๆ เช่น MicroPython, Python และ AI จากคณะวิศวกรรมศาสตร์และวิทยาลัยการคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น ซึ่งช่วยพัฒนาทักษะด้านโปรแกรมมิ่งและระบบอัจฉริยะให้ดียิ่งขึ้น กระผมมุ่งมั่นที่จะลงมือทำโครงงานจริง ควบคู่กับการศึกษาความรู้ใหม่ๆ เพื่อเพิ่มประสบการณ์และต่อยอดความเข้าใจในสาขานี้อย่างต่อเนื่อง"
        ],
        
        // สถิติที่แสดงด้านล่างของเนื้อหา (เช่น จำนวนโปรเจกต์, ปีประสบการณ์)
        stats: [
            {
                number: 10, // ตัวเลขที่ต้องการแสดง
                label: "โปรเจกต์", // ข้อความอธิบายตัวเลข
                suffix: "+" // ตัวอักษรต่อท้ายตัวเลข (เช่น "+", "%", "ปี")
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
        
        // รูปภาพที่แสดงในส่วน About (ด้านขวาของเนื้อหา)
        aboutImage: "images/profile/about.jpg", // ใส่ path ของรูปภาพ เช่น "images/profile/about.jpg" หรือ null ถ้าไม่มีรูป
        aboutImageAlt: "เกี่ยวกับฉัน" // ข้อความ alt สำหรับรูปภาพ
    },

    // ============================================
    // ประวัติการศึกษา (Education Section)
    // ============================================
    education: {
        title: "ประวัติการศึกษา", // หัวข้อของส่วนการศึกษา
        
        // รายการประวัติการศึกษา (เรียงตามลำดับจากบนลงล่าง)
        items: [
            {
                level: "ประถม", // ระดับการศึกษา (เช่น "ประถม", "มัธยมต้น", "มัธยมปลาย", "มหาวิทยาลัย")
                school: "โรงเรียนมหาไถ่ศึกษาบึงกาฬ", // ชื่อโรงเรียน/สถาบันการศึกษา
                period: "ปีการศึกษา...", // ช่วงปีการศึกษา เช่น "2555 - 2560" หรือ "ปีการศึกษา 2555-2560"
                description: "", // คำอธิบายเพิ่มเติม (ถ้าไม่มีให้เป็น string ว่าง "")
                logo: "images/education/school1.jpg", // path ของโลโก้โรงเรียน เช่น "images/education/school1.png" หรือ null ถ้าไม่มี
            },
            {
                level: "มัธยมต้น",
                school: "โรงเรียนบึงกาฬ",
                period: "ปีการศึกษา...",
                description: "",
                logo: "images/education/school2.png",
            },
            {
                level: "มัธยมปลาย",
                school: "โรงเรียนบึงกาฬ",
                period: "ปีการศึกษา...",
                description: "",
                logo: "images/education/school3.png"
            }
        ]
    },

    // ============================================
    // ทักษะและเทคโนโลยี (Skills Section)
    // ============================================
    skills: {
        title: "ทักษะและเทคโนโลยี", // หัวข้อของส่วน Skills
        
        // รายการทักษะและเทคโนโลยีที่คุณมี
        items: [
            {
                icon: "fab fa-html5", // Font Awesome icon class (ดูได้ที่ https://fontawesome.com/icons)
                name: "Frontend", // ชื่อทักษะ/เทคโนโลยี
                description: "HTML, CSS, JavaScript, React, Vue.js", // คำอธิบายสั้นๆ เกี่ยวกับทักษะนี้
                level: 20 // ระดับทักษะ: ใส่ตัวเลข 0-100 (ระบบจะแปลงเป็นข้อความอัตโนมัติ) หรือใส่ข้อความโดยตรง เช่น "เชี่ยวชาญ", "ปานกลาง", "เริ่มต้น"
                        // การแปลงระดับ: 80+ = "เชี่ยวชาญ", 60-79 = "ดีมาก", 40-59 = "ปานกลาง", 20-39 = "เริ่มต้น", <20 = "พื้นฐาน"
            },
            {
                icon: "fas fa-server", // Icon สำหรับ Backend
                name: "Backend",
                description: "Node.js, Python, Java, PHP, Database",
                level: 50
            },
            {
                icon: "fab fa-mobile-alt", // Icon สำหรับ Mobile Development
                name: "Mobile",
                description: "React Native, Flutter, Android",
                level: 10
            },
            {
                icon: "fab fa-git-alt", // Icon สำหรับ Tools & Others
                name: "Tools & Others",
                description: "Git, Docker, Linux, Cloud Services",
                level: 50
            }
        ]
    },

    // ============================================
    // ผลงานโปรเจกต์ (Projects Section)
    // ============================================
    projects: {
        title: "ผลงาน", // หัวข้อของส่วน Projects
        
        // รายการผลงานโปรเจกต์ (เรียงตามลำดับที่ต้องการแสดง)
        items: [
            {
                title: "เว็บแอปพลิเคชัน", // ชื่อโปรเจกต์
                description: "พัฒนาเว็บแอปพลิเคชันด้วย React และ Node.js สำหรับจัดการระบบออนไลน์ พร้อมฐานข้อมูลและ API", // คำอธิบายสั้นๆ (แสดงใน project card)
                fullDescription: "โปรเจกต์นี้เป็นเว็บแอปพลิเคชันที่พัฒนาด้วย React สำหรับ Frontend และ Node.js สำหรับ Backend โดยใช้ MongoDB เป็นฐานข้อมูล ระบบสามารถจัดการข้อมูลออนไลน์ได้อย่างมีประสิทธิภาพ พร้อม RESTful API ที่สมบูรณ์", // คำอธิบายเต็ม (แสดงใน modal/popup)
                
                // รูปภาพโปรเจกต์
                image: "images/projects/webapp.jpg", // รูปภาพหลัก (สำหรับ backward compatibility - ถ้าไม่มี images array จะใช้รูปนี้)
                images: ["images/projects/webapp.jpg", "images/projects/webapp2.jpg"], // หลายรูปภาพ - ใส่ array ของ path รูปภาพ (ถ้ามีหลายรูป จะแสดงเป็น carousel ใน modal) หรือ null/array ว่าง ถ้ามีรูปเดียว
                imageAlt: "เว็บแอปพลิเคชัน", // ข้อความ alt สำหรับรูปภาพ
                placeholderIcon: "fas fa-laptop-code", // Icon ที่แสดงเมื่อไม่มีรูปภาพ (Font Awesome class)
                
                tags: ["Python", "Node.js", "MongoDB"], // Tag/เทคโนโลยีที่ใช้ในโปรเจกต์นี้ (แสดงเป็น badge)
                
                // ลิงก์ภายนอก
                links: {
                    demo: "#", // URL ของ demo/live site (ใส่ "#" ถ้ายังไม่มี)
                    github: "#" // URL ของ GitHub repository (ใส่ "#" ถ้ายังไม่มี)
                },
                
                // ฟีเจอร์หลักของโปรเจกต์ (แสดงใน modal)
                features: [
                    "ระบบจัดการผู้ใช้",
                    "API สำหรับจัดการข้อมูล",
                    "Responsive Design",
                    "Real-time Updates"
                ],
                
                year: "2024", // ปีที่ทำโปรเจกต์ (แสดงใน modal)
                category: "Web Development" // หมวดหมู่ของโปรเจกต์ (แสดงใน modal)
            },
            {
                title: "แอปมือถือ",
                description: "สร้างแอปพลิเคชันมือถือด้วย React Native สำหรับการใช้งานในชีวิตประจำวัน",
                fullDescription: "แอปพลิเคชันมือถือที่พัฒนาด้วย React Native รองรับทั้ง iOS และ Android มี UI/UX ที่สวยงามและใช้งานง่าย เชื่อมต่อกับ Firebase สำหรับการจัดการข้อมูลและ Authentication",
                image: null, // ไม่มีรูปภาพ (จะแสดง placeholder แทน)
                imageAlt: "แอปมือถือ",
                placeholderIcon: "fas fa-mobile-alt",
                tags: ["React Native", "Firebase", "UI/UX"],
                links: {
                    demo: "#",
                    github: "#"
                },
                features: [
                    "Cross-platform (iOS & Android)",
                    "Firebase Authentication",
                    "Offline Support",
                    "Push Notifications"
                ],
                year: "2024",
                category: "Mobile Development"
            },
            {
                title: "AI/ML Project",
                description: "โปรเจกต์เกี่ยวกับ Machine Learning และ Data Science ใช้ Python, TensorFlow สำหรับการวิเคราะห์ข้อมูล",
                fullDescription: "โปรเจกต์ Machine Learning ที่ใช้ TensorFlow และ Python สำหรับการวิเคราะห์ข้อมูลและทำนายผลลัพธ์ มี Data Visualization ที่สวยงามและ Interactive",
                image: null,
                imageAlt: "AI/ML Project",
                placeholderIcon: "fas fa-robot",
                tags: ["Python", "TensorFlow", "Data Science"],
                links: {
                    demo: "#",
                    github: "#"
                },
                features: [
                    "Machine Learning Models",
                    "Data Analysis",
                    "Data Visualization",
                    "Model Training"
                ],
                year: "2024",
                category: "AI/ML"
            },
            {
                title: "เกมพัฒนาเอง",
                description: "พัฒนาเกมด้วย Unity และ C# เป็นเกม 2D แพลตฟอร์มพร้อมฟีเจอร์ครบถ้วน",
                fullDescription: "เกม 2D Platformer ที่พัฒนาด้วย Unity Engine และ C# มีระบบ Physics, Animation, และ Sound Effects ครบถ้วน พร้อม Level Design ที่น่าสนใจ",
                image: null,
                imageAlt: "เกมพัฒนาเอง",
                placeholderIcon: "fas fa-gamepad",
                tags: ["Unity", "C#", "Game Development"],
                links: {
                    demo: "#",
                    github: "#"
                },
                features: [
                    "2D Platformer",
                    "Physics System",
                    "Character Animation",
                    "Level System"
                ],
                year: "2023",
                category: "Game Development"
            },
            {
                title: "ระบบความปลอดภัย",
                description: "ระบบการจัดการความปลอดภัยเครือข่าย พัฒนาด้วย Python และใช้หลักการ Cybersecurity",
                fullDescription: "ระบบตรวจสอบและจัดการความปลอดภัยเครือข่ายที่พัฒนาด้วย Python มีการตรวจสอบ Intrusion Detection, Network Monitoring และ Security Analysis",
                image: null,
                imageAlt: "ระบบความปลอดภัย",
                placeholderIcon: "fas fa-shield-alt",
                tags: ["Python", "Security", "Network"],
                links: {
                    demo: "#",
                    github: "#"
                },
                features: [
                    "Intrusion Detection",
                    "Network Monitoring",
                    "Security Analysis",
                    "Real-time Alerts"
                ],
                year: "2023",
                category: "Cybersecurity"
            },
            {
                title: "Cloud Application",
                description: "แอปพลิเคชันบนคลาวด์ใช้ AWS หรือ Azure สำหรับการจัดการข้อมูลและบริการออนไลน์",
                fullDescription: "แอปพลิเคชัน Cloud-native ที่ใช้ AWS Services เช่น EC2, S3, Lambda สำหรับการจัดการข้อมูลและบริการออนไลน์ พร้อม Auto-scaling และ High Availability",
                image: null,
                imageAlt: "Cloud Application",
                placeholderIcon: "fas fa-cloud",
                tags: ["AWS", "Cloud", "DevOps"],
                links: {
                    demo: "#",
                    github: "#"
                },
                features: [
                    "Cloud Infrastructure",
                    "Auto-scaling",
                    "High Availability",
                    "Cost Optimization"
                ],
                year: "2024",
                category: "Cloud Computing"
            }
        ]
    },

    // ============================================
    // ข้อมูลติดต่อ (Contact Section)
    // ============================================
    contact: {
        title: "ติดต่อฉัน", // หัวข้อของส่วน Contact
        description: "หากคุณสนใจในผลงานของฉัน หรือต้องการติดต่อเพื่อสอบถาม หรือร่วมงานกัน กรุณาติดต่อผ่านช่องทางด้านล่าง", // คำอธิบายส่วน Contact
        
        // วิธีการติดต่อ (แสดงเป็น card แต่ละรายการ)
        methods: [
            {
                icon: "fas fa-envelope", // Font Awesome icon class
                type: "อีเมล", // ประเภทการติดต่อ
                value: "your.email@example.com", // ข้อความที่แสดง (เช่น email address, username)
                link: "mailto:your.email@example.com" // ลิงก์ที่ต้องการให้เปิดเมื่อคลิก (สำหรับ email ใช้ mailto:, สำหรับโทรใช้ tel:)
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
                link: "tel:+66XXXXXXXXX" // สำหรับโทรศัพท์ ใช้ tel: ตามด้วยเบอร์ (ไม่ต้องมีช่องว่าง)
            }
        ]
    },

    // ============================================
    // Social Media Links (Footer)
    // ============================================
    social: {
        // ลิงก์ Social Media ที่แสดงใน Footer (แสดงเป็น icon buttons)
        links: [
            {
                icon: "fab fa-github", // Font Awesome icon class (ต้องเป็น brand icon เช่น fab fa-)
                url: "https://github.com/yourusername" // URL ของ social media profile
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
        copyright: "© 2024 Portfolio. สร้างด้วย HTML, CSS และ JavaScript" // ข้อความ copyright ที่แสดงใน Footer
    },

    // ============================================
    // Navigation Menu (เมนูนำทางด้านบน)
    // ============================================
    navigation: {
        // รายการเมนูใน Navigation Bar (เรียงจากซ้ายไปขวา)
        items: [
            { label: "หน้าแรก", href: "#home" }, // label = ข้อความที่แสดง, href = anchor link (ต้องตรงกับ id ของ section)
            { label: "เกี่ยวกับ", href: "#about" },
            { label: "การศึกษา", href: "#education" },
            { label: "ทักษะ", href: "#skills" },
            { label: "ผลงาน", href: "#projects" },
            { label: "ติดต่อ", href: "#contact" }
        ]
    }
};

// Export config for use in other scripts
// บรรทัดนี้ใช้สำหรับ export config ออกไปใช้ในไฟล์อื่น (ถ้าใช้ module system)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
