import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { VEHICLES } from '../types';
import { ArrowLeft, Calendar, Gauge, DollarSign, CheckCircle2 } from 'lucide-react';

export const VehicleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const vehicle = VEHICLES.find(v => v.id === id);

  if (!vehicle) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Vehicle not found</h2>
        <Link to="/vehicles" className="text-blue-600 hover:underline">Return to listings</Link>
      </div>
    );
  }

  const handleBuyClick = () => {
    navigate('/thank-you');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/vehicles" className="inline-flex items-center text-slate-500 hover:text-slate-800 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Available Vehicles
      </Link>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
        {/* Image Section */}
        <div className="relative h-64 md:h-96 w-full">
           <img 
            src={vehicle.image} 
            alt={`${vehicle.make} ${vehicle.model}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-slate-900 shadow-sm">
            Stock #{vehicle.id}00{vehicle.id}
          </div>
        </div>

        <div className="p-8">
          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-slate-100 pb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h1>
              <div className="flex flex-wrap gap-4 text-slate-600 mt-4">
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <Gauge className="w-4 h-4" />
                  <span>{vehicle.mileage.toLocaleString()} miles</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <Calendar className="w-4 h-4" />
                  <span>Year {vehicle.year}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-start md:items-end">
              <span className="text-slate-500 text-sm font-medium uppercase tracking-wide mb-1">Price</span>
              <div className="text-4xl font-bold text-green-600">
                ${vehicle.price.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Description & Action */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-xl font-bold text-slate-900">Vehicle Description</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {vehicle.description}
              </p>
              
              <div className="space-y-3 mt-6">
                 <h3 className="font-semibold text-slate-900">Included Features:</h3>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Premium Audio System</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Heated Leather Seats</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Navigation Package</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Driver Assist Suite</li>
                 </ul>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 sticky top-24">
                <h3 className="font-bold text-slate-900 mb-4">Interested?</h3>
                <p className="text-sm text-slate-600 mb-6">
                    Ready to take this {vehicle.make} home? Click below to start the purchasing process.
                </p>
                <button 
                  id="buy-button"
                  onClick={handleBuyClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Buy This Car
                  <DollarSign className="w-5 h-5" />
                </button>
                <p className="text-xs text-center text-slate-400 mt-4">
                    Financing options available subject to credit approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};