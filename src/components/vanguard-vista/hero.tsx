import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const sliderImages = [
  PlaceHolderImages.find(p => p.id === 'hero-slider-1')!,
  PlaceHolderImages.find(p => p.id === 'hero-slider-2')!,
  PlaceHolderImages.find(p => p.id === 'hero-slider-3')!,
  PlaceHolderImages.find(p => p.id === 'hero-slider-4')!,
  PlaceHolderImages.find(p => p.id === 'hero-slider-5')!,
];

export function Hero({ introduction }: { introduction: string }) {
  return (
    <section id="home" className="relative py-20 md:py-32 bg-card text-foreground">
      <Carousel
        opts={{ loop: true, }}
        className="absolute inset-0 w-full h-full"
      >
        <CarouselContent className="h-full">
          {sliderImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
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
          <Button size="lg" asChild className="shadow-md">
            <a href="#contact">Hubungi Kami</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
