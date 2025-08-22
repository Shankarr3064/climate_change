import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, MapPin, Users, Zap } from 'lucide-react';

const MapVisualization = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // Mock data for risk zones
  const riskZones = [
    { id: 1, name: 'Mumbai Central', risk: 'high', population: 2.5, lat: 19.0176, lng: 72.8562 },
    { id: 2, name: 'Delhi NCR', risk: 'medium', population: 3.2, lat: 28.7041, lng: 77.1025 },
    { id: 3, name: 'Kolkata East', risk: 'low', population: 1.8, lat: 22.5726, lng: 88.3639 },
    { id: 4, name: 'Chennai South', risk: 'high', population: 2.1, lat: 13.0827, lng: 80.2707 },
    { id: 5, name: 'Bangalore Tech', risk: 'medium', population: 1.9, lat: 12.9716, lng: 77.5946 }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getRiskBorder = (risk: string) => {
    switch (risk) {
      case 'high': return 'border-red-300';
      case 'medium': return 'border-yellow-300';
      case 'low': return 'border-green-300';
      default: return 'border-gray-300';
    }
  };

  // Mock mesh network animation points
  const meshPoints = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.1
  }));

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Hyperlocal Risk Visualization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time AI analysis of seismic data, weather patterns, and infrastructure vulnerability 
            across Indian metropolitan areas with mesh network coverage.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Map Area */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-gray-200 relative overflow-hidden h-96"
              ref={mapRef}
            >
              {/* Simulated India Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-green-100/30 rounded-xl">
                <svg className="w-full h-full opacity-20" viewBox="0 0 400 300">
                  <path d="M100 50 Q150 30 200 50 T300 80 L320 120 Q310 180 280 220 L200 250 Q150 240 100 220 Q80 180 70 120 Z" 
                        fill="currentColor" className="text-gray-600"/>
                </svg>
              </div>

              {/* Mesh Network Animation */}
              <div className="absolute inset-0">
                {meshPoints.map((point) => (
                  <motion.div
                    key={point.id}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full"
                    style={{ left: `${point.x}%`, top: `${point.y}%` }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.6] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: point.delay,
                      ease: "easeInOut"
                    }}
                  />
                ))}
                
                {/* Network connections */}
                <svg className="absolute inset-0 w-full h-full">
                  {meshPoints.slice(0, 6).map((point, i) => {
                    const nextPoint = meshPoints[(i + 1) % 6];
                    return (
                      <motion.line
                        key={`line-${i}`}
                        x1={`${point.x}%`}
                        y1={`${point.y}%`}
                        x2={`${nextPoint.x}%`}
                        y2={`${nextPoint.y}%`}
                        stroke="#3B82F6"
                        strokeWidth="1"
                        opacity="0"
                        animate={{ opacity: [0, 0.4, 0] }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          delay: i * 0.2 
                        }}
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Risk Zone Markers */}
              {riskZones.map((zone, index) => (
                <motion.div
                  key={zone.id}
                  className={`absolute w-8 h-8 ${getRiskColor(zone.risk)} rounded-full cursor-pointer shadow-lg flex items-center justify-center transform -translate-x-4 -translate-y-4 hover:scale-110 transition-transform`}
                  style={{ 
                    left: `${20 + index * 15}%`, 
                    top: `${30 + (index % 2) * 25}%` 
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setSelectedRegion(selectedRegion === zone.name ? null : zone.name)}
                >
                  <AlertTriangle className="h-4 w-4 text-white" />
                  
                  {/* Pulse animation for high risk */}
                  {zone.risk === 'high' && (
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-30" />
                  )}
                </motion.div>
              ))}

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="text-xs font-semibold text-gray-700 mb-2">Risk Level</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">High Risk</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Medium Risk</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Low Risk</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Risk Analysis Panel */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-blue-600" />
                AI Prediction Model
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Seismic Analysis</span>
                  <span className="font-semibold text-green-600">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Weather Integration</span>
                  <span className="font-semibold text-green-600">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Infrastructure Health</span>
                  <span className="font-semibold text-yellow-600">Monitoring</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Social Media Sentiment</span>
                  <span className="font-semibold text-green-600">Processing</span>
                </div>
              </div>
            </motion.div>

            {riskZones.map((zone, index) => (
              <motion.div
                key={zone.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-xl p-4 border-l-4 ${getRiskBorder(zone.risk)} shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                  selectedRegion === zone.name ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedRegion(selectedRegion === zone.name ? null : zone.name)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-600" />
                    {zone.name}
                  </h4>
                  <div className={`w-3 h-3 ${getRiskColor(zone.risk)} rounded-full`}></div>
                </div>
                
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center justify-between">
                    <span>Risk Level:</span>
                    <span className="font-medium capitalize">{zone.risk}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Population:</span>
                    <span className="font-medium flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {zone.population}M
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Mesh Coverage:</span>
                    <span className="font-medium text-green-600">97%</span>
                  </div>
                </div>

                {selectedRegion === zone.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 pt-3 border-t border-gray-100"
                  >
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>Last updated: 2 minutes ago</div>
                      <div>Next prediction: 15 minutes</div>
                      <div>Sensors active: 45/47</div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapVisualization;