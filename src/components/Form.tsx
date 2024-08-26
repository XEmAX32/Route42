"use client"
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconArrowRight
} from "@tabler/icons-react";
import { EmailTemplate } from "@/emails/welcome";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const Form: React.FC = () => {
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
  
    fetch("http://localhost:3000/api/send", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
      }),
    });
  }

  return (
    <div className="flex flex-cols justify-start items-start max-w-md w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <form className="flex items-end space-x-2 w-full" onSubmit={sendEmail}>
        <LabelInputContainer className="flex flex-col w-full w-2/5">
          <Label htmlFor="firstname" className="text-black dark:text-white">Name</Label>
          <Input 
            id="firstname"
            placeholder="your name"
            type="text"
            required
            className="w-full bg-gray-50 dark:bg-zinc-800 dark:text-white text-black rounded-md px-4 py-2 shadow-input focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </LabelInputContainer>
        <LabelInputContainer className="flex flex-col w-full w-3/5">
          <Label htmlFor="email" className="text-black dark:text-white">Email</Label>
          <Input 
            id="email"
            placeholder="your email"
            type="email"
            required
            className="w-full bg-gray-50 dark:bg-zinc-800 dark:text-white text-black rounded-md px-4 py-2 shadow-input focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </LabelInputContainer>
        <button
          className="relative group/btn flex items-center justify-center w-12 pr-2 pl-2 h-11 text-white bg-gray-800 dark:bg-zinc-900 rounded-md shadow-input hover:bg-gray-700 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
        >
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            <IconArrowRight />
          </span>
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

export default Form;