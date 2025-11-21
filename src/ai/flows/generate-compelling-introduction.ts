'use server';
/**
 * @fileOverview AI-powered flow to generate a compelling company introduction.
 *
 * - generateCompellingIntroduction - A function that generates a compelling introduction for the company profile.
 * - GenerateCompellingIntroductionInput - The input type for the generateCompellingIntroduction function (currently empty).
 * - GenerateCompellingIntroductionOutput - The return type for the generateCompellingIntroduction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCompellingIntroductionInputSchema = z.object({});
export type GenerateCompellingIntroductionInput = z.infer<typeof GenerateCompellingIntroductionInputSchema>;

const GenerateCompellingIntroductionOutputSchema = z.object({
  introduction: z.string().describe('Perkenalan yang menarik untuk profil perusahaan.'),
});
export type GenerateCompellingIntroductionOutput = z.infer<typeof GenerateCompellingIntroductionOutputSchema>;

export async function generateCompellingIntroduction(
  input: GenerateCompellingIntroductionInput
): Promise<GenerateCompellingIntroductionOutput> {
  return generateCompellingIntroductionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCompellingIntroductionPrompt',
  input: {schema: GenerateCompellingIntroductionInputSchema},
  output: {schema: GenerateCompellingIntroductionOutputSchema},
  prompt: `Anda ditugaskan untuk membuat perkenalan yang menarik dan memikat untuk sebuah perusahaan investasi bernama Vanguard Vista.

  Tujuan Anda adalah untuk segera menarik perhatian investor potensial dengan menyoroti misi dan nilai-nilai perusahaan.

  Perkenalan harus ringkas, berdampak, dan menanamkan kepercayaan pada kemampuan Vanguard Vista.

  Hasilkan perkenalan singkat dalam Bahasa Indonesia yang secara efektif mengkomunikasikan komitmen perusahaan terhadap investasi strategis dan kesuksesan klien.`,
});

const generateCompellingIntroductionFlow = ai.defineFlow(
  {
    name: 'generateCompellingIntroductionFlow',
    inputSchema: GenerateCompellingIntroductionInputSchema,
    outputSchema: GenerateCompellingIntroductionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
