import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Users, 
  Smartphone,
  Globe,
  Volume2
} from 'lucide-react';

interface Alert {
  id: string;
  type: 'earthquake' | 'flood' | 'cyclone' | 'fire';
  severity: 'low' | 'medium' | 'high' | 'critical';
  location: string;
  message: string;
  timestamp: Date;
  affectedPopulation: number;
  status: 'active' | 'resolved' | 'monitoring';
  language: string;
}

const AlertsSystem = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      type: 'earthquake',
      severity: 'high',
      location: 'Mumbai Central',
      message: 'Seismic activity detected. Magnitude 4.2 predicted in next 6 hours.',
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      affectedPopulation: 250000,
      status: 'active',
      language: 'English'
    },
    {
      id: '2',
      type: 'flood',
      severity: 'medium',
      location: 'Chennai East',
      message: 'Heavy rainfall alert. Water level rising in urban areas.',
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      affectedPopulation: 120000,
      status: 'monitoring',
      language: 'Tamil'
    },
    {
      id: '3',
      type: 'cyclone',
      severity: 'critical',
      location: 'Kolkata Coastal',
      message: 'Cyclone approaching. Wind speed 85 km/h. Immediate evacuation required.',
      timestamp: new Date(Date.now() - 2 * 60 * 1000),
      affectedPopulation: 500000,
      status: 'active',
      language: 'Bengali'
    }
  ]);

  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [meshStatus, setMeshStatus] = useState('connected');

  const languages = ['English', 'Hindi', 'Tamil', 'Bengali', 'Malayalam', 'Telugu', 'Marathi'];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'earthquake': return '🏢';
      case 'flood': return '🌊';
      case 'cyclone': return '🌀';
      case 'fire': return '🔥';
      default: return '⚠️';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-600';
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getSeverityBg = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-50 border-red-200';
      case 'high': return 'bg-red-50 border-red-200';
      case 'medium': return 'bg-yellow-50 border-yellow-200';
      case 'low': return 'bg-green-50 border-green-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return AlertTriangle;
      case 'resolved': return CheckCircle;
      case 'monitoring': return Clock;
      default: return AlertTriangle;
    }
  };

  const formatTimestamp = (timestamp: Date) => {
    const minutes = Math.floor((Date.now() - timestamp.getTime()) / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ago`;
  };

  // Simulate real-time alerts
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        const newAlert: Alert = {
          id: Date.now().toString(),
          type: ['earthquake', 'flood', 'cyclone'][Math.floor(Math.random() * 3)] as any,
          severity: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as any,
          location: ['Delhi NCR', 'Bangalore Tech', 'Hyderabad Central'][Math.floor(Math.random() * 3)],
          message: 'New alert detected by AI prediction model.',
          timestamp: new Date(),
          affectedPopulation: Math.floor(Math.random() * 300000) + 50000,
          status: 'active',
          language: languages[Math.floor(Math.random() * languages.length)]
        };
        
        setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Multi-Language Alert System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered alerts in 22+ Indian languages, delivered through mesh networks 
            when traditional infrastructure fails. Reaching every community, every time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Real-time Alerts Feed */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Active Alerts</h3>
              <div className="flex items-center space-x-4">
                <select 
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
                <div className="flex items-center space-x-2 text-sm">
                  <div className={`w-2 h-2 rounded-full ${meshStatus === 'connected' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
                  <span className="text-gray-600">Mesh Network</span>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {alerts.map((alert, index) => {
                const StatusIcon = getStatusIcon(alert.status);
                
                return (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`${getSeverityBg(alert.severity)} rounded-xl p-6 border hover:shadow-lg transition-shadow`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{getAlertIcon(alert.type)}</div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getSeverityColor(alert.severity)}`}>
                              {alert.severity.toUpperCase()}
                            </span>
                            <span className="text-sm text-gray-500 flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {alert.location}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <StatusIcon className="h-4 w-4" />
                            {formatTimestamp(alert.timestamp)}
                          </div>
                        </div>
                        
                        <p className="text-gray-900 font-medium mb-3">{alert.message}</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {alert.affectedPopulation.toLocaleString()} affected
                            </span>
                            <span className="flex items-center">
                              <Globe className="h-4 w-4 mr-1" />
                              {alert.language}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <button className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                              <Volume2 className="h-3 w-3" />
                              <span>Audio Alert</span>
                            </button>
                            <button className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                              <Smartphone className="h-3 w-3" />
                              <span>Push to Mesh</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* System Status & Statistics */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">System Status</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">AI Model Accuracy</span>
                  <span className="font-semibold text-green-600">88.3%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Mesh Network Coverage</span>
                  <span className="font-semibold text-green-600">97.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Active Sensors</span>
                  <span className="font-semibold text-blue-600">1,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Languages Supported</span>
                  <span className="font-semibold text-purple-600">22</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Response Time</span>
                  <span className="font-semibold text-orange-600">0.34s</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">Today's Impact</h4>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2.3M</div>
                  <div className="text-sm text-gray-600">People Protected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">47</div>
                  <div className="text-sm text-gray-600">Early Warnings Sent</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-600">Disasters Prevented</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">Language Distribution</h4>
              <div className="space-y-3">
                {['Hindi', 'English', 'Bengali', 'Tamil', 'Telugu'].map((lang, index) => (
                  <div key={lang} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{lang}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full transition-all duration-500"
                          style={{ width: `${85 - index * 10}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 w-8 text-right">{85 - index * 10}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlertsSystem;