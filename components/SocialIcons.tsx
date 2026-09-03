export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://www.instagram.com/rodrigotavares"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <svg className="icon-gray" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
        <svg className="icon-color" width="20" height="20" viewBox="0 0 24 24">
          <defs>
            <radialGradient id="ig-gradient-nav" cx="30%" cy="107%" r="150%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="5%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-gradient-nav)" />
          <circle cx="12" cy="12" r="4.5" fill="none" stroke="#fff" strokeWidth="1.7" />
          <circle cx="17.3" cy="6.7" r="1.1" fill="#fff" />
        </svg>
      </a>

      <a
        href="https://soundcloud.com/osinoxidaveis"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Soundcloud"
      >
        <svg className="icon-gray" width="22" height="20" viewBox="0 0 32 24" fill="currentColor">
          <rect x="0" y="10" width="1.5" height="8" rx="0.75" />
          <rect x="3" y="7" width="1.5" height="11" rx="0.75" />
          <rect x="6" y="9" width="1.5" height="9" rx="0.75" />
          <path d="M9 5.5c-.4 0-.8.03-1.2.1v12.4h13.7c2.5 0 4.5-2 4.5-4.5 0-2.3-1.8-4.3-4.1-4.5-.4-3.1-3-5.5-6.2-5.5-2.4 0-4.5 1.3-5.6 3.3-.4-.1-.8-.2-1.1-.2z" />
        </svg>
        <svg className="icon-color" width="22" height="20" viewBox="0 0 32 24" fill="#ff5500">
          <rect x="0" y="10" width="1.5" height="8" rx="0.75" />
          <rect x="3" y="7" width="1.5" height="11" rx="0.75" />
          <rect x="6" y="9" width="1.5" height="9" rx="0.75" />
          <path d="M9 5.5c-.4 0-.8.03-1.2.1v12.4h13.7c2.5 0 4.5-2 4.5-4.5 0-2.3-1.8-4.3-4.1-4.5-.4-3.1-3-5.5-6.2-5.5-2.4 0-4.5 1.3-5.6 3.3-.4-.1-.8-.2-1.1-.2z" />
        </svg>
      </a>
    </div>
  );
}
