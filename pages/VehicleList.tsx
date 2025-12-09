import React from 'react';
import { Link } from 'react-router-dom';
import { VEHICLES } from '../types';
import { Calendar, DollarSign, ChevronRight } from 'lucide-react';

export const VehicleList: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Available Vehicles</h1>
          <p className="text-slate-600 mt-2">Browse our premium inventory</p>
        </div>
        <div className="text-sm text-slate-500 font-medium">
          Showing {VEHICLES.length} vehicles
        </div>
      </div>

      <div className="grid gap-8">
        {VEHICLES.map((vehicle) => (
          <article 
            key={vehicle.id} 
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row group"
          >
            <div className="md:w-2/5 relative overflow-hidden">
              <img 
                src={vehicle.image} 
                alt={`${vehicle.make} ${vehicle.model}`} 
                className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6 md:w-3/5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {vehicle.make} {vehicle.model}
                  </h2>
                  <span className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {vehicle.year}
                  </span>
                </div>
                
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {vehicle.description}
                </p>

                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2 text-slate-700">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-xl">${vehicle.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <Link 
                  to={`/vehicles/${vehicle.id}`} 
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};