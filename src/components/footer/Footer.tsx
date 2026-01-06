const Footer = () => {
  return (
    <footer className="w-full bg-background text-foreground pt-12 pb-4 px-6 border-t border-border mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-display tracking-wider mb-4">BISHU</h2>
            <p className="text-sm font-mono text-muted-foreground leading-relaxed">
              Official merch for Bishu — producer, YouTuber, and creator of sounds that hit different.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider mb-4 text-primary">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.youtube.com/channel/UCvSpVThzt4riOtmyWjtMGug" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/welcome2bishu/" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com/welcome2bishu" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/artist/1DzQInbDVhE9Lh5s6T0DUL?si=gbDe1rDkSOiwMeLzhkueGg" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                  Spotify
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider mb-4 text-primary">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@bishu.com" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <span className="text-sm font-mono text-muted-foreground">
                  Shipping Info
                </span>
              </li>
              <li>
                <span className="text-sm font-mono text-muted-foreground">
                  Returns
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-border pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs font-mono text-muted-foreground mb-2 md:mb-0">
            © 2026 BISHU. All rights reserved.
          </p>
          <p className="text-xs font-mono text-muted-foreground">
            Made with 🔊 for the community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
