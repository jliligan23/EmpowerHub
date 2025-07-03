"use server";

import { analyzeRequest, type AnalyzeRequestInput, type AnalyzeRequestOutput } from "@/ai/flows/request-analyzer";

interface FormState {
  message: string;
  data: AnalyzeRequestOutput | null;
  error: string | null;
}

export async function submitRequest(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const requestText = formData.get("requestText") as string;

  if (!requestText || requestText.trim().length === 0) {
    return { message: "Error", data: null, error: "Request text cannot be empty." };
  }

  try {
    const input: AnalyzeRequestInput = { requestText };
    const result = await analyzeRequest(input);
    return { message: "Success", data: result, error: null };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
    return { message: "Error", data: null, error: `Failed to analyze request: ${errorMessage}` };
  }
}
