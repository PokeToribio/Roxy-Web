import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import discordWhite from "../../public/discord-white.svg";
import discord from "../../public/discord.svg";
import hero from "../../public/hero.webp";

export function HeroSection() {
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
    <section className="bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left">
              Roxy Migurdia
            </h2>
            <p className="text-lg md:text-xl text-center md:text-left">
            Mejora tu servidor de Discord con nuestro bot repleto de funciones. Socializa, entretiene y conecta con tu comunidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://discord.com/oauth2/authorize?client_id=1041343250797183026"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="discord"
                  className="w-full sm:w-auto flex items-center gap-2"
                >
                  <Image
                    src={discordWhite}
                    width={24}
                    height={24}
                    alt="Discord"
                  />
                  Invita a Roxy Migurida
                </Button>
              </a>
              <a
                href="https://discord.gg/Cyz4UCf39B"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto flex items-center gap-2"
                >
                  <Image
                    src={isDarkMode ? discordWhite : discord}
                    width={24}
                    height={24}
                    alt="Discord"
                  />
                  Servidor de soporte!
                </Button>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src={hero}
                width={600}
                height={400}
                alt="Discord Bot"
                className="relative rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
