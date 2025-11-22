import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero({ introduction }: { introduction: string }) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  return (
    <section id="home" className="relative py-20 md:py-32 bg-card text-foreground">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="container relative mx-auto px-4 md:px-6 text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
          Vanguard Vista
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
          Investasi Strategis untuk Masa Depan yang Lebih Cerah
        </p>
        <div className="mt-8 max-w-3xl mx-auto bg-background/50 p-6 rounded-xl shadow-inner backdrop-blur-sm">
           <p className="text-lg text-foreground">
             {introduction}
           </p>
        </div>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href="#contact">Hubungi Kami</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
