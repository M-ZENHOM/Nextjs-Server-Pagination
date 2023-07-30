"use client"
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, forwardRef } from "react";

type ActiveLinkProps = LinkProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        activeClassName?: string
    }


const ActiveLink = forwardRef<HTMLAnchorElement, ActiveLinkProps>(({ className, activeClassName, href, ...props }, ref) => {
    const pathName = usePathname()
    const active = pathName === href

    return (
        <Link
            ref={ref}
            href={href}
            className={cn(className, active && activeClassName)}
            {...props}
        />
    )
}
);

ActiveLink.displayName = "ActiveLink"

export { ActiveLink }