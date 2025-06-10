import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { DashboardCard } from "~/components/DashboardCard";
import { 
  BarChart3, 
  FileText, 
  Download, 
  TrendingUp,
  Plus,
  Search,
  Filter,
  Calendar
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Reports - ERPro" },
    { name: "description", content: "Business reports and analytics" },
  ];
};

const reports = [
  {
    id: 1,
    name: 'Sales Performance Report',
    description: 'Monthly sales analysis and trends',
    type: 'Sales',
    lastGenerated: '2024-01-15',
    format: 'PDF'
  },
  {
    id: 2,
    name: 'Inventory Status Report',
    description: 'Current stock levels and low stock alerts',
    type: 'Inventory',
    lastGenerated: '2024-01-14',
    format: 'Excel'
  },
  {
    id: 3,
    name: 'Financial Summary',
    description: 'Revenue, expenses, and profit analysis',
    type: 'Financial',
    lastGenerated: '2024-01-13',
    format: 'PDF'
  },
  {
    id: 4,
    name: 'Customer Analysis',
    description: 'Customer behavior and retention metrics',
    type: 'Customer',
    lastGenerated: '2024-01-12',
    format: 'Excel'
  }
];

const quickReports = [
  { name: 'Daily Sales', icon: BarChart3, color: 'bg-blue-50 text-blue-700' },
  { name: 'Inventory Alert', icon: FileText, color: 'bg-orange-50 text-orange-700' },
  { name: 'Customer Report', icon: TrendingUp, color: 'bg-green-50 text-green-700' },
  { name: 'Financial Summary', icon: Download, color: 'bg-purple-50 text-purple-700' }
];

export default function Reports() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
            <p className="text-gray-600">Generate and view business reports</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Create Report
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Reports"
            value="247"
            change="+12 from last month"
            changeType="positive"
            icon={FileText}
          />
          <DashboardCard
            title="Generated Today"
            value="8"
            change="+3 from yesterday"
            changeType="positive"
            icon={BarChart3}
          />
          <DashboardCard
            title="Scheduled Reports"
            value="23"
            change="+5 from last week"
            changeType="positive"
            icon={Calendar}
          />
          <DashboardCard
            title="Downloads"
            value="1,247"
            change="+18.2% from last month"
            changeType="positive"
            icon={Download}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Reports */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Reports</h3>
            <div className="grid grid-cols-1 gap-3">
              {quickReports.map((report, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-center p-4 rounded-lg hover:opacity-80 transition-opacity ${report.color}`}
                >
                  <report.icon className="w-5 h-5 mr-3" />
                  {report.name}
                </button>
              ))}
            </div>
          </div>

          {/* Report Templates */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Report Templates</h3>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search reports..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {reports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">{report.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{report.description}</p>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className="text-xs text-gray-500">Type: {report.type}</span>
                      <span className="text-xs text-gray-500">Last: {report.lastGenerated}</span>
                      <span className="text-xs text-gray-500">Format: {report.format}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                      Generate
                    </button>
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Reports</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Report Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Generated
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Format
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reports.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{report.name}</div>
                      <div className="text-sm text-gray-500">{report.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {report.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{report.lastGenerated}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{report.format}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          Generate
                        </button>
                      </div>
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