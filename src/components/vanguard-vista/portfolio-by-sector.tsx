"use client";

import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const chartData = [
  { sector: "Teknologi", value: 45, description: "Inovasi perangkat lunak, hardware, dan layanan digital." },
  { sector: "Keuangan", value: 25, description: "Lembaga keuangan stabil dan fintech disruptif." },
  { sector: "Kesehatan", value: 15, description: "Biotek, farmasi, dan layanan kesehatan canggih." },
  { sector: "Industri", value: 10, description: "Perusahaan industri vital untuk ekonomi global." },
  { sector: "Lainnya", value: 5, description: "Energi terbarukan dan barang konsumsi." },
];

const chartConfig = {
  value: { label: "Value" },
  Teknologi: { label: "Teknologi", color: "hsl(var(--chart-1))" },
  Keuangan: { label: "Keuangan", color: "hsl(var(--chart-2))" },
  Kesehatan: { label: "Kesehatan", color: "hsl(var(--chart-3))" },
  Industri: { label: "Industri", color: "hsl(var(--chart-4))" },
  Lainnya: { label: "Lainnya", color: "hsl(var(--chart-5))" },
};

export function PortfolioBySector() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Portofolio Berdasarkan Sektor</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Alokasi aset kami yang terdiversifikasi di berbagai sektor utama.
          </p>
        </div>
        <Card className="bg-card shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle>Distribusi Portofolio Saat Ini</CardTitle>
            <CardDescription>Alokasi dalam persentase (%) dari total aset yang dikelola</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ChartContainer config={chartConfig} className="mx-auto aspect-square h-[350px]">
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel className="bg-popover text-popover-foreground rounded-lg shadow-lg" />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="sector"
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    strokeWidth={5}
                    stroke="hsl(var(--background))"
                  >
                     {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={chartConfig[entry.sector as keyof typeof chartConfig]?.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
              <div className="space-y-4">
                {chartData.map((entry) => (
                  <div key={entry.sector} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                    <div
                      className="h-4 w-4 rounded-full mt-1 shrink-0"
                      style={{ backgroundColor: chartConfig[entry.sector as keyof typeof chartConfig]?.color }}
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{entry.sector} - {entry.value}%</h4>
                      <p className="text-sm text-muted-foreground">{entry.description}</p>
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
