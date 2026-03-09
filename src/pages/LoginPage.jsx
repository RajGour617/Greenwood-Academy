import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaGraduationCap, FaShieldAlt, FaChalkboardTeacher, FaEye, FaEyeSlash } from 'react-icons/fa';

// sample credentials for simulation
const sampleCredentials = {
  student: { username: 'student1', password: 'password123' },
  admin: { username: 'admin', password: 'admin123' },
  faculty: { username: 'faculty1', password: 'teach123' }
};

// login types metadata
const loginTypes = [
  {
    id: 'student',
    title: 'Student Login',
    icon: FaGraduationCap,
    color: 'blue',
    description: 'Access your grades, assignments, and class schedules'
  },
  {
    id: 'admin',
    title: 'Admin Login',
    icon: FaShieldAlt,
    color: 'red',
    description: 'Manage school operations and administrative tasks'
  },
  {
    id: 'faculty',
    title: 'Faculty Login',
    icon: FaChalkboardTeacher,
    color: 'green',
    description: 'Manage classes, grades, and student progress'
  }
];

const LoginPage = () => {
  const { type } = useParams();
  const [loginType, setLoginType] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      // save login state for navbar/logout
      sessionStorage.setItem('user', loginType);
      sessionStorage.setItem('username', formData.username);
      // Redirect based on login type and pass username for greeting
      navigate(`/dashboard/${loginType}`, { state: { username: formData.username } });
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ general: 'Invalid credentials. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  // if URL param provided, switch type
  useEffect(() => {
    if (type && loginTypes.some(t => t.id === type)) {
      setLoginType(type);
    }
  }, [type]);

  const currentLoginType = loginTypes.find(type => type.id === loginType);
  const IconComponent = currentLoginType.icon;

  // when login type changes, prefill sample credentials
  React.useEffect(() => {
    setFormData(sampleCredentials[loginType]);
    setErrors({});
  }, [loginType]);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 pt-16" style={{ backgroundColor: '#d4af37' }}>
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-secondary-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <span className="text-white font-bold text-3xl">GA</span>
          </div>
          <h1 className="text-3xl font-bold text-text-charcoal">{currentLoginType?.title || 'Login'}</h1>
          <p className="text-gray-600 mt-2">{currentLoginType?.description || ''}</p>
        </div>

        {/* Login Type Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="grid grid-cols-3 gap-2 mb-6">
            {loginTypes.map((type) => {
              const TypeIcon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setLoginType(type.id)}
                  className={`p-3 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ${loginType === type.id
                      ? 'border-primary-green bg-primary-green/10 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                >
                  <TypeIcon className={`w-6 h-6 mx-auto mb-1 ${loginType === type.id ? 'text-primary-green' : 'text-gray-400'
                    }`} />
                  <span className={`text-xs font-medium ${loginType === type.id ? 'text-primary-green' : 'text-gray-600'
                    }`}>
                    {type.id.charAt(0).toUpperCase() + type.id.slice(1)}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-center mb-6">
            <IconComponent className="w-12 h-12 text-primary-green mx-auto mb-3 animate-pulse" />
            <h2 className="text-xl font-bold text-text-charcoal mb-2">
              {currentLoginType.title}
            </h2>
            <p className="text-sm text-gray-600">
              {currentLoginType.description}
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="login-form space-y-6">
            {errors.general && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                {errors.general}
              </div>
            )}

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {loginType === 'student' ? 'Student ID' : 'Username / Email'}
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className={`login-input ${errors.username ? 'border-red-500' : ''}`}
                placeholder={
                  loginType === 'student'
                    ? 'Enter your Student ID'
                    : 'Enter your username or email'
                }
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`login-input pr-12 ${errors.password ? 'border-red-500' : ''}`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-secondary-gold text-white py-4 rounded-xl text-lg font-semibold hover:bg-secondary-gold/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mt-4 shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  {loginType === 'student' ? 'Login to Dashboard' : 'Sign In to Dashboard'}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              )}
            </button>

            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-primary-green hover:underline">
                Forgot Password?
              </Link>
            </div>
          </form>

          {/* Links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary-green hover:underline font-medium">
                Register here
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            to="/"
            className="text-gray-600 hover:text-primary-green transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
