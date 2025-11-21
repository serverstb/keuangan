import { generateCompellingIntroduction } from "@/ai/flows/generate-compelling-introduction";
import VanguardVistaPage from "@/components/vanguard-vista/vanguard-vista-page";

export default async function Home() {
  let introduction = "Di Vanguard Vista, kami membuka potensi dan mendorong kesuksesan melalui investasi strategis. Misi kami adalah menavigasi kompleksitas pasar untuk memberikan pengembalian yang luar biasa dan membangun masa depan yang makmur bagi klien kami.";
  try {
    // Check if the GEMINI_API_KEY is set and is not an empty string
    if (process.env.GEMINI_API_KEY) {
      const result = await generateCompellingIntroduction({});
      introduction = result.introduction;
    }
  } catch (error) {
    console.error("Error generating compelling introduction:", error);
    // The fallback introduction is already set, so we can just log the error.
  }


  return <VanguardVistaPage introduction={introduction} />;
}
