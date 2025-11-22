"use client";

import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const chartData = [
  { sector: "Teknologi", value: 45, fill: "#1A438F", description: "Berinvestasi pada inovasi perangkat lunak, perangkat keras, dan layanan digital yang membentuk masa depan." },
  { sector: "Keuangan", value: 25, fill: "#76B365", description: "Fokus pada lembaga keuangan yang stabil dan fintech yang mengganggu untuk pertumbuhan jangka panjang." },
  { sector: "Kesehatan", value: 15, fill: "#FDBA74", description: "Menargetkan perusahaan bioteknologi, farmasi, dan layanan kesehatan yang mendorong kemajuan medis." },
  { sector: "Industri", value: 10, fill: "#818CF8", description: "Mendukung perusahaan industri penting yang membangun dan memberi daya pada ekonomi global." },
  { sector: "Lainnya", value: 5, fill: "#F472B6", description: "Alokasi terdiversifikasi di sektor-sektor berkembang seperti energi terbarukan dan barang konsumsi." },
];

const chartConfig = {
  value: {
    label: "Value",
  },
  Teknologi: {
    label: "Teknologi",
    color: "#1A438F",
  },
  Keuangan: {
    label: "Keuangan",
    color: "#76B365",
  },
  Kesehatan: {
    label: "Kesehatan",
    color: "#FDBA74",
  },
  Industri: {
    label: "Industri",
    color: "#818CF8",
  },
  Lainnya: {
    label: "Lainnya",
    color: "#F472B6",
  },
};

export function PortfolioBySector() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Portofolio Berdasarkan Sektor</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Alokasi aset kami yang terdiversifikasi di berbagai sektor utama.
          </p>
        </div>
        <Card className="bg-background/70 border-border/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-foreground">Distribusi Portofolio Saat Ini</CardTitle>
            <CardDescription className="text-foreground/80">Alokasi dalam persentase (%) dari total aset yang dikelola</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ChartContainer config={chartConfig} className="mx-auto aspect-square h-[400px]">
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel className="bg-background/80 backdrop-blur-sm" />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="sector"
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={150}
                    strokeWidth={5}
                    stroke="hsl(var(--background))"
                  >
                     {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-foreground text-2xl font-bold font-headline"
                  >
                    Aset
                  </text>
                </PieChart>
              </ChartContainer>
              <div className="space-y-4">
                {chartData.map((entry) => (
                  <div key={entry.sector} className="flex items-start gap-4">
                    <div
                      className="h-4 w-4 rounded-full mt-1 shrink-0"
                      style={{ backgroundColor: entry.fill }}
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{entry.sector} - {entry.value}%</h4>
                      <p className="text-sm text-foreground/80">{entry.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
