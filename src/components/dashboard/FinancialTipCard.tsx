import { TrendingDown, ChefHat, PiggyBank, TrendingUp, Calendar, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { FinancialTip } from '@/types';

interface FinancialTipCardProps {
  tip: FinancialTip;
}

const iconMap = {
  TrendingDown,
  ChefHat,
  PiggyBank,
  TrendingUp,
  Calendar,
  Shield,
};

export const FinancialTipCard = ({ tip }: FinancialTipCardProps) => {
  const IconComponent = iconMap[tip.icon as keyof typeof iconMap];

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200 border-border">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              {IconComponent && (
                <IconComponent className="w-6 h-6 text-primary" />
              )}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              {tip.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {tip.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};