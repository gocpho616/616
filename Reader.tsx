import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { mockStories } from "@/data/mockStories";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ChevronLeft, 
  ChevronRight, 
  Settings, 
  Home,
  Sun,
  Moon,
  BookOpen
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ThemeMode = "light" | "dark" | "sepia";

const Reader = () => {
  const { storyId, chapterNum } = useParams();
  const story = mockStories.find(s => s.id === storyId) || mockStories[0];
  const currentChapter = parseInt(chapterNum || "1");
  const [fontSize, setFontSize] = useState(18);
  const [theme, setTheme] = useState<ThemeMode>("light");

  const chapterContent = `
    Chương ${currentChapter}: ${currentChapter % 3 === 0 ? 'Cuộc chiến bắt đầu' : currentChapter % 3 === 1 ? 'Bí mật được hé lộ' : 'Sức mạnh mới'}
    
    Trời đã tối dần, những vì sao bắt đầu xuất hiện trên bầu trời. Trong căn phòng nhỏ, ánh nến lung linh phản chiếu trên trang giấy trắng. 
    
    "Ta phải mạnh hơn nữa," anh thầm nghĩ, nhắm mắt lại và bắt đầu vận công. Khí lực trong cơ thể từ từ vận chuyển theo kinh mạch, mỗi chu thiên đều mang lại cảm giác tràn đầy sức mạnh.
    
    Đột nhiên, một luồng khí mạnh mẽ từ đan điền bùng phát, khiến anh giật mình. "Đây là... đột phá?" Trong lòng vừa kinh ngạc vừa vui mừng. Cảnh giới mà bao nhiêu người phải mất hàng chục năm mới đạt được, hôm nay anh chỉ trong vài giờ đã có thể chạm tới.
    
    Nhưng anh biết, con đường phía trước còn dài. Đây chỉ là bước khởi đầu. Những thử thách lớn hơn đang chờ đợi ở phía trước.
    
    Ánh trăng chiếu qua cửa sổ, rọi lên khuôn mặt kiên định của anh. Trong đôi mắt ấy, lửa quyết tâm đang cháy bừng.
    
    "Mai mắt ta sẽ đến Thiên Kiếm Tông," anh tự nhủ. "Chính là nơi ta sẽ bắt đầu hành trình thật sự."
    
    Đêm vẫn tiếp tục trôi, nhưng trong tim anh, ngọn lửa nhiệt huyết không hề nguội lạnh. Đây là câu chuyện của một thiếu niên, một hành trình từ bình thường đến phi thường, từ yếu đuối đến mạnh mẽ.
    
    Và đây, chỉ mới là khởi đầu...
  `;

  const hasPrevChapter = currentChapter > 1;
  const hasNextChapter = currentChapter < story.totalChapters;

  return (
    <div className={`min-h-screen ${theme === "sepia" ? "theme-sepia reader-mode" : theme === "dark" ? "dark bg-background text-foreground" : "bg-background text-foreground"}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <Home className="h-4 w-4" />
                </Button>
              </Link>
              <Link to={`/story/${story.id}`}>
                <Button variant="ghost" size="sm" className="hidden md:flex">
                  <BookOpen className="h-4 w-4 mr-2" />
                  {story.title}
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="p-2">
                    <p className="text-sm font-medium mb-2">Cỡ chữ</p>
                    <div className="flex items-center gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                      >
                        A-
                      </Button>
                      <span className="text-sm flex-1 text-center">{fontSize}px</span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                      >
                        A+
                      </Button>
                    </div>
                  </div>
                  <div className="border-t my-2" />
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun className="h-4 w-4 mr-2" />
                    Sáng
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Moon className="h-4 w-4 mr-2" />
                    Tối
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("sepia")}>
                    <BookOpen className="h-4 w-4 mr-2" />
                    Sepia
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="p-8 md:p-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-center">
            {story.title}
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Chương {currentChapter}
          </p>
          
          <div 
            className="prose prose-lg max-w-none leading-relaxed whitespace-pre-line"
            style={{ fontSize: `${fontSize}px` }}
          >
            {chapterContent}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 gap-4">
          {hasPrevChapter ? (
            <Link to={`/reader/${story.id}/${currentChapter - 1}`} className="flex-1">
              <Button variant="outline" className="w-full">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Chương trước
              </Button>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          
          <Link to={`/story/${story.id}`}>
            <Button variant="secondary">
              Danh sách chương
            </Button>
          </Link>

          {hasNextChapter ? (
            <Link to={`/reader/${story.id}/${currentChapter + 1}`} className="flex-1">
              <Button variant="outline" className="w-full">
                Chương sau
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </main>
    </div>
  );
};

export default Reader;
