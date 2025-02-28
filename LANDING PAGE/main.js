import './style.css'

// Car data
const carData = [
  {
    id: 1,
    name: "Phantom GT",
    category: "Luxury Sedan",
    price: "$325,000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "6.0L V12",
      power: "563 HP",
      acceleration: "4.3s"
    }
  },
  {
    id: 2,
    name: "Vortex S",
    category: "Sports Coupe",
    price: "$275,000",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "4.0L V8",
      power: "650 HP",
      acceleration: "3.0s"
    }
  },
  {
    id: 3,
    name: "Celestial EV",
    category: "Electric Luxury",
    price: "$195,000",
    image: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "Dual Motor",
      power: "750 HP",
      acceleration: "2.8s"
    }
  },
  {
    id: 4,
    name: "Apex RS",
    category: "Hypercar",
    price: "$1,200,000",
    image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "5.2L V10",
      power: "850 HP",
      acceleration: "2.5s"
    }
  },
  {
    id: 5,
    name: "Sovereign SUV",
    category: "Luxury SUV",
    price: "$225,000",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "4.4L V8",
      power: "575 HP",
      acceleration: "3.8s"
    }
  },
  {
    id: 6,
    name: "Mirage Roadster",
    category: "Convertible",
    price: "$310,000",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "4.0L V8",
      power: "580 HP",
      acceleration: "3.2s"
    }
  },
  {
    id: 7,
    name: "Zenith GT",
    category: "Grand Tourer",
    price: "$285,000",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "5.0L V12",
      power: "715 HP",
      acceleration: "3.1s"
    }
  },
  {
    id: 8,
    name: "Eclipse EV Sport",
    category: "Electric Sports",
    price: "$240,000",
    image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "Tri Motor",
      power: "820 HP",
      acceleration: "2.3s"
    }
  }
];

// Testimonial data
const testimonialData = [
  {
    id: 1,
    name: "Alexander Reynolds",
    position: "CEO, Reynolds Enterprises",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Prestige Motors provided an unparalleled buying experience. Their attention to detail and personalized service exceeded all my expectations. My Phantom GT is a masterpiece of engineering and luxury."
  },
  {
    id: 2,
    name: "Victoria Chen",
    position: "Fashion Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "The team at Prestige Motors understood exactly what I was looking for. The Vortex S not only matches my lifestyle perfectly but has become an extension of my personal brand. Exceptional service from start to finish."
  },
  {
    id: 3,
    name: "Jonathan Miller",
    position: "Tech Entrepreneur",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    content: "As someone who values innovation, the Celestial EV from Prestige Motors was the perfect choice. The cutting-edge technology combined with luxurious comfort makes every drive an experience to remember."
  }
];

// DOM Elements
const carGrid = document.querySelector('.car-grid');
const viewMoreBtn = document.getElementById('view-more');
const testimonialContainer = document.querySelector('.testimonial-container');
const prevTestimonialBtn = document.getElementById('prev-testimonial');
const nextTestimonialBtn = document.getElementById('next-testimonial');
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Load initial cars (first 4)
  loadCars(0, 4);
  
  // Load testimonials
  loadTestimonials();
  
  // Initialize form
  initForm();
  
  // Initialize navbar
  initNavbar();
});

// Load cars function
function loadCars(start, end) {
  const carsToShow = carData.slice(start, end);
  
  carsToShow.forEach(car => {
    const carCard = document.createElement('div');
    carCard.classList.add('car-card');
    carCard.setAttribute('data-aos', 'fade-up');
    
    carCard.innerHTML = `
      <div class="car-image">
        <img src="${car.image}" alt="${car.name}">
      </div>
      <div class="car-details">
        <h3>${car.name}</h3>
        <p>${car.category}</p>
        <div class="car-specs">
          <div class="spec">
            <span class="spec-value">${car.specs.engine}</span>
            <span class="spec-label">Engine</span>
          </div>
          <div class="spec">
            <span class="spec-value">${car.specs.power}</span>
            <span class="spec-label">Power</span>
          </div>
          <div class="spec">
            <span class="spec-value">${car.specs.acceleration}</span>
            <span class="spec-label">0-60 mph</span>
          </div>
        </div>
        <div class="car-price">${car.price}</div>
        <button class="btn-secondary car-details-btn">View Details</button>
      </div>
    `;
    
    carGrid.appendChild(carCard);
  });
  
  // Add event listeners to car detail buttons
  document.querySelectorAll('.car-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Car details functionality would be implemented here.');
    });
  });
}

// View More button functionality
viewMoreBtn.addEventListener('click', () => {
  // If all cars are already shown
  if (carGrid.children.length >= carData.length) {
    // Reset to show only first 4
    carGrid.innerHTML = '';
    loadCars(0, 4);
    viewMoreBtn.textContent = 'View More';
  } else {
    // Show all cars
    carGrid.innerHTML = '';
    loadCars(0, carData.length);
    viewMoreBtn.textContent = 'View Less';
  }
});

// Load testimonials
function loadTestimonials() {
  testimonialData.forEach(testimonial => {
    const testimonialElement = document.createElement('div');
    testimonialElement.classList.add('testimonial');
    
    testimonialElement.innerHTML = `
      <div class="testimonial-header">
        <div class="testimonial-avatar">
          <img src="${testimonial.avatar}" alt="${testimonial.name}">
        </div>
        <div class="testimonial-author">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.position}</p>
        </div>
      </div>
      <div class="testimonial-content">
        <p>${testimonial.content}</p>
      </div>
    `;
    
    testimonialContainer.appendChild(testimonialElement);
  });
  
  // Initialize testimonial slider
  initTestimonialSlider();
}

// Testimonial slider
let currentTestimonial = 0;

function initTestimonialSlider() {
  updateTestimonialSlider();
  
  prevTestimonialBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonialData.length) % testimonialData.length;
    updateTestimonialSlider();
  });
  
  nextTestimonialBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonialData.length;
    updateTestimonialSlider();
  });
  
  // Auto slide every 5 seconds
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialData.length;
    updateTestimonialSlider();
  }, 5000);
}

function updateTestimonialSlider() {
  testimonialContainer.style.transform = `translateX(-${currentTestimonial * 100}%)`;
}

// Initialize form
function initForm() {
  const contactForm = document.querySelector('.contact-form');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    console.log({ name, email, phone, interest, message });
    
    // Show success message
    alert('Thank you for your inquiry! Our team will contact you shortly.');
    
    // Reset form
    contactForm.reset();
  });
  
  // Add floating label effect
  const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
  
  formInputs.forEach(input => {
    // Set placeholder to empty string to work with the floating label
    input.setAttribute('placeholder', '');
    
    // For select elements, add a change event listener
    if (input.tagName === 'SELECT') {
      input.addEventListener('change', () => {
        if (input.value !== '') {
          input.classList.add('has-value');
        } else {
          input.classList.remove('has-value');
        }
      });
    }
  });
}

// Initialize navbar
function initNavbar() {
  // Scroll event for navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Hamburger menu toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
}

// Add animation on scroll
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.car-card, .section-header, .comparison-table, .testimonial-slider, .contact-container');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
});

// Initialize elements with animation
document.querySelectorAll('.car-card, .section-header, .comparison-table, .testimonial-slider, .contact-container').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});