export interface Expense {
  id: string;
  amount: number;
  category: string;
  date: string;
  description?: string;
  paymentMethod: string;
  isRecurring: boolean;
}

export interface SpendingCategory {
  name: string;
  amount: number;
  color: string;
  percentage: number;
}

export interface MonthlyData {
  month: string;
  spending: number;
  budget: number;
}

export interface FinancialTip {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}