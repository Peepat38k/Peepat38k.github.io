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
    if (heroHighlight && config.hero) {
        heroHighlight.textContent = config.hero.nameHighlight;
        // Update typing effect texts
        const typingTexts = config.hero.typingTexts || [config.hero.nameHighlight];
        if (typingTexts.length > 0) {
            // Will be used by typing effect later
            window.portfolioTypingTexts = typingTexts;
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
    const aboutText = document.querySelector('.about-text');
    if (aboutText && config.about) {
        const paragraphsHTML = config.about.paragraphs.map(p => `<p>${p}</p>`).join('');
        const statsHTML = config.about.stats.map(stat => `
            <div class="stat-item">
                <div class="stat-number">${stat.number}${stat.suffix || ''}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `).join('');
        
        aboutText.innerHTML = paragraphsHTML + `<div class="about-stats">${statsHTML}</div>`;
    }

    const aboutImage = document.querySelector('.about-image');
    if (aboutImage && config.about && config.about.aboutImage) {
        aboutImage.innerHTML = `<img src="${config.about.aboutImage}" alt="${config.about.aboutImageAlt}">`;
    }

    // Render Skills Section
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid && config.skills) {
        skillsGrid.innerHTML = config.skills.items.map(skill => `
            <div class="skill-card">
                <div class="skill-icon">
                    <i class="${skill.icon}"></i>
                </div>
                <h3 class="skill-name">${skill.name}</h3>
                <p class="skill-desc">${skill.description}</p>
                <div class="skill-level">
                    <div class="skill-bar" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `).join('');
    }

    // Render Projects Section
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid && config.projects) {
        projectsGrid.innerHTML = config.projects.items.map(project => {
            const imageHTML = project.image 
                ? `<img src="${project.image}" alt="${project.imageAlt}">`
                : `<div class="image-placeholder"><i class="${project.placeholderIcon}"></i></div>`;
            
            return `
                <div class="project-card">
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
    }

    // Render Contact Section
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo && config.contact) {
        const contactText = contactInfo.querySelector('.contact-text');
        if (contactText) contactText.textContent = config.contact.description;
        
        const contactMethods = contactInfo.querySelector('.contact-methods');
        if (contactMethods) {
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
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && message) {
            // Here you would typically send the data to a server
            // For now, we'll just show an alert
            alert(`ขอบคุณสำหรับข้อความของคุณ ${name}! ฉันจะติดต่อกลับโดยเร็วที่สุด`);
            
            // Reset form
            contactForm.reset();
        } else {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        }
    });
}

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


