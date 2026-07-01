import { SiteHeader } from "@/components/site-header";

/** Layout público (marketing): cabecera + contenido. */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}
