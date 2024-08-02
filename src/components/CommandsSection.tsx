import { ShieldCheck, Music, Gamepad2 } from "lucide-react";

export function CommandsSection() {
  return (
    <section id="commands" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Explore Our Commands</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Discover the wide range of commands available to enhance your Discord server.
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <div className="bg-muted rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6" />
              <h3 className="text-xl font-bold">Moderation</h3>
            </div>
            <ul className="space-y-2 mt-4">
              <li>
                <code className="bg-background px-2 py-1 rounded-md">!ban @user</code> - Ban a user from the server
              </li>
              <li>
                <code className="bg-background px-2 py-1 rounded-md">!kick @user</code> - Kick a user from the server
              </li>
              <li>
                <code className="bg-background px-2 py-1 rounded-md">!warn @user</code> - Warn a user
              </li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center gap-2">
              <Music className="h-6 w-6" />
              <h3 className="text-xl font-bold">Music</h3>
            </div>
            <ul className="space-y-2 mt-4">
              <li>
                <code className="bg-background px-2 py-1 rounded-md">!play [song]</code> - Play a song from YouTube
              </li>
              <li>
                <code className="bg-background px-2 py-1 rounded-md">!pause</code> - Pause the current song
              </li>
              <li>
                <code className="bg-background px-2 py-1 rounded-md">!skip</code> - Skip the current song
              </li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-6 w-6" />
              <h3 className="text-xl font-bold">Games</h3>
            </div>
            <ul className="space-y-2 mt-4">
              <li>
                <code className="bg-background px-2 py-1 rounded-md">!trivia</code> - Start a trivia game
              </li>
              <li>
                <code className="bg-background px-2 py-1 rounded-md">!wordle</code> - Play a game of Wordle
              </li>
              <li>
                <code className="bg-background px-2 py-1 rounded-md">!rps</code> - Play rock, paper, scissors
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
