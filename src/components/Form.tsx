"use client"
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconArrowRight,
  IconChevronRight,
  IconCheck,
} from "@tabler/icons-react";
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";

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
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const validateEmail = () => {
    return Boolean(String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ));
  };

  const sendEmail = () => {  
    // fetch("https://italiandynamism.com/api/send", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name,
    //     email,
    //   }),
    // });
    
    const form = document.getElementById('email_form');
    form.submit();

    setName("");
    setEmail("");
  }

  return (
    <div className="flex flex-cols justify-start items-start max-w-xl w-full rounded-none md:rounded-2xl md:p-8 shadow-input bg-white dark:bg-black">
      <form 
        id="email_form"
        action="https://formspree.io/f/xzzbvjqq"
        method="POST"
        className="flex flex-col md:flex-row items-end space-x-2 w-full max-w-xl"
      >
        <LabelInputContainer className="flex flex-col w-full md:w-2/5 max-w-xl mt-4">
          <Label htmlFor="firstname" className="text-black dark:text-white">Name</Label>
          <Input 
            id="firstname"
            placeholder="your name"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-50 dark:bg-zinc-800 dark:text-white text-black rounded-md px-4 py-2 shadow-input focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </LabelInputContainer>
        <LabelInputContainer className="flex flex-col w-full md:w-3/5 mt-2 md:mt-0 max-w-xl">
          <Label htmlFor="email" className="text-black dark:text-white">Email</Label>
          <Input 
            id="email"
            placeholder="your email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-50 dark:bg-zinc-800 dark:text-white text-black rounded-md px-4 py-2 shadow-input focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </LabelInputContainer>
        {/* <button
          className="relative group/btn flex items-center justify-center w-12 pr-2 pl-2 h-11 text-white bg-gray-800 dark:bg-zinc-900 rounded-md shadow-input hover:bg-gray-700 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
        >
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            <IconArrowRight />
          </span>
          <BottomGradient />
        </button> */}
        <AnimatedSubscribeButton
          buttonColor="rgb(39, 39, 42)"
          buttonTextColor="#ffffff"
          subscribeStatus={false}
          available={name.length > 0 && email.length > 0 && validateEmail()}
          onClick={sendEmail}
          initialText={
            <span className="group inline-flex items-center">
              Join{" "}
              <IconChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          }
          changeText={
            <span className="group inline-flex items-center">
              <IconCheck className="mr-2 h-4 w-4" />
              Joined{" "}
            </span>
          }
        />      
      </form>
    </div>
  );
}

export default Form;