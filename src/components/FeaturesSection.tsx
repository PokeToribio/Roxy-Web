import { MonitorCheck, Music, Gamepad, Pi, Settings, Power } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 md:py-24 lg:py-32 bg-muted Features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <div className="flex flex-col items-start gap-3 max-w-xs">
            <MonitorCheck className="h-8 w-8" />
            <h3 className="text-xl font-bold">Moderation</h3>
            <p>
              Easily manage your server with powerful moderation tools. Ban, kick, and warn users with a single command.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 max-w-xs">
            <Music className="h-8 w-8" />
            <h3 className="text-xl font-bold">Music</h3>
            <p>
              Play music from YouTube, Spotify, and more. Create playlists, control volume, and queue songs with ease.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 max-w-xs">
            <Gamepad className="h-8 w-8" />
            <h3 className="text-xl font-bold">Games</h3>
            <p>
              Engage your community with fun, interactive games. Choose from a variety of games like trivia, word puzzles, and more.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 max-w-xs">
            <Pi className="h-8 w-8" />
            <h3 className="text-xl font-bold">API Integration</h3>
            <p>
              Integrate your bot with external APIs to provide custom functionality, such as weather updates, currency conversions, and more.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 max-w-xs">
            <Settings className="h-8 w-8" />
            <h3 className="text-xl font-bold">Customization</h3>
            <p>
              Tailor the bot to your servers needs. Create custom commands, configure settings, and personalize the bots appearance.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 max-w-xs">
            <Power className="h-8 w-8" />
            <h3 className="text-xl font-bold">Dedicated Support</h3>
            <p>
              Our team is here to help. Get prompt assistance with any issues or feature requests, and enjoy a seamless bot experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
