import { Clock, DollarSign, Package, Users, FileText } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'sale',
    description: 'New order #ORD-2024-001 from Acme Corp',
    amount: '$2,450.00',
    time: '2 minutes ago',
    icon: DollarSign,
    color: 'text-green-600 bg-green-100'
  },
  {
    id: 2,
    type: 'inventory',
    description: 'Low stock alert: MacBook Pro 16"',
    amount: '5 units left',
    time: '15 minutes ago',
    icon: Package,
    color: 'text-orange-600 bg-orange-100'
  },
  {
    id: 3,
    type: 'customer',
    description: 'New customer registration: Tech Solutions Ltd',
    amount: '',
    time: '1 hour ago',
    icon: Users,
    color: 'text-blue-600 bg-blue-100'
  },
  {
    id: 4,
    type: 'invoice',
    description: 'Invoice #INV-2024-089 sent to Global Industries',
    amount: '$8,750.00',
    time: '2 hours ago',
    icon: FileText,
    color: 'text-purple-600 bg-purple-100'
  }
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View all
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.color}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">{activity.description}</p>
              {activity.amount && (
                <p className="text-sm font-medium text-gray-700 mt-1">{activity.amount}</p>
              )}
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                {activity.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}