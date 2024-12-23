export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex h-14 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Built with Next.js and ShadcnUI
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Company
        </p>
      </div>
    </footer>
  );
}