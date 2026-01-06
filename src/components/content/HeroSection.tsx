import bishuHero from "@/assets/bishu-hero.jpg";

const HeroSection = () => {
  return (
    <section className="w-full mb-8">
      <div className="relative w-full aspect-square md:aspect-[16/9] overflow-hidden">
        <img 
          src={bishuHero} 
          alt="Bishu - New Drop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-6 right-6 md:bottom-16 md:left-12">
          <h1 className="text-5xl md:text-8xl font-display tracking-wider text-foreground text-glow-green mb-4">
            NEW DROP
          </h1>
          <p className="text-sm md:text-base font-mono text-muted-foreground uppercase tracking-widest">
            BISHU SEASON // LIMITED STOCK
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
