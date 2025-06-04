'use server';

/**
 * @fileOverview Enhances project descriptions using AI to improve clarity and impact.
 *
 * - enhanceProjectDescription - A function that enhances a project description.
 * - EnhanceProjectDescriptionInput - The input type for the enhanceProjectDescription function.
 * - EnhanceProjectDescriptionOutput - The return type for the enhanceProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceProjectDescriptionInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The original project description to be enhanced.'),
});
export type EnhanceProjectDescriptionInput = z.infer<
  typeof EnhanceProjectDescriptionInputSchema
>;

const EnhanceProjectDescriptionOutputSchema = z.object({
  enhancedDescription: z
    .string()
    .describe('The enhanced project description with improved clarity and impact.'),
});
export type EnhanceProjectDescriptionOutput = z.infer<
  typeof EnhanceProjectDescriptionOutputSchema
>;

export async function enhanceProjectDescription(
  input: EnhanceProjectDescriptionInput
): Promise<EnhanceProjectDescriptionOutput> {
  return enhanceProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceProjectDescriptionPrompt',
  input: {schema: EnhanceProjectDescriptionInputSchema},
  output: {schema: EnhanceProjectDescriptionOutputSchema},
  prompt: `You are an AI assistant specializing in enhancing project descriptions to be clear, impactful, and effective at showcasing skills and accomplishments.

  Please review the following project description and provide an enhanced version that is more compelling and highlights key achievements.

  Original Description: {{{projectDescription}}}

  Enhanced Description:`, // Ensure the LLM returns just the enhanced description.
});

const enhanceProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'enhanceProjectDescriptionFlow',
    inputSchema: EnhanceProjectDescriptionInputSchema,
    outputSchema: EnhanceProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
