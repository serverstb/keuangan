import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function RiskManagement() {
  return (
    <section id="risk-management" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Pendekatan Kami</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Transparansi, Kepercayaan, dan Keunggulan dalam setiap langkah.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
            <AccordionItem value="item-1" className="border rounded-lg bg-card px-4">
              <AccordionTrigger className="font-headline text-lg hover:no-underline">Cara Berinvestasi</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Memulai perjalanan investasi Anda bersama kami sangatlah mudah. Proses kami dimulai dengan konsultasi mendalam untuk memahami tujuan keuangan, toleransi risiko, dan horizon waktu Anda. Setelah itu, tim ahli kami akan merancang portofolio yang disesuaikan dan memandu Anda melalui setiap langkah, memastikan transparansi dan kejelasan penuh.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg bg-card px-4">
              <AccordionTrigger className="font-headline text-lg hover:no-underline">Pengelolaan Dana</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Kami menerapkan pendekatan disiplin dalam pengelolaan dana. Setiap aset dalam portofolio Anda dipantau secara ketat dan dianalisis secara berkala. Tim kami memanfaatkan riset pasar yang mendalam dan analisis data canggih untuk membuat keputusan investasi yang tepat waktu, bertujuan untuk mengoptimalkan imbal hasil sambil mengelola risiko secara proaktif.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg bg-card px-4">
              <AccordionTrigger className="font-headline text-lg hover:no-underline">Tanggung Jawab & Kepercayaan</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Kepercayaan adalah fondasi dari hubungan kami dengan klien. Kami beroperasi dengan standar etika tertinggi dan komitmen penuh terhadap tanggung jawab fidusia. Ini berarti kepentingan Anda selalu menjadi prioritas utama kami. Kami menjaga komunikasi yang terbuka dan jujur, memberikan laporan rutin, dan selalu tersedia untuk menjawab pertanyaan Anda.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}