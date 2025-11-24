import Link from 'next/link';
import { Mountain, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { href: '#strategies', label: 'Strategi' },
    { href: '#performance', label: 'Kinerja' },
    { href: '#portfolio', label: 'Portofolio' },
    { href: '#team', label: 'Tim' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <footer className="bg-secondary/50 text-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Mountain className="h-6 w-6 text-ring" />
              <span className="font-headline text-xl font-bold">Vanguard Vista</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Investasi Strategis untuk Masa Depan yang Lebih Cerah.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4 font-headline">Navigasi</h4>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-ring transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
             <div>
              <h4 className="font-semibold mb-4 font-headline">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-ring transition-colors">Kebijakan Privasi</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-ring transition-colors">Syarat & Ketentuan</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-headline">Ikuti Kami</h4>
               <div className="flex gap-4">
                  <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-ring">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-ring">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-ring">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-center">
           <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Vanguard Vista. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
