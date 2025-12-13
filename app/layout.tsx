import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { OpenSans } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${OpenSans.className} antialiased`}>{children}</body>
    </html>
  );
}
