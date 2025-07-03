"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { FormSchema } from "@/consts/formScrema";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      role: "learner",
      province: "Limpopo",
      town: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <TooltipProvider>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
          <div className="flex gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <FormItem className="w-1/2">
                  <FormLabel>First Name</FormLabel>
                  <Tooltip open={!!fieldState.error}>
                    <TooltipTrigger asChild>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John"
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
                      side="left"
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
              name="surname"
              render={({ field, fieldState }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Surname</FormLabel>
                  <Tooltip open={!!fieldState.error}>
                    <TooltipTrigger asChild>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Doe"
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
                      side="top"
                      className="bg-red-500 text-white"
                    >
                      {fieldState.error?.message}
                    </TooltipContent>
                  </Tooltip>
                </FormItem>
              )}
            />
          </div>

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
                        placeholder="example@email.com"
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

          <div className="flex gap-2">
            <FormField
              control={form.control}
              name="role"
              render={({ field, fieldState }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Role</FormLabel>
                  <Tooltip open={!!fieldState.error}>
                    <TooltipTrigger asChild>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger
                            className={
                              fieldState.invalid
                                ? "border-red-500"
                                : field.value
                                ? "border-green-500"
                                : ""
                            }
                          >
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="learner">Learner</SelectItem>
                          <SelectItem value="facilitator">
                            Facilitator
                          </SelectItem>
                          <SelectItem value="Admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
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
              name="province"
              render={({ field, fieldState }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Province</FormLabel>
                  <Tooltip open={!!fieldState.error}>
                    <TooltipTrigger asChild>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger
                            className={
                              fieldState.invalid
                                ? "border-red-500"
                                : field.value
                                ? "border-green-500"
                                : ""
                            }
                          >
                            <SelectValue placeholder="Select province" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {FormSchema.shape.province.options.map((province) => (
                            <SelectItem key={province} value={province}>
                              {province}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
          </div>

          <FormField
            control={form.control}
            name="town"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Town</FormLabel>
                <Tooltip open={!!fieldState.error}>
                  <TooltipTrigger asChild>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Polokwane"
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

          <Button type="submit" className="w-full mt-4">
            Submit
          </Button>
        </form>
      </Form>
    </TooltipProvider>
  );
}
