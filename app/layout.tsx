import '@/app/ui/global.css';
import { inter } from './ui/fonts';

console.log(inter);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}><div></div>{children}</body>
    </html>
  );
}
