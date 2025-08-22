import React from 'react';
import { Shield, Menu, Bell, Wifi, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Prakriti Mitra</h1>
              <p className="text-xs text-gray-500">प्रकृति मित्र - India's Disaster Shield</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-green-100 rounded-full">
              <Wifi className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">भारत Mesh Active</span>
            </div>
            
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            
            <Menu className="h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer sm:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;