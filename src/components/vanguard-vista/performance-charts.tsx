"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const chartData = [
  { year: "2019", performance: 8.5 },
  { year: "2020", performance: 12.3 },
  { year: "2021", performance: 15.1 },
  { year: "2022", performance: 10.2 },
  { year: "2023", performance: 18.7 },
  { year: "2024", performance: 22.4 },
];

const chartConfig = {
  performance: {
    label: "Kinerja",
    color: "hsl(var(--accent))",
  },
};

export function PerformanceCharts() {
  return (
    <section id="performance" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Kinerja yang Terbukti</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Rekam jejak kami berbicara sendiri. Pertumbuhan konsisten melalui investasi strategis.
          </p>
        </div>
        <Card className="bg-background/50">
          <CardHeader>
            <CardTitle>Kinerja Portofolio Tahunan</CardTitle>
            <CardDescription>Pertumbuhan dari tahun ke tahun (dalam %)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="year"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value}
                  />
                  <YAxis
                    stroke="hsl(var(--foreground))"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" labelClassName="font-bold" className="bg-card" />}
                  />
                  <Bar dataKey="performance" fill="var(--color-performance)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
