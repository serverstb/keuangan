import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Target, TrendingUp, Scale, ShieldCheck } from 'lucide-react';

const strategies = [
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: 'Ekuitas Pertumbuhan',
    description: 'Kami berinvestasi di perusahaan dengan pertumbuhan tinggi, posisi pasar yang kuat, dan potensi ekspansi signifikan.'
  },
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: 'Investasi Nilai',
    description: 'Tim kami mengidentifikasi aset yang dinilai terlalu rendah dengan fundamental yang solid, bertujuan untuk apresiasi modal jangka panjang.'
  },
  {
    icon: <Scale className="h-8 w-8 text-white" />,
    title: 'Portofolio Seimbang',
    description: 'Pendekatan terdiversifikasi di berbagai kelas aset untuk menyeimbangkan risiko dan imbal hasil untuk pertumbuhan yang stabil dan konsisten.'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
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
            <Card key={index} className="flex flex-col text-center items-center p-6 bg-white/10 border-white/20 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-4">
                {strategy.icon}
              </CardHeader>
              <CardContent className="p-0">
                <h3 className="font-headline text-xl mb-2 font-semibold text-white">{strategy.title}</h3>
                <p className="text-white/80">{strategy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}