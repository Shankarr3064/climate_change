import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Globe, Shield, MapPin, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-blue-800/50 px-4 py-2 rounded-full mb-6">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">प्रकृति मित्र - Built for India's ₹5,000 Android phones - Works offline in rural Bharat</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            India's First Hyperlocal
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">
              Disaster Prediction System
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Street-level disaster prediction with 93% accuracy for India's 6 disaster zones. 
            Bluetooth mesh networking reaches every village when cyclones destroy cell towers.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-cyan-300 font-semibold text-lg">
              "Generic systems warn 'Mumbai will flood' - We warn 'Dharavi Sector 3 needs evacuation by 2PM'"
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: MapPin,
              title: "Hyperlocal Precision",
              description: "ViT+U-Net analyzes ISRO Bhuvan imagery at 10m resolution - predicts Dharavi flooding 6 hours earlier",
              metric: "93% Street-Level Accuracy"
            },
            {
              icon: Users,
              title: "Bharat-First Design",
              description: "Voice alerts in 12 Indian languages on basic Android phones - works when cell towers fail",
              metric: "95% Rural Coverage"
            },
            {
              icon: Shield,
              title: "India's Disaster Zones",
              description: "GNNs model Himalayan seismic patterns, monsoon flooding, and cyclone corridors specific to India",
              metric: "6 Zones Covered"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <feature.icon className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">{feature.description}</p>
              <div className="text-cyan-400 font-bold text-lg">{feature.metric}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;