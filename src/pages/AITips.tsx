import { FinancialTipCard } from '@/components/dashboard/FinancialTipCard';
import { financialTips } from '@/data/mockData';

export const AITips = () => {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">AI-Powered Financial Tips</h1>
          <p className="text-muted-foreground">
            Personalized insights to help you optimize your spending and boost your savings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {financialTips.map((tip) => (
            <FinancialTipCard key={tip.id} tip={tip} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">More insights coming soon!</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Our AI is continuously learning from your spending patterns to provide 
            even more personalized financial recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};