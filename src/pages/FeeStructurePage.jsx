import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FeeStructurePage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Fee Structure
          </h1>
          <div className="max-w-4xl mx-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-green-800 text-white">
                  <th className="px-4 py-2">Class</th>
                  <th className="px-4 py-2">Tuition Fee (per year)</th>
                  <th className="px-4 py-2">Other Charges</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="px-4 py-2">Grades 1–5</td>
                  <td className="px-4 py-2">$5,000</td>
                  <td className="px-4 py-2">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">Grades 6–8</td>
                  <td className="px-4 py-2">$6,500</td>
                  <td className="px-4 py-2">$600</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">Grades 9–12</td>
                  <td className="px-4 py-2">$8,000</td>
                  <td className="px-4 py-2">$750</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-6 text-sm text-gray-600">
              *Actual fees may vary; please contact the admissions office for the latest details.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FeeStructurePage;
