import "@/app/ui/global.css"
import { inter } from "@/app/ui/fonts"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body style={{ background: "#01010" }} className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
