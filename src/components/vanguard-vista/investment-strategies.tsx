import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

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
    <section id="strategies" className="py-16 md:py-24" style={{ backgroundColor: '#21004f', color: 'white' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white">Strategi Investasi Kami</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
            Pendekatan disiplin untuk penciptaan dan pelestarian kekayaan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategies.map((strategy, index) => (
            <Card key={index} className="flex flex-col text-center items-center bg-white/10 border-white/20 hover:shadow-lg transition-shadow overflow-hidden">
               <div className="relative w-full h-40">
                <Image
                  src={strategy.image.imageUrl}
                  alt={strategy.image.description}
                  data-ai-hint={strategy.image.imageHint}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="font-headline text-xl font-semibold text-white">{strategy.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-white/80">{strategy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
