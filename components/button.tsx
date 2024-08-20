import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  ["px-3", "py-2", "bg-white", "border", "border-gray-200", "rounded-md"],
  {
    variants: {
      intent: {
        primary: ["bg-blue-100", "border-blue-200", "font-bold"],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

export const button = (variants: ButtonVariants) =>
  twMerge(buttonVariants(variants));
