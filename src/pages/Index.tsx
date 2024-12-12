import { useEffect, useState } from "react";
import JobCard from "@/components/JobCard";
import { Job } from "@/types/job";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/jobs.csv');
        const csvText = await response.text();
        
        // Parse CSV (skip header row)
        const rows = csvText.split('\n').slice(1);
        const parsedJobs = rows
          .filter(row => row.trim() !== '') // Skip empty rows
          .map(row => {
            const [id, title, link, description, date] = row.split(',');
            return {
              id,
              title,
              link,
              description,
              date
            };
          });

        setJobs(parsedJobs);
      } catch (error) {
        console.error('Error loading jobs:', error);
        toast({
          title: "Error",
          description: "Failed to load job listings. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [toast]);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
           Org. Name
          Job Listings
        </h1>
        
        {loading ? (
          <div className="text-center text-muted-foreground">Loading jobs...</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                link={job.link}
                description={job.description}
                date={job.date}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
