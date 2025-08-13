'use client';
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Calendar,
  Clock,
  MapPin,
  Search,
  ArrowRight,
  Users,
  Tag,
  ExternalLink,
} from "lucide-react";

export function EventsNewsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeNewsFilter, setActiveNewsFilter] = useState("All");
  const [activeEventFilter, setActiveEventFilter] = useState("All");

  const newsCategories = [
    "All",
    "Academic",
    "Research",
    "Student Life",
    "Campus",
    "Awards",
  ];
  const eventCategories = [
    "All",
    "Academic",
    "Cultural",
    "Sports",
    "Workshop",
    "Social",
  ];

  const newsArticles = [
    {
      id: 1,
      title:
        "High School Students Flock to Al-Ryada University’s Booth at the EduGate Exhibition",
      category: "",
      excerpt:
        "Al-Ryada University for Science and Technology, under the patronage of Dr. Yahya Mabrouk, showcased its programs at the EduGate exhibition, attracting strong interest from high school students and parents. University President Prof. Dr. Reda Hegazy highlighted innovative programs in Engineering, AI, Business, Physical Therapy, Nursing, and Dentistry, tailored to labor market needs. The booth featured faculty and staff who provided admissions info, guidance, and details on discounts. Visitors praised the booth’s organization and support.",
      image:
        "https://rst.edu.eg/wp-content/uploads/2025/08/528037207_122311935422003831_6811309160975845549_n.jpg",
      date: "2025-08-5",
      readTime: "",
      author: "Al-Ryada University",
      Link: "https://rst.edu.eg/high-school-students-flock-to-al-ryada-universitys-booth-at-the-edugate-exhibition/",
    },
    {
      id: 2,
      title:
        "Al-Ryada University Honors Top High School Graduates in Monufia Governorate",
      category: "",
      excerpt:
        "Al-Ryada University for Science and Technology honored Monufia’s top high school graduates in a ceremony attended by university leaders and officials. Fifteen full scholarships were announced for the top five students in Science, Mathematics, and Literature streams. University President Prof. Dr. Reda Hegazy praised the students’ achievements, encouraged pursuing passions, and highlighted the university’s quality education, training, and future plans, including new faculties and a university hospital. Attendees shared pride in the students’ success, with parents and officials commending the university’s role in supporting education. The event concluded with awarding shields, certificates, and prizes to the top achievers.",
      image:
        "https://rst.edu.eg/wp-content/uploads/2025/08/525236431_122310603014003831_8099283596064593360_n.jpg",
      date: "2025-07-29",
      readTime: "",
      author: "Al-Ryada University",
      Link: "https://rst.edu.eg/al-ryada-university-honors-top-high-school-graduates-in-monufia-governorate/",
    },
    {
      id: 3,
      title:
        "Al-Ryada University participates in the “Student Future for Universities” (S.F.U) exhibition at Tolip El-Galaa Hotel, Heliopolis – Cairo",
      category: "",
      excerpt:
        "Al-Ryada University for Science and Technology took part in the SFU Educational Exhibition at Tolip El-Galaa Hotel, Cairo, alongside top universities and institutions. The team showcased academic programs, hands-on training, scholarships, discounts, and facilities for Egyptian and international students. Visitors received guidance and answers to all inquiries. Admissions are open daily at the Sadat City campus, Saturday to Thursday, 9:00 AM–4:00 PM.",
      image:
        "https://rst.edu.eg/wp-content/uploads/2025/08/524287854_122310214322003831_1804335886114987878_n.jpg",
      date: "2024-07-27",
      readTime: "",
      author: "Al-Ryada University",
      Link: "https://rst.edu.eg/al-ryada-university-participates-in-the-student-future-for-universities-s-f-u-exhibition-at-tolip-el-galaa-hotel-heliopolis-cairo/",
    },
    {
      id: 4,
      title:
        "The Dean of the Faculty of Physical Therapy participates in raising awareness among graduates in Fayoum Governorate",
      category: "",
      excerpt:
        "As part of its commitment to community service, Al-Ryada University for Science and Technology organized a workshop for Physical Therapy graduates in Fayoum. Led by Prof. Dr. Farag Abdel Moneim, Dean of the Faculty of Physical Therapy, the session included both theoretical and practical training under the patronage of Dr. Yehia Mabrouk and Prof. Dr. Reda Hegazy.",
      image:
        "https://rst.edu.eg/wp-content/uploads/2025/08/518390392_122309176094003831_2823500214669741715_n.jpg",
      date: "2025-07-22",
      readTime: "",
      author: "Al-Ryada University",
      Link: "https://rst.edu.eg/the-dean-of-the-faculty-of-physical-therapy-participates-in-raising-awareness-among-graduates-in-fayoum-governorate/",
    },
    {
      id: 5,
      title:
        "Pioneer School Students Visit the Faculties of Al-Ryada University",
      category: "",
      excerpt:
        "Al-Ryada University for Science and Technology welcomed students from Pioneer Language School, New Nozha, for an orientation visit under the patronage of Dr. Yehia Mabrouk and Prof. Dr. Reda Hegazy. The program introduced faculties and programs, with tours of clinics, workshops, and labs showcasing advanced facilities. Prof. Dr. Hegazy encouraged academic excellence and emphasized the university’s role in preparing skilled graduates for the job market.",
      image:
        "https://rst.edu.eg/wp-content/uploads/2025/07/518326843_122308195226003831_425871258354252119_n.jpg",
      date: "2025-07-19",
      readTime: "",
      author: "Al-Ryada University",
      Link: "https://rst.edu.eg/pioneer-school-students-visit-the-faculties-of-al-ryada-university/",
    },
    {
      id: 7,
      title:
        "A joint festival between students of Al-Ryada University and Menoufia National University",
       category: "",
      excerpt:
        "Al-Ryada University for Science and Technology joined Menoufia National University in the First Friendship Gathering under the “We Meet to Rise” initiative, promoting cooperation in student activities. Led by Mr. Saeed Abdel Azim, RST students participated in sports, cultural, and social competitions. The event supported the Delta Universities Alliance and Egypt’s Vision 2030. It concluded with awarding certificates and medals to participants.",
      image:
        "https://rst.edu.eg/wp-content/uploads/2025/07/518292419_122307940274003831_2366379605354688285_n.jpg",
      date: "2025-07-16",
      readTime: "",
      author: "Al-Ryada University",
      Link: "https://rst.edu.eg/a-joint-festival-between-students-of-al-ryada-university-and-menoufia-national-university/",
    },
    {
      id: 8,
      title:
        "Al-Ryada University hosts STEM school students and university students in the International Science Competition",
      category: "",
      excerpt:
        "Al-Ryada University for Science and Technology hosted the 4th International Scientific Competition in antennas and microwaves, featuring 366 projects from Egypt and abroad, including 55 from universities in countries such as Kenya, India, and Indonesia, and 311 from STEM schools. Under the patronage of Dr. Yehia Mabrouk and Prof. Dr. Reda Hegazy, the event highlighted the university’s commitment to innovation, entrepreneurship, and research through its six research centers and IEEE Student Chapter. University leaders praised participants’ creativity, stressing the need to address “AI illiteracy” and incubate promising projects. Ninety-five projects reached the finals after three judging stages, with winners honored in both university and school categories. Many entries focused on sustainability, reflecting students’ awareness of global challenges.",
      image:
        "https://rst.edu.eg/wp-content/uploads/2025/07/518354557_122307793154003831_8731423095692277990_n.jpg",
      date: "2025-07-15",
      readTime: "",
      author: "Al-Ryada University",
      Link: "https://rst.edu.eg/al-ryada-university-hosts-stem-school-students-and-university-students-in-the-international-science-competition/",
    },
    {
      id: 9,
      title:
        "Al-Ryada University Welcomes Students Enrolled in British Council Courses",
      category: "",
      excerpt:
        "Al-Ryada University for Science and Technology, under the patronage of Dr. Yahya Mabrouk, hosted students applying for British Council English courses. Placement tests, supervised by British Council experts, were held to determine proficiency levels. Prof. Dr. Reda Hegazy ensured full preparation of labs and facilities, highlighting the partnership’s goal of offering certified English training to support Monufia’s youth in line with Egypt’s Vision 2030.",
      image:
        "https://rst.edu.eg/wp-content/uploads/2025/07/518337160_122306602700003831_4822691735690131202_n.jpg",
      date: "2025-07-10",
      readTime: "",
      author: "Al-Ryada University",
      Link: "https://rst.edu.eg/al-ryada-university-welcomes-students-enrolled-in-british-council-courses/",
    },
    {
      id: 10,
      title:
        "The Military Advisor Praises Al-Ryada University’s Role in Promoting Discipline and National Loyalty",
      category: "",
      excerpt:
        "Al-Ryada University for Science and Technology welcomed Colonel Mohamed Jaafar, Military Advisor of Monufia Governorate, during the university’s Military Education Program for female students. He praised the program’s role in fostering discipline, loyalty, and responsibility. The visit included discussions on national awareness and the risks of fifth-generation warfare. University leaders and military education officials attended the event.",
      image:
        "https://rst.edu.eg/wp-content/uploads/2025/07/516600053_122306001296003831_6288230859085881235_n.jpg",
      date: "2025-07-7",
      readTime: "",
      author: "Al-Ryada University",
      Link: "https://rst.edu.eg/the-military-advisor-praises-al-ryada-universitys-role-in-promoting-discipline-and-national-loyalty/",
    },
    {
      id: 11,
      title:
        "A Delegation from Al-Ryada University Visits the Governor of Monufia to Discuss Cooperation in Serving Rural Communities",
      category: "",
      excerpt:
        "A delegation from Al-Ryada University for Science and Technology, led by Dr. Yahya Mabrouk and Prof. Dr. Reda Hegazy, met with Monufia Governor Major General Ibrahim Abu Limon to discuss cooperation on public service projects benefiting the governorate’s villages. Both sides emphasized joint efforts to enhance service quality, support education, and advance development in line with Egypt’s National Strategy for Higher Education and Vision 2030.",
      image:
        "https://rst.edu.eg/wp-content/uploads/2025/07/514162788_122304627986003831_702063583267012531_n.jpg",
      date: "2024-06-29",
      readTime: "",
      author: "Al-Ryada University",
      Link: "https://rst.edu.eg/a-delegation-from-al-ryada-university-visits-the-governor-of-monufia-to-discuss-cooperation-in-serving-rural-communities/",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "International Research Symposium 2024",
      category: "",
      description:
        "Global researchers present cutting-edge findings across multiple disciplines.",
      date: "2024-08-20",
      time: "09:00 AM",
      location: "Main Auditorium",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: "500+",
      price: "Free",
      featured: true,
    },
    {
      id: 2,
      title: "Cultural Festival: Unity in Diversity",
      category: "Cultural",
      description:
        "Celebrate the rich cultural heritage of our international student community.",
      date: "2024-08-25",
      time: "02:00 PM",
      location: "Campus Quad",
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: "1000+",
      price: "Free",
      featured: true,
    },
    {
      id: 3,
      title: "AI Ethics Workshop Series",
      category: "Workshop",
      description:
        "Learn about ethical considerations in artificial intelligence development.",
      date: "2024-08-30",
      time: "10:00 AM",
      location: "Tech Center Lab 301",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: "50",
      price: "$25",
      featured: false,
    },
    {
      id: 4,
      title: "Annual Sports Day Championships",
      category: "Sports",
      description:
        "Inter-faculty sports competition featuring multiple athletic events.",
      date: "2024-09-05",
      time: "08:00 AM",
      location: "Athletic Complex",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: "2000+",
      price: "Free",
      featured: false,
    },
    {
      id: 5,
      title: "Alumni Networking Gala",
      category: "Social",
      description: "Connect with successful alumni from around the world.",
      date: "2024-09-12",
      time: "07:00 PM",
      location: "Grand Ballroom",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: "300",
      price: "$75",
      featured: false,
    },
    {
      id: 6,
      title: "Startup Pitch Competition",
      category: "",
      description:
        "Student entrepreneurs present their innovative business ideas to industry experts.",
      date: "2024-09-18",
      time: "01:00 PM",
      location: "Business School Auditorium",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: "200",
      price: "Free",
      featured: false,
    },
  ];

  const filteredNews = newsArticles.filter((article) => {
    const matchesFilter =
      activeNewsFilter === "All" || article.category === activeNewsFilter;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filteredEvents = upcomingEvents.filter((event) => {
    const matchesFilter =
      activeEventFilter === "All" || event.category === activeEventFilter;
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <section
      id="EventsNewsSection"
      className="  bg-secondary/5"
      style={{ minHeight: "calc(100dvh - 105px)" }}
    >
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0047AB] mb-0 text-center">
            News &amp; Events
          </h2>
          <p className=" text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-0 text-center">
            Stay updated with the latest news, events, and activities from our
            vibrant university community
          </p>
          <span className="mb-4 mx-auto flex  bg-[#0047AB] w-[300px] h-[2px]"></span>
        </div>

        {/* Search */}
        {/* <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search news and events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div> */}

        <Tabs defaultValue="news" className="w-full">
          {/* <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="news">Latest News</TabsTrigger>
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
          </TabsList> */}

          <TabsContent value="news" className="space-y-8">
            {/* News Filters */}
            {/* <div className="flex flex-wrap justify-center gap-2">
              {newsCategories.map((category) => (
                <Button
                  key={category}
                  variant={
                    activeNewsFilter === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setActiveNewsFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div> */}

            {/* Featured News */}
            {activeNewsFilter === "All" && searchTerm === "" && (
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto">
                    <ImageWithFallback
                      src={newsArticles[0].image}
                      alt={newsArticles[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4">
                      {newsArticles[0].category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">
                      {newsArticles[0].title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {newsArticles[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{formatDate(newsArticles[0].date)}</span>
                        {newsArticles[0].readTime && (
                          <>
                            <span>{newsArticles[0].readTime}</span>
                          </>
                        )}
                      </div>
                      <Button
                        onClick={() =>
                          window.open(newsArticles[0].Link, "_blank")
                        }
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )}

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews
                .slice(activeNewsFilter === "All" && searchTerm === "" ? 1 : 0)
                .map((article) => (
                  <Card
                    key={article.id}
                    className="group hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <div className="aspect-video overflow-hidden">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        {article.category && (
                          <Badge variant="secondary">{article.category}</Badge>
                        )}

                        <span className="text-sm text-muted-foreground">
                          {formatDate(article.date)}
                        </span>
                      </div>
                      <h4 className="font-semibold line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          {article.readTime && (
                            <>
                              <Clock className="h-3 w-3" />
                              <span>{article.readTime}</span>
                            </>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(article.Link, "_blank")}
                        >
                          Read More
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open("https://rst.edu.eg/news/", "_blank")
                }
              >
                View All News
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-8">
            {/* Event Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {eventCategories.map((category) => (
                <Button
                  key={category}
                  variant={
                    activeEventFilter === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setActiveEventFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Featured Events */}
            {activeEventFilter === "All" && searchTerm === "" && (
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {upcomingEvents
                  .filter((event) => event.featured)
                  .map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <ImageWithFallback
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-primary">{event.category}</Badge>
                          <Badge variant="outline">{event.price}</Badge>
                        </div>
                        <h4 className="text-xl font-bold">{event.title}</h4>
                        <p className="text-muted-foreground">
                          {event.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span>{event.attendees}</span>
                          </div>
                        </div>

                        <Button className="w-full">
                          Register Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            )}

            {/* Events Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents
                .filter(
                  (event) =>
                    !event.featured ||
                    activeEventFilter !== "All" ||
                    searchTerm !== "",
                )
                .map((event) => (
                  <Card
                    key={event.id}
                    className="group hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-video overflow-hidden">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{event.category}</Badge>
                        <Badge variant="outline">{event.price}</Badge>
                      </div>

                      <h4 className="font-semibold line-clamp-2">
                        {event.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {event.description}
                      </p>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {formatDate(event.date)} at {event.time}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-3 w-3" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-3 w-3" />
                          <span>{event.attendees} expected</span>
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
              <Button variant="outline" size="lg">
                View Event Calendar
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Newsletter Subscription */}
        {/* <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, event
              updates, and important announcements directly in your inbox.
            </p>
            <div className="flex max-w-md mx-auto space-x-3">
              <Input
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button>
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
}
