import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BoostMyReferral',
  description: 'Get job referrals and guidance from verified professionals.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/80 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* Logo + Brand */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/boostmyreferral-logo.png"
                alt="BoostMyReferral Logo"
                width={40}
                height={40}
                className="rounded-full transition-transform group-hover:rotate-3"
              />
              <span className="text-xl sm:text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition">
                BoostMyReferral
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden sm:flex space-x-6 text-sm font-medium text-gray-700">
              <Link
                href="/"
                className="hover:text-blue-600 hover:underline underline-offset-4 transition"
              >
                Home
              </Link>
              <Link
                href="/boosters"
                className="hover:text-blue-600 hover:underline underline-offset-4 transition"
              >
                View Boosters
              </Link>
              <a
                href="#about"
                className="hover:text-blue-600 hover:underline underline-offset-4 transition"
              >
                About
              </a>
            </nav>
          </div>
        </header>

        {/* Content */}
        <main className="pt-24">{children}</main>

        {/* Footer */}
        <footer className="mt-20 text-center text-sm text-gray-500 py-8 border-t">
          © {new Date().getFullYear()} BoostMyReferral · Made with 💙 by Ashank Arora
        </footer>
      </body>
    </html>
  );
}
