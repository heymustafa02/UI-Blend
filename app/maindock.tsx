"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
  Magnet,
  // Add this import for robot icon
  BotIcon
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/',
  },
  {
    title: 'Canvas',
    icon: (
      <Package className='h-full w/full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/canvas',
  },
  {
    title: 'Color Wave',
    icon: (
      <Component className='h-full w/full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/color-wave',
  },
  {
    title: 'Color Box',
    icon: (
      <Activity className='h-full w/full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/color-box',
  },
  {
    title: 'Change Log',
    icon: (
      <ScrollText className='h-full w/full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/changelog',
  },
  {
    title: 'Contact',
    icon: (
      <Mail className='h-full w/full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/contact',
  },
  {
    title: 'Robot',
    icon: (
      <BotIcon className='h-full w/full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/robot',
  },
  {
    title: 'Gravity',
    icon: (
      <Magnet className='h-full w/full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/gravity',
  },
  {
    title: 'Theme',
    icon: (
      <SunMoon className='h-full w/full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '/theme',
  },
];

export function AppleStyleDock() {
  return (
    <div className='fixed bottom-4 left-1/2 max-w-full -translate-x-1/2 z-50'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <Link key={idx} href={item.href} passHref>
            <DockItem
              className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
}
