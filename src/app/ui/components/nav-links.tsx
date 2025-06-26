'use client'
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "Posts",
    href: "/blog/posts",
    icon: DocumentDuplicateIcon,
  },
  { name: "About", href: "/about", icon: UserGroupIcon },
  { name: "Contact", href: "/contact", icon: EnvelopeIcon },
];

type NavLinksProps = {
  onClick?: () => void;
};

export default function NavLinks({ onClick }: NavLinksProps) {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onClick}
            className={clsx(
              " flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:justify-start md:px-3 transition-colors",
              {
                "bg-purple-100 text-purple-700": isActive,
                " hover:bg-purple-100 opacity-80 hover:text-purple-700 text-gray-100":
                  !isActive,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
