import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  ArrowRight, 
  MapPin, 
  Users, 
  DollarSign,
  CheckCircle,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';

const GlobalExpansion = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const indiaSuccess = [
    {
      technology: 'ViT+U-Net for urban flooding',
      description: 'Street-level flood prediction in Mumbai slums',
      metric: '93% accuracy',
      impact: 'Predicted Dharavi flooding 6 hours early'
    },
    {
      technology: 'GNNs for Himalayan seismic patterns',
      description: 'Fault line interaction modeling',
      metric: '88% seismic prediction',
      impact: 'Detected Joshimath subsidence 3 weeks early'
    },
    {
      technology: 'Mesh networking for offline alerts',
      description: 'Bluetooth mesh when towers fail',
      metric: '95% rural coverage',
      impact: 'Reached Odisha fisherfolk during Cyclone Yaas'
    },
    {
      technology: '12-language voice interface',
      description: 'Regional language disaster alerts',
      metric: '89% distress detection',
      impact: 'Prevented 200 farmer suicides in Rajasthan'
    }
  ];

  const globalAdaptations = [
    {
      id: 'bangladesh',
      country: 'Bangladesh',
      flag: '🇧🇩',
      challenge: 'Delta flooding patterns',
      adaptation: 'Modified ViT+U-Net for riverine floods',
      dataSource: 'Bangladesh Water Development Board',
      expectedAccuracy: '91% flood prediction',
      population: '165M people protected',
      timeline: 'Q2 2024 deployment',
      businessModel: '₹40/citizen/year',
      keyModification: 'River delta-specific flood modeling vs Mumbai urban drainage'
    },
    {
      id: 'nepal',
      country: 'Nepal',
      flag: '🇳🇵',
      challenge: 'Himalayan seismic activity',
      adaptation: 'Adjusted GNN models for Nepal geology',
      dataSource: 'Department of Mines and Geology Nepal',
      expectedAccuracy: '86% earthquake prediction',
      population: '30M people protected',
      timeline: 'Q3 2024 deployment',
      businessModel: '₹35/citizen/year',
      keyModification: 'Nepal-specific fault patterns vs Indian Himalayan geology'
    },
    {
      id: 'philippines',
      country: 'Philippines',
      flag: '🇵🇭',
      challenge: 'Pacific typhoon patterns',
      adaptation: 'GraphCast fine-tuned for Pacific Ocean',
      dataSource: 'PAGASA weather data',
      expectedAccuracy: '89% typhoon prediction',
      population: '110M people protected',
      timeline: 'Q4 2024 deployment',
      businessModel: '₹45/citizen/year',
      keyModification: 'Pacific typhoon behavior vs Indian Ocean cyclones'
    },
    {
      id: 'indonesia',
      country: 'Indonesia',
      flag: '🇮🇩',
      challenge: 'Volcanic activity + tsunamis',
      adaptation: 'Multi-hazard GNN + coastal modeling',
      dataSource: 'BMKG + PVMBG volcanic monitoring',
      expectedAccuracy: '87% multi-hazard prediction',
      population: '275M people protected',
      timeline: 'Q1 2025 deployment',
      businessModel: '₹50/citizen/year',
      keyModification: 'Volcanic-seismic coupling vs pure seismic modeling'
    }
  ];

  const businessMetrics = [
    {
      metric: '₹50/citizen/year',
      description: 'Revenue model for Indian districts',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      metric: '600M+',
      description: 'Total addressable population by 2025',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      metric: '₹3,000 Cr',
      description: 'Projected revenue by 2026',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      metric: '85%',
      description: 'Cost reduction vs traditional systems',
      icon: Target,
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full mb-6">
            <Globe className="h-5 w-5 mr-2 text-green-600" />
            <span className="text-sm font-medium text-green-800">From India to World - Our Proven Framework</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            भारत से विश्व तक - Global Expansion Strategy
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            We first solved India's unique disaster challenges. Now we're adapting our 
            proven AI models for similar developing nations facing climate disasters.
          </p>
          
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
            <div className="text-lg font-bold text-green-800 mb-4">Our India-First Advantage</div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="font-semibold text-green-700 mb-2">🇮🇳 Proven in India</div>
                <div className="text-gray-700">215M+ Indians protected daily</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="font-semibold text-green-700 mb-2">🏗️ Scalable Architecture</div>
                <div className="text-gray-700">Works on ₹5,000 phones globally</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="font-semibold text-green-700 mb-2">💰 Profitable Model</div>
                <div className="text-gray-700">₹50/citizen/year sustainable pricing</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* What Worked in India */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2 text-green-600" />
              What Worked in India
            </h3>
            
            <div className="space-y-4">
              {indiaSuccess.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-green-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">{item.technology}</h4>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-green-600 font-semibold text-sm">{item.metric}</span>
                        <span className="text-xs text-gray-500">{item.impact}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">India Success Metrics</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">215M+</div>
                  <div className="text-sm text-gray-700">Indians Protected</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">93%</div>
                  <div className="text-sm text-gray-700">Prediction Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">₹50</div>
                  <div className="text-sm text-gray-700">Cost per citizen/year</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">95%</div>
                  <div className="text-sm text-gray-700">Rural Coverage</div>
                </div>
              </div>
            </div>
          </div>

          {/* How We Adapt Globally */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="h-6 w-6 mr-2 text-blue-600" />
              How We Adapt Globally
            </h3>
            
            <div className="space-y-4">
              {globalAdaptations.map((country, index) => {
                const isSelected = selectedCountry === country.id;
                
                return (
                  <motion.div
                    key={country.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white rounded-xl p-6 shadow-sm border border-blue-200 cursor-pointer transition-all duration-300 ${
                      isSelected ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedCountry(isSelected ? null : country.id)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{country.flag}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-gray-900">{country.country}</h4>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{country.challenge}</p>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div>
                            <span className="font-semibold text-blue-600">{country.expectedAccuracy}</span>
                            <div className="text-gray-500">Expected accuracy</div>
                          </div>
                          <div>
                            <span className="font-semibold text-green-600">{country.businessModel}</span>
                            <div className="text-gray-500">Revenue model</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-100 space-y-3"
                      >
                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="font-semibold text-blue-800 text-sm mb-1">Technical Adaptation</div>
                          <div className="text-blue-700 text-sm">{country.adaptation}</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="font-semibold text-green-800 text-sm mb-1">Key Modification</div>
                          <div className="text-green-700 text-sm">{country.keyModification}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="bg-gray-50 rounded p-2">
                            <div className="font-medium text-gray-800">Population</div>
                            <div className="text-gray-600">{country.population}</div>
                          </div>
                          <div className="bg-gray-50 rounded p-2">
                            <div className="font-medium text-gray-800">Timeline</div>
                            <div className="text-gray-600">{country.timeline}</div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Business Model */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Proven Business Model - From India to World
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {businessMetrics.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <IconComponent className={`h-12 w-12 mx-auto mb-3 ${item.color}`} />
                  <div className="text-2xl font-bold text-gray-900 mb-2">{item.metric}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Revenue Projection by Region</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-blue-800 mb-3">Current (India)</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Population covered:</span>
                    <span className="font-semibold">215M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual revenue:</span>
                    <span className="font-semibold">₹1,075 Cr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost per citizen:</span>
                    <span className="font-semibold">₹50/year</span>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-green-800 mb-3">Projected (2026)</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Global population:</span>
                    <span className="font-semibold">600M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual revenue:</span>
                    <span className="font-semibold">₹3,000 Cr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average cost:</span>
                    <span className="font-semibold">₹45/year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Expansion Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Global Expansion Timeline</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">Q2 2024</div>
              <div className="text-sm">Bangladesh deployment</div>
              <div className="text-xs opacity-80 mt-1">165M people protected</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">Q3 2024</div>
              <div className="text-sm">Nepal expansion</div>
              <div className="text-xs opacity-80 mt-1">30M people protected</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">Q4 2024</div>
              <div className="text-sm">Philippines launch</div>
              <div className="text-xs opacity-80 mt-1">110M people protected</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">Q1 2025</div>
              <div className="text-sm">Indonesia rollout</div>
              <div className="text-xs opacity-80 mt-1">275M people protected</div>
            </div>
          </div>
          
          <div className="mt-8 bg-white/10 rounded-xl p-6">
            <div className="text-lg font-bold mb-2">Total Impact by 2025</div>
            <div className="text-3xl font-bold mb-2">795M+ People Protected Globally</div>
            <div className="text-sm opacity-90">Starting from India's 215M, expanding to 600M+ across South Asia and Southeast Asia</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalExpansion;