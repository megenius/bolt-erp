import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { DashboardCard } from "~/components/DashboardCard";
import { RecentActivity } from "~/components/RecentActivity";
import { SalesChart } from "~/components/SalesChart";
import { TopProducts } from "~/components/TopProducts";
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package,
  TrendingUp,
  AlertCircle
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "ERPro - Modern ERP for SMEs" },
    { name: "description", content: "Comprehensive ERP solution for small and medium enterprises" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-blue-100">Here's what's happening with your business today.</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Revenue"
            value="$847,290"
            change="+12.5% from last month"
            changeType="positive"
            icon={DollarSign}
          />
          <DashboardCard
            title="Total Orders"
            value="1,247"
            change="+8.2% from last month"
            changeType="positive"
            icon={ShoppingCart}
          />
          <DashboardCard
            title="Active Customers"
            value="892"
            change="+15.3% from last month"
            changeType="positive"
            icon={Users}
          />
          <DashboardCard
            title="Products in Stock"
            value="2,847"
            change="-2.1% from last month"
            changeType="negative"
            icon={Package}
          />
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <div>
            <TopProducts />
          </div>
        </div>

        {/* Recent Activity and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivity />
          
          {/* Quick Actions & Alerts */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  New Order
                </button>
                <button className="flex items-center justify-center p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                  <Users className="w-4 h-4 mr-2" />
                  Add Customer
                </button>
                <button className="flex items-center justify-center p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                  <Package className="w-4 h-4 mr-2" />
                  Add Product
                </button>
                <button className="flex items-center justify-center p-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Create Invoice
                </button>
              </div>
            </div>

            {/* System Alerts */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">System Alerts</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-800">Low Stock Alert</p>
                    <p className="text-xs text-red-600">5 products are running low on inventory</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Pending Invoices</p>
                    <p className="text-xs text-yellow-600">12 invoices are overdue for payment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-800">Sales Target</p>
                    <p className="text-xs text-blue-600">You're 85% towards your monthly goal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}