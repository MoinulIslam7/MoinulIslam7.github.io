"use client";
// @flow strict
import { isValidEmail } from '@/utils/check-email';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { TbMailForward } from "react-icons/tb";
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

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
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
      const res = await emailjs.send(serviceID, templateID, input, options);

      if (res.status === 200) {
        toast.success('Your order has been placed! (Message sent)');
        setInput({
          name: '',
          email: '',
          message: '',
        });
      };
    } catch (error) {
      toast.error(error?.text || error);
    };
  };

  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-[#9ca3af] italic">
        Fill out your order details below. The barista will get back to you within 24 hours.
      </p>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[0.65rem] font-bold text-[#c8956c] uppercase tracking-widest px-1">Name</label>
          <input
            className="bg-[#1c1007] w-full border border-[#c8956c33] rounded-lg focus:border-[#c8956c] ring-0 outline-0 transition-all duration-300 px-4 py-3 text-[#f5e6d3] text-sm placeholder:text-[#5c4033]"
            type="text"
            placeholder="John Doe"
            maxLength="100"
            required={true}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            onBlur={checkRequired}
            value={input.name}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[0.65rem] font-bold text-[#c8956c] uppercase tracking-widest px-1">Contact Frequency (Email)</label>
          <input
            className="bg-[#1c1007] w-full border border-[#c8956c33] rounded-lg focus:border-[#c8956c] ring-0 outline-0 transition-all duration-300 px-4 py-3 text-[#f5e6d3] text-sm placeholder:text-[#5c4033]"
            type="email"
            placeholder="john@example.com"
            maxLength="100"
            required={true}
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            onBlur={() => {
              checkRequired();
              setError({ ...error, email: !isValidEmail(input.email) });
            }}
          />
          {error.email &&
            <p className="text-[0.65rem] text-red-400 px-1">Invalid frequency detected! (Please use a valid email)</p>
          }
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[0.65rem] font-bold text-[#c8956c] uppercase tracking-widest px-1">Project Order / Message</label>
          <textarea
            className="bg-[#1c1007] w-full border border-[#c8956c33] rounded-lg focus:border-[#c8956c] ring-0 outline-0 transition-all duration-300 px-4 py-3 text-[#f5e6d3] text-sm placeholder:text-[#5c4033]"
            placeholder="What's brewing? Describe your project or query here..."
            maxLength="500"
            name="message"
            required={true}
            onChange={(e) => setInput({ ...input, message: e.target.value })}
            onBlur={checkRequired}
            rows="5"
            value={input.message}
          />
        </div>

        <div className="flex flex-col gap-4 mt-2">
          {error.required &&
            <p className="text-[0.65rem] text-red-400 text-center">
              Missing ingredients! (Name, Email, and Message are required)
            </p>
          }
          <button
            className="btn-primary w-full py-4 flex justify-center items-center gap-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,149,108,0.3)]"
            onClick={handleSendMail}
          >
            <span className="font-heading font-bold uppercase tracking-wider text-sm">Place Order ☕</span>
            <TbMailForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;