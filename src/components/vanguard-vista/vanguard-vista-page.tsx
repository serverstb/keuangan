"use client";

import type { FC } from 'react';
import { Header } from '@/components/vanguard-vista/header';
import { Hero } from '@/components/vanguard-vista/hero';
import { InvestmentStrategies } from '@/components/vanguard-vista/investment-strategies';
import { PerformanceCharts } from '@/components/vanguard-vista/performance-charts';
import { Team } from '@/components/vanguard-vista/team';
import { CaseStudies } from '@/components/vanguard-vista/case-studies';
import { Contact } from '@/components/vanguard-vista/contact';
import { Footer } from '@/components/vanguard-vista/footer';
import { PortfolioBySector } from '@/components/vanguard-vista/portfolio-by-sector';

interface VanguardVistaPageProps {
  introduction: string;
}

const VanguardVistaPage: FC<VanguardVistaPageProps> = ({ introduction }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero introduction={introduction} />
        <InvestmentStrategies />
        <PerformanceCharts />
        <PortfolioBySector />
        <Team />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default VanguardVistaPage;
