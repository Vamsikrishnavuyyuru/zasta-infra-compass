
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Briefcase, GraduationCap, Share2, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  vacancy: number;
  description: string;
  requirements: string[];
  postedDate: string;
}

interface JobCardProps {
  job: JobOpening;
  onApply?: () => void;
}

const JobCard = ({ job, onApply }: JobCardProps) => {
  const { toast } = useToast();
  const [isExpanded, setIsExpanded] = useState(false);

  // Remove old handleJobApply (which did a toast), just call the prop.
  const handleJobApply = () => {
    if (onApply) {
      onApply();
    } else {
      // fallback: toast + log (should not be triggered in new arch)
      console.log(`Applied for job: ${job.title} (ID: ${job.id})`);
      toast({
        title: "Application Submitted!",
        description: `Your application for ${job.title} has been submitted successfully.`,
      });
    }
  };

  const handleShareJob = (jobTitle: string) => {
    if (navigator.share) {
      navigator.share({
        title: `Job Opening: ${jobTitle} at Zasta Group`,
        text: `Check out this job opportunity at Zasta Group: ${jobTitle}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied!",
        description: "Job link has been copied to clipboard.",
      });
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
        <CardContent className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  {job.department}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {job.type}
                </span>
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4" />
                  {job.experience}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {job.vacancy} {job.vacancy === 1 ? 'vacancy' : 'vacancies'}
                </span>
              </div>
            </div>
            <div className="flex gap-2 ml-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShareJob(job.title)}
              >
                <Share2 className="w-4 h-4" />
              </Button>
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="sm">
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>

          {/* Always visible summary */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Posted: {new Date(job.postedDate).toLocaleDateString()}
            </span>
            <Button
              onClick={handleJobApply}
              className="bg-zasta-blue-600 hover:bg-zasta-blue-700"
            >
              Apply Now
            </Button>
          </div>

          {/* Collapsible content */}
          <CollapsibleContent className="space-y-4 mt-4">
            <p className="text-gray-700">{job.description}</p>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </CollapsibleContent>
        </CardContent>
      </Collapsible>
    </Card>
  );
};

export default JobCard;
