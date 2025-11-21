import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function RiskManagement() {
  return (
    <section id="risk-management" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Risk Management</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Our commitment to protecting and growing your capital.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
            <AccordionItem value="item-1" className="border rounded-lg bg-card px-4">
              <AccordionTrigger className="font-headline text-lg hover:no-underline">Comprehensive Due Diligence</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Every investment opportunity undergoes a rigorous due diligence process. We analyze market trends, competitive landscapes, financial health, and leadership quality to ensure alignment with our strict investment criteria.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg bg-card px-4">
              <AccordionTrigger className="font-headline text-lg hover:no-underline">Portfolio Diversification</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                We mitigate risk by constructing diversified portfolios across various asset classes, industries, and geographic regions. This strategy helps to cushion against market volatility and provides more stable returns over time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg bg-card px-4">
              <AccordionTrigger className="font-headline text-lg hover:no-underline">Continuous Monitoring</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Our commitment doesn't end after an investment is made. We continuously monitor our portfolio companies and market conditions, ready to take decisive action to protect our clients' capital and seize new opportunities.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4" className="border rounded-lg bg-card px-4">
              <AccordionTrigger className="font-headline text-lg hover:no-underline">Regulatory Compliance</AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Vanguard Vista operates with the highest ethical standards and adheres strictly to all regulatory requirements. Our robust compliance framework ensures transparency and protects our clients' interests.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
