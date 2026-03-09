import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Password reset instructions sent (simulation)');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-text-charcoal mb-8 text-center">
            Forgot Password
          </h1>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <button className="w-full bg-primary-green text-white py-2 rounded-lg">
              Send Reset Link
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;
