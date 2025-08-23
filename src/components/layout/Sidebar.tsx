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
    <div className="w-64 bg-sidebar/95 backdrop-blur-sm border-r border-sidebar-border shadow-soft flex flex-col">
      <div className="p-6 border-b border-sidebar-border/50">
        <h1 className="text-xl font-bold text-sidebar-foreground tracking-tight">FinanceTracker</h1>
      </div>
      
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sidebar-foreground/60 w-4 h-4" />
          <Input 
            placeholder="Search tips and insights..." 
            className="pl-10 bg-sidebar-accent/80 border-sidebar-border/60 rounded-lg shadow-soft focus:shadow-card transition-all duration-200"
          />
        </div>
      </div>

      <nav className="flex-1 px-4">
        <div className="space-y-2">
          <div className="text-xs font-medium text-sidebar-foreground/70 uppercase tracking-wider mb-4">
            Overview
          </div>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-11 rounded-lg font-medium transition-all duration-200",
                  currentPage === item.id
                    ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 shadow-card"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/80 hover:text-sidebar-accent-foreground shadow-soft hover:shadow-card"
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

      <div className="p-4 border-t border-sidebar-border/50">
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3 h-11 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent/80 shadow-soft hover:shadow-card transition-all duration-200"
        >
          <User className="w-4 h-4" />
          Profile
        </Button>
      </div>
    </div>
  );
};