import { ContactForm } from './contact-form';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const contactImage = PlaceHolderImages.find(p => p.id === 'contact-us');
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Mari Terhubung</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Punya pertanyaan atau siap memulai perjalanan investasi Anda? Tim kami siap membantu.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {contactImage && (
               <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={contactImage.imageUrl}
                  alt={contactImage.description}
                  data-ai-hint={contactImage.imageHint}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="space-y-4 text-foreground/90 pt-4">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-ring mt-1"/>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:kontak@vanguardvista.com" className="text-muted-foreground hover:text-ring">kontak@vanguardvista.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-ring mt-1"/>
                <div>
                  <h3 className="font-semibold">Telepon</h3>
                  <p className="text-muted-foreground">+62 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-ring mt-1"/>
                <div>
                  <h3 className="font-semibold">Alamat</h3>
                  <p className="text-muted-foreground">123 Financial Plaza, Suite 100, Capital City</p>
                </div>
              </div>
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
