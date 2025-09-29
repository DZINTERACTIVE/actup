
import React, { useState, useEffect } from "react";
import { NewsArticle, Event } from "@/entities/all";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper, Calendar } from "lucide-react";

import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import NewsCard from "../components/NewsCard";
import EventCard from "../components/EventCard";

export default function Home() {
  const [latestNews, setLatestNews] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [news, events] = await Promise.all([
        NewsArticle.filter({ published: true }, "-created_date", 3),
        Event.list("date", 3)
      ]);
      
      setLatestNews(news);
      setUpcomingEvents(events);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      
      {/* Latest News Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Angled Background */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-red-600 to-blue-600 transform -skew-y-1 origin-top-left"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 bg-red-600 text-white rounded-full text-sm font-black uppercase tracking-wider mb-6">
              <Newspaper className="w-4 h-4 mr-2" />
              CONSERVATIVE UPDATES
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              PATRIOT INTEL
            </h2>
            <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto">
              Stay informed with conservative news, updates from our growing movement, 
              and action alerts! 📰
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : latestNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {latestNews.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon!</h3>
              <p className="text-lg text-gray-600 max-w-md mx-auto">
                We're building our news and content section. Check back soon for 
                conservative updates and action alerts!
              </p>
            </div>
          )}
          
          <div className="text-center">
            <Link to={createPageUrl("News")}>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 text-lg uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <Newspaper className="w-5 h-5 mr-2" />
                VIEW ALL UPDATES →
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-black uppercase tracking-wider mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              GET INVOLVED
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              JOIN THE ACTION
            </h2>
            <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto">
              Connect with fellow conservatives at our growing list of events. 
              Help us build the movement in your community! 🤝
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="animate-pulse bg-white rounded-xl p-6">
                  <div className="h-4 bg-gray-200 rounded mb-4 w-1/4"></div>
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Events Coming Soon!</h3>
              <p className="text-lg text-gray-600 max-w-md mx-auto mb-6">
                We're organizing our first events and meetups. Join our movement 
                to be notified when events are scheduled in your area!
              </p>
              <Link to={createPageUrl("Register")}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3">
                  Get Notified →
                </Button>
              </Link>
            </div>
          )}
          
          <div className="text-center">
            <Link to={createPageUrl("Events")}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black px-8 py-4 text-lg uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <Calendar className="w-5 h-5 mr-2" />
                VIEW ALL EVENTS →
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-patriot text-white relative overflow-hidden">
        {/* Animated Stars */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 text-4xl animate-pulse">⭐</div>
          <div className="absolute top-32 right-32 text-3xl animate-bounce delay-500">🇺🇸</div>
          <div className="absolute bottom-20 left-1/4 text-2xl animate-pulse delay-1000">⚡</div>
          <div className="absolute bottom-32 right-20 text-3xl animate-bounce">🔥</div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="text-6xl md:text-8xl font-black mb-6">
              HELP US BUILD
            </div>
            <div className="text-6xl md:text-8xl font-black text-yellow-400 mb-8">
              THE MOVEMENT!
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl font-bold text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're just getting started, but with patriots like you, we can build something 
            <span className="text-yellow-400 font-black"> truly powerful</span> for America's future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link to={createPageUrl("Register")}>
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black px-12 py-6 text-2xl font-black rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:scale-110 uppercase tracking-wider">
                🚀 JOIN AS FOUNDER
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            
            <Link to={createPageUrl("About")}>
              <Button className="border-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-12 py-6 text-2xl font-black rounded-xl transition-all duration-200 transform hover:scale-105 uppercase tracking-wider">
                🎯 LEARN MORE
              </Button>
            </Link>
          </div>
          
          <div className="bg-black bg-opacity-40 rounded-2xl p-8 border-2 border-yellow-400">
            <div className="text-yellow-400 font-black text-xl mb-4 uppercase tracking-widest">
              🌟 FOUNDING MEMBER SPECIAL 🌟
            </div>
            <div className="text-2xl font-bold">
              Join our movement as a founding member and help shape the future of 
              <span className="text-yellow-400 font-black"> grassroots conservative action!</span> 🇺🇸
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
