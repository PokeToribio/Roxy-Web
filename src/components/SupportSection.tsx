import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import discordWhite from "../../public/discord-white.svg";
import discord from "../../public/discord.svg";

export function SupportSection() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    setIsDarkMode(theme === "dark");

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-theme") {
          const newTheme = document.documentElement.getAttribute("data-theme");
          setIsDarkMode(newTheme === "dark");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="support" className="py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Nuestro servidor de soporte</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Obten ayuda, da ideas y conecta con la comunidad!
          </p>
            <Button className="w-full sm:w-auto mx-auto flex items-center gap-2">
              <Image
                src={isDarkMode ? discord : discordWhite }
                width={24}
                height={24}
                alt="Discord"
              />
                <a href="https://discord.gg/Cyz4UCf39B" target="_blank" rel="noopener noreferrer">
                  Servidor de Soporte!
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
