class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #ffffff;
          color: #6b7280;
          padding: 2rem;
          text-align: center;
          border-top: 1px solid #e5e7eb;
          margin-top: 2rem;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        
        .footer-links a {
          color: #4b5563;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .footer-links a:hover {
          color: #4f46e5;
        }
        
        @media (max-width: 768px) {
          footer {
            padding: 1.5rem 1rem;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
          </div>
          <p>&copy; ${new Date().getFullYear()} SideShift. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
