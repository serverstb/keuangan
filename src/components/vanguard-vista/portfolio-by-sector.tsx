"use client";

import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const chartData = [
  { sector: "Teknologi", value: 45, fill: "hsl(210, 80%, 55%)" },
  { sector: "Keuangan", value: 25, fill: "hsl(150, 75%, 45%)" },
  { sector: "Kesehatan", value: 15, fill: "hsl(45, 90%, 50%)" },
  { sector: "Industri", value: 10, fill: "hsl(25, 85%, 55%)" },
  { sector: "Lainnya", value: 5, fill: "hsl(340, 80%, 60%)" },
];

const chartConfig = {
  value: {
    label: "Nilai",
  },
  Teknologi: {
    label: "Teknologi",
    color: "hsl(210, 80%, 55%)",
  },
  Keuangan: {
    label: "Keuangan",
    color: "hsl(150, 75%, 45%)",
  },
  Kesehatan: {
    label: "Kesehatan",
    color: "hsl(45, 90%, 50%)",
  },
  Industri: {
    label: "Industri",
    color: "hsl(25, 85%, 55%)",
  },
  Lainnya: {
    label: "Lainnya",
    color: "hsl(340, 80%, 60%)",
  },
};

export function PortfolioBySector() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Portofolio Berdasarkan Sektor</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Alokasi aset kami yang terdiversifikasi di berbagai sektor utama.
          </p>
        </div>
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader className="text-center">
            <CardTitle>Distribusi Portofolio Saat Ini</CardTitle>
            <CardDescription>Alokasi dalam persentase (%) dari total aset yang dikelola</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="mx-auto aspect-square h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel className="bg-card" />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="sector"
                    innerRadius={100}
                    strokeWidth={5}
                  >
                     {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <ChartLegend
                    content={<ChartLegendContent nameKey="sector" />}
                    className="-translate-y-[10px] flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
