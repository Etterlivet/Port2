function scrollToProject(projectId) {
  const element = document.getElementById(projectId);
  if (element) {
    // Account for fixed navbar height
    const navHeight = 120;
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({
      top: elementTop,
      behavior: 'smooth'
    });
  }
}

function scrollToAbout(event) {
  event.preventDefault();
  
  // Check if we're on the projects page
  if (window.location.pathname.includes('/projects/') || window.location.pathname === '/') {
    // We're on the projects page, scroll to about section
    scrollToProject('about-section');
  } else {
    // Navigate to projects page with hash
    window.location.href = '/projects/#about-section';
  }
}

// Handle direct navigation with hash
window.addEventListener('load', function() {
  if (window.location.hash) {
    setTimeout(function() {
      const elementId = window.location.hash.substring(1);
      scrollToProject(elementId);
    }, 500); // Increased delay for page load
  }
});

// Handle hash changes
window.addEventListener('hashchange', function() {
  if (window.location.hash) {
    const elementId = window.location.hash.substring(1);
    scrollToProject(elementId);
  }
});
