import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EnquiryPage = () => {
    return (
        <div className="min-h-screen pt-16">
            <Navbar />
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
                        Enquiry Form
                    </h1>
                    <div className="max-w-2xl mx-auto">
                        <p className="mb-6 text-center text-gray-700">
                            Have a question or want to know more? Fill out the form below and our admissions
                            team will get back to you shortly.
                        </p>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Name *</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Message *</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition transform hover:scale-105 duration-200"
                            >
                                Submit Enquiry
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default EnquiryPage;
