import React, { ReactNode } from "react";

interface CardContentProps {
    children: ReactNode; // Define the children prop
  }

  interface CardContentClassProps {
    children: ReactNode; // Define the children prop
    className: ReactNode;
  }



export const Card: React.FC<CardContentProps> = ({ children, className }:any) => {
  return <div className={`rounded-lg border bg-white shadow-md p-4 ${className}`}>{children}</div>;
};


export const CardHeader: React.FC<CardContentClassProps> = ({ children, className }:any) => <div className={`border-b pb-2 ${className}`}>{children}</div>;
export const CardTitle: React.FC<CardContentProps> = ({ children }:any) => <h2 className="text-lg font-bold">{children}</h2>;
export const CardContent:React.FC<CardContentProps> = ({ children }:any) => <div className="py-2">{children}</div>;
export const CardFooter: React.FC<CardContentProps> = ({ children }:any) => <div className="border-t pt-2">{children}</div>;
    