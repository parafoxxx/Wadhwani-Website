"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import { Form, FormControl, FormItem, FormLabel, FormMessage } from "../components/ui/form";
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
    const bodyLines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : null,
      data.message ? `\nMessage:\n${data.message}` : null,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    setSubmitting(false);
    setSent(true);
  };

  return (
    <div className="surface-gradient min-h-screen bg-background">
      <ScrollProgress />
      <Header />

      <main className="max-w-3xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className="text-3xl font-serif font-semibold text-primary mb-4">Contact Us</h1>
          <p className="text-muted-foreground mb-8">Please fill out the form and we'll get back to you.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -2 }}
          className="surface-gradient-soft rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur-sm"
        >
          <Form {...formMethods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.18 }}>
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...register("name", { required: true })} placeholder="Your full name" className="transition-all duration-200 focus-visible:border-accent/60 focus-visible:shadow-[0_0_0_3px_rgba(246,135,33,0.12)]" />
                </FormControl>
                <FormMessage />
              </FormItem>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.24 }}>
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...register("email", { required: true })} placeholder="you@example.com" className="transition-all duration-200 focus-visible:border-accent/60 focus-visible:shadow-[0_0_0_3px_rgba(246,135,33,0.12)]" />
                </FormControl>
                <FormMessage />
              </FormItem>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.3 }}>
              <FormItem>
                <FormLabel>Phone (optional)</FormLabel>
                <FormControl>
                  <Input {...register("phone")} placeholder="Phone number" className="transition-all duration-200 focus-visible:border-accent/60 focus-visible:shadow-[0_0_0_3px_rgba(246,135,33,0.12)]" />
                </FormControl>
                <FormMessage />
              </FormItem>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.36 }}>
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input {...register("subject")} placeholder="Subject" className="transition-all duration-200 focus-visible:border-accent/60 focus-visible:shadow-[0_0_0_3px_rgba(246,135,33,0.12)]" />
                </FormControl>
                <FormMessage />
              </FormItem>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.42 }}>
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...register("message", { required: true })} placeholder="Write your message" className="transition-all duration-200 focus-visible:border-accent/60 focus-visible:shadow-[0_0_0_3px_rgba(246,135,33,0.12)]" />
                </FormControl>
                <FormMessage />
              </FormItem>
              </motion.div>

              <div className="pt-2">
                <Button type="submit" variant="default" size="lg" className="w-full">
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </div>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-success text-sm"
                >
                  Mail client opened. Complete the message in your email app to send it.
                </motion.p>
              )}
            </form>
          </Form>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
