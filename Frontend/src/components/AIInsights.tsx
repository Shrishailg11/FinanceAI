const AIInsights = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
      <div className="flex items-center space-x-2 mb-6">
        <span className="text-2xl">🧠</span>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          AI Financial Insights
        </h2>
      </div>
      
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
          <span className="text-2xl text-gray-400 dark:text-gray-500">🧠</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Unlock Personalized Financial Advice
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
          Generate a comprehensive analysis of your spending habits, 
          budget health, and actionable recommendations.
        </p>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 mx-auto">
          <span>✨</span>
          <span>Generate Insights</span>
        </button>
      </div>
    </div>
  );
};

export default AIInsights;