import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Flag, Target } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-patriot text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-20 animate-pulse"></div>
      
      {/* Dynamic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-red-400 opacity-10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 opacity-10 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="text-center">
          {/* Non-profit Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black rounded-full text-sm font-black uppercase tracking-wider shadow-lg">
              <Flag className="w-4 h-4 mr-2" />
              501(c)(4) Non-Profit Organization
            </div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            <span className="block text-white">TIME TO</span>
            <span className="block text-yellow-400 text-shadow-lg transform -skew-x-12 inline-block bg-red-700 px-4 py-2 rounded-lg">
              ACT UP!
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl font-bold text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            🇺🇸 Help us build America's newest grassroots conservative movement. 
            <span className="text-yellow-400 font-black">Every patriot matters</span> 
            as we fight for our constitutional republic!
          </p>

          {/* Growing Movement Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-400">NEW</div>
              <div className="text-sm font-bold uppercase tracking-wider">Organization</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-400">GROWING</div>
              <div className="text-sm font-bold uppercase tracking-wider">Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-400">100%</div>
              <div className="text-sm font-bold uppercase tracking-wider">Grassroots</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to={createPageUrl("Register")}>
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-6 text-xl font-black rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:scale-110 uppercase tracking-wider">
                <Target className="w-6 h-6 mr-3" />
                JOIN THE MOVEMENT
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            
            <Link to={createPageUrl("Events")}>
              <Button className="border-4 border-white text-white hover:bg-white hover:text-red-600 px-10 py-6 text-xl font-black rounded-xl transition-all duration-200 transform hover:scale-105 uppercase tracking-wider">
                <Flag className="w-6 h-6 mr-3" />
                GET INVOLVED
              </Button>
            </Link>
          </div>

          {/* Mission Statement */}
          <div className="bg-black bg-opacity-30 rounded-2xl p-6 max-w-2xl mx-auto border border-yellow-400">
            <p className="text-lg font-bold mb-4">
              "We're building something special - a movement that puts 
              <span className="text-yellow-400 font-black"> America First </span>
              and fights for conservative values in every community."
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div className="text-left">
                <div className="font-bold text-yellow-400">The Act Up! Team</div>
                <div className="text-sm text-blue-200">Grassroots Organizers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Diagonal Cut */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V120L1200,0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
}
