import Navigation from "@/components/Navigation";
import StoryCard from "@/components/StoryCard";
import { mockStories } from "@/data/mockStories";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const History = () => {
  const recentlyRead = mockStories.slice(0, 4).map((story, idx) => ({
    ...story,
    lastReadChapter: Math.floor(story.totalChapters * (0.3 + idx * 0.15)),
    lastReadTime: `${idx + 1} giờ trước`
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="h-8 w-8 text-accent" />
          <h1 className="font-heading text-4xl font-bold">
            Lịch sử đọc truyện
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {recentlyRead.map((story) => (
            <Card key={story.id} className="overflow-hidden hover:shadow-elegant transition-all">
              <CardContent className="p-0">
                <div className="flex gap-4">
                  <img 
                    src={story.cover} 
                    alt={story.title}
                    className="w-32 h-48 object-cover"
                  />
                  <div className="flex-1 p-4">
                    <h3 className="font-heading text-xl font-semibold mb-2 line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {story.author}
                    </p>
                    <div className="space-y-1 text-sm">
                      <p className="text-muted-foreground">
                        Đã đọc: Chương {story.lastReadChapter}/{story.totalChapters}
                      </p>
                      <p className="text-muted-foreground">
                        Đọc lần cuối: {story.lastReadTime}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
