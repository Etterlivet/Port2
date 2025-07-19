function scrollToProject(projectId) {
  const element = document.getElementById(projectId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  }
}

function scrollToAbout() {
  // Check if we're on the projects page
  if (window.location.pathname.includes('/projects/')) {
    // We're on the projects page, scroll to about section
    const element = document.getElementById('about-section');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  } else {
    // We're on a different page, navigate to projects page with hash
    window.location.href = '/projects/#about-section';
  }
}

// Handle direct navigation with hash (e.g., /projects/#about-section)
window.addEventListener('load', function() {
  if (window.location.hash) {
    setTimeout(function() {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start' 
        });
      }
    }, 100);
  }
});
