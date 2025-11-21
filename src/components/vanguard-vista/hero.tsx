import { Button } from '@/components/ui/button';

export function Hero({ introduction }: { introduction: string }) {
  return (
    <section id="home" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-primary">
          Vanguard Vista
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
          Strategic Investment for a Brighter Future
        </p>
        <div className="mt-8 max-w-3xl mx-auto bg-background/50 p-6 rounded-xl shadow-inner">
           <p className="text-lg text-foreground">
             {introduction}
           </p>
        </div>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
