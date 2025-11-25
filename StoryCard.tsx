import { Link } from "react-router-dom";
import { Eye, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StoryCardProps {
  id: string;
  title: string;
  author: string;
  cover: string;
  genre: string;
  views: number;
  rating: number;
  status: "ongoing" | "completed";
  latestChapter?: string;
}

const StoryCard = ({ id, title, author, cover, genre, views, rating, status, latestChapter }: StoryCardProps) => {
  return (
    <Link to={`/story/${id}`}>
      <Card className="group overflow-hidden border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src={cover} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2">
            <Badge variant={status === "completed" ? "secondary" : "default"} className="text-xs">
              {status === "completed" ? "Hoàn thành" : "Đang tiến hành"}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-heading text-lg font-semibold line-clamp-2 mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">{author}</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {views.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-accent text-accent" />
              {rating}
            </span>
            <Badge variant="outline" className="text-xs">{genre}</Badge>
          </div>
          {latestChapter && (
            <p className="text-xs text-muted-foreground mt-2 line-clamp-1">
              {latestChapter}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default StoryCard;
