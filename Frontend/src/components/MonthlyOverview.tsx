const MonthlyOverview = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Monthly Overview
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
            Total Spent
          </p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            $0.00
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
            Total Budget
          </p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            $0.00
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            Budget Usage
          </span>
          <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
            0.0%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
          <div 
            className="bg-teal-600 dark:bg-teal-500 h-2 rounded-full transition-all duration-300"
            style={{ width: '0%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyOverview;