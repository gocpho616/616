import { useState } from "react";
import Navigation from "@/components/Navigation";
import StoryCard from "@/components/StoryCard";
import { mockStories } from "@/data/mockStories";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Flame, Clock, Sparkles } from "lucide-react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredStories = mockStories.slice(0, 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredStories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredStories.length) % featuredStories.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Slider */}
      <section className="relative h-[500px] overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img 
            src={featuredStories[currentSlide].cover}
            alt={featuredStories[currentSlide].title}
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <div className="container relative mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-primary-foreground">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">Truyện nổi bật</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 leading-tight">
              {featuredStories[currentSlide].title}
            </h1>
            <p className="text-lg mb-2 opacity-90">
              {featuredStories[currentSlide].author}
            </p>
            <p className="text-base mb-6 opacity-80 line-clamp-2">
              {featuredStories[currentSlide].description}
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="secondary">
                Đọc ngay
              </Button>
              <Button size="lg" variant="outline" className="bg-background/20 hover:bg-background/30 border-primary-foreground/30">
                Chi tiết
              </Button>
            </div>
          </div>
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {featuredStories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide ? "w-8 bg-primary-foreground" : "w-2 bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Recommended Stories */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-6">
          <Flame className="h-6 w-6 text-accent" />
          <h2 className="font-heading text-3xl font-bold">Truyện đề cử</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockStories.slice(0, 8).map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
      </section>

      {/* Recently Updated */}
      <section className="container mx-auto px-4 py-12 bg-secondary/30">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="h-6 w-6 text-accent" />
          <h2 className="font-heading text-3xl font-bold">Mới cập nhật</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockStories.slice(0, 4).map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 TruyệnViet. Nền tảng đọc truyện online hàng đầu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
