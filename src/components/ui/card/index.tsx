import * as React from "react"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-xl border bg-white text-gray-900 shadow-sm ${className}`}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  />
)

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
     className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
)

const CardDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
     className={`text-sm text-gray-500 ${className}`}
    {...props}
  />
)

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
)

const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />
)

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
