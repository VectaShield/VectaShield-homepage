import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

const SubmitForm = () => {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const fd = new FormData();
    fd.append("entry.2005620554", e.currentTarget.name.value);
    fd.append("entry.1045781291", e.currentTarget.email.value);
    fd.append("entry.839337160", e.currentTarget.message.value);
    // For checkboxes: call append() once per selected option with the SAME entry id.

    await fetch("https://docs.google.com/forms/d/e/1FAIpQLSdzCl_Ucsds9sAHIQwFKtR0maK1gDrTfJ-U2Xx4O20luBqXNA/formResponse", {
      method: "POST",
      body: fd,
      mode: "no-cors",
    });

    setStatus("success"); // can't read response due to no-cors
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
        <Input type="text" name="name" placeholder="Your Name" required className="bg-transparent" />
        <Input type="email" name="email" placeholder="Your Email" required className="bg-transparent" />
        <Textarea name="message" placeholder="Your Message" required className="bg-transparent min-h-[150px]" />
        <Button 
        size="lg" 
        className="w-full neon-border text-white font-semibold px-8 py-4"
        disabled={status === "loading"}
        >
        <Send className="w-5 h-5 mr-2" />
        Send Message
        </Button>
        {status === "success" && <p>Thanks! We received your message.</p>}
    </form>
  );
};

export default SubmitForm;