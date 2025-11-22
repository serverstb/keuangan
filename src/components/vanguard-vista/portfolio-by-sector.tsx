"use client";

import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const chartData = [
  { sector: "Teknologi", value: 45, fill: "hsl(var(--chart-1))" },
  { sector: "Keuangan", value: 25, fill: "hsl(var(--chart-2))" },
  { sector: "Kesehatan", value: 15, fill: "hsl(var(--chart-3))" },
  { sector: "Industri", value: 10, fill: "hsl(var(--chart-4))" },
  { sector: "Lainnya", value: 5, fill: "hsl(var(--chart-5))" },
];

const chartConfig = {
  value: {
    label: "Value",
  },
  Teknologi: {
    label: "Teknologi",
    color: "hsl(var(--chart-1))",
  },
  Keuangan: {
    label: "Keuangan",
    color: "hsl(var(--chart-2))",
  },
  Kesehatan: {
    label: "Kesehatan",
    color: "hsl(var(--chart-3))",
  },
  Industri: {
    label: "Industri",
    color: "hsl(var(--chart-4))",
  },
  Lainnya: {
    label: "Lainnya",
    color: "hsl(var(--chart-5))",
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
        <Card className="bg-background/50 border-border/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-foreground">Distribusi Portofolio Saat Ini</CardTitle>
            <CardDescription className="text-foreground/80">Alokasi dalam persentase (%) dari total aset yang dikelola</CardDescription>
          </CardHeader>
          <CardContent>
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
             <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 text-sm text-foreground/80">
                {chartData.map((entry) => (
                    <div key={entry.sector} className="flex items-center gap-2">
                    <span
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: entry.fill }}
                    />
                    <span>{entry.sector}</span>
                    </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}