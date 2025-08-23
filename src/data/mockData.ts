import { Expense, SpendingCategory, MonthlyData, FinancialTip } from '@/types';

export const mockExpenses: Expense[] = [
  {
    id: '1',
    amount: 45.50,
    category: 'Food',
    date: '2024-01-15',
    description: 'Grocery shopping',
    paymentMethod: 'Credit Card',
    isRecurring: false
  },
  {
    id: '2',
    amount: 120.00,
    category: 'Transport',
    date: '2024-01-14',
    description: 'Monthly metro card',
    paymentMethod: 'Debit Card',
    isRecurring: true
  },
  {
    id: '3',
    amount: 850.00,
    category: 'Housing',
    date: '2024-01-01',
    description: 'Rent payment',
    paymentMethod: 'Bank Transfer',
    isRecurring: true
  },
  {
    id: '4',
    amount: 35.00,
    category: 'Entertainment',
    date: '2024-01-12',
    description: 'Movie tickets',
    paymentMethod: 'Credit Card',
    isRecurring: false
  },
  {
    id: '5',
    amount: 89.99,
    category: 'Shopping',
    date: '2024-01-10',
    description: 'New shirt',
    paymentMethod: 'Credit Card',
    isRecurring: false
  }
];

export const spendingByCategory: SpendingCategory[] = [
  { name: 'Food', amount: 1250, color: '#3b82f6', percentage: 25 },
  { name: 'Transport', amount: 850, color: '#10b981', percentage: 17 },
  { name: 'Housing', amount: 2100, color: '#f59e0b', percentage: 42 },
  { name: 'Entertainment', amount: 420, color: '#ef4444', percentage: 8 },
  { name: 'Shopping', amount: 380, color: '#8b5cf6', percentage: 8 }
];

export const monthlySpendingData: MonthlyData[] = [
  { month: 'Jan', spending: 4200, budget: 5000 },
  { month: 'Feb', spending: 3800, budget: 5000 },
  { month: 'Mar', spending: 4500, budget: 5000 },
  { month: 'Apr', spending: 5200, budget: 5000 },
  { month: 'May', spending: 3900, budget: 5000 },
  { month: 'Jun', spending: 4800, budget: 5000 },
  { month: 'Jul', spending: 4100, budget: 5000 },
  { month: 'Aug', spending: 4600, budget: 5000 },
  { month: 'Sep', spending: 3700, budget: 5000 },
  { month: 'Oct', spending: 5100, budget: 5000 },
  { month: 'Nov', spending: 4300, budget: 5000 },
  { month: 'Dec', spending: 3500, budget: 5000 }
];

export const financialTips: FinancialTip[] = [
  {
    id: '1',
    icon: 'TrendingDown',
    title: 'Optimize Spending Habits',
    description: 'Analyze your spending patterns and identify areas where you can reduce unnecessary expenses. Small changes can lead to significant savings.'
  },
  {
    id: '2',
    icon: 'ChefHat',
    title: 'Embrace Home Cooking',
    description: 'Eating out frequently can significantly impact your budget. Cooking at home is a healthy and cost-effective alternative.'
  },
  {
    id: '3',
    icon: 'PiggyBank',
    title: 'Boost Your Savings',
    description: 'Set up automated transfers to your savings account. Consistent contributions, no matter how small, build substantial wealth over time.'
  },
  {
    id: '4',
    icon: 'TrendingUp',
    title: 'Explore Investment Options',
    description: 'Consider diversifying your portfolio. Even modest investments can grow substantially with compounding returns.'
  },
  {
    id: '5',
    icon: 'Calendar',
    title: 'Review Subscriptions Annually',
    description: 'Many subscriptions go unused. Take time each year to cancel services you no longer need to free up monthly cash flow.'
  },
  {
    id: '6',
    icon: 'Shield',
    title: 'Build an Emergency Fund',
    description: 'Aim for 3-6 months of living expenses in an accessible savings account. This provides a crucial safety net for unexpected events.'
  }
];

export const categories = [
  'Food',
  'Transport',
  'Housing',
  'Entertainment',
  'Shopping',
  'Healthcare',
  'Education',
  'Utilities',
  'Insurance',
  'Others'
];

export const paymentMethods = [
  'Credit Card',
  'Debit Card',
  'Cash',
  'Bank Transfer',
  'Digital Wallet'
];