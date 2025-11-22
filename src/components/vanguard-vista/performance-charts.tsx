"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, TrendingDown } from "lucide-react";

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
  },
};

const colors = [
  "hsl(210, 80%, 55%)",
  "hsl(150, 75%, 45%)",
  "hsl(45, 90%, 50%)",
  "hsl(25, 85%, 55%)",
  "hsl(340, 80%, 60%)",
  "hsl(180, 70%, 40%)"
];

export function PerformanceCharts() {
  const getChange = (index: number) => {
    if (index === 0) return { change: 0, icon: null };
    const change = chartData[index].performance - chartData[index - 1].performance;
    return {
      change: parseFloat(change.toFixed(2)),
      icon: change >= 0 ? <TrendingUp className="h-4 w-4 text-green-500" /> : <TrendingDown className="h-4 w-4 text-red-500" />
    };
  };
  
  return (
    <section id="performance" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Kinerja yang Terbukti</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Rekam jejak kami berbicara sendiri. Pertumbuhan konsisten melalui investasi strategis.
          </p>
        </div>
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Laporan Kinerja Portofolio Tahunan</CardTitle>
            <CardDescription>Pertumbuhan investasi dari tahun ke tahun dalam persentase (%)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-start">
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
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis
                      stroke="hsl(var(--muted-foreground))"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dot" labelClassName="font-bold" className="bg-popover text-popover-foreground" />}
                    />
                    <Bar dataKey="performance" radius={[4, 4, 0, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-headline font-semibold text-foreground mb-2">Ringkasan Analisis</h3>
                    <p className="text-muted-foreground text-sm">
                      Portofolio kami menunjukkan tren pertumbuhan yang kuat dan positif, dengan rata-rata imbal hasil tahunan yang mengesankan. Meskipun terjadi sedikit perlambatan pada tahun 2022 akibat volatilitas pasar global, strategi adaptif kami berhasil membalikkan keadaan dengan lonjakan signifikan pada tahun 2023 dan 2024. Hal ini membuktikan ketahanan dan potensi keuntungan jangka panjang dari pendekatan investasi kami.
                    </p>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Tahun</TableHead>
                      <TableHead className="font-semibold text-right">Pertumbuhan</TableHead>
                      <TableHead className="font-semibold text-right">Perubahan</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {chartData.map((item, index) => {
                      const { change, icon } = getChange(index);
                      return (
                        <TableRow key={item.year}>
                          <TableCell>{item.year}</TableCell>
                          <TableCell className="text-right font-medium">{item.performance}%</TableCell>
                          <TableCell className="text-right">
                           <div className="flex items-center justify-end gap-1">
                              {icon}
                              <span>{change !== 0 ? `${change}%` : '-'}</span>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}