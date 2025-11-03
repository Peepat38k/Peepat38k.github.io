// Portfolio Renderer - Renders content from config.js
const renderPortfolio = () => {
    if (typeof portfolioConfig === 'undefined') {
        console.error('portfolioConfig is not defined. Make sure config.js is loaded before script.js');
        return;
    }

    const config = portfolioConfig;

    // Render Navigation
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu && config.navigation) {
        navMenu.innerHTML = config.navigation.items.map(item => 
            `<li><a href="${item.href}" class="nav-link">${item.label}</a></li>`
        ).join('');
    }

    // Render Hero Section
    const heroGreeting = document.querySelector('.hero .greeting');
    const heroName = document.querySelector('.hero .name');
    const heroHighlight = document.querySelector('.hero .highlight');
    const heroDescription = document.querySelector('.hero .description');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroImage = document.querySelector('.hero-image');

    if (heroGreeting && config.hero) heroGreeting.textContent = config.hero.greeting;
    if (heroName && config.hero) {
        // Update name section: show full name (without highlight class for name)
        if (config.hero.name) {
            const namePrefix = config.hero.namePrefix || "ฉันคือ";
            heroName.innerHTML = `${namePrefix} <span style="color: var(--secondary-color); text-shadow: 0 0 20px rgba(0, 255, 136, 0.6);">${config.hero.name}</span>`;
        }
        if (heroHighlight) {
            heroHighlight.textContent = config.hero.name || config.hero.nameHighlight;
            // Update typing effect texts - use name if available
            const typingTexts = config.hero.typingTexts || [config.hero.name || config.hero.nameHighlight];
            if (typingTexts.length > 0) {
                // Will be used by typing effect later
                window.portfolioTypingTexts = typingTexts;
            }
        }
    }
    if (heroDescription && config.hero) heroDescription.textContent = config.hero.description;
    if (heroSubtitle && config.hero) heroSubtitle.textContent = config.hero.subtitle;
    
    // Render Hero Profile Image (Single Image)
    if (heroImage && config.hero) {
        if (config.hero.profileImage) {
            heroImage.innerHTML = `<img src="${config.hero.profileImage}" alt="${config.hero.profileImageAlt || 'Profile'}" class="hero-profile-img">`;
        } else {
            // Fallback to placeholder if no image
            heroImage.innerHTML = `
                <div class="image-placeholder">
                    <i class="fas fa-user-circle"></i>
                </div>
            `;
        }
    }

    // Render About Section
    const aboutSection = document.querySelector('#about');
    if (aboutSection && config.about) {
        const aboutTitle = aboutSection.querySelector('.section-title');
        if (aboutTitle && config.about.title) {
            aboutTitle.textContent = config.about.title;
        }
        
        const aboutText = aboutSection.querySelector('.about-text');
        if (aboutText) {
            const paragraphsHTML = config.about.paragraphs.map(p => `<p>${p}</p>`).join('');
            const statsHTML = config.about.stats.map(stat => `
                <div class="stat-item">
                    <div class="stat-number">${stat.number}${stat.suffix || ''}</div>
                    <div class="stat-label">${stat.label}</div>
                </div>
            `).join('');
            
            aboutText.innerHTML = paragraphsHTML + `<div class="about-stats">${statsHTML}</div>`;
        }
    }

    const aboutImage = document.querySelector('.about-image');
    if (aboutImage && config.about && config.about.aboutImage) {
        aboutImage.innerHTML = `<img src="${config.about.aboutImage}" alt="${config.about.aboutImageAlt}">`;
    }

    // Render Education Section
    const educationSection = document.querySelector('#education');
    if (educationSection && config.education) {
        const educationTitle = educationSection.querySelector('.section-title');
        if (educationTitle && config.education.title) {
            educationTitle.textContent = config.education.title;
        }

        const educationTimeline = educationSection.querySelector('.education-timeline');
        if (educationTimeline && config.education.items) {
            educationTimeline.innerHTML = config.education.items.map((edu, index) => `
                <div class="education-item">
                    <div class="education-icon">
                        ${edu.logo 
                            ? `<img src="${edu.logo}" alt="${edu.school} Logo" class="education-logo">`
                            : `<i class="fas fa-graduation-cap"></i>`
                        }
                    </div>
                    <div class="education-content">
                        <h3 class="education-level">${edu.level}</h3>
                        <h4 class="education-school">${edu.school}</h4>
                        <p class="education-period">${edu.period}</p>
                        ${edu.description ? `<p class="education-desc">${edu.description}</p>` : ''}
                    </div>
                </div>
            `).join('');
        }
    }

    // Render Skills Section
    const skillsSection = document.querySelector('#skills');
    if (skillsSection && config.skills) {
        const skillsTitle = skillsSection.querySelector('.section-title');
        if (skillsTitle && config.skills.title) {
            skillsTitle.textContent = config.skills.title;
        }
        
        const skillsGrid = skillsSection.querySelector('.skills-grid');
        if (skillsGrid) {
            // Function to convert level to text
            const getLevelText = (level) => {
                if (typeof level === 'string') {
                    return level; // ถ้าเป็นข้อความแล้ว ให้ใช้เลย
                } else if (typeof level === 'number') {
                    // แปลงตัวเลขเป็นข้อความ
                    if (level >= 80) return 'เชี่ยวชาญ';
                    if (level >= 60) return 'ดีมาก';
                    if (level >= 40) return 'ปานกลาง';
                    if (level >= 20) return 'เริ่มต้น';
                    return 'พื้นฐาน';
                }
                return 'พื้นฐาน';
            };

            skillsGrid.innerHTML = config.skills.items.map(skill => {
                const levelText = getLevelText(skill.level);
                return `
                <div class="skill-card">
                    <div class="skill-icon">
                        <i class="${skill.icon}"></i>
                    </div>
                    <h3 class="skill-name">${skill.name}</h3>
                    <p class="skill-desc">${skill.description}</p>
                    <div class="skill-level-text">
                        <span class="skill-level-label">ระดับ:</span>
                        <span class="skill-level-badge">${levelText}</span>
                    </div>
                </div>
            `;
            }).join('');
        }
    }

    // Render Projects Section
    const projectsSection = document.querySelector('#projects');
    if (projectsSection && config.projects) {
        const projectsTitle = projectsSection.querySelector('.section-title');
        if (projectsTitle && config.projects.title) {
            projectsTitle.textContent = config.projects.title;
        }
        
        const projectsGrid = projectsSection.querySelector('.projects-grid');
        if (projectsGrid) {
            projectsGrid.innerHTML = config.projects.items.map((project, index) => {
            const imageHTML = project.image 
                ? `<img src="${project.image}" alt="${project.imageAlt}">`
                : `<div class="image-placeholder"><i class="${project.placeholderIcon}"></i></div>`;
            
            return `
                <div class="project-card" data-project-index="${index}">
                    <div class="project-image">
                        ${imageHTML}
                        <div class="project-overlay">
                            <a href="${project.links.demo}" class="project-link" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                            <a href="${project.links.github}" class="project-link" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-desc">${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
            }).join('');
            
            // Add click event listeners to project cards
            projectsGrid.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    // Don't open modal if clicking on links
                    if (e.target.closest('.project-link')) {
                        return;
                    }
                    const projectIndex = parseInt(card.getAttribute('data-project-index'));
                    openProjectModal(projectIndex);
                });
                
                // Add cursor pointer
                card.style.cursor = 'pointer';
            });
        }
    }

    // Render Contact Section
    const contactSection = document.querySelector('#contact');
    if (contactSection && config.contact) {
        const contactTitle = contactSection.querySelector('.section-title');
        if (contactTitle && config.contact.title) {
            contactTitle.textContent = config.contact.title;
        }
        
        const contactText = contactSection.querySelector('.contact-text');
        if (contactText && config.contact.description) {
            contactText.textContent = config.contact.description;
        }
        
        const contactMethods = contactSection.querySelector('.contact-methods');
        if (contactMethods && config.contact.methods) {
            contactMethods.innerHTML = config.contact.methods.map(method => `
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="${method.icon}"></i>
                    </div>
                    <div class="contact-details">
                        <h4>${method.type}</h4>
                        <p><a href="${method.link}" ${method.link.startsWith('mailto:') || method.link.startsWith('tel:') ? '' : 'target="_blank" rel="noopener noreferrer"'}>${method.value}</a></p>
                    </div>
                </div>
            `).join('');
        }
    }

    // Render Footer
    const footer = document.querySelector('.footer');
    if (footer && config.social) {
        const footerText = footer.querySelector('p');
        if (footerText) footerText.textContent = config.social.copyright;
        
        const socialLinks = footer.querySelector('.social-links');
        if (socialLinks) {
            socialLinks.innerHTML = config.social.links.map(link => `
                <a href="${link.url}" class="social-link" target="_blank" rel="noopener noreferrer">
                    <i class="${link.icon}"></i>
                </a>
            `).join('');
        }
    }

    // Update site title
    if (config.site && config.site.title) {
        document.title = config.site.title;
    }

    // Update brand name
    const navBrand = document.querySelector('.nav-brand');
    if (navBrand && config.site && config.site.brand) {
        navBrand.textContent = config.site.brand;
    }
};

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 14, 22, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)';
        navbar.style.borderBottomColor = 'var(--border-color)';
    } else {
        navbar.style.background = 'rgba(10, 14, 22, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)';
        navbar.style.borderBottomColor = 'var(--border-color)';
    }
    
    lastScroll = currentScroll;
});

// Active Navigation Link Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all skill cards, project cards, and other animated elements
document.addEventListener('DOMContentLoaded', () => {
    // Render portfolio content first
    renderPortfolio();
    
    // Re-initialize mobile menu after rendering
    if (hamburger && navMenu) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Initialize animations after content is rendered
    setTimeout(() => {
        const animatedElements = document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-content');
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Re-initialize skill bars observer
        const skillBars = document.querySelectorAll('.skill-bar');
        if (skillBars.length > 0) {
            animateSkillBars();
        }

        // Re-initialize stats observer
        document.querySelectorAll('.stat-item').forEach(stat => {
            statsObserver.observe(stat);
        });
    }, 100);
});

// Animate Skill Bars on Scroll
const skillBars = document.querySelectorAll('.skill-bar');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
};

const skillBarsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            skillBarsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillBarsObserver.observe(skillsSection);
}

// Contact Form Submission
// Contact form removed - only contact methods are displayed

// Counter Animation for Stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber) {
                const target = parseInt(statNumber.textContent);
                animateCounter(statNumber, target);
                entry.target.classList.add('animated');
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// Typing Effect for Hero Section (Optional)
const typingEffect = () => {
    const texts = window.portfolioTypingTexts || ['นักพัฒนา', 'โปรแกรมเมอร์', 'นักออกแบบ'];
    const typingElement = document.querySelector('.highlight');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    if (typingElement) {
        const type = () => {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(type, 2000);
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 50 : 100);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(type, 1000);
    }
};

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(typingEffect, 2000);
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Smooth reveal animation for sections
const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('section-hidden');
    sectionObserver.observe(section);
});

// Typing Animation for Background Text "Peerapat"
const initTypingBackground = () => {
    const typingBg = document.getElementById('typingBg');
    if (!typingBg) return;

    // Use "Peerapat" for background typing animation
    const text = 'Peerapat';
    let currentIndex = 0;
    let isTyping = true;
    const typingSpeed = 150; // milliseconds per character
    const pauseDuration = 2000; // pause before deleting
    const deletingSpeed = 80; // milliseconds per character

    const typeText = () => {
        if (isTyping) {
            if (currentIndex < text.length) {
                typingBg.innerHTML = text.substring(0, currentIndex + 1) + '<span class="typing-cursor">_</span>';
                currentIndex++;
                setTimeout(typeText, typingSpeed);
            } else {
                // Finished typing, pause then start deleting
                setTimeout(() => {
                    isTyping = false;
                    typeText();
                }, pauseDuration);
            }
        } else {
            // Deleting
            if (currentIndex > 0) {
                currentIndex--;
                typingBg.innerHTML = text.substring(0, currentIndex) + '<span class="typing-cursor">_</span>';
                setTimeout(typeText, deletingSpeed);
            } else {
                // Finished deleting, pause then start typing again
                typingBg.innerHTML = '<span class="typing-cursor">_</span>';
                setTimeout(() => {
                    isTyping = true;
                    typeText();
                }, 1000);
            }
        }
    };

    // Start typing animation
    typingBg.innerHTML = '<span class="typing-cursor">_</span>';
    setTimeout(typeText, 1000);
};

// Initialize typing background when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        initTypingBackground();
    }, 500);
});

// Project Modal Functions
const openProjectModal = (projectIndex) => {
    const config = typeof portfolioConfig !== 'undefined' ? portfolioConfig : {};
    if (!config.projects || !config.projects.items || !config.projects.items[projectIndex]) return;
    
    const project = config.projects.items[projectIndex];
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    // รองรับหลายรูปภาพ - ใช้ images array ถ้ามี ไม่เช่นนั้นใช้ image เดี่ยว
    const images = project.images && project.images.length > 0 
        ? project.images.filter(img => img !== null && img !== undefined)
        : (project.image ? [project.image] : []);
    
    let imageHTML = '';
    if (images.length > 0) {
        if (images.length === 1) {
            // รูปเดียว - แสดงเต็มขนาด
            imageHTML = `
                <div class="modal-image-container">
                    <img src="${images[0]}" alt="${project.imageAlt}" class="modal-project-image">
                </div>
            `;
        } else {
            // หลายรูป - สร้าง carousel
            const imagesHTML = images.map((img, idx) => `
                <div class="modal-image-slide ${idx === 0 ? 'active' : ''}">
                    <img src="${img}" alt="${project.imageAlt} ${idx + 1}" class="modal-project-image">
                </div>
            `).join('');
            
            imageHTML = `
                <div class="modal-image-carousel">
                    <div class="modal-image-container">
                        <div class="modal-image-slider" id="modalImageSlider">
                            ${imagesHTML}
                        </div>
                        <button class="modal-carousel-btn modal-carousel-prev" id="modalCarouselPrev">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button class="modal-carousel-btn modal-carousel-next" id="modalCarouselNext">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                        <div class="modal-carousel-dots">
                            ${images.map((_, idx) => `
                                <span class="modal-carousel-dot ${idx === 0 ? 'active' : ''}" data-slide="${idx}"></span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }
    } else {
        // ไม่มีรูป - แสดง placeholder
        imageHTML = `
            <div class="modal-image-container">
                <div class="image-placeholder modal-project-image"><i class="${project.placeholderIcon}"></i></div>
            </div>
        `;
    }
    
    const featuresHTML = project.features && project.features.length > 0
        ? `
            <div class="modal-features">
                <h4>ฟีเจอร์</h4>
                <ul class="features-list">
                    ${project.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('')}
                </ul>
            </div>
        `
        : '';
    
    modalBody.innerHTML = `
        ${imageHTML}
        <div class="modal-project-info">
            <div class="modal-header">
                <h2 class="modal-title">${project.title}</h2>
                ${project.category || project.year ? `
                    <div class="modal-meta">
                        ${project.category ? `<span class="modal-category"><i class="fas fa-folder"></i> ${project.category}</span>` : ''}
                        ${project.year ? `<span class="modal-year"><i class="fas fa-calendar"></i> ${project.year}</span>` : ''}
                    </div>
                ` : ''}
            </div>
            <div class="modal-description">
                <p class="modal-short-desc">${project.description}</p>
                ${project.fullDescription ? `<p class="modal-full-desc">${project.fullDescription}</p>` : ''}
            </div>
            ${featuresHTML}
            <div class="modal-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="modal-links">
                ${project.links.demo && project.links.demo !== '#' ? `
                    <a href="${project.links.demo}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i> ดู Demo
                    </a>
                ` : ''}
                ${project.links.github && project.links.github !== '#' ? `
                    <a href="${project.links.github}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> ดู Code
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Prevent scroll on mobile
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    
    // Initialize image carousel if multiple images
    // Use setTimeout to ensure DOM is fully rendered
    if (images.length > 1) {
        setTimeout(() => {
            initModalImageCarousel();
        }, 100);
    } else {
        // Reset carousel state if single image
        currentSlide = 0;
        modalImages = [];
        if (carouselKeyHandler) {
            document.removeEventListener('keydown', carouselKeyHandler);
            carouselKeyHandler = null;
        }
    }
};

// Modal Image Carousel Functions
let currentSlide = 0;
let modalImages = [];
let carouselKeyHandler = null; // เก็บ reference ของ keyboard handler

const initModalImageCarousel = () => {
    const slider = document.getElementById('modalImageSlider');
    const prevBtn = document.getElementById('modalCarouselPrev');
    const nextBtn = document.getElementById('modalCarouselNext');
    const dots = document.querySelectorAll('.modal-carousel-dot');
    
    if (!slider) return;
    
    // Reset carousel state
    modalImages = Array.from(slider.querySelectorAll('.modal-image-slide'));
    currentSlide = 0;
    
    // Remove old event listeners by replacing buttons
    if (prevBtn) {
        const newPrevBtn = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
        newPrevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            currentSlide = (currentSlide - 1 + modalImages.length) % modalImages.length;
            updateModalCarousel();
        });
    }
    
    if (nextBtn) {
        const newNextBtn = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
        newNextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            currentSlide = (currentSlide + 1) % modalImages.length;
            updateModalCarousel();
        });
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        const newDot = dot.cloneNode(true);
        dot.parentNode.replaceChild(newDot, dot);
        newDot.addEventListener('click', (e) => {
            e.stopPropagation();
            currentSlide = index;
            updateModalCarousel();
        });
    });
    
    // Keyboard navigation - remove old handler first
    if (carouselKeyHandler) {
        document.removeEventListener('keydown', carouselKeyHandler);
    }
    
    carouselKeyHandler = (e) => {
        const modal = document.getElementById('projectModal');
        if (modal?.classList.contains('active') && modalImages.length > 1) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                currentSlide = (currentSlide - 1 + modalImages.length) % modalImages.length;
                updateModalCarousel();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                currentSlide = (currentSlide + 1) % modalImages.length;
                updateModalCarousel();
            }
        }
    };
    
    document.addEventListener('keydown', carouselKeyHandler);
    
    // Initialize carousel position
    updateModalCarousel();
};

const updateModalCarousel = () => {
    const slider = document.getElementById('modalImageSlider');
    const dots = document.querySelectorAll('.modal-carousel-dot');
    
    if (!slider || modalImages.length === 0) return;
    
    // Ensure currentSlide is within bounds
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide >= modalImages.length) currentSlide = modalImages.length - 1;
    
    // Move slider with transform - แนวแกน X เท่านั้น
    // Force reflow เพื่อให้ transition ทำงาน
    slider.style.transition = 'none';
    const translateX = -currentSlide * 100;
    slider.style.transform = `translateX(${translateX}%)`;
    
    // Trigger reflow
    void slider.offsetHeight;
    
    // Apply transition
    slider.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    
    // Update dots
    if (dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
};

const closeProjectModal = () => {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        
        // Restore scroll position on mobile
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        if (scrollY) {
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
        
        // Reset carousel state
        currentSlide = 0;
        modalImages = [];
        
        // Remove keyboard event listener
        if (carouselKeyHandler) {
            document.removeEventListener('keydown', carouselKeyHandler);
            carouselKeyHandler = null;
        }
    }
};

// Initialize modal close functionality
document.addEventListener('DOMContentLoaded', () => {
    const modalClose = document.getElementById('modalClose');
    const modal = document.getElementById('projectModal');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProjectModal);
    }
    
    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
});
