import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Texto de derechos reservados alineado a la izquierda */}
        <p className="text-sm text-muted-foreground text-left md:text-left">
          &copy; {currentYear} Roxy Migurdia. Todos los derechos reservados.
        </p>

        {/* Botón centrado en el footer */}
        <div className="flex-1 flex justify-center my-4 md:my-0">
          <Link
            href="/stats"
            className="footer__button"
            prefetch={false}
          >
            Ver Estadísticas
          </Link>
        </div>

        {/* Enlaces de Términos y Privacidad alineados a la derecha */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-right">
          <Link href="/terms" className="footer__link" prefetch={false}>
            Términos de Servicio
          </Link>
          <Link href="/privacy" className="footer__link" prefetch={false}>
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
