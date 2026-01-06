import bishuAbout from "@/assets/bishu-about.jpg";

const AboutSection = () => {
  return (
    <section className="w-full px-6 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="aspect-[3/4] overflow-hidden border border-border">
            <img 
              src={bishuAbout} 
              alt="Bishu - Producer and Creator" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="order-1 md:order-2 space-y-6">
          <div>
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
              // ABOUT
            </p>
            <h2 className="text-3xl md:text-4xl font-display tracking-wider text-foreground">
              THE PRODUCER
            </h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm font-mono text-muted-foreground leading-relaxed">
              Bishu is a music producer, content creator, and YouTuber known for breaking down production techniques and creating genre-bending electronic music.
            </p>
            <p className="text-sm font-mono text-muted-foreground leading-relaxed">
              From Monstercat releases to viral tutorials, Bishu's sound blends bass music, future beats, and experimental production that pushes boundaries.
            </p>
            <p className="text-sm font-mono text-muted-foreground leading-relaxed">
              This merch represents the community — the late nights, the creative grind, and the sounds that connect us all.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://youtube.com/@bishu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground text-sm font-mono uppercase tracking-wider hover:bg-primary-hover transition-colors"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
