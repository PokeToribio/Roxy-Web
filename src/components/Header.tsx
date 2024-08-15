import Link from "next/link";
import { useState, MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import DarkModeSwitch from "@/components/ui/DarkModeSwitch";
import logo from "../../public/logo.webp";

interface NavLinksProps {
  className?: string;
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ className = "", onClick }) => (
  <>
    <Link href="/" className={`hover:underline ${className}`} prefetch={false} onClick={onClick}>
      Inicio
    </Link>
    <Link href="#features" className={`hover:underline ${className}`} prefetch={false} onClick={onClick}>
      Características
    </Link>
    <Link href="#commands" className={`hover:underline ${className}`} prefetch={false} onClick={onClick}>
      Comandos
    </Link>
    <Link href="#support" className={`hover:underline ${className}`} prefetch={false} onClick={onClick}>
      Soporte
    </Link>
  </>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    
    if (href) {
      // Check if the href is an internal anchor
      if (href.startsWith("#")) {
        const targetElement = document.querySelector(href) as HTMLElement;
        const offsetTop = targetElement?.offsetTop || 0;

        window.scroll({
          top: offsetTop,
          behavior: "smooth",
        });

        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      } else {
        // Handle external/internal page navigation
        window.location.href = href;
      }
    }
  };

  return (
    <header className="md:sticky md:top-0 md:bg-opacity-50 md:backdrop-blur bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between z-50 shadow-md transition-all duration-300">
      <div className="flex items-center gap-4">
        <Link href="/" passHref>
          <Image src={logo} width={40} height={40} alt="Roxy Migurdia" className="mx-auto rounded-full" />
        </Link>
        <Link href="/" passHref>
          <h1 className="text-2xl font-bold">Roxy Migurdia</h1>
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <NavLinks className="cursor-pointer" onClick={handleLinkClick} />
      </nav>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Button variant="outline" className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-y-0"
        enterTo="opacity-100 scale-y-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 scale-y-100"
        leaveTo="opacity-0 scale-y-0"
      >
        <nav className="md:hidden absolute top-16 left-0 w-full bg-primary text-primary-foreground py-4 origin-top z-50">
          <div className="flex flex-col items-start gap-2 px-4">
            <NavLinks className="block py-2 w-full" onClick={handleLinkClick} />
          </div>
        </nav>
      </Transition>
    </header>
  );
}
