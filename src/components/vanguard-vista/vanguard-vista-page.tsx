"use client";

import type { FC } from 'react';
import { Header } from '@/components/vanguard-vista/header';
import { Hero } from '@/components/vanguard-vista/hero';
import { InvestmentStrategies } from '@/components/vanguard-vista/investment-strategies';
import { PerformanceCharts } from '@/components/vanguard-vista/performance-charts';
import { Team } from '@/components/vanguard-vista/team';
import { CaseStudies } from '@/components/vanguard-vista/case-studies';
import { RiskManagement } from '@/components/vanguard-vista/risk-management';
import { Contact } from '@/components/vanguard-vista/contact';
import { Footer } from '@/components/vanguard-vista/footer';

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
        <Team />
        <CaseStudies />
        <RiskManagement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default VanguardVistaPage;
