"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { enhanceProjectDescription } from "@/ai/flows/enhance-project-description";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, ClipboardCopy, Loader2 } from "lucide-react";

const formSchema = z.object({
  projectDescription: z.string().min(20, {
    message: "Project description must be at least 20 characters.",
  }).max(2000, {
    message: "Project description must not exceed 2000 characters."
  }),
});

export default function ProjectEnhancerForm() {
  const [enhancedDescription, setEnhancedDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setEnhancedDescription("");
    try {
      const result = await enhanceProjectDescription({
        projectDescription: values.projectDescription,
      });
      if (result && result.enhancedDescription) {
        setEnhancedDescription(result.enhancedDescription);
        toast({
          title: "Description Enhanced!",
          description: "AI has suggested improvements for your project description.",
        });
      } else {
        throw new Error("Failed to get enhanced description.");
      }
    } catch (error) {
      console.error("Error enhancing project description:", error);
      toast({
        title: "Error",
        description: "Could not enhance project description. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleCopyToClipboard = () => {
    if (enhancedDescription) {
      navigator.clipboard.writeText(enhancedDescription);
      toast({
        title: "Copied to Clipboard!",
        description: "The enhanced description has been copied.",
      });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-headline">
          <Sparkles className="h-6 w-6 text-primary" />
          Project Description Enhancer
        </CardTitle>
        <CardDescription className="font-body">
          Let AI help you craft a more compelling project description. Enter your current description below.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Original Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your project here..."
                      rows={8}
                      className="resize-none bg-input/70 focus:bg-input"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {enhancedDescription && (
              <FormItem>
                <FormLabel className="font-semibold">Enhanced Description</FormLabel>
                <div className="relative">
                  <Textarea
                    value={enhancedDescription}
                    readOnly
                    rows={8}
                    className="resize-none bg-muted/50 focus:ring-0"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-7 w-7 text-muted-foreground hover:text-primary"
                    onClick={handleCopyToClipboard}
                    aria-label="Copy to clipboard"
                  >
                    <ClipboardCopy className="h-4 w-4" />
                  </Button>
                </div>
              </FormItem>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enhancing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Enhance Description
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
