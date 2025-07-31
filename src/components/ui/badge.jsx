import * as React from "react"

const badgeVariants = {
  default: "inline-flex items-center rounded-full border border-transparent bg-slate-900 px-2.5 py-0.5 text-xs font-semibold text-slate-50 transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300",
  secondary: "inline-flex items-center rounded-full border border-transparent bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-900 transition-colors hover:bg-slate-100/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80 dark:focus:ring-slate-300",
  destructive: "inline-flex items-center rounded-full border border-transparent bg-red-500 px-2.5 py-0.5 text-xs font-semibold text-slate-50 transition-colors hover:bg-red-500/80 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80 dark:focus:ring-red-900",
  outline: "inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300"
};

function Badge({ className = "", variant = "default", ...props }) {
  const variantClass = badgeVariants[variant] || badgeVariants.default;
  
  return (
    <div className={`${variantClass} ${className}`} {...props} />
  )
}

export { Badge }