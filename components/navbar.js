class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 40;
        }
        .logo { 
          color: #4f46e5;
          font-weight: bold; 
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .menu-button {
          display: none;
          background: none;
          border: none;
          color: #4f46e5;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .menu-button {
            display: block;
          }
        }
      </style>
      <nav>
        <div class="logo">
          <i data-feather="compass"></i>
          <span>SideShift</span>
        </div>
        <button class="menu-button" id="mobileMenuButton">
          <i data-feather="menu"></i>
        </button>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
