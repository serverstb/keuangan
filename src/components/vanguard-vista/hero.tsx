import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function Hero({ introduction }: { introduction: string }) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center">
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
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative mx-auto px-4 md:px-6 text-white">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
          Investasi Strategis untuk Masa Depan Cerah
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
          Di Vanguard Vista, kami membuka potensi dan mendorong kesuksesan melalui investasi strategis yang terukur.
        </p>
        <div className="mt-8 max-w-3xl mx-auto bg-black/30 p-6 rounded-xl shadow-inner backdrop-blur-sm">
           <p className="text-lg">
             {introduction}
           </p>
        </div>
        <div className="mt-8">
          <Button size="lg" asChild className="shadow-md">
            <a href="#strategies">
              Jelajahi Strategi Kami <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
