import { MonitorCheck, Music, Gamepad, Pi, Settings, Power, Users } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 md:py-24 lg:py-32 bg-muted Features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <div className="flex flex-col items-start gap-3 max-w-xs">
            <Power className="h-8 w-8" />
            <h3 className="text-xl font-bold">Soporte dedicado!</h3>
            <p>
            Nuestro equipo está aquí para ayudarte. Obtén asistencia inmediata con cualquier problema o solicitud de funciones y disfruta de una experiencia perfecta con Roxy Migurda.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 max-w-xs">
            <Users className="h-8 w-8" />
            <h3 className="text-xl font-bold">Socializa!</h3>
            <p>
              Socializa con otros usuarios de discord con nuestros comandos!.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 max-w-xs">
            <Gamepad className="h-8 w-8" />
            <h3 className="text-xl font-bold">Juega!</h3>
            <p>
              Juega a divertidos juegos como /ppt y /hitocie.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
