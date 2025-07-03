"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitRequest } from "./actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Bot, Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: "",
  data: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
      Analyze Request
    </Button>
  );
}

export default function RequestAnalyzerPage() {
  const [state, formAction] = useFormState(submitRequest, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: state.error,
      });
    }
  }, [state.error, state.message, toast]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">AI-Powered Request Analyzer</h1>
        <p className="text-muted-foreground">
          Submit an employee request to have it automatically categorized and prioritized by our AI assistant.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card as="form" action={formAction} className="flex flex-col">
          <CardHeader>
            <CardTitle>New Request</CardTitle>
            <CardDescription>Enter the full text of the employee's request below.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="requestText" className="sr-only">Employee Request</Label>
              <Textarea
                placeholder="e.g., 'I need to request a certificate of employment for a visa application that is due next week...'"
                id="requestText"
                name="requestText"
                rows={8}
                required
                className="h-full"
              />
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </Card>

        <div className="flex flex-col space-y-4">
           <h2 className="font-headline text-xl font-semibold">Analysis Result</h2>
           {state.data ? (
            <Card className="bg-gradient-to-br from-card to-secondary/50">
              <CardHeader>
                <CardTitle>Request Analysis</CardTitle>
                <CardDescription>AI-generated category and priority.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Category</h3>
                  <p className="font-semibold text-lg">{state.data.category}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Priority</h3>
                  <Badge 
                    variant={
                      state.data.priority === 'High' ? 'destructive' :
                      state.data.priority === 'Medium' ? 'secondary' :
                      'default'
                    }
                    className="text-base"
                  >
                    {state.data.priority}
                  </Badge>
                </div>
                 <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Reasoning</h3>
                  <p className="text-sm italic text-muted-foreground">{state.data.urgencyReason}</p>
                </div>
              </CardContent>
            </Card>
           ) : (
             <div className="flex h-full min-h-[200px] items-center justify-center rounded-lg border border-dashed">
                <div className="text-center text-muted-foreground">
                  <Bot className="mx-auto h-12 w-12" />
                  <p className="mt-2">Analysis results will appear here.</p>
                </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
