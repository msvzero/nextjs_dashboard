import './ui/global.css';
import { spartan } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spartan.className} antialiased`}>
        {children}
        <footer className='py-10 flex justify-center items-center'>
          Hecho por la gente de Vercel
        </footer>
      </body>
    </html>
  );
}
