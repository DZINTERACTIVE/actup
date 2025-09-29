
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Flag, Heart, Users, Target, Shield, Star } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Flag,
      title: "Constitutional Principles",
      description: "We defend the Constitution as the supreme law of the land and champion limited government that respects individual rights and freedoms."
    },
    {
      icon: Heart,
      title: "Traditional Values",
      description: "We stand for time-tested principles of family, faith, and community that have made America strong and prosperous."
    },
    {
      icon: Shield,
      title: "Personal Responsibility",
      description: "We believe in empowering individuals to take control of their lives and communities rather than relying on government solutions."
    },
    {
      icon: Star,
      title: "American Exceptionalism",
      description: "We celebrate America's unique role in advancing liberty and prosperity around the world while putting America first."
    }
  ];

  const leadership = [
    {
      name: "Sarah Johnson",
      role: "Founding Director",
      bio: "Former congressional aide with 15 years of grassroots organizing experience",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Policy Director",
      bio: "Constitutional lawyer and former state legislature policy advisor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "David Rodriguez",
      role: "Field Operations Director",
      bio: "Veteran campaign manager with expertise in coalition building",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black rounded-full text-sm font-black uppercase tracking-wider shadow-lg mb-6">
              501(c)(4) Non-Profit Organization
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Act Up!
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              We are a newly formed grassroots conservative non-profit dedicated to building 
              a movement that defends our freedoms and restores our founding principles.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Act Up! is a brand new 501(c)(4) non-profit organization founded on the belief 
              that real change comes from the ground up. We're building a grassroots conservative 
              movement that empowers everyday Americans to take action in their communities, 
              hold elected officials accountable, and ensure that conservative voices are heard. 
              Through organizing, education, and civic engagement, we're creating a network 
              that will preserve our constitutional republic for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our growing organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <value.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced conservatives leading the movement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-3">
                    {leader.role}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {leader.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our Organization
            </h2>
          </div>
          
          <div className="bg-red-50 border-4 border-red-200 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-black text-red-600 mb-4 uppercase tracking-wider">
              🏛️ NON-PROFIT STATUS
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Act Up! is organized as a <strong>501(c)(4) social welfare organization</strong>, 
              which allows us to engage in unlimited lobbying and political advocacy while 
              maintaining our tax-exempt status.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <div className="font-bold text-gray-900">Tax Status:</div>
                <div className="text-gray-700">501(c)(4) Social Welfare</div>
              </div>
              <div>
                <div className="font-bold text-gray-900">EIN:</div>
                <div className="text-gray-700">47-XXXXXXX (Pending)</div>
              </div>
              <div>
                <div className="font-bold text-gray-900">Founded:</div>
                <div className="text-gray-700">2024</div>
              </div>
              <div>
                <div className="font-bold text-gray-900">State:</div>
                <div className="text-gray-700">Virginia</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Building Our Network</h3>
                <p className="text-gray-700">
                  As a new organization, we're focused on building local networks of 
                  conservative activists and training them to mobilize their communities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Civic Education</h3>
                <p className="text-gray-700">
                  We're developing resources and training programs to help Americans understand 
                  their constitutional rights and engage effectively in the political process.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Electoral Engagement</h3>
                <p className="text-gray-700">
                  We plan to support conservative candidates and causes through voter education, 
                  registration drives, and grassroots organizing.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Policy Advocacy</h3>
                <p className="text-gray-700">
                  We're working to research, develop, and promote conservative policy solutions 
                  at all levels of government.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
