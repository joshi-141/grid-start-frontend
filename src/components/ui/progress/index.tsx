import * as React from "react";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, ...props }, ref) => (
    <div
      ref={ref}
       className={`relative h-3 w-full overflow-hidden rounded-full bg-gray-200 ${className}`}
      {...props}
    >
      <div
          className={`h-full bg-green-500 transition-all duration-300 ${className}`}
        style={{ width: `${value}%` }}
      />
    </div>
  )
);

Progress.displayName = "Progress";

export default Progress;
