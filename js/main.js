// Load component function
async function loadComponent(elementId, componentPath) {
	try {
		const response = await fetch(componentPath);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const html = await response.text();
		const element = document.getElementById(elementId);
		if (element) {
			element.innerHTML = html;
		} else {
			console.error(`Element with id "${elementId}" not found`);
		}
	} catch (error) {
		console.error(`Error loading component ${componentPath}:`, error);
		// Fallback: show a message if component fails to load
		const element_1 = document.getElementById(elementId);
		if (element_1) {
			element_1.innerHTML = `<p>Error loading ${componentPath}</p>`;
		}
	}
}

// Load all components
function loadAllComponents() {
	const components = [
		{ id: "header-placeholder", path: "components/header.html" },
		{ id: "hero-placeholder", path: "components/hero.html" },
		{ id: "services-placeholder", path: "components/services.html" },
		{ id: "about-placeholder", path: "components/about.html" },
		{ id: "contact-placeholder", path: "components/contact.html" },
		{ id: "footer-placeholder", path: "components/footer.html" },
	];

	// Load all components
	Promise.all(components.map((comp) => loadComponent(comp.id, comp.path)))
		.then(() => {
			console.log("All components loaded successfully");
			// Initialize other functionality after components are loaded
			initializePage();
		})
		.catch((error) => {
			console.error("Error loading some components:", error);
			// Still initialize page functionality even if some components fail
			initializePage();
		});
}

// Initialize page functionality
function initializePage() {
	// Smooth scrolling for navigation links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute("href"));
			if (target) {
				target.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		});
	});

	// Add fade-in animation on scroll
	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -50px 0px",
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = "1";
				entry.target.style.transform = "translateY(0)";
			}
		});
	}, observerOptions);

	// Observe fade-in elements
	document.querySelectorAll(".fade-in").forEach((el) => {
		el.style.opacity = "0";
		el.style.transform = "translateY(30px)";
		el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
		observer.observe(el);
	});

	// Form submission handler
	const form = document.querySelector("form");
	if (form) {
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			alert("Thank you for your message! We will get back to you soon.");
			this.reset();
		});
	}
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
	loadAllComponents();

	//wait 300 milliseconds before setting the year
	setTimeout(() => {
		// Set the current year in the footer
		const year = document.querySelector(".current-year");
		if (year) {
			year.textContent = new Date().getFullYear().toString();
		}
	}, 300);
});
