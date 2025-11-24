import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const strategies = [
  {
    image: PlaceHolderImages.find(p => p.id === 'strategy-growth')!,
    title: 'Ekuitas Pertumbuhan',
    description: 'Kami berinvestasi di perusahaan dengan pertumbuhan tinggi, posisi pasar yang kuat, dan potensi ekspansi signifikan.'
  },
  {
    image: PlaceHolderImages.find(p => p.id === 'strategy-value')!,
    title: 'Investasi Nilai',
    description: 'Tim kami mengidentifikasi aset yang dinilai terlalu rendah dengan fundamental yang solid, bertujuan untuk apresiasi modal jangka panjang.'
  },
  {
    image: PlaceHolderImages.find(p => p.id === 'strategy-balanced')!,
    title: 'Portofolio Seimbang',
    description: 'Pendekatan terdiversifikasi di berbagai kelas aset untuk menyeimbangkan risiko dan imbal hasil untuk pertumbuhan yang stabil dan konsisten.'
  },
  {
    image: PlaceHolderImages.find(p => p.id === 'strategy-venture')!,
    title: 'Modal Ventura',
    description: 'Kami bermitra dengan startup inovatif dan usaha tahap awal yang siap mendisrupsi industri mereka.'
  }
]

export function InvestmentStrategies() {
  return (
    <section id="strategies" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Strategi Investasi Kami</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Pendekatan disiplin untuk penciptaan dan pelestarian kekayaan.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategies.map((strategy, index) => (
            <Card key={index} className="flex flex-col text-left items-start bg-card hover:shadow-xl transition-shadow overflow-hidden rounded-lg group">
               <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={strategy.image.imageUrl}
                  alt={strategy.image.description}
                  data-ai-hint={strategy.image.imageHint}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="p-6 w-full">
                <CardTitle className="font-headline text-xl font-semibold text-foreground">{strategy.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <p className="text-muted-foreground">{strategy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
