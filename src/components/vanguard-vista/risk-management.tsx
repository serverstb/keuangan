import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function RiskManagement() {
  return (
    <section id="risk-management" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Manajemen Risiko</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Komitmen kami untuk melindungi dan menumbuhkan modal Anda.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
            <AccordionItem value="item-1" className="border rounded-lg bg-card px-4">
              <AccordionTrigger className="font-headline text-lg hover:no-underline">Uji Tuntas Komprehensif</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Setiap peluang investasi menjalani proses uji tuntas yang ketat. Kami menganalisis tren pasar, lanskap kompetitif, kesehatan keuangan, dan kualitas kepemimpinan untuk memastikan keselarasan dengan kriteria investasi kami yang ketat.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg bg-card px-4">
              <AccordionTrigger className="font-headline text-lg hover:no-underline">Diversifikasi Portofolio</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Kami memitigasi risiko dengan membangun portofolio yang terdiversifikasi di berbagai kelas aset, industri, dan wilayah geografis. Strategi ini membantu meredam volatilitas pasar dan memberikan imbal hasil yang lebih stabil dari waktu ke waktu.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg bg-card px-4">
              <AccordionTrigger className="font-headline text-lg hover:no-underline">Pemantauan Berkelanjutan</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Komitmen kami tidak berakhir setelah investasi dilakukan. Kami terus memantau perusahaan portofolio kami dan kondisi pasar, siap mengambil tindakan tegas untuk melindungi modal klien kami dan memanfaatkan peluang baru.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4" className="border rounded-lg bg-card px-4">
              <AccordionTrigger className="font-headline text-lg hover:no-underline">Kepatuhan Regulasi</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Vanguard Vista beroperasi dengan standar etika tertinggi dan secara ketat mematuhi semua persyaratan peraturan. Kerangka kerja kepatuhan kami yang kuat memastikan transparansi dan melindungi kepentingan klien kami.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}