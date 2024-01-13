import './ui/global.css';
import { spartan } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spartan.className} antialiased`}>{children}</body>
    </html>
  );
}
