'use client';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, Globe } from 'lucide-react';
import { campus, socialMediaLinks } from '@/app/info/info';


export function Contact() {




  return (
    <section id="contactUS" 
          style={{ minHeight: "calc(100dvh - 105px)" }}

    className="flex items-center py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
      
        <div className="text-center space-y-4 mb-16">
        

                <h2 className="text-4xl md:text-5xl font-extrabold text-[#0047AB] mb-0 text-center">
            Get in Touch
        </h2>
        <p className=" text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-0 text-center">
          Connect with us through multiple channels. We're here to support you on your academic journey.
        </p>
        <span className="mb-4 mx-auto flex  bg-[#0047AB] w-[300px] h-[2px]"></span>

        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information Card */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0 h-full bg-white" style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6" style={{ color: '#2563eb' }}>
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" 
                         style={{ backgroundColor: '#2563eb' }}>
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                    <a
                                         style={{ color: '#2563eb' }}
                                         href={`tel:${campus.Hotline}`}
                                         className="text-lg  hover:underline mx-0 px-0"
                                       >
                                         {campus.Hotline}
                                       </a>
                     {campus.Phone.map((phone: string, index: number) => (
                                     <div key={index} className="flex items-center">
                                    
                                       <a
                                         style={{ color: '#2563eb' }}
                                         href={`tel:${phone}`}
                                         className="text-lg  hover:underline mx-0 px-0"
                                       >
                                         {phone}
                                       </a>
                                     </div>
                                   ))}
                   
                     
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" 
                         style={{ backgroundColor: '#2563eb' }}>
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email Address</p>
                    
                          <a className="text-lg" style={{ color: '#2563eb' }} href={`mailto:${campus.email}`}>{campus.email}</a>
                    
                    </div>
                  </div>

                  {/* Office Location */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" 
                         style={{ backgroundColor: '#2563eb' }}>
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">University Location</p>
                      <a href={campus.addressLink} target='_blank' className="text-lg" style={{ color: '#2563eb' }}>
                        {campus.address}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Additional Info
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-2">Office Hours</p>
                  <p className="text-gray-700">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div> */}
              </CardContent>
            </Card>
          </div>

          {/* Social Media & Additional Contact */}
          <div className="space-y-8">
            {/* Social Media Card */}
            <Card className="shadow-lg border-0 h-full bg-white" style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6" style={{ color: '#2563eb' }}>
                  Follow Us
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Stay connected with our university community through social media for the latest updates, events, and news.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialMediaLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-16 flex flex-col items-center justify-center space-y-2 hover:shadow-md transition-all duration-200"
                      onClick={() => window.open(social.url, '_blank')}
                      style={{
                        borderColor: social.color + '20',
                        backgroundColor: 'white',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = social.color + '10';
                        e.currentTarget.style.borderColor = social.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.borderColor = social.color + '20';
                      }}
                    >
                      <social.icon className="h-5 w-5" style={{ color: social.color }} />
                      <span className="text-xs" style={{ color: social.color }}>
                        {social.name}
                      </span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

  
          </div>
        </div>
      </div>
    </section>
  );
}