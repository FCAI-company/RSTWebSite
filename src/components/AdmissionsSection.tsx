import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Clock, FileText, Upload, CreditCard, Calendar, ArrowRight } from 'lucide-react';

export function AdmissionsSection() {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: 'Complete Application',
      description: 'Fill out our online application form with your personal and academic information.',
      status: 'completed'
    },
    {
      number: 2,
      icon: Upload,
      title: 'Submit Documents',
      description: 'Upload transcripts, test scores, essays, and recommendation letters.',
      status: 'current'
    },
    {
      number: 3,
      icon: CreditCard,
      title: 'Pay Application Fee',
      description: 'Complete the application process with a non-refundable fee.',
      status: 'pending'
    },
    {
      number: 4,
      icon: Calendar,
      title: 'Interview & Review',
      description: 'Participate in interviews and await admission committee review.',
      status: 'pending'
    }
  ];

  const requirements = [
    'High school diploma or equivalent',
    'Official transcripts',
    'English proficiency test (TOEFL/IELTS)',
    'Personal statement/Essay',
    'Letters of recommendation (2-3)',
    'Standardized test scores (SAT/ACT)',
    'Portfolio (for specific programs)',
    'Application fee payment'
  ];

  const deadlines = [
    { term: 'Fall 2024', priority: 'Early Decision', date: 'November 15, 2024', status: 'upcoming' },
    { term: 'Fall 2024', priority: 'Regular Decision', date: 'January 15, 2025', status: 'open' },
    { term: 'Spring 2025', priority: 'Regular Decision', date: 'October 1, 2024', status: 'closed' },
  ];

  return (
    <section id="admissions" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Admissions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our global community of scholars. Start your journey with our straightforward application process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Application Steps */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Application Process</h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <Card key={step.number} className={`transition-all ${
                  step.status === 'current' ? 'ring-2 ring-primary' : 
                  step.status === 'completed' ? 'bg-green-50 dark:bg-green-950' : ''
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        step.status === 'completed' ? 'bg-green-100 dark:bg-green-900' :
                        step.status === 'current' ? 'bg-primary text-primary-foreground' :
                        'bg-muted'
                      }`}>
                        {step.status === 'completed' ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <step.icon className="h-5 w-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold">Step {step.number}: {step.title}</h4>
                          {step.status === 'current' && (
                            <Badge variant="default" className="text-xs">Current</Badge>
                          )}
                          {step.status === 'completed' && (
                            <Badge variant="secondary" className="text-xs">Completed</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Application Progress</span>
                <span className="text-sm">2 of 4 steps</span>
              </div>
              <Progress value={50} className="w-full" />
            </div>
          </div>

          {/* Requirements & Deadlines */}
          <div className="space-y-8">
            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Application Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Deadlines */}
            <Card>
              <CardHeader>
                <CardTitle>Application Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deadlines.map((deadline, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <div className="font-semibold">{deadline.term}</div>
                        <div className="text-sm text-muted-foreground">{deadline.priority}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{deadline.date}</div>
                        <Badge variant={
                          deadline.status === 'closed' ? 'destructive' :
                          deadline.status === 'upcoming' ? 'secondary' :
                          'default'
                        } className="text-xs">
                          {deadline.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button size="lg" className="w-full">
                Start Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Schedule Campus Visit
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Download Information Packet
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Need Help with Your Application?</h3>
                <p className="text-muted-foreground">
                  Our admissions counselors are here to guide you through every step of the process. 
                  Schedule a one-on-one consultation or join our virtual information sessions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button>Schedule Consultation</Button>
                  <Button variant="outline">Join Info Session</Button>
                </div>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Students collaborating"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}