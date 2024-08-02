import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-muted">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">&copy; {currentYear} Roxy Migurdia. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/terms" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
