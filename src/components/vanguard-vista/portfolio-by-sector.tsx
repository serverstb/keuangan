"use client";

import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from 'recharts';
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
    <section id="portfolio" className="py-16 md:py-24" style={{ backgroundColor: '#21004f' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white">Portofolio Berdasarkan Sektor</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
            Alokasi aset kami yang terdiversifikasi di berbagai sektor utama.
          </p>
        </div>
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Distribusi Portofolio Saat Ini</CardTitle>
            <CardDescription className="text-white/80">Alokasi dalam persentase (%) dari total aset yang dikelola</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="mx-auto aspect-square h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
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
                    stroke="var(--background)"
                  >
                     {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Legend
                    content={({ payload }) => {
                      return (
                        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 text-sm text-white/80">
                          {payload?.map((entry, index) => (
                            <li key={`item-${index}`} className="flex items-center gap-2">
                              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
                              <span>{entry.value}</span>
                            </li>
                          ))}
                        </ul>
                      )
                    }}
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