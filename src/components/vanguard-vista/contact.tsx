import { ContactForm } from './contact-form';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Let's Build Your Future</h2>
            <p className="text-lg text-foreground/80">
              Have a question or ready to start your investment journey? Our team is here to help. Reach out to us, and we'll get back to you shortly.
            </p>
            <div className="space-y-2 text-foreground/90 pt-4">
              <p><strong>Email:</strong> contact@vanguardvista.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Financial Plaza, Suite 100, Capital City</p>
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
