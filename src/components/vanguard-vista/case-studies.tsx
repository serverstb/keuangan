"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const caseStudies = [
  {
    title: 'Tech Startup Unicorn',
    description: 'Early-stage investment in a disruptive SaaS platform, resulting in a 50x return on investment upon its IPO.',
    roi: '50x ROI',
    image: PlaceHolderImages.find(p => p.id === 'case-study-1')!,
  },
  {
    title: 'Real Estate Revitalization',
    description: 'Strategic acquisition and development of undervalued urban properties, yielding a 300% increase in portfolio value.',
    roi: '300% Value Increase',
    image: PlaceHolderImages.find(p => p.id === 'case-study-2')!,
  },
  {
    title: 'Renewable Energy Project',
    description: 'Financed a large-scale solar farm, contributing to clean energy goals and delivering stable, long-term returns.',
    roi: '15% IRR',
    image: PlaceHolderImages.find(p => p.id === 'case-study-3')!,
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Success Stories</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Transforming potential into performance.
          </p>
        </div>
        <Carousel opts={{ loop: true }} className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {caseStudies.map((study, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="overflow-hidden h-full flex flex-col transition-shadow hover:shadow-lg">
                    <Image
                      src={study.image.imageUrl}
                      alt={study.image.description}
                      data-ai-hint={study.image.imageHint}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="font-headline">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <p className="text-muted-foreground mb-4">{study.description}</p>
                      <Badge variant="secondary" className="bg-accent text-accent-foreground w-fit">{study.roi}</Badge>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </div>
    </section>
  );
}
