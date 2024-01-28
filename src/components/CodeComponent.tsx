"use client"
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const CodeComponent = ({ className, children, ...props }) => {
    const [isCopied, setIsCopied] = useState(false);
  
    useEffect(() => {
      const handleCopyClick = () => {
        const codeText = children; // Access the code content
        navigator.clipboard.writeText(codeText);
        setIsCopied(true);
  
        // Reset the "Copied" state after a brief delay
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      };
  
      // Attach the event listener only on the client side
      const copyButton = document.getElementById('copyButton');
      if (copyButton) {
        copyButton.addEventListener('click', handleCopyClick);
      }
  
      // Remove the event listener on component unmount
      return () => {
        if (copyButton) {
          copyButton.removeEventListener('click', handleCopyClick);
        }
      };
    }, [children]);
  
    return (
      <code
        className={cn(
          "relative rounded px-[0.8rem] py-[0.6rem] font-mono text-sm",
          className
        )}
        {...props}
      >
        {children}
        <button
          id="copyButton"
          className="absolute top-2 right-2 h-4 w-4 cursor-pointer"
          title="Copy to Clipboard"
        >
          {isCopied ? '✅' : 'Copy'}
        </button>
      </code>
    );
  };