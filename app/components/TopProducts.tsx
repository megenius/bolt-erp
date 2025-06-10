import { TrendingUp, TrendingDown } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    category: 'Electronics',
    sales: 145,
    revenue: '$217,500',
    trend: 'up',
    change: '+12%'
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    category: 'Electronics',
    sales: 289,
    revenue: '$289,000',
    trend: 'up',
    change: '+8%'
  },
  {
    id: 3,
    name: 'Dell XPS 13',
    category: 'Electronics',
    sales: 98,
    revenue: '$127,400',
    trend: 'down',
    change: '-3%'
  },
  {
    id: 4,
    name: 'iPad Air',
    category: 'Electronics',
    sales: 167,
    revenue: '$100,200',
    trend: 'up',
    change: '+15%'
  },
  {
    id: 5,
    name: 'Surface Laptop',
    category: 'Electronics',
    sales: 76,
    revenue: '$91,200',
    trend: 'up',
    change: '+5%'
  }
];

export function TopProducts() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View all
        </button>
      </div>
      
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
              <p className="text-xs text-gray-500">{product.category}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{product.revenue}</p>
              <div className="flex items-center justify-end space-x-1">
                <span className="text-xs text-gray-500">{product.sales} sold</span>
                <div className={`flex items-center space-x-1 ${
                  product.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {product.trend === 'up' ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  <span className="text-xs font-medium">{product.change}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}