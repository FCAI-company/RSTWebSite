'use client'
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Search, Clock, Users, MapPin, ArrowRight } from "lucide-react";

export function ProgramsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filters = [
    "All",
    "Business",
    "Engineering",
    "Medicine",
    "Arts",
    "Computer Science",
  ];

  const programs = [
    {
      id: 1,
      title: "Master of Business Administration",
      category: "Business",
      duration: "2 years",
      students: "1,200+",
      location: "Main Campus",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Develop strategic thinking and leadership skills for the global business environment.",
      level: "Graduate",
    },
    {
      id: 2,
      title: "Computer Science & AI",
      category: "Computer Science",
      duration: "4 years",
      students: "2,500+",
      location: "Tech Campus",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Shape the future with cutting-edge AI and machine learning technologies.",
      level: "Undergraduate",
    },
    {
      id: 3,
      title: "Biomedical Engineering",
      category: "Engineering",
      duration: "4 years",
      students: "800+",
      location: "Medical Campus",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Bridge engineering and medicine to solve complex healthcare challenges.",
      level: "Undergraduate",
    },
    {
      id: 4,
      title: "Doctor of Medicine",
      category: "Medicine",
      duration: "6 years",
      students: "500+",
      location: "Medical Campus",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Train to become a physician with comprehensive medical education.",
      level: "Professional",
    },
    {
      id: 5,
      title: "Fine Arts & Design",
      category: "Arts",
      duration: "3 years",
      students: "600+",
      location: "Arts Campus",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Express creativity through various artistic mediums and design principles.",
      level: "Undergraduate",
    },
    {
      id: 6,
      title: "International Business",
      category: "Business",
      duration: "4 years",
      students: "1,000+",
      location: "Main Campus",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Navigate global markets with international business expertise.",
      level: "Undergraduate",
    },
  ];

  const filteredPrograms = programs.filter((program) => {
    const matchesFilter =
      activeFilter === "All" || program.category === activeFilter;
    const matchesSearch =
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="programs" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Academic Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover world-class programs designed to prepare you for success in
            your chosen field
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 md:max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search programs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPrograms.map((program) => (
            <Card
              key={program.id}
              className="group hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="space-y-3">
                <div className="flex justify-between items-start">
                  <Badge variant="secondary">{program.level}</Badge>
                  <Badge variant="outline">{program.category}</Badge>
                </div>
                <CardTitle className="line-clamp-2">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {program.description}
                </p>

                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{program.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{program.location}</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg">
            View All Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
