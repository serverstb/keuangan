"use client";

import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const chartData = [
  { sector: "Teknologi", value: 45, fill: "hsl(210, 80%, 55%)" },
  { sector: "Keuangan", value: 25, fill: "hsl(150, 75%, 45%)" },
  { sector: "Kesehatan", value: 15, fill: "hsl(45, 90%, 50%)" },
  { sector: "Industri", value: 10, fill: "hsl(25, 85%, 55%)" },
  { sector: "Lainnya", value: 5, fill: "hsl(340, 80%, 60%)" },
];

const renderLegend = (props: any) => {
  const { payload } = props;

  return (
    <ul className="flex flex-col space-y-2">
      {
        payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className='text-sm text-white/80'>{`${entry.payload.sector}: ${entry.payload.value}%`}</span>
          </li>
        ))
      }
    </ul>
  );
}


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
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader className="text-center">
            <CardTitle className='text-white'>Distribusi Portofolio Saat Ini</CardTitle>
            <CardDescription className='text-white/80'>Alokasi dalam persentase (%) dari total aset yang dikelola</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[400px] flex items-center justify-center">
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
                  <Legend layout="vertical" verticalAlign="middle" align="right" content={renderLegend} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
