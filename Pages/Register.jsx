
import React, { useState } from "react";
import { Member } from "@/entities/all";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Users, Flag } from "lucide-react";

export default function Register() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    volunteer_interests: [],
    membership_type: "Basic"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const volunteerOptions = [
    "Phone Banking",
    "Door Knocking", 
    "Event Planning",
    "Social Media",
    "Fundraising",
    "Research",
    "Other"
  ];

  const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleVolunteerInterestChange = (interest, checked) => {
    setFormData(prev => ({
      ...prev,
      volunteer_interests: checked 
        ? [...prev.volunteer_interests, interest]
        : prev.volunteer_interests.filter(item => item !== interest)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await Member.create(formData); // Assuming Member.create is an async operation
      setIsSuccess(true);
    } catch (error) {
      console.error("Error registering member:", error);
      alert("There was an error submitting your registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-patriot flex items-center justify-center px-4 relative overflow-hidden">
        {/* Celebration Animation */}
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        <div className="absolute top-20 left-20 text-6xl animate-bounce">🎉</div>
        <div className="absolute top-32 right-32 text-5xl animate-pulse delay-500">🇺🇸</div>
        <div className="absolute bottom-20 left-1/4 text-4xl animate-bounce delay-1000">🔥</div>
        <div className="absolute bottom-32 right-20 text-5xl animate-pulse">⭐</div>
        
        <Card className="max-w-lg w-full text-center shadow-2xl border-4 border-yellow-400 relative z-10">
          <CardContent className="p-12">
            <div className="text-8xl mb-6">🚀</div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 uppercase tracking-wider">
              WELCOME TO THE ARMY!
            </h2>
            <p className="text-xl font-bold text-gray-700 mb-8 leading-relaxed">
              You're now part of America's most powerful conservative movement! 
              Get ready for high-energy action alerts and victory celebrations! 🇺🇸
            </p>
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
              <div className="text-red-600 font-black text-lg mb-2 uppercase tracking-wider">
                🚨 MISSION ACTIVATED 🚨
              </div>
              <div className="text-gray-700 font-semibold">
                Check your email for your <span className="text-red-600 font-black">VICTORY PLAYBOOK</span> 
                and upcoming action opportunities in your area!
              </div>
            </div>
            <Button 
              onClick={() => window.location.href = "/"}
              className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 text-lg uppercase tracking-wider rounded-xl shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              🎯 START FIGHTING →
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-patriot text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        <div className="absolute top-10 left-10 text-4xl animate-pulse">⚡</div>
        <div className="absolute top-20 right-20 text-3xl animate-bounce">🇺🇸</div>
        <div className="absolute bottom-10 left-1/4 text-2xl animate-pulse delay-1000">🔥</div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black rounded-full text-sm font-black uppercase tracking-wider mb-6 animate-bounce">
              🚨 URGENT: AMERICA NEEDS YOU 🚨
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              JOIN THE
              <span className="block text-yellow-400">PATRIOT ARMY</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-blue-100 max-w-3xl mx-auto leading-relaxed">
              🇺🇸 Become part of the most POWERFUL conservative force in America! 
              50,000+ patriots are already fighting - IT'S YOUR TURN!
            </p>
          </div>
        </div>
        
        {/* Bottom Angled Cut */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120V0L1200,120Z" fill="#f9fafb"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8 relative">
        <Card className="shadow-2xl border-4 border-red-600 bg-white">
          <CardHeader className="text-center pb-6 bg-gradient-to-r from-red-50 to-blue-50">
            <div className="text-6xl mb-4">🎯</div>
            <CardTitle className="text-3xl font-black text-gray-900 uppercase tracking-wider">
              BATTLE REGISTRATION
            </CardTitle>
            <p className="text-lg font-bold text-gray-600 mt-3">
              Fill out your intel below and JOIN THE FIGHT for America's future!
            </p>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <h3 className="text-xl font-black text-red-600 uppercase tracking-wider mb-4">
                    🔥 PATRIOT INTEL
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="first_name" className="font-bold text-gray-800 uppercase text-sm tracking-wider">
                      First Name *
                    </Label>
                    <Input
                      id="first_name"
                      value={formData.first_name}
                      onChange={(e) => handleInputChange('first_name', e.target.value)}
                      required
                      className="mt-2 border-2 border-gray-300 focus:border-red-600 font-semibold"
                      placeholder="Your patriot name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="last_name" className="font-bold text-gray-800 uppercase text-sm tracking-wider">
                      Last Name *
                    </Label>
                    <Input
                      id="last_name"
                      value={formData.last_name}
                      onChange={(e) => handleInputChange('last_name', e.target.value)}
                      required
                      className="mt-2 border-2 border-gray-300 focus:border-red-600 font-semibold"
                      placeholder="Freedom fighter surname"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="font-bold text-gray-800 uppercase text-sm tracking-wider">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="mt-2 border-2 border-gray-300 focus:border-red-600 font-semibold"
                    placeholder="Your secure communication channel"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-bold text-gray-800 uppercase text-sm tracking-wider">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-2 border-2 border-gray-300 focus:border-red-600 font-semibold"
                    placeholder="Emergency contact (optional)"
                  />
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-6">
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <h3 className="text-xl font-black text-red-600 uppercase tracking-wider mb-4">
                    📍 DEPLOYMENT ZONE
                  </h3>
                </div>
                
                <div>
                  <Label htmlFor="address" className="font-bold text-gray-800 uppercase text-sm tracking-wider">
                    Street Address
                  </Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="mt-2 border-2 border-gray-300 focus:border-red-600 font-semibold"
                    placeholder="Your primary base of operations"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="city" className="font-bold text-gray-800 uppercase text-sm tracking-wider">
                      City
                    </Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="mt-2 border-2 border-gray-300 focus:border-red-600 font-semibold"
                      placeholder="Your city"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="font-bold text-gray-800 uppercase text-sm tracking-wider">
                      State
                    </Label>
                    <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                      <SelectTrigger className="mt-2 border-2 border-gray-300 focus:border-red-600 font-semibold">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map(state => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zip_code" className="font-bold text-gray-800 uppercase text-sm tracking-wider">
                      ZIP Code
                    </Label>
                    <Input
                      id="zip_code"
                      value={formData.zip_code}
                      onChange={(e) => handleInputChange('zip_code', e.target.value)}
                      className="mt-2 border-2 border-gray-300 focus:border-red-600 font-semibold"
                      placeholder="Your zip code"
                    />
                  </div>
                </div>
              </div>

              {/* Volunteer Interests */}
              <div className="space-y-6">
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <h3 className="text-xl font-black text-red-600 uppercase tracking-wider mb-4">
                    🎖️ MISSION SKILLS
                  </h3>
                </div>
                <p className="text-sm font-semibold text-gray-700">
                  Select all battlefronts where you'd like to deploy your skills (optional)
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {volunteerOptions.map(option => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={formData.volunteer_interests.includes(option)}
                        onCheckedChange={(checked) => handleVolunteerInterestChange(option, checked)}
                        className="border-red-600 data-[state=checked]:bg-red-600 data-[state=checked]:text-white"
                      />
                      <Label htmlFor={option} className="text-sm font-semibold text-gray-800">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t-4 border-red-600">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 hover:shadow-2xl text-white font-black px-8 py-6 text-2xl rounded-xl shadow-xl hover:shadow-3xl transition-all duration-200 transform hover:scale-105 uppercase tracking-wider"
                >
                  {isSubmitting ? (
                    <>🔄 ACTIVATING PATRIOT STATUS...</>
                  ) : (
                    <>🚀 ACTIVATE MY PATRIOT STATUS!</>
                  )}
                </Button>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
                  <div className="text-yellow-600 font-black text-lg mb-2 uppercase tracking-wider">
                    ⚡ BONUS ALERT ⚡
                  </div>
                  <div className="text-gray-700 font-semibold">
                    Register now and get FREE access to our exclusive 
                    <span className="text-red-600 font-black"> VICTORY PLAYBOOK</span> - 
                    proven strategies that WON 89% of our battles! 🏆
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
