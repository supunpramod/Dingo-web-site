import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { 
  HomeIcon, 
  UsersIcon, 
  FolderIcon, 
  CalendarIcon, 
  ChartBarIcon, 
  CogIcon, 
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

// Register ChartJS components
ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeNav, setActiveNav] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: HomeIcon },
    { name: 'Team', icon: UsersIcon },
    { name: 'Projects', icon: FolderIcon },
    { name: 'Calendar', icon: CalendarIcon },
    { name: 'Reports', icon: ChartBarIcon },
  ];

  const stats = [
    { name: 'Total Users', value: '12,345', change: '+12%', changeType: 'positive' },
    { name: 'Total Revenue', value: '$34,543', change: '+8.1%', changeType: 'positive' },
    { name: 'Pending Orders', value: '231', change: '-2.5%', changeType: 'negative' },
    { name: 'Active Projects', value: '15', change: '+3', changeType: 'positive' },
  ];

  const pieData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ['#3B82F6', '#10B981', '#F59E0B'],
        hoverBackgroundColor: ['#2563EB', '#059669', '#D97706'],
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: '#3B82F6',
      },
      {
        label: 'Users',
        data: [8, 15, 7, 12, 9, 11],
        backgroundColor: '#10B981',
      },
    ],
  };

  const recentActivity = [
    { id: 1, user: 'John Doe', action: 'Created project', time: '2 min ago' },
    { id: 2, user: 'Jane Smith', action: 'Updated settings', time: '10 min ago' },
    { id: 3, user: 'Robert Johnson', action: 'Completed task', time: '1 hour ago' },
    { id: 4, user: 'Emily Davis', action: 'Uploaded file', time: '3 hours ago' },
    { id: 5, user: 'Michael Wilson', action: 'Commented', time: '5 hours ago' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-blue-700 text-white transition-all duration-300 ease-in-out`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold">Dashboard</h1>
          ) : (
            <h1 className="text-xl font-bold">D</h1>
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-md hover:bg-blue-600"
          >
            {sidebarOpen ? '←' : '→'}
          </button>
        </div>
        <nav className="mt-6">
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="mb-2">
                <button
                  onClick={() => setActiveNav(item.name)}
                  className={`flex items-center w-full p-3 ${activeNav === item.name ? 'bg-blue-800' : 'hover:bg-blue-600'} rounded-lg transition-colors`}
                >
                  <item.icon className={`h-5 w-5 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} />
                  {sidebarOpen && <span>{item.name}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-0 w-full p-4">
          <button className="flex items-center w-full p-3 hover:bg-blue-600 rounded-lg transition-colors">
            <CogIcon className={`h-5 w-5 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} />
            {sidebarOpen && <span>Settings</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="border-0 focus:ring-0 focus:outline-none"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-1 text-gray-500 hover:text-gray-700">
                <BellIcon className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User profile"
                  className="h-8 w-8 rounded-full"
                />
                {sidebarOpen && (
                  <div className="ml-2 flex items-center">
                    <span className="text-sm font-medium">John Doe</span>
                    <ChevronDownIcon className="h-4 w-4 ml-1" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                    <p className="mt-1 text-2xl font-semibold text-gray-900">{stat.value}</p>
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      stat.changeType === 'positive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue & Users</h3>
              <Bar data={barData} options={{ responsive: true }} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Traffic Sources</h3>
              <div className="h-64 flex items-center justify-center">
                <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentActivity.map((activity) => (
                    <tr key={activity.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={`https://ui-avatars.com/api/?name=${activity.user.replace(' ', '+')}`}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{activity.user}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {activity.action}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {activity.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;