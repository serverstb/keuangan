import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    name: 'Johnathan Doe',
    role: 'Pendiri & CEO',
    bio: 'Dengan lebih dari 20 tahun pengalaman di pasar keuangan, Johnathan memimpin Vanguard Vista dengan visi untuk pertumbuhan berkelanjutan.',
    image: PlaceHolderImages.find(p => p.id === 'team-member-1')!,
    social: {
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'Jane Smith',
    role: 'Chief Investment Officer',
    bio: 'Jane berspesialisasi dalam analisis kuantitatif dan manajemen risiko, memastikan portofolio kami kuat dan tangguh.',
    image: PlaceHolderImages.find(p => p.id === 'team-member-2')!,
    social: {
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'Alex Johnson',
    role: 'Kepala Modal Ventura',
    bio: 'Alex memiliki mata yang tajam untuk teknologi disruptif dan telah memimpin beberapa investasi tahap awal yang sukses.',
    image: PlaceHolderImages.find(p => p.id === 'team-member-3')!,
    social: {
      linkedin: '#',
      twitter: '#',
    }
  }
];

export function Team() {
  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Tim Ahli Kami</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Kenali para pemikir di balik kesuksesan kami.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center flex flex-col items-center pt-8 pb-6 hover:shadow-lg transition-shadow">
              <CardHeader className="items-center p-0">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={member.image.imageUrl} alt={member.image.description} data-ai-hint={member.image.imageHint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} di LinkedIn`}><Linkedin className="h-5 w-5" /></a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} di Twitter`}><Twitter className="h-5 w-5" /></a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}