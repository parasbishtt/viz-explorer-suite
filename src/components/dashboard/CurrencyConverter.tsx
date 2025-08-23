import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ArrowRightLeft } from 'lucide-react';

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState('100');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState('92.00');

  // Mock exchange rates
  const exchangeRates: Record<string, Record<string, number>> = {
    USD: { EUR: 0.92, GBP: 0.79, JPY: 148.5, CAD: 1.36 },
    EUR: { USD: 1.09, GBP: 0.86, JPY: 161.2, CAD: 1.48 },
    GBP: { USD: 1.27, EUR: 1.16, JPY: 188.4, CAD: 1.72 },
  };

  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD'];

  const handleConvert = () => {
    const rate = exchangeRates[fromCurrency]?.[toCurrency] || 1;
    const result = (parseFloat(amount) * rate).toFixed(2);
    setConvertedAmount(result);
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    handleConvert();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Real-Time Currency Converter</CardTitle>
        <p className="text-sm text-muted-foreground">Current exchange rates & instant conversion</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Convert Amount</label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium">From</label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency} value={currency}>
                    {currency}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="mt-7"
            onClick={swapCurrencies}
          >
            <ArrowRightLeft className="w-4 h-4" />
          </Button>

          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium">To</label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency} value={currency}>
                    {currency}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Converted:</span>
            <span className="text-2xl font-bold text-primary">
              {convertedAmount} {toCurrency}
            </span>
          </div>
        </div>

        <Button onClick={handleConvert} className="w-full">
          Convert
        </Button>
      </CardContent>
    </Card>
  );
};