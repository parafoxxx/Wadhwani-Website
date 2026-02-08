"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";


type FormValues = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
};

export default function Contact() {
  const formMethods = useForm<FormValues>();
  const { register, handleSubmit } = formMethods;
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const onSubmit = (data: FormValues) => {
    setSubmitting(true);

    const to = "foundationwadhwaniiitk@gmail.com";
    const subject = encodeURIComponent(data.subject || `Contact from ${data.name}`);
    const bodyLines = [];
    bodyLines.push(`Name: ${data.name}`);
    bodyLines.push(`Email: ${data.email}`);
    if (data.phone) bodyLines.push(`Phone: ${data.phone}`);
    if (data.message) bodyLines.push(`\nMessage:\n${data.message}`);
    const body = encodeURIComponent(bodyLines.join("\n"));

    // open mail client with prefilled fields
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    setSubmitting(false);
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />

      <main className="max-w-3xl mx-auto px-6 lg:px-12 py-20">
        <h1 className="text-3xl font-serif font-semibold text-primary mb-4">Contact Us</h1>
        <p className="text-muted-foreground mb-8">Please fill out the form and we'll get back to you.</p>

        <Form {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...register("name", { required: true })} placeholder="Your full name" />
              </FormControl>
              <FormMessage />
            </FormItem>

            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...register("email", { required: true })} placeholder="you@example.com" />
              </FormControl>
              <FormMessage />
            </FormItem>

            <FormItem>
              <FormLabel>Phone (optional)</FormLabel>
              <FormControl>
                <Input {...register("phone")} placeholder="Phone number" />
              </FormControl>
              <FormMessage />
            </FormItem>

            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input {...register("subject")} placeholder="Subject" />
              </FormControl>
              <FormMessage />
            </FormItem>

            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...register("message", { required: true })} placeholder="Write your message" />
              </FormControl>
              <FormMessage />
            </FormItem>

            <div className="pt-2">
              <Button type="submit" variant="default" size="lg" className="w-full">
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
            {sent && <p className="text-success text-sm">Mail client opened — complete the message to send.</p>}
          </form>
        </Form>
      </main>

      <Footer />
    </div>
  );
}

