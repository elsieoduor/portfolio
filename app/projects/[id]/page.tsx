'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Github, FileDown } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  type: 'frontend' | 'backend' | 'graphics';
  image: string;
  role: string;
  liveSite: string | null;
  github: string | null;
  date: string;
  description: string;
  skills: string[];
  pdf?: string;
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch('/data/projects.json');
        const data: Project[] = await response.json();
        const foundProject = data.find((p) => p.id === parseInt(params.id));
        if (foundProject) {
          setProject(foundProject);
        } else {
          router.push('/404');
        }
      } catch (error) {
        console.error('Error fetching project:', error);
        router.push('/500');
      }
    };

    fetchProject();
  }, [params.id, router]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Breadcrumb />
          <Card className="mt-8">
            <CardHeader>
              <Skeleton className="h-12 w-3/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-64 w-full mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6 mb-2" />
              <Skeleton className="h-4 w-4/6" />
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumb />

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold text-center">
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />

            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
              <Badge variant="secondary" className="text-lg">
                Role: {project.role}
              </Badge>
              <Badge variant="secondary" className="text-lg">
                Date: {project.date}
              </Badge>
              <div className="flex gap-4">
                {project.liveSite && (
                  <Button asChild variant="outline">
                    <a
                      href={project.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Site
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button asChild variant="outline">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              {project.description}
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {project.type === 'graphics' && project.pdf && (
              <Button asChild variant="secondary">
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

