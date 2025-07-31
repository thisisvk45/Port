import * as React from "react"

const alertVariants = {
  default: "relative w-full rounded-lg border border-slate-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-slate-950 dark:border-slate-800 dark:[&>svg]:text-slate-50",
  destructive: "relative w-full rounded-lg border border-red-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-red-600 text-red-600 dark:border-red-800 dark:[&>svg]:text-red-400 dark:text-red-400"
};

const Alert = React.forwardRef(({ className = "", variant = "default", ...props }, ref) => {
  const variantClass = alertVariants[variant] || alertVariants.default;
  
  return (
    <div
      ref={ref}
      role="alert"
      className={`${variantClass} ${className}`}
      {...props}
    />
  )
})
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef(({ className = "", ...props }, ref) => (
  <h5
    ref={ref}
    className={`mb-1 font-medium leading-none tracking-tight ${className}`}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`text-sm [&_p]:leading-relaxed ${className}`}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }