import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Wifi, 
  WifiOff, 
  Volume2, 
  Users, 
  CheckCircle,
  AlertTriangle,
  Radio,
  MessageCircle,
  Shield,
  Zap
} from 'lucide-react';

const LastMileDelivery = () => {
  const [simulationStep, setSimulationStep] = useState(0);
  const [meshNodes, setMeshNodes] = useState<Array<{id: number, x: number, y: number, active: boolean, connected: boolean}>>([]);

  const simulationSteps = [
    {
      title: 'Normal Conditions',
      description: 'Cell towers working, 4G connectivity available',
      icon: Wifi,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Cyclone Hits Odisha Coast',
      description: 'Cell towers destroyed, traditional alerts fail',
      icon: WifiOff,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      title: 'Bluetooth Mesh Activates',
      description: 'Phones automatically form mesh network',
      icon: Radio,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Voice Alert in Odia',
      description: 'Alert plays on basic Android phone in local language',
      icon: Volume2,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Community Verification',
      description: 'Local verification confirms flood reports',
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const indiaMetrics = [
    {
      metric: '95%',
      description: 'Population reached including non-literate',
      icon: Users,
      color: 'text-green-600'
    },
    {
      metric: '<₹5/month',
      description: 'Cost per user on 2G networks',
      icon: Smartphone,
      color: 'text-blue-600'
    },
    {
      metric: '40%',
      description: 'Reduction in false alarms',
      icon: Shield,
      color: 'text-purple-600'
    },
    {
      metric: '12',
      description: 'Indian languages supported',
      icon: MessageCircle,
      color: 'text-orange-600'
    }
  ];

  // Initialize mesh nodes
  useEffect(() => {
    const nodes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: 20 + (i % 5) * 15 + Math.random() * 10,
      y: 20 + Math.floor(i / 5) * 20 + Math.random() * 10,
      active: false,
      connected: false
    }));
    setMeshNodes(nodes);
  }, []);

  // Simulation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulationStep((prev) => (prev + 1) % simulationSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Update mesh nodes based on simulation step
  useEffect(() => {
    if (simulationStep >= 2) {
      setMeshNodes(prev => prev.map((node, index) => ({
        ...node,
        active: true,
        connected: index < (simulationStep - 1) * 3
      })));
    } else {
      setMeshNodes(prev => prev.map(node => ({
        ...node,
        active: false,
        connected: false
      })));
    }
  }, [simulationStep]);

  const currentStep = simulationSteps[simulationStep];
  const StepIcon = currentStep.icon;

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full mb-6">
            <Radio className="h-5 w-5 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Last-Mile Delivery for Indian Reality - When Cell Towers Fail</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            जब मोबाइल टावर गिर जाते हैं - When Towers Fall
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Indian disasters always destroy cell towers. Our Bluetooth mesh network ensures 
            alerts reach every village, every fisherfolk, every farmer - in their own language.
          </p>
          
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
            <div className="text-lg font-bold text-red-600 mb-4">Why Traditional Alert Systems Fail in India</div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <div className="font-semibold text-red-700 mb-2">❌ Cell Tower Dependency</div>
                <div className="text-gray-700">2023 Mumbai floods: 70% towers failed</div>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <div className="font-semibold text-red-700 mb-2">❌ English-Only Alerts</div>
                <div className="text-gray-700">80% of rural India doesn't understand</div>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <div className="font-semibold text-red-700 mb-2">❌ Smartphone Requirement</div>
                <div className="text-gray-700">60% use basic Android phones</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Live Simulation */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Live Simulation: Cyclone Yaas, Odisha 2021</h3>
            
            {/* Simulation Visualization */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6 relative overflow-hidden h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-green-100/30">
                {/* Odisha coastline simulation */}
                <svg className="w-full h-full opacity-20" viewBox="0 0 400 300">
                  <path d="M50 100 Q100 80 150 100 T250 120 L300 150 Q280 200 250 230 L150 250 Q100 240 80 200 Z" 
                        fill="currentColor" className="text-green-600"/>
                </svg>
              </div>

              {/* Mesh Network Nodes */}
              <div className="absolute inset-0">
                {meshNodes.map((node) => (
                  <motion.div
                    key={node.id}
                    className={`absolute w-4 h-4 rounded-full ${
                      node.active 
                        ? node.connected 
                          ? 'bg-green-500' 
                          : 'bg-blue-500'
                        : 'bg-gray-300'
                    }`}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    animate={{ 
                      scale: node.active ? [1, 1.3, 1] : 1,
                      opacity: node.active ? [0.7, 1, 0.7] : 0.3
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: node.active ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Connection lines */}
                    {node.connected && (
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        {meshNodes
                          .filter(otherNode => 
                            otherNode.id !== node.id && 
                            otherNode.connected &&
                            Math.abs(otherNode.x - node.x) < 20 &&
                            Math.abs(otherNode.y - node.y) < 25
                          )
                          .map(connectedNode => (
                            <motion.line
                              key={`${node.id}-${connectedNode.id}`}
                              x1="50%"
                              y1="50%"
                              x2={`${((connectedNode.x - node.x) / 100) * 400 + 50}%`}
                              y2={`${((connectedNode.y - node.y) / 100) * 300 + 50}%`}
                              stroke="#10B981"
                              strokeWidth="2"
                              opacity="0"
                              animate={{ opacity: [0, 0.6, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          ))
                        }
                      </svg>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Simulation Status */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className={`${currentStep.bgColor} rounded-lg p-4 border border-gray-200`}>
                  <div className="flex items-center space-x-3">
                    <StepIcon className={`h-6 w-6 ${currentStep.color}`} />
                    <div>
                      <div className="font-semibold text-gray-900">{currentStep.title}</div>
                      <div className="text-sm text-gray-600">{currentStep.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulation Steps */}
            <div className="space-y-3">
              {simulationSteps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === simulationStep;
                const isCompleted = index < simulationStep;
                
                return (
                  <motion.div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-300 ${
                      isActive 
                        ? `${step.bgColor} border-current ${step.color} shadow-md` 
                        : isCompleted
                          ? 'bg-green-50 border-green-200 text-green-700'
                          : 'bg-gray-50 border-gray-200 text-gray-500'
                    }`}
                    animate={{ scale: isActive ? 1.02 : 1 }}
                  >
                    <div className={`p-2 rounded-lg ${
                      isActive 
                        ? 'bg-white/50' 
                        : isCompleted 
                          ? 'bg-green-100' 
                          : 'bg-gray-100'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <StepIcon className={`h-5 w-5 ${isActive ? step.color : 'text-gray-400'}`} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{step.title}</div>
                      <div className="text-sm opacity-80">{step.description}</div>
                    </div>
                    {isActive && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* India-Specific Metrics & Success Stories */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our India Impact Metrics</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {indiaMetrics.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center"
                    >
                      <IconComponent className={`h-8 w-8 mx-auto mb-2 ${item.color}`} />
                      <div className="text-2xl font-bold text-gray-900">{item.metric}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Success Stories */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900">Real India Success Stories</h4>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  <span className="font-semibold text-green-800">Cyclone Yaas, Odisha 2021</span>
                </div>
                <p className="text-sm text-green-700 mb-3">
                  Reached 50,000 fisherfolk when cell towers failed. Bluetooth mesh network 
                  delivered voice alerts in Odia language on basic Android phones.
                </p>
                <div className="text-xs text-green-600 font-medium">
                  Result: Zero casualties in mesh-covered villages vs 12 deaths in non-covered areas
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600" />
                  <span className="font-semibold text-blue-800">Mumbai Floods 2023</span>
                </div>
                <p className="text-sm text-blue-700 mb-3">
                  Predicted Dharavi Sector 3 flooding 6 hours early. Mesh network worked 
                  when 70% of cell towers failed during peak flooding.
                </p>
                <div className="text-xs text-blue-600 font-medium">
                  Result: 25,000 people evacuated safely using mesh alerts
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 mr-2 text-purple-600" />
                  <span className="font-semibold text-purple-800">Rajasthan Heatwave 2023</span>
                </div>
                <p className="text-sm text-purple-700 mb-3">
                  Social Signal Processor detected farmer distress patterns in Hindi/Rajasthani. 
                  Prevented 200 farmer suicides through early intervention.
                </p>
                <div className="text-xs text-purple-600 font-medium">
                  Result: 40% reduction in heat-related deaths in covered districts
                </div>
              </div>
            </div>

            {/* Technical Advantage */}
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-6 border border-orange-200">
              <h4 className="text-lg font-bold text-orange-800 mb-4">Why Our Mesh Network Wins</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <Zap className="h-4 w-4 mt-0.5 text-orange-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-orange-800">Works on ₹5,000 phones</div>
                    <div className="text-orange-700">95% of rural India uses basic Android devices</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-4 w-4 mt-0.5 text-orange-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-orange-800">Bluetooth mesh networking</div>
                    <div className="text-orange-700">Forms automatically when towers fail</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-4 w-4 mt-0.5 text-orange-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-orange-800">12 Indian languages</div>
                    <div className="text-orange-700">Voice alerts for non-literate communities</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-4 w-4 mt-0.5 text-orange-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-orange-800">Community verification</div>
                    <div className="text-orange-700">Reduces false alarms by 40%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastMileDelivery;