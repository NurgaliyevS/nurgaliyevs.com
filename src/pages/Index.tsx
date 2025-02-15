
import { Briefcase, Mail, Linkedin, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="container mx-auto px-4 py-8 space-y-16 max-w-4xl">
        {/* Hero Section */}
        <section className="text-center space-y-6 slide-in">
          <Avatar className="w-40 h-40 md:w-52 md:h-52 mx-auto border-4 border-white shadow-lg">
            <AvatarImage src="/lovable-uploads/c1390236-2f69-4e55-8a3a-654fca98386f.png" alt="Sabyr Nurgaliyev" />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Sabyr Nurgaliyev
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Senior Full-stack Developer
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" asChild>
                <a href="mailto:nurgaliyevs000@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="space-y-6 fade-in">
          <h2 className="text-2xl font-semibold text-gray-900">About</h2>
          <Card className="p-6">
            <p className="text-gray-600 leading-relaxed">
              Senior Full-stack developer with 6 years of experience in fintech, banking, and insurance industries. 
              Developed a personalized advertising banner system for over 20,000 monthly active B2B users and 
              created an automated recruitment system to streamline paperwork processes.
            </p>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="space-y-6 fade-in">
          <h2 className="text-2xl font-semibold text-gray-900">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["TypeScript", "JavaScript", "Node.js", "Python", "React", "Next.js", "Angular", 
              "Redux", "Redux Toolkit", "RxJS", "NgRx", "PWA", "SCSS"].map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-6 fade-in">
          <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: "Senior Full Stack Developer",
                company: "Bank CenterCredit",
                period: "November 2023 - Present",
                achievements: [
                  "Increased the number of signed payments by 40% through the development of a digital signature system",
                  "Decreased client contacts to customer support by 35%",
                  "Increased data aggregation by 35%"
                ]
              },
              {
                title: "Senior Full Stack Developer",
                company: "Halyk Bank",
                period: "October 2022 - November 2023",
                achievements: [
                  "Increased MAU by 20% through payment analytics service",
                  "Decreased JavaScript bundle loading time by 35%",
                  "Reduced development time by 30%"
                ]
              },
              {
                title: "Middle Full Stack Developer",
                company: "Centras Insurance JSC",
                period: "February 2021 - October 2022",
                achievements: [
                  "Expanded client base by 15% through developing an insurance policy issuance application",
                  "Increased DAO by 25% through the adaptation of the website for mobile devices",
                  "Improved release time by 40% through the implementation of unit tests"
                ]
              },
              {
                title: "Full Stack Developer",
                company: "Freelance",
                period: "January 2020 - February 2021",
                achievements: [
                  "Built 12 full-stack applications from scratch in 12 months",
                  "Implemented devops, analytics, email systems, and authorization systems",
                  "Developed CRM systems, proxy solutions, middleware, and payment integrations"
                ]
              }
            ].map((job, index) => (
              <Card key={index} className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <span className="text-sm text-gray-500">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <Briefcase className="w-5 h-5 mt-1 flex-shrink-0 text-gray-400" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 py-8 fade-in">
          <div className="flex justify-center gap-4">
            <a href="mailto:nurgaliyevs000@gmail.com" className="hover:text-gray-900 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/NurgaliyevS" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
