import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

export const ThankYou: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-12">
      <div className="bg-green-50 p-6 rounded-full mb-6">
        <CheckCircle className="w-16 h-16 text-green-600" />
      </div>
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Thank You!</h1>
      <p className="text-xl text-slate-600 max-w-lg mb-8">
        Your purchase request has been received. One of our premium sales specialists will contact you shortly to finalize your new vehicle acquisition.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
      >
        <Home className="w-5 h-5" />
        Return to Home
      </Link>
    </div>
  );
};