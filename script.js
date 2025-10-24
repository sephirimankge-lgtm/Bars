// Toggle sidebar on mobile
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('custom-sidebar');
    
    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', () => {
            const isHidden = sidebar.getAttribute('data-collapsed') === 'true';
            sidebar.setAttribute('data-collapsed', !isHidden);
            
            // Toggle main content margin
            const main = document.querySelector('main');
            if (main) {
                main.classList.toggle('ml-64', !isHidden);
            }
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        const sidebar = document.querySelector('custom-sidebar');
        const isMobile = window.innerWidth < 768;
        
        if (isMobile && sidebar && sidebar.getAttribute('data-collapsed') === 'false') {
            if (!sidebar.contains(e.target) && e.target.id !== 'toggleSidebar') {
                sidebar.setAttribute('data-collapsed', 'true');
                document.querySelector('main').classList.remove('ml-64');
            }
        }
    });
});
