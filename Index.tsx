import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoryCard } from "@/components/StoryCard";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface Story {
  id: string;
  title: string;
  author: string;
  cover_image: string | null;
  genre: string[];
  summary: string;
  status: string;
  views: number;
  likes: number;
}

const Index = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    const { data, error } = await supabase
      .from('stories')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setStories(data);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20 px-4">
          <div className="container mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-4">
              Góc phố 616
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Nơi những câu chuyện tuyệt vời được kể
            </p>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
              Truyện mới cập nhật
            </h2>
            <p className="text-muted-foreground">
              Khám phá những câu chuyện hay nhất
            </p>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          ) : stories.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Chưa có truyện nào. Admin hãy thêm truyện mới!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-slide-up">
              {stories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
