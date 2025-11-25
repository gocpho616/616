import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { mockStories } from "@/data/mockStories";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Star, BookOpen, Clock, User } from "lucide-react";

const StoryDetail = () => {
  const { id } = useParams();
  const story = mockStories.find(s => s.id === id) || mockStories[0];

  const chapters = Array.from({ length: 20 }, (_, i) => ({
    number: story.totalChapters - i,
    title: `Chương ${story.totalChapters - i}: ${i % 3 === 0 ? 'Cuộc chiến bắt đầu' : i % 3 === 1 ? 'Bí mật được hé lộ' : 'Sức mạnh mới'}`,
    time: `${i + 1} giờ trước`,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          {/* Story Cover & Actions */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <img 
                src={story.cover} 
                alt={story.title}
                className="w-full aspect-[3/4] object-cover"
              />
            </Card>
            
            <div className="space-y-2">
              <Link to={`/reader/${story.id}/1`}>
                <Button className="w-full" size="lg">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Đọc từ đầu
                </Button>
              </Link>
              <Link to={`/reader/${story.id}/${story.totalChapters}`}>
                <Button className="w-full" size="lg" variant="secondary">
                  Đọc chương mới nhất
                </Button>
              </Link>
            </div>

            <Card>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <span>{story.views.toLocaleString()} lượt xem</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 text-accent fill-accent" />
                  <span>{story.rating}/5.0</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span>{story.totalChapters} chương</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Cập nhật: {story.lastUpdate}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Story Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-heading text-4xl font-bold mb-3">
                {story.title}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{story.author}</span>
                </div>
                <Badge variant={story.status === "completed" ? "secondary" : "default"}>
                  {story.status === "completed" ? "Hoàn thành" : "Đang tiến hành"}
                </Badge>
                <Badge variant="outline">{story.genre}</Badge>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {story.description}
                  {" "}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            {/* Chapter List */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">
                Danh sách chương
              </h2>
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y divide-border max-h-[600px] overflow-y-auto">
                    {chapters.map((chapter) => (
                      <Link 
                        key={chapter.number}
                        to={`/reader/${story.id}/${chapter.number}`}
                        className="block p-4 hover:bg-accent/10 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{chapter.title}</span>
                          <span className="text-sm text-muted-foreground">{chapter.time}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
