"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BadgeInfo } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const SignInSchema = z.object({
  email: z
    .string()
    .min(3, { message: "Email must be at least 3 characters." })
    .email({ message: "Email must contain @." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

export function SignInForm() {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof SignInSchema>) => {
    toast.success("Signed‑in successfully!", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4 text-white">
          {JSON.stringify(data, null, 2)}
        </pre>
      ),
    });
  };

  return (
    <TooltipProvider>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Tooltip open={!!fieldState.error}>
                  <TooltipTrigger asChild>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="you@example.com"
                        className={
                          fieldState.invalid
                            ? "border-red-500"
                            : field.value
                            ? "border-green-500"
                            : ""
                        }
                      />
                    </FormControl>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-red-500 text-white"
                  >
                    {fieldState.error?.message}
                  </TooltipContent>
                </Tooltip>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <Tooltip open={!!fieldState.error}>
                  <TooltipTrigger asChild>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                        className={
                          fieldState.invalid
                            ? "border-red-500"
                            : field.value
                            ? "border-green-500"
                            : ""
                        }
                      />
                    </FormControl>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-red-500 text-white"
                  >
                    {fieldState.error?.message}
                  </TooltipContent>
                </Tooltip>
              </FormItem>
            )}
          />
          <div className="flex items-center">
            <Checkbox className="border-2 border-gray-300" id="remember" />
            <Label className="ml-2 text-sm" htmlFor="remember">
              Remember me
              <Tooltip>
                <TooltipTrigger>
                  <BadgeInfo size={14} />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm text-gray-500">
                    This will remember your login information for future visits.
                  </p>
                </TooltipContent>
              </Tooltip>
            </Label>
          </div>
          <Button type="submit" className="w-full mt-4">
            Sign In
          </Button>
        </form>
      </Form>
    </TooltipProvider>
  );
}
