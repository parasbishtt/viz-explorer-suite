import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SpendingPieChart } from '@/components/charts/SpendingPieChart';
import { MonthlySpendingChart } from '@/components/charts/MonthlySpendingChart';
import { FinancialTipCard } from '@/components/dashboard/FinancialTipCard';
import { CurrencyConverter } from '@/components/dashboard/CurrencyConverter';
import { 
  spendingByCategory, 
  monthlySpendingData, 
  financialTips 
} from '@/data/mockData';
import { Eye } from 'lucide-react';

export const Dashboard = () => {
  const totalSpent = 6360.00;
  const budgetRemaining = 840.00;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
        <Button variant="outline" className="gap-2">
          <Eye className="w-4 h-4" />
          View Full Report
        </Button>
      </div>

      {/* Financial Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {financialTips.map((tip) => (
          <FinancialTipCard key={tip.id} tip={tip} />
        ))}
      </div>

      {/* Monthly Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Monthly Spending Overview</CardTitle>
          <p className="text-sm text-muted-foreground">
            Tracking your expenses month-by-month against your budget
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">Total Spent (Current Year)</h3>
              <p className="text-3xl font-bold text-foreground">${totalSpent.toFixed(2)}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">Budget Remaining</h3>
              <p className="text-3xl font-bold text-success">${budgetRemaining.toFixed(2)}</p>
            </div>
          </div>
          <MonthlySpendingChart data={monthlySpendingData} />
        </CardContent>
      </Card>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Spending Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Spending Breakdown by Category</CardTitle>
            <p className="text-sm text-muted-foreground">Your expenses this month</p>
          </CardHeader>
          <CardContent>
            <SpendingPieChart data={spendingByCategory} />
          </CardContent>
        </Card>

        {/* Currency Converter */}
        <CurrencyConverter />
      </div>
    </div>
  );
};