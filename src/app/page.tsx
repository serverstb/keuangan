import { generateCompellingIntroduction } from "@/ai/flows/generate-compelling-introduction";
import VanguardVistaPage from "@/components/vanguard-vista/vanguard-vista-page";

export default async function Home() {
  let introduction = "At Vanguard Vista, we unlock potential and drive success through strategic investments. Our mission is to navigate the complexities of the market to deliver exceptional returns and build a prosperous future for our clients.";
  try {
    if (process.env.GEMINI_API_KEY) {
      const result = await generateCompellingIntroduction({});
      introduction = result.introduction;
    }
  } catch (error) {
    console.error("Error generating compelling introduction:", error);
  }


  return <VanguardVistaPage introduction={introduction} />;
}
