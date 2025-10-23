import { Menu, Search, ShoppingBag, User } from "lucide-react";  
import Link from "next/link";

export const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button className="lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <Link href='/'>
            
              <h1 className="font-serif text-xl font-bold tracking-tight">CHROZY FASHION</h1>
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="font-sans text-sm uppercase tracking-wider hover:text-accent transition-colors">
              New Arrivals
            </a>
            <a href="#" className="font-sans text-sm uppercase tracking-wider hover:text-accent transition-colors">
              Handbags
            </a>
            <a href="#" className="font-sans text-sm uppercase tracking-wider hover:text-accent transition-colors">
              Leather Goods
            </a>
            <a href="#" className="font-sans text-sm uppercase tracking-wider hover:text-accent transition-colors">
              Accessories
            </a>
            <a href="#" className="font-sans text-sm uppercase tracking-wider hover:text-accent transition-colors">
              Collections
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link href="#">
              <Search className="h-5 w-5" />
            </Link>
            <Link href="#" >
              <User className="h-5 w-5" />
            </Link>
            <Link href="#" >
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
