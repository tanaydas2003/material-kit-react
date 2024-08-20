import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'top', title: 'Editor', href: paths.dashboard.overview },
  { key: 'top', title: 'Schedule', href: paths.dashboard.customers},
  { key: 'bottom', title: 'Teams', href: paths.dashboard.customers},
  { key: 'bottom', title: 'Settings', href: paths.dashboard.customers},
] satisfies NavItemConfig[];
