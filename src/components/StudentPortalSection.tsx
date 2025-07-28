import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar, BookOpen, Users, MessageCircle, BarChart3, Clock, Bell, Download } from 'lucide-react';

export function StudentPortalSection() {
  const upcomingClasses = [
    { time: '09:00 AM', subject: 'Advanced Mathematics', room: 'Room 204', duration: '90 min' },
    { time: '11:00 AM', subject: 'Computer Science', room: 'Lab 301', duration: '120 min' },
    { time: '02:00 PM', subject: 'Business Ethics', room: 'Room 156', duration: '90 min' },
  ];

  const assignments = [
    { title: 'Marketing Research Paper', subject: 'Business', due: 'Tomorrow', status: 'pending' },
    { title: 'Programming Project', subject: 'Computer Science', due: '3 days', status: 'in-progress' },
    { title: 'Math Problem Set', subject: 'Mathematics', due: '1 week', status: 'completed' },
  ];

  const courses = [
    { name: 'Advanced Mathematics', progress: 78, grade: 'A-', credits: 4 },
    { name: 'Computer Science', progress: 65, grade: 'B+', credits: 3 },
    { name: 'Business Ethics', progress: 90, grade: 'A', credits: 3 },
    { name: 'Marketing Strategy', progress: 55, grade: 'B', credits: 4 },
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Student Portal Preview</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience our comprehensive digital learning environment designed for student success
          </p>
        </div>

        {/* Portal Interface */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-2xl">
            {/* Portal Header */}
            <div className="bg-primary text-primary-foreground p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Welcome back, John Smith</h3>
                    <p className="text-primary-foreground/80 text-sm">Student ID: IU2024001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="secondary" size="sm">
                    <Bell className="h-4 w-4 mr-2" />
                    3 Notifications
                  </Button>
                  <Badge variant="secondary">Semester 3</Badge>
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              <Tabs defaultValue="dashboard" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="courses">Courses</TabsTrigger>
                  <TabsTrigger value="grades">Grades</TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                </TabsList>

                <TabsContent value="dashboard" className="space-y-6 mt-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Today's Schedule */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5" />
                          <span>Today's Schedule</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {upcomingClasses.map((class_, index) => (
                            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/20">
                              <div>
                                <div className="font-medium text-sm">{class_.subject}</div>
                                <div className="text-xs text-muted-foreground">{class_.room}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium">{class_.time}</div>
                                <div className="text-xs text-muted-foreground">{class_.duration}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Assignments */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <BookOpen className="h-5 w-5" />
                          <span>Assignments</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {assignments.map((assignment, index) => (
                            <div key={index} className="p-3 rounded-lg border">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{assignment.title}</div>
                                  <div className="text-xs text-muted-foreground">{assignment.subject}</div>
                                </div>
                                <Badge variant={
                                  assignment.status === 'completed' ? 'default' :
                                  assignment.status === 'in-progress' ? 'secondary' :
                                  'destructive'
                                } className="text-xs">
                                  {assignment.status}
                                </Badge>
                              </div>
                              <div className="flex items-center mt-2">
                                <Clock className="h-3 w-3 mr-1" />
                                <span className="text-xs">Due in {assignment.due}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Quick Stats */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <BarChart3 className="h-5 w-5" />
                          <span>Academic Overview</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold">3.6</div>
                            <div className="text-sm text-muted-foreground">Current GPA</div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <div className="text-lg font-semibold">14</div>
                              <div className="text-xs text-muted-foreground">Credits Earned</div>
                            </div>
                            <div>
                              <div className="text-lg font-semibold">4</div>
                              <div className="text-xs text-muted-foreground">Current Courses</div>
                            </div>
                          </div>
                          <Button size="sm" className="w-full">
                            View Full Transcript
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="courses" className="space-y-6 mt-6">
                  <div className="grid gap-4">
                    {courses.map((course, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h4 className="font-semibold">{course.name}</h4>
                              <p className="text-sm text-muted-foreground">{course.credits} credits</p>
                            </div>
                            <Badge variant="outline">{course.grade}</Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="grades" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Grade Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-4 gap-4 text-center">
                          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950">
                            <div className="text-2xl font-bold text-green-600">A</div>
                            <div className="text-sm text-muted-foreground">2 Courses</div>
                          </div>
                          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950">
                            <div className="text-2xl font-bold text-blue-600">B+</div>
                            <div className="text-sm text-muted-foreground">1 Course</div>
                          </div>
                          <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950">
                            <div className="text-2xl font-bold text-yellow-600">B</div>
                            <div className="text-sm text-muted-foreground">1 Course</div>
                          </div>
                          <div className="p-4 rounded-lg bg-secondary">
                            <div className="text-2xl font-bold">3.6</div>
                            <div className="text-sm text-muted-foreground">GPA</div>
                          </div>
                        </div>
                        <Button className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Download Official Transcript
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="services" className="space-y-6 mt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Campus Services</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <Button variant="outline" className="w-full justify-start">
                            <BookOpen className="mr-2 h-4 w-4" />
                            Library Resources
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Users className="mr-2 h-4 w-4" />
                            Student Support
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Academic Advising
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <Button className="w-full">Register for Courses</Button>
                          <Button variant="outline" className="w-full">
                            Pay Tuition
                          </Button>
                          <Button variant="outline" className="w-full">
                            Request Documents
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Portal Access CTA */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Ready to Access Your Student Portal?</h3>
              <p className="text-muted-foreground mb-6">
                Current students can log in to access their personalized dashboard, view grades, register for courses, and much more.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg">Student Login</Button>
                <Button variant="outline" size="lg">Faculty Login</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}