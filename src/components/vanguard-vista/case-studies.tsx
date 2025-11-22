"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const caseStudies = [
  {
    title: 'Unicorn Startup Teknologi',
    description: 'Investasi tahap awal pada platform SaaS yang disruptif, menghasilkan pengembalian investasi 50x saat IPO.',
    roi: '50x ROI',
    image: PlaceHolderImages.find(p => p.id === 'case-study-1')!,
  },
  {
    title: 'Revitalisasi Real Estat',
    description: 'Akuisisi strategis dan pengembangan properti perkotaan yang dinilai terlalu rendah, menghasilkan peningkatan nilai portofolio 300%.',
    roi: 'Peningkatan Nilai 300%',
    image: PlaceHolderImages.find(p => p.id === 'case-study-2')!,
  },
  {
    title: 'Proyek Energi Terbarukan',
    description: 'Membiayai pembangkit listrik tenaga surya skala besar, berkontribusi pada tujuan energi bersih dan memberikan pengembalian jangka panjang yang stabil.',
    roi: '15% IRR',
    image: PlaceHolderImages.find(p => p.id === 'case-study-3')!,
  },
  {
    title: 'Inovasi Agrikultur',
    description: 'Mendanai pertanian vertikal perkotaan yang canggih, meningkatkan keamanan pangan lokal dan mengurangi jejak karbon.',
    roi: 'Pertumbuhan 25% YOY',
    image: PlaceHolderImages.find(p => p.id === 'case-study-4')!,
  },
  {
    title: 'Terobosan Bioteknologi',
    description: 'Investasi pada penelitian terapi gen yang inovatif, yang mengarah pada penemuan medis yang signifikan dan keuntungan finansial yang besar.',
    roi: 'Paten Bernilai Tinggi',
    image: PlaceHolderImages.find(p => p.id === 'case-study-5')!,
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Kisah Sukses</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Mengubah potensi menjadi kinerja.
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
