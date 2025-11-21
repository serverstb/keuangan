import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Target, TrendingUp, Scale, ShieldCheck } from 'lucide-react';

const strategies = [
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Growth Equity',
    description: 'We invest in high-growth companies with strong market positions and potential for significant expansion.'
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Value Investing',
    description: 'Our team identifies undervalued assets with solid fundamentals, aiming for long-term capital appreciation.'
  },
  {
    icon: <Scale className="h-8 w-8 text-primary" />,
    title: 'Balanced Portfolio',
    description: 'A diversified approach across asset classes to balance risk and return for stable, consistent growth.'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Venture Capital',
    description: 'We partner with innovative startups and early-stage ventures that are poised to disrupt their industries.'
  }
]

export function InvestmentStrategies() {
  return (
    <section id="strategies" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Investment Strategies</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A disciplined approach to wealth creation and preservation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategies.map((strategy, index) => (
            <Card key={index} className="flex flex-col text-center items-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-4">
                {strategy.icon}
              </CardHeader>
              <CardContent className="p-0">
                <h3 className="font-headline text-xl mb-2 font-semibold text-primary">{strategy.title}</h3>
                <p className="text-muted-foreground">{strategy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
