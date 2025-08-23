import { Home, Plus, TrendingUp, User, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'add-expense', label: 'Add Expense', icon: Plus },
  { id: 'ai-tips', label: 'AI Tips', icon: TrendingUp },
];

export const Sidebar = ({ currentPage, onPageChange }: SidebarProps) => {
  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-sidebar-foreground">FinanceTracker</h1>
      </div>
      
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sidebar-foreground w-4 h-4" />
          <Input 
            placeholder="Search tips and insights..." 
            className="pl-10 bg-sidebar-accent border-sidebar-border"
          />
        </div>
      </div>

      <nav className="flex-1 px-4">
        <div className="space-y-2">
          <div className="text-xs font-medium text-sidebar-foreground uppercase tracking-wider mb-3">
            Overview
          </div>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-10",
                  currentPage === item.id
                    ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
                onClick={() => onPageChange(item.id)}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3 h-10 text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <User className="w-4 h-4" />
          Profile
        </Button>
      </div>
    </div>
  );
};