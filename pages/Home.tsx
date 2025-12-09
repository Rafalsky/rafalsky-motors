import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, ThumbsUp } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-slate-900 text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img 
                src="https://picsum.photos/seed/dealership/1600/600" 
                alt="Background" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Welcome to RafalSky Motors
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            Your premium destination for luxury, performance, and reliability. 
            We carefully curate our inventory to ensure you drive away in the car of your dreams.
            </p>
            <Link 
            to="/vehicles" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
            >
            Browse Vehicles
            <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-12 text-slate-800">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Top Quality</h3>
            <p className="text-slate-600">Every vehicle passes a rigorous 150-point inspection.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Trusted Service</h3>
            <p className="text-slate-600">Family owned and operated since 2010 with thousands of happy clients.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="bg-purple-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Fair Pricing</h3>
            <p className="text-slate-600">Transparent pricing with no hidden dealer fees.</p>
          </div>
        </div>
      </section>
    </div>
  );
};