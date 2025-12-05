import { useState } from 'react';

const PersonalInfo = () => {
  const [salary, setSalary] = useState('25000.00');
  const [city, setCity] = useState('New York');
  const [livingSituation, setLivingSituation] = useState('');
  const [financialGoals, setFinancialGoals] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ salary, city, livingSituation, financialGoals });
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        Personal Information
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        This information helps us provide better financial insights.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Monthly Salary ($)
            </label>
            <input
              type="number"
              step="0.01"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              City / Location
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Living Situation
          </label>
          <select
            value={livingSituation}
            onChange={(e) => setLivingSituation(e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select situation</option>
            <option value="rent">Renting</option>
            <option value="own">Own Home</option>
            <option value="shared">Shared Living</option>
            <option value="family">Living with Family</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Financial Goals
          </label>
          <textarea
            value={financialGoals}
            onChange={(e) => setFinancialGoals(e.target.value)}
            placeholder="e.g., Save for a house down payment, Pay off student loans..."
            rows={3}
            className="w-full px-3 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;