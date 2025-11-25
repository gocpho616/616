import { useState } from "react";
import Navigation from "@/components/Navigation";
import StoryCard from "@/components/StoryCard";
import { mockStories, genres } from "@/data/mockStories";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Categories = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"views" | "rating" | "update">("views");

  const filteredStories = selectedGenre
    ? mockStories.filter(story => story.genre === selectedGenre)
    : mockStories;

  const sortedStories = [...filteredStories].sort((a, b) => {
    if (sortBy === "views") return b.views - a.views;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0; // update time would need real dates
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-4xl font-bold mb-8">
          Thể loại truyện
        </h1>

        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          {/* Sidebar Filters */}
          <aside className="space-y-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-heading font-semibold mb-3">Thể loại</h3>
                <div className="space-y-2">
                  <Button
                    variant={selectedGenre === null ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedGenre(null)}
                  >
                    Tất cả
                  </Button>
                  {genres.map(genre => (
                    <Button
                      key={genre}
                      variant={selectedGenre === genre ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedGenre(genre)}
                    >
                      {genre}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-heading font-semibold mb-3">Sắp xếp</h3>
                <div className="space-y-2">
                  <Button
                    variant={sortBy === "views" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSortBy("views")}
                  >
                    Xem nhiều nhất
                  </Button>
                  <Button
                    variant={sortBy === "rating" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSortBy("rating")}
                  >
                    Đánh giá cao
                  </Button>
                  <Button
                    variant={sortBy === "update" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSortBy("update")}
                  >
                    Mới cập nhật
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Stories Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                {selectedGenre && (
                  <Badge variant="secondary" className="text-sm">
                    {selectedGenre}
                  </Badge>
                )}
                <p className="text-sm text-muted-foreground mt-2">
                  {sortedStories.length} truyện
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedStories.map(story => (
                <StoryCard key={story.id} {...story} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
