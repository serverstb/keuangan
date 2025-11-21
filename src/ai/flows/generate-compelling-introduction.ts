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
  introduction: z.string().describe('A compelling introduction for the company profile.'),
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
  prompt: `You are tasked with creating a compelling and engaging introduction for an investment company named Vanguard Vista.

  Your goal is to immediately capture the attention of potential investors by highlighting the company's mission and values.

  The introduction should be concise, impactful, and instill trust and confidence in Vanguard Vista's capabilities.

  Generate a short introduction that effectively communicates the company's commitment to strategic investment and client success.`,
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
