class CustomSidebar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.setAttribute('data-collapsed', window.innerWidth < 768 ? 'true' : 'false');
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: 16rem;
          background: white;
          box-shadow: 2px 0 10px rgba(0,0,0,0.1);
          z-index: 30;
          transform: translateX(0);
          transition: transform 0.3s ease;
        }
        
        :host([data-collapsed="true"]) {
          transform: translateX(-100%);
        }
        
        .sidebar-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 600;
          color: #4f46e5;
          height: 64px;
        }
        
        .sidebar-content {
          padding: 1rem 0;
          overflow-y: auto;
          height: calc(100% - 64px);
        }
        
        .nav-item {
          padding: 0.75rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #4b5563;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .nav-item:hover {
          background: #f3f4f6;
          color: #4f46e5;
        }
        
        .nav-item.active {
          background: #eef2ff;
          color: #4f46e5;
          border-right: 2px solid #4f46e5;
        }
        
        .nav-item i {
          width: 20px;
          height: 20px;
        }
        
        @media (min-width: 768px) {
          :host([data-collapsed="true"]) {
            transform: translateX(0);
          }
        }
      </style>
      
      <div class="sidebar-header">
        <i data-feather="menu"></i>
        <span>Navigation</span>
      </div>
      
      <div class="sidebar-content">
        <div class="nav-item active">
          <i data-feather="home"></i>
          <span>Dashboard</span>
        </div>
        <div class="nav-item">
          <i data-feather="inbox"></i>
          <span>Inbox</span>
        </div>
        <div class="nav-item">
          <i data-feather="calendar"></i>
          <span>Calendar</span>
        </div>
        <div class="nav-item">
          <i data-feather="users"></i>
          <span>Team</span>
        </div>
        <div class="nav-item">
          <i data-feather="settings"></i>
          <span>Settings</span>
        </div>
        <div class="nav-item">
          <i data-feather="help-circle"></i>
          <span>Help</span>
        </div>
      </div>
    `;
    
    // Add click handlers for nav items
    setTimeout(() => {
      const navItems = this.shadowRoot.querySelectorAll('.nav-item');
      navItems.forEach(item => {
        item.addEventListener('click', () => {
          navItems.forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          
          // On mobile, collapse sidebar after selection
          if (window.innerWidth < 768) {
            this.setAttribute('data-collapsed', 'true');
            document.querySelector('main').classList.remove('ml-64');
          }
        });
      });
    }, 100);
  }
  
  static get observedAttributes() {
    return ['data-collapsed'];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data-collapsed') {
      const main = document.querySelector('main');
      if (main) {
        main.style.marginLeft = newValue === 'true' ? '0' : '16rem';
      }
    }
  }
}
customElements.define('custom-sidebar', CustomSidebar);
