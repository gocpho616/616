import { Link } from "react-router-dom";
import { BookOpen, Home, Grid, TrendingUp, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-heading text-2xl font-bold text-primary">
            <BookOpen className="h-7 w-7" />
            <span>TruyệnViet</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
              Trang chủ
            </Link>
            <Link to="/categories" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <Grid className="h-4 w-4" />
              Thể loại
            </Link>
            <Link to="/top" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <TrendingUp className="h-4 w-4" />
              Top truyện
            </Link>
            <Link to="/history" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <Clock className="h-4 w-4" />
              Lịch sử
            </Link>
          </div>

          <Button variant="default" size="sm" className="hidden md:flex items-center gap-2">
            <User className="h-4 w-4" />
            Tài khoản
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
