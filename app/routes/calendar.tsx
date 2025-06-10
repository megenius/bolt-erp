import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { DashboardCard } from "~/components/DashboardCard";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  CheckCircle,
  Plus,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Calendar - ERPro" },
    { name: "description", content: "Schedule and manage appointments" },
  ];
};

const events = [
  {
    id: 1,
    title: 'Team Meeting',
    time: '09:00 AM',
    duration: '1 hour',
    type: 'meeting',
    attendees: 8
  },
  {
    id: 2,
    title: 'Client Presentation',
    time: '02:00 PM',
    duration: '2 hours',
    type: 'presentation',
    attendees: 5
  },
  {
    id: 3,
    title: 'Project Review',
    time: '04:30 PM',
    duration: '30 minutes',
    type: 'review',
    attendees: 3
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Board Meeting',
    date: 'Tomorrow',
    time: '10:00 AM',
    type: 'meeting'
  },
  {
    id: 2,
    title: 'Product Launch',
    date: 'Jan 20',
    time: '02:00 PM',
    type: 'event'
  },
  {
    id: 3,
    title: 'Training Session',
    date: 'Jan 22',
    time: '09:00 AM',
    type: 'training'
  }
];

export default function Calendar() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Calendar & Scheduling</h1>
            <p className="text-gray-600">Manage your appointments and events</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            New Event
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Today's Events"
            value="8"
            change="+2 from yesterday"
            changeType="positive"
            icon={CalendarIcon}
          />
          <DashboardCard
            title="This Week"
            value="23"
            change="+5 from last week"
            changeType="positive"
            icon={Clock}
          />
          <DashboardCard
            title="Meetings"
            value="12"
            change="+3 from yesterday"
            changeType="positive"
            icon={Users}
          />
          <DashboardCard
            title="Completed"
            value="89%"
            change="+5% from last week"
            changeType="positive"
            icon={CheckCircle}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar View */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">January 2024</h2>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 35 }, (_, i) => {
                const day = i - 6; // Start from previous month
                const isCurrentMonth = day > 0 && day <= 31;
                const isToday = day === 15;
                const hasEvent = [15, 16, 18, 22].includes(day);

                return (
                  <div
                    key={i}
                    className={`
                      p-2 h-12 text-center text-sm cursor-pointer rounded-lg transition-colors
                      ${isCurrentMonth ? 'text-gray-900 hover:bg-gray-100' : 'text-gray-400'}
                      ${isToday ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
                      ${hasEvent && !isToday ? 'bg-blue-50 text-blue-700' : ''}
                    `}
                  >
                    {isCurrentMonth ? day : ''}
                    {hasEvent && (
                      <div className="w-1 h-1 bg-blue-600 rounded-full mx-auto mt-1"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Today's Events & Upcoming */}
          <div className="space-y-6">
            {/* Today's Events */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Events</h3>
              <div className="space-y-3">
                {events.map((event) => (
                  <div key={event.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                      <p className="text-xs text-gray-500">
                        {event.time} • {event.duration} • {event.attendees} attendees
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                      <p className="text-xs text-gray-500">{event.date} at {event.time}</p>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}