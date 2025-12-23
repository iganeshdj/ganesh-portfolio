import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiSend } from "react-icons/fi";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_p07nj8a",      // ✅ your service ID
        "template_wxi0xms",     // ✅ your template ID
        e.currentTarget,
        "CRY11H3eZovfejqd_"     // ✅ your public key
      );

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      // ✅ Reset form after success
      formRef.current?.reset();

    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Something went wrong. Try again later.",
        variant: "destructive",
      });
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block font-mono text-sm text-primary">
            05. Get in Touch
          </span>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind or want to discuss opportunities?
            I’d love to hear from you.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>

            <a
              href="mailto:iganeshdj@gmail.com"
              className="flex items-center gap-4 rounded-lg p-3 transition hover:bg-muted"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FiMail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">iganeshdj@gmail.com</p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@email.com"
                  className="w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Your message"
                className="w-full resize-none rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <Button
              type="submit"
              variant="gradient"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : (
                <>
                  Send Message
                  <FiSend className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
