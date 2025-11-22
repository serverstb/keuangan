import { ContactForm } from './contact-form';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Mari Bangun Masa Depan Anda</h2>
            <p className="text-lg text-foreground/80">
              Punya pertanyaan atau siap memulai perjalanan investasi Anda? Tim kami siap membantu. Hubungi kami, dan kami akan segera menghubungi Anda kembali.
            </p>
            <div className="space-y-2 text-foreground/90 pt-4">
              <p><strong>Email:</strong> kontak@vanguardvista.com</p>
              <p><strong>Telepon:</strong> +62 (555) 123-4567</p>
              <p><strong>Alamat:</strong> 123 Financial Plaza, Suite 100, Capital City</p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}