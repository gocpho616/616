import Navigation from "@/components/Navigation";
import StoryCard from "@/components/StoryCard";
import { mockStories } from "@/data/mockStories";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp } from "lucide-react";

const TopStories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="h-8 w-8 text-accent" />
          <h1 className="font-heading text-4xl font-bold">
            Top truyện
          </h1>
        </div>

        <Tabs defaultValue="day" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="day">Ngày</TabsTrigger>
            <TabsTrigger value="week">Tuần</TabsTrigger>
            <TabsTrigger value="month">Tháng</TabsTrigger>
          </TabsList>
          
          <TabsContent value="day" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mockStories.slice(0, 8).map((story) => (
                <StoryCard key={story.id} {...story} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="week" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mockStories.slice(1, 9).map((story) => (
                <StoryCard key={story.id} {...story} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="month" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mockStories.slice(2, 10).map((story) => (
                <StoryCard key={story.id} {...story} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TopStories;
