
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Flag, Target, Heart, Zap } from "lucide-react";

const goals = [
  {
    icon: Users,
    title: "BUILDING OUR ARMY",
    description: "Growing our network of conservative patriots",
    color: "text-red-600",
    bg: "bg-red-50"
  },
  {
    icon: Calendar,
    title: "HOSTING EVENTS",
    description: "Organizing rallies, meetings & town halls",
    color: "text-blue-600", 
    bg: "bg-blue-50"
  },
  {
    icon: Flag,
    title: "DEFENDING VALUES",
    description: "Fighting for constitutional principles",
    color: "text-yellow-600",
    bg: "bg-yellow-50"
  },
  {
    icon: Heart,
    title: "GRASSROOTS FOCUS",
    description: "100% community-driven organization",
    color: "text-green-600",
    bg: "bg-green-50"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-2 bg-red-600 text-white rounded-full text-sm font-black uppercase tracking-wider mb-6">
            <Zap className="w-4 h-4 mr-2" />
            OUR MISSION
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            BUILDING THE MOVEMENT
          </h2>
          <p className="text-xl md:text-2xl font-bold text-gray-600 max-w-3xl mx-auto">
            We're just getting started, but we're growing fast! Join us as we build 
            America's newest conservative grassroots organization! 🇺🇸
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 border-red-600 group"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 ${goal.bg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <goal.icon className={`w-10 h-10 ${goal.color}`} />
              </div>
              <div className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wider">
                {goal.title}
              </div>
              <div className="text-sm font-semibold text-gray-600 leading-relaxed">
                {goal.description}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 border-4 border-yellow-400 max-w-2xl mx-auto">
            <div className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-wider">
              🚀 HELP US GROW!
            </div>
            <p className="text-lg font-bold text-gray-700 mb-6">
              As a new 501(c)(4) non-profit, we need patriots like you to help us build 
              the conservative movement from the ground up!
            </p>
            <Link to={createPageUrl("Register")}>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-xl uppercase tracking-wider transform hover:scale-105 transition-all duration-200">
                BE A FOUNDING MEMBER →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
