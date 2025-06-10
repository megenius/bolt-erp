import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { DashboardCard } from "~/components/DashboardCard";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  PieChart,
  Plus,
  Search,
  Filter,
  Calendar
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Accounting - ERPro" },
    { name: "description", content: "Financial management and accounting" },
  ];
};

const transactions = [
  {
    id: 'TXN-001',
    date: '2024-01-15',
    description: 'Payment from Acme Corp',
    category: 'Revenue',
    amount: '+$2,450.00',
    type: 'income'
  },
  {
    id: 'TXN-002',
    date: '2024-01-14',
    description: 'Office Supplies Purchase',
    category: 'Expenses',
    amount: '-$450.00',
    type: 'expense'
  },
  {
    id: 'TXN-003',
    date: '2024-01-13',
    description: 'Software Subscription',
    category: 'Operating Expenses',
    amount: '-$299.00',
    type: 'expense'
  },
  {
    id: 'TXN-004',
    date: '2024-01-12',
    description: 'Consulting Services',
    category: 'Revenue',
    amount: '+$5,500.00',
    type: 'income'
  }
];

export default function Accounting() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Accounting & Finance</h1>
            <p className="text-gray-600">Manage your financial records and reports</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Add Transaction
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Revenue"
            value="$847,290"
            change="+12.5% from last month"
            changeType="positive"
            icon={DollarSign}
          />
          <DashboardCard
            title="Total Expenses"
            value="$234,560"
            change="+8.2% from last month"
            changeType="negative"
            icon={TrendingDown}
          />
          <DashboardCard
            title="Net Profit"
            value="$612,730"
            change="+15.3% from last month"
            changeType="positive"
            icon={TrendingUp}
          />
          <DashboardCard
            title="Profit Margin"
            value="72.3%"
            change="+2.1% from last month"
            changeType="positive"
            icon={PieChart}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View all
              </button>
            </div>
            
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">{transaction.description}</h4>
                    <p className="text-xs text-gray-500">{transaction.category} • {transaction.date}</p>
                  </div>
                  <div className={`text-sm font-medium ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 gap-3">
              <button className="flex items-center justify-center p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                <DollarSign className="w-5 h-5 mr-3" />
                Record Payment
              </button>
              <button className="flex items-center justify-center p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                <TrendingUp className="w-5 h-5 mr-3" />
                Generate Report
              </button>
              <button className="flex items-center justify-center p-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                <PieChart className="w-5 h-5 mr-3" />
                View Analytics
              </button>
              <button className="flex items-center justify-center p-4 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
                <Calendar className="w-5 h-5 mr-3" />
                Tax Planning
              </button>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">All Transactions</h2>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{transaction.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{transaction.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{transaction.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm font-medium ${
                        transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.amount}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        transaction.type === 'income' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {transaction.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}