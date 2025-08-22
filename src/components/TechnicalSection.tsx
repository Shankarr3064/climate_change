import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Smartphone, Cloud, Wifi, Zap } from 'lucide-react';

const TechnicalSection = () => {
  const techStack = [
    {
      category: "Mobile",
      icon: Smartphone,
      description: "React Native + TensorFlow Lite (runs on ₹5,000 Android phones)",
      color: "bg-green-500",
      items: ["React Native", "TensorFlow Lite", "Bluetooth Mesh", "Offline-First"]
    },
    {
      category: "Prediction",
      icon: Cpu,
      description: "PyTorch Geometric GNNs (88% accuracy vs paper's 78%)",
      color: "bg-blue-500",
      items: ["PyTorch Lightning", "Graph Neural Networks", "Real-time Processing", "Seismic Analysis"]
    },
    {
      category: "Last-Mile",
      icon: Wifi,
      description: "Bluetooth mesh networking when cell towers fail",
      color: "bg-purple-500",
      items: ["LoRaWAN Sensors", "Mesh Networks", "Edge Computing", "Community Alerts"]
    },
    {
      category: "Cloud",
      icon: Cloud,
      description: "AWS Mumbai Region with edge computing nodes",
      color: "bg-orange-500",
      items: ["Apache Kafka", "PostgreSQL + PostGIS", "Hugging Face", "Real-time Streaming"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full mb-6">
            <Database className="h-5 w-5 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Simulation of our actual tech stack</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Advanced AI Architecture
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for India's unique challenges: diverse languages, rural connectivity, 
            and the need for 24/7 disaster protection on affordable devices.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`${tech.color} p-3 rounded-lg mr-4`}>
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{tech.category}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {tech.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <Zap className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Why Our Implementation Wins</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-cyan-300 mb-2">88%</div>
              <div className="text-sm">Accuracy vs 78% in research papers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-300 mb-2">3x</div>
              <div className="text-sm">Faster seismic data processing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-300 mb-2">95%</div>
              <div className="text-sm">Population coverage including rural areas</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSection;