import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-transparent",
        secondary: "bg-secondary text-secondary-foreground border-transparent",
        outline: "text-foreground",
        ghost: "bg-transparent text-foreground border-transparent",
      },
      tone: {
        brand:
          "bg-[color:var(--brand-primary)]/25 text-gray-800 ring-1 ring-[color:var(--brand-primary)]/40",
        cta:
          "bg-[color:var(--brand-cta)]/20 text-gray-900 ring-1 ring-[color:var(--brand-cta)]/40",
        none: "",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[11px]",
        md: "px-3 py-1",
      },
    },
    defaultVariants: { variant: "secondary", tone: "none", size: "md" },
  }
)

type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>

function Badge({ className, variant, tone, size, ...props }: BadgeProps) {
  return (
    <div
      data-slot="badge"
      className={cn(badgeVariants({ variant, tone, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }



