import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { ExternalLink, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface JobCardProps {
  title: string;
  link: string;
  description: string;
  date?: string;
  id: string;
}

const JobCard = ({ title, link, description, date, id }: JobCardProps) => {
  const [isViewed, setIsViewed] = useState(false);
  const formattedDate = date ? format(new Date(date), 'MMM dd, yyyy') : null;
  
  useEffect(() => {
    const viewedJobs = JSON.parse(localStorage.getItem('viewedJobs') || '[]');
    setIsViewed(viewedJobs.includes(id));
  }, [id]);

  const handleClick = () => {
    const viewedJobs = JSON.parse(localStorage.getItem('viewedJobs') || '[]');
    if (!viewedJobs.includes(id)) {
      const updatedViewedJobs = [...viewedJobs, id];
      localStorage.setItem('viewedJobs', JSON.stringify(updatedViewedJobs));
      setIsViewed(true);
    }
  };
  
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform hover:-translate-y-1"
      onClick={handleClick}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-2 flex-1">
              <CardTitle className="text-xl font-semibold text-primary">
                {title}
              </CardTitle>
              {isViewed && (
                <div className="flex items-center gap-1 text-green-500">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm font-medium">visited</span>
                </div>
              )}
            </div>
            <ExternalLink className="h-5 w-5 text-muted-foreground" />
          </div>
          {formattedDate && (
            <CardDescription>
              Posted: {formattedDate}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">
            {description}
          </p>
        </CardContent>
      </Card>
    </a>
  );
};

export default JobCard;