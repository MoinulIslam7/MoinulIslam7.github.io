"use client";
import { isValidEmail } from '@/utils/check-email';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { TbMailForward, TbRobot } from "react-icons/tb";
import { toast } from 'react-toastify';

function ContactForm() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [error, setError] = useState({
    email: false,
    required: false,
  });
  
  const [isBot, setIsBot] = useState(false);

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    setIsBot(false); // Reset bot check when fields are filled
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    
    // Easter egg for bots
    if (input.name.toLowerCase().includes('bot') || 
        input.email.toLowerCase().includes('bot') || 
        input.message.toLowerCase().includes('bot')) {
      setIsBot(true);
      toast.error("🤖 Error: Bots not allowed!");
      return;
    }
    
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    try {
      // Show loading state
      toast.info("Sending message...", { autoClose: 2000 });
      
      const res = await emailjs.send(serviceID, templateID, input, options);

      if (res.status === 200) {
        toast.success('Message sent successfully!');
        setInput({
          name: '',
          email: '',
          message: '',
        });
      };
    } catch (error) {
      toast.error(error?.text || "Error sending message. Please try again.");
    };
  };

  return (
    <div className="">
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>
      
      {isBot && (
        <div className="mb-4 p-3 bg-[var(--error-red)] bg-opacity-20 rounded border border-[var(--error-red)] flex items-center gap-2">
          <TbRobot size={24} className="text-[var(--error-red)]" />
          <p className="text-[var(--error-red)]">
            🤖 Beep boop! Our systems detect you might be a bot. If you're human, please avoid using "bot" in your message.
          </p>
        </div>
      )}
      
      <div className="max-w-3xl text-[#d3d8e8] rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-violet-200 mb-4">
          {"If you have any questions or want to work together, fill out this form. I promise I'm more responsive than most APIs!"}
        </p>
        
        <form onSubmit={handleSendMail} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">
              $ your_name = <span className="text-[var(--error-red)]">{error.required && !input.name ? "*" : ""}</span>
            </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="100"
              required={true}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              onBlur={checkRequired}
              value={input.name}
              placeholder="String (your name here)"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">
              $ your_email = <span className="text-[var(--error-red)]">{error.required && !input.email ? "*" : ""}</span>
            </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength="100"
              required={true}
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(input.email) });
              }}
              placeholder="String (must contain @)"
            />
            {error.email &&
              <p className="text-sm text-red-400">Error: Invalid email format!</p>
            }
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">
              $ message = <span className="text-[var(--error-red)]">{error.required && !input.message ? "*" : ""}</span>
            </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={input.message}
              placeholder="Multi-line string (your message here)"
            />
          </div>
          
          <div className="flex flex-col items-center gap-2 mt-6">
            {error.required &&
              <p className="text-sm text-red-400">
                Error: Required fields missing!
              </p>
            }
            
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                role="button"
                type="submit"
              >
                <span>Send Message</span>
                <TbMailForward className="mt-1" size={18} />
              </button>
              
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Click to submit form
              </span>
            </div>
          </div>
        </form>
        
        <div className="disclaimer mt-4">
          <p>// Note: This form actually works (unlike some of my side projects)</p>
          <p>// Average response time: Faster than AWS support</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;