'use client'
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, HelpCircle, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const campuses = [
    {
      name: 'Main Campus',
      address: '123 University Avenue, Academic City, AC 12345',
      phone: '+1 (555) 123-4567',
      email: 'info@internationaluni.edu',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM'
    },
    {
      name: 'Medical Campus',
      address: '456 Medical Center Drive, Health City, HC 12346',
      phone: '+1 (555) 234-5678',
      email: 'medical@internationaluni.edu',
      hours: 'Mon-Fri: 7:00 AM - 7:00 PM'
    },
    {
      name: 'Technology Campus',
      address: '789 Innovation Boulevard, Tech Valley, TV 12347',
      phone: '+1 (555) 345-6789',
      email: 'tech@internationaluni.edu',
      hours: 'Mon-Fri: 8:00 AM - 8:00 PM'
    }
  ];

  const contactTypes = [
    {
      icon: Users,
      title: 'Admissions',
      description: 'Questions about applications, programs, and enrollment',
      contact: 'admissions@internationaluni.edu',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM'
    },
    {
      icon: HelpCircle,
      title: 'Student Support',
      description: 'Academic support, counseling, and student services',
      contact: 'support@internationaluni.edu',
      hours: '24/7 Online Support'
    },
    {
      icon: MessageCircle,
      title: 'General Inquiries',
      description: 'General questions and information requests',
      contact: 'info@internationaluni.edu',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Contact &amp; Support</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us. We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Inquiry Type *</Label>
                    <Select value={formData.category} onValueChange={(value:any) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admissions">Admissions</SelectItem>
                        <SelectItem value="academic">Academic Programs</SelectItem>
                        <SelectItem value="student-services">Student Services</SelectItem>
                        <SelectItem value="financial">Financial Aid</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="general">General Information</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Please provide detailed information about your inquiry..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact Types */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Contact</h3>
              {contactTypes.map((type, index) => (
                <Card key={index} className="transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <type.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{type.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-3 w-3" />
                            <span className="text-sm">{type.contact}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-3 w-3" />
                            <span className="text-sm">{type.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
            <Card className="bg-destructive/10 border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive">Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">For campus emergencies and urgent matters:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-destructive" />
                    <span className="font-semibold">+1 (555) 911-HELP</span>
                  </div>
                  <Badge variant="destructive">Available 24/7</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Campus Locations */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-center">Campus Locations</h3>
          
          {/* Map Placeholder */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-primary mx-auto" />
                <h4 className="text-lg font-semibold">Interactive Campus Map</h4>
                <p className="text-sm text-muted-foreground">Click on campus locations for detailed information</p>
              </div>
            </div>
          </Card>

          {/* Campus Details */}
          <div className="grid md:grid-cols-3 gap-6">
            {campuses.map((campus, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>{campus.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <span>{campus.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{campus.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{campus.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{campus.hours}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Quick Links */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-center">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
                <HelpCircle className="h-5 w-5" />
                <span className="text-sm">Admission Requirements</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
                <HelpCircle className="h-5 w-5" />
                <span className="text-sm">Tuition &amp; Fees</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
                <HelpCircle className="h-5 w-5" />
                <span className="text-sm">Campus Life</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
                <HelpCircle className="h-5 w-5" />
                <span className="text-sm">International Students</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}