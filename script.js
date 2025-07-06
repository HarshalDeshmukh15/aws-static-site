// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll functions for hero buttons
function scrollToEvents() {
    document.getElementById('events').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Sample events data
const events = [
    {
        id: 1,
        title: "Tech Innovation Summit",
        description: "Join us for a day of cutting-edge technology discussions, workshops, and networking opportunities.",
        category: "tech",
        date: "Dec 15, 2024",
        time: "9:00 AM",
        icon: "fas fa-laptop-code"
    },
    {
        id: 2,
        title: "Cultural Festival",
        description: "Celebrate diversity with music, dance, food, and cultural performances from around the world.",
        category: "cultural",
        date: "Dec 20, 2024",
        time: "6:00 PM",
        icon: "fas fa-music"
    },
    {
        id: 3,
        title: "Academic Excellence Awards",
        description: "Honoring outstanding students and faculty for their academic achievements and contributions.",
        category: "academic",
        date: "Dec 25, 2024",
        time: "7:00 PM",
        icon: "fas fa-trophy"
    },
    {
        id: 4,
        title: "Sports Championship",
        description: "Witness thrilling competitions in basketball, football, and other sports disciplines.",
        category: "sports",
        date: "Jan 5, 2025",
        time: "2:00 PM",
        icon: "fas fa-futbol"
    },
    {
        id: 5,
        title: "Startup Pitch Competition",
        description: "Watch innovative student startups pitch their ideas to industry experts and investors.",
        category: "tech",
        date: "Jan 10, 2025",
        time: "10:00 AM",
        icon: "fas fa-rocket"
    },
    {
        id: 6,
        title: "Art Exhibition",
        description: "Explore creative artworks from talented students across various mediums and styles.",
        category: "cultural",
        date: "Jan 15, 2025",
        time: "5:00 PM",
        icon: "fas fa-palette"
    },
    {
        id: 7,
        title: "Research Symposium",
        description: "Present and discuss groundbreaking research findings from various academic departments.",
        category: "academic",
        date: "Jan 20, 2025",
        time: "9:00 AM",
        icon: "fas fa-microscope"
    },
    {
        id: 8,
        title: "Fitness Challenge",
        description: "Participate in various fitness activities and challenges to promote healthy living.",
        category: "sports",
        date: "Jan 25, 2025",
        time: "8:00 AM",
        icon: "fas fa-dumbbell"
    }
];

// Function to create event card
function createEventCard(event) {
    return `
        <div class="event-card" data-category="${event.category}">
            <div class="event-image">
                <i class="${event.icon}"></i>
                <div class="event-category">${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</div>
            </div>
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <div class="event-meta">
                    <div class="event-date">
                        <i class="fas fa-calendar"></i>
                        <span>${event.date}</span>
                    </div>
                    <div class="event-time">
                        <i class="fas fa-clock"></i>
                        <span>${event.time}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to render events
function renderEvents(filteredEvents = events) {
    const eventsGrid = document.getElementById('eventsGrid');
    eventsGrid.innerHTML = filteredEvents.map(event => createEventCard(event)).join('');
}

// Event filtering functionality
function filterEvents(category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    const activeButton = document.querySelector(`[data-filter="${category}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    if (category === 'all') {
        renderEvents();
    } else {
        const filteredEvents = events.filter(event => event.category === category);
        renderEvents(filteredEvents);
    }
}

// Add event listeners to filter buttons
document.addEventListener('DOMContentLoaded', () => {
    // Render initial events
    renderEvents();
    
    // Add filter button listeners
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-filter');
            filterEvents(category);
        });
    });
    
    // Add event card click listeners
    document.addEventListener('click', (e) => {
        if (e.target.closest('.event-card')) {
            const card = e.target.closest('.event-card');
            const title = card.querySelector('.event-title').textContent;
            alert(`You clicked on: ${title}\n\nThis would typically open event details or registration form.`);
        }
    });
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        alert(`Thank you for your message, ${name}!\n\nWe'll get back to you at ${email} soon.`);
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.event-card, .stat, .contact-item, .grid-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    });
    
    // Add hover effects to stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.addEventListener('mouseenter', () => {
            stat.style.transform = 'scale(1.05)';
        });
        
        stat.addEventListener('mouseleave', () => {
            stat.style.transform = 'scale(1)';
        });
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
}); 