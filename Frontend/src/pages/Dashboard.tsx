import MonthlyOverview from '../components/MonthlyOverview';
import QuickAddExpense from '../components/QuickAddExpense';
import AIInsights from '../components/AIInsights';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Monthly Overview - spans 2 columns */}
        <div className="lg:col-span-2">
          <MonthlyOverview />
        </div>
        
        {/* Quick Add Expense */}
        <div className="lg:col-span-1">
          <QuickAddExpense />
        </div>
      </div>

      {/* AI Insights - full width */}
      <div>
        <AIInsights />
      </div>

      {/* Recent Expenses */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Recent Expenses
        </h2>
        
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
            <span className="text-2xl text-gray-400 dark:text-gray-500">📊</span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400">
            No expenses recorded yet. Add your first expense to get started!
          </p>
        </div>
      </div>

      {/* Budget Categories Overview */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Budget Categories
        </h2>
        
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
            <span className="text-2xl text-gray-400 dark:text-gray-500">🏷️</span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No budget categories set up yet.
          </p>
          
          <button className="text-blue-600 dark:text-blue-400 hover:underline">
            Set up your budget categories in Profile →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;