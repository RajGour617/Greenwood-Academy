import React from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaShieldAlt, FaChalkboardTeacher, FaBook, FaCalendar, FaChartLine, FaBars, FaEnvelope } from 'react-icons/fa';

const DashboardPage = () => {
  const { type } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || '';

  // Dashboard configuration for each user type. includes nav items and dummy content
  const dashboardConfig = {
    student: {
      title: 'Student Dashboard',
      icon: FaGraduationCap,
      color: 'blue',
      navItems: [
        { key: 'dashboard', label: 'Dashboard', icon: FaChartLine },
        { key: 'classes', label: 'My Classes', icon: FaBook },
        { key: 'assignments', label: 'Assignments', icon: FaChalkboardTeacher },
        { key: 'grades', label: 'Grades', icon: FaChartLine },
        { key: 'attendance', label: 'Attendance', icon: FaCalendar },
        { key: 'messages', label: 'Messages', icon: FaShieldAlt },
        { key: 'fees', label: 'Fees', icon: FaBook },
        { key: 'enquiry', label: 'Enquiry', icon: FaEnvelope },
        { key: 'settings', label: 'Settings', icon: FaShieldAlt }
      ],
      widgets: [
        { title: 'My Grades', icon: FaChartLine, value: 'A+', color: 'green' },
        { title: 'Attendance', icon: FaCalendar, value: '95%', color: 'blue' },
        { title: 'Assignments', icon: FaBook, value: '3 Pending', color: 'orange' }
      ],
      actions: ['View Schedule', 'Submit Assignment', 'Check Grades']
    },
    admin: {
      title: 'Admin Dashboard',
      icon: FaShieldAlt,
      color: 'red',
      navItems: [
        { key: 'dashboard', label: 'Dashboard', icon: FaChartLine },
        { key: 'students', label: 'Manage Students', icon: FaGraduationCap },
        { key: 'teachers', label: 'Manage Teachers', icon: FaChalkboardTeacher },
        { key: 'reports', label: 'Reports', icon: FaChartLine },
        { key: 'settings', label: 'Settings', icon: FaShieldAlt }
      ],
      widgets: [
        { title: 'Total Students', icon: FaGraduationCap, value: '5,000', color: 'blue' },
        { title: 'Total Teachers', icon: FaChalkboardTeacher, value: '200', color: 'green' },
        { title: 'Total Classes', icon: FaBook, value: '120', color: 'yellow' },
        { title: 'Attendance', icon: FaCalendar, value: '98%', color: 'purple' },
        { title: 'Upcoming Events', icon: FaCalendar, value: '12', color: 'teal' },
        { title: 'Messages', icon: FaEnvelope, value: '8', color: 'orange' }
      ],
      actions: ['Manage Students', 'Manage Teachers', 'Generate Reports']
    },
    faculty: {
      title: 'Faculty Dashboard',
      icon: FaChalkboardTeacher,
      color: 'green',
      navItems: [
        { key: 'dashboard', label: 'Dashboard', icon: FaChartLine },
        { key: 'classes', label: 'My Classes', icon: FaBook },
        { key: 'gradebook', label: 'Gradebook', icon: FaChartLine },
        { key: 'students', label: 'Students', icon: FaGraduationCap },
        { key: 'messages', label: 'Messages', icon: FaShieldAlt },
        { key: 'settings', label: 'Settings', icon: FaShieldAlt }
      ],
      widgets: [
        { title: 'My Classes', icon: FaBook, value: '6', color: 'blue' },
        { title: 'Students', icon: FaGraduationCap, value: '180', color: 'green' },
        { title: 'Pending Reviews', icon: FaChartLine, value: '12', color: 'orange' }
      ],
      actions: ['Manage Classes', 'Grade Assignments', 'Update Schedule']
    }
  };

  const [selectedTab, setSelectedTab] = React.useState('dashboard');
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const config = dashboardConfig[type] || dashboardConfig.student;
  const IconComponent = config.icon;

  // map simple color names to Tailwind background classes
  const sidebarBg = {
    blue: 'bg-blue-600',
    red: 'bg-red-600',
    green: 'bg-green-600',
    gold: 'bg-secondary-gold'
  }[config.color] || 'bg-primary-green';
  const nameColor = {
    blue: 'text-blue-600',
    red: 'text-red-600',
    green: 'text-green-600',
    gold: 'text-secondary-gold'
  }[config.color] || 'text-primary-green';

  React.useEffect(() => {
    // reset tab when type changes
    setSelectedTab('dashboard');
  }, [type]);

  // function to render content for the currently selected tab
  const renderTabContent = () => {
    switch (selectedTab) {
      case 'dashboard':
        if (type === 'student') {
          return (
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold mb-2">Your Class</h3>
                  <p className="text-lg font-bold">10-A</p>
                  <p className="text-sm text-gray-600">Section: Science</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold mb-2">Attendance</h3>
                  <span className="inline-block px-3 py-1 bg-yellow-400 rounded-full text-white font-bold">92%</span>
                  <p className="text-sm mt-1">Excellent</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold mb-2">Assignments</h3>
                  <p className="font-bold">3 Pending</p>
                  <p className="text-sm text-gray-600">5 Completed</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 w-1/2">
                <h3 className="font-semibold mb-2">Overall Grade</h3>
                <span className="inline-block px-3 py-1 bg-green-500 text-white rounded-full font-bold">A</span>
                <p className="text-sm mt-1">Excellent</p>
              </div>
            </div>
          );
        } else if (type === 'faculty') {
          return (
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold mb-2">My Classes</h3>
                  <p className="font-bold">5 Classes</p>
                  <p className="text-sm text-gray-600">Total: 250+ Students</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold mb-2">Today</h3>
                  <p className="font-bold">3 Classes</p>
                  <p className="text-sm text-gray-600">Check attendance</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold mb-2">Pending</h3>
                  <p className="font-bold">8 Assignments</p>
                  <p className="text-sm text-gray-600">To be graded</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 w-full">
                <h3 className="font-semibold mb-2">Messages</h3>
                <p>5 Unread</p>
                <p className="text-sm text-gray-600">From students</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 w-full">
                <h3 className="font-semibold mb-2">Today's Schedule</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Class 9-A: 9:00 AM - 10:00 AM (Science)</li>
                  <li>Class 10-B: 10:15 AM - 11:15 AM (Mathematics)</li>
                  <li>Class 11-A: 12:00 PM - 1:00 PM (Physics)</li>
                </ul>
              </div>
            </div>
          );
        } else {
          // admin
          return (
            <div className="grid md:grid-cols-3 gap-6">
              {config.widgets.map((widget, index) => {
                const WidgetIcon = widget.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                    <WidgetIcon className="w-10 h-10 text-green-600 mb-4" />
                    <span className="text-2xl font-bold text-gray-800">{widget.value}</span>
                    <h3 className="text-gray-600 font-medium mt-2">{widget.title}</h3>
                  </div>
                );
              })}
            </div>
          );
        }
      case 'classes':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">My Classes</h2>
            <ul className="space-y-3">
              <li className="p-4 border rounded-lg">
                <strong>Mathematics</strong> – Mr. Sharma (9:00‑10:00 AM)
              </li>
              <li className="p-4 border rounded-lg">
                <strong>Science</strong> – Ms. Patel (10:15‑11:15 AM)
              </li>
              <li className="p-4 border rounded-lg">
                <strong>English</strong> – Mrs. Gupta (12:00‑1:00 PM)
              </li>
              <li className="p-4 border rounded-lg">
                <strong>History</strong> – Mr. Verma (2:00‑3:00 PM)
              </li>
            </ul>
          </div>
        );
      case 'assignments':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Assignments</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Title</th>
                  <th className="py-2">Subject</th>
                  <th className="py-2">Due Date</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-100">
                  <td className="py-2">Project on Ecosystems</td>
                  <td className="py-2">Science</td>
                  <td className="py-2">Mar 12, 2026</td>
                  <td className="py-2 text-orange-500">Pending</td>
                </tr>
                <tr className="border-b hover:bg-gray-100">
                  <td className="py-2">Essay: The Renaissance</td>
                  <td className="py-2">History</td>
                  <td className="py-2">Mar 15, 2026</td>
                  <td className="py-2 text-green-500">Submitted</td>
                </tr>
                <tr>
                  <td className="py-2">Algebra worksheet</td>
                  <td className="py-2">Mathematics</td>
                  <td className="py-2">Mar 18, 2026</td>
                  <td className="py-2 text-orange-500">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'grades':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Grades</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Subject</th>
                  <th className="py-2">Grade</th>
                  <th className="py-2">Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-100">
                  <td className="py-2">Mathematics</td>
                  <td className="py-2">A</td>
                  <td className="py-2">Excellent</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Science</td>
                  <td className="py-2">A-</td>
                  <td className="py-2">Very good</td>
                </tr>
                <tr>
                  <td className="py-2">English</td>
                  <td className="py-2">B+</td>
                  <td className="py-2">Good</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'attendance':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Attendance Record</h2>
            <ul className="space-y-2 text-gray-700">
              <li>January 2026: 94%</li>
              <li>February 2026: 97%</li>
              <li>March 2026: 95%</li>
            </ul>
          </div>
        );
      case 'messages':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Inbox</h2>
            <ul className="space-y-3">
              <li className="border-b pb-2">
                <strong>Mrs. Gupta:</strong> Don't forget the science project! (Mar 10)
              </li>
              <li className="border-b pb-2">
                <strong>Admin Office:</strong> Fee reminder for March. (Mar 5)
              </li>
              <li>
                <strong>Sports Dept:</strong> Tryouts tomorrow at 3pm. (Mar 8)
              </li>
            </ul>
          </div>
        );
      case 'fees':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Fee Status</h2>
            <p className="mb-2">Tuition due: <strong>$5,000</strong></p>
            <p className="mb-4">Last payment: Jan 1, 2026</p>
            <button className="bg-secondary-gold text-white py-2 px-4 rounded-lg hover:bg-secondary-gold/90">
              Pay Now
            </button>
          </div>
        );
      case 'enquiry':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Submit an Enquiry</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full border px-3 py-2 rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border px-3 py-2 rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Question</label>
                <textarea rows="3" className="w-full border px-3 py-2 rounded-lg"></textarea>
              </div>
              <button className="bg-secondary-gold text-white py-2 px-4 rounded-lg hover:bg-secondary-gold/90">
                Submit Enquiry
              </button>
            </form>
          </div>
        );
      case 'students':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">All Students</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Name</th>
                  <th className="py-2">Class</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-100">
                  <td className="py-2">Riya Patel</td>
                  <td className="py-2">10-A</td>
                  <td className="py-2">Active</td>
                </tr>
                <tr className="border-b hover:bg-gray-100">
                  <td className="py-2">Amit Sharma</td>
                  <td className="py-2">9-B</td>
                  <td className="py-2">Active</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-2">Sneha Kapoor</td>
                  <td className="py-2">12-C</td>
                  <td className="py-2">Inactive</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'teachers':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">All Teachers</h2>
            <ul className="space-y-2">
              <li className="border-b py-2 hover:bg-gray-100">Mr. Sharma - Mathematics</li>
              <li className="border-b py-2 hover:bg-gray-100">Ms. Patel - Science</li>
              <li className="border-b py-2 hover:bg-gray-100">Mrs. Gupta - English</li>
              <li className="py-2 hover:bg-gray-100">Mr. Verma - History</li>
            </ul>
          </div>
        );
      case 'reports':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Reports</h2>
            <p>Monthly attendance, academic performance analytics and more will appear here.</p>
          </div>
        );
      case 'gradebook':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Gradebook</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Student</th>
                  <th className="py-2">Assignment</th>
                  <th className="py-2">Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Riya Patel</td>
                  <td className="py-2">Math Quiz 1</td>
                  <td className="py-2">A</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Amit Sharma</td>
                  <td className="py-2">Science Project</td>
                  <td className="py-2">B+</td>
                </tr>
                <tr>
                  <td className="py-2">Sneha Kapoor</td>
                  <td className="py-2">History Essay</td>
                  <td className="py-2">A-</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            <p>Profile info, password change and notification preferences.</p>
          </div>
        );
      default:
        return <div className="bg-white rounded-xl shadow-lg p-6">Content coming soon</div>;
    }
  };

  return (
    <div className="min-h-screen flex bg-background-light pt-16">
      {/* sidebar */}
      <aside className={`w-64 ${sidebarBg} text-white z-20 ${mobileOpen ? 'block' : 'hidden'} md:block`}>      
        <div className="p-6 border-b">
          <div className="flex items-center space-x-4">
            <IconComponent className="w-8 h-8 text-white" />
            <span className="text-xl font-semibold">{config.title.split(' ')[0]}</span>
          </div>
        </div>
        <ul className="p-4 space-y-2">
          {config.navItems.map(item => {
            const ItemIcon = item.icon;
            const isActive = selectedTab === item.key;
            return (
              <li key={item.key}>
                <button
                  onClick={() => setSelectedTab(item.key)}
                  className={`w-full text-left flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-white/25 text-white' : 'text-white hover:bg-white/10'}`}
                >
                  <ItemIcon className="w-5 h-5 text-white" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* main area */}
      <div className="flex-1 relative">
        {/* mobile menu toggle */}
        <button
          className="md:hidden p-4 fixed top-4 left-4 bg-white rounded-full shadow-lg z-30"
          onClick={() => setMobileOpen(open => !open)}
        >
          <FaBars className="w-6 h-6" />
        </button>

        {/* top bar */}
        <div className="bg-white shadow py-4 px-6 flex justify-between items-center rounded-b-lg">
          <div>
            {username && (
              <h2 className={"text-2xl font-bold " + nameColor}>
                Welcome, <span className={nameColor}>{username}!</span>
              </h2>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2" style={{borderColor: '#'+Math.floor(Math.random()*16777215).toString(16)}}>
              <i className="fas fa-user text-gray-500"></i>
            </div>
            <button
              onClick={() => navigate('/')}
              className={`${sidebarBg} text-white px-4 py-2 rounded-lg hover:opacity-90`}
            >
              Logout
            </button>
          </div>
        </div>

        {/* content container */}
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
