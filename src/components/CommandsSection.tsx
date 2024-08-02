import { ShieldCheck, Music, Gamepad2, Users } from "lucide-react";

export function CommandsSection() {
  return (
    <section id="commands" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Explora nuestros comandos</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Descubre una amplia gama de comandos disponibles para mejorar tu experiencia en Discord!
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <div className="bg-muted rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6" />
              <h3 className="text-xl font-bold">Sociales</h3>
            </div>
            <ul className="space-y-2 mt-4">
              <li>
                <code className="bg-background px-2 py-1 rounded-md">/feliz</code> - Demuestra y comparte tu felicidad con todo el mundo!
              </li>
              <li>
                <code className="bg-background px-2 py-1 rounded-md">/abrazar</code> - Dale un cariñoso abrazo a alguien!
              </li>
              <li>
                <code className="bg-background px-2 py-1 rounded-md">/pegar</code> - Dale una buena bofetada a alguien!
              </li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-6 w-6" />
              <h3 className="text-xl font-bold">Juegos</h3>
            </div>
            <ul className="space-y-2 mt-4">
              <li>
                <code className="bg-background px-2 py-1 rounded-md">/ppt</code> - Juega a piedra, papel o tijeras contra Roxy Migurdia
              </li>
              <li>
                <code className="bg-background px-2 py-1 rounded-md">/hitodice</code> - Juega a &quot;Simon Dice&quot; pero con Hitogame
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
