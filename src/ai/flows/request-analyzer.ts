// request-analyzer.ts
'use server';

/**
 * @fileOverview AI-powered request categorization and prioritization flow.
 *
 * This file defines a Genkit flow that automatically categorizes and prioritizes
 * employee requests (e.g., travel, certificate, schedule change) using AI.
 *
 * - analyzeRequest - Analyzes and categorizes an employee request.
 * - AnalyzeRequestInput - The input type for the analyzeRequest function.
 * - AnalyzeRequestOutput - The return type for the analyzeRequest function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeRequestInputSchema = z.object({
  requestText: z.string().describe('The text of the employee request.'),
});
export type AnalyzeRequestInput = z.infer<typeof AnalyzeRequestInputSchema>;

const AnalyzeRequestOutputSchema = z.object({
  category: z.string().describe('The category of the request (e.g., Travel, Certificate, Schedule Change).'),
  priority: z.enum(['High', 'Medium', 'Low']).describe('The priority of the request.'),
  urgencyReason: z.string().describe('The reason for the assigned priority.'),
});
export type AnalyzeRequestOutput = z.infer<typeof AnalyzeRequestOutputSchema>;

export async function analyzeRequest(input: AnalyzeRequestInput): Promise<AnalyzeRequestOutput> {
  return analyzeRequestFlow(input);
}

const analyzeRequestPrompt = ai.definePrompt({
  name: 'analyzeRequestPrompt',
  input: {schema: AnalyzeRequestInputSchema},
  output: {schema: AnalyzeRequestOutputSchema},
  prompt: `You are an HR assistant tasked with categorizing and prioritizing employee requests.

  Given the following employee request, determine the category, priority, and a brief reason for the priority.

  Request: {{{requestText}}}

  Respond with a JSON object in the following format:
  {
    "category": "Request Category",
    "priority": "High | Medium | Low",
    "urgencyReason": "Brief explanation for the assigned priority."
  }`,
});

const analyzeRequestFlow = ai.defineFlow(
  {
    name: 'analyzeRequestFlow',
    inputSchema: AnalyzeRequestInputSchema,
    outputSchema: AnalyzeRequestOutputSchema,
  },
  async input => {
    const {output} = await analyzeRequestPrompt(input);
    return output!;
  }
);
