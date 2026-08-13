import {
  StackIcon,
  DatabaseIcon,
  DevicesIcon,
  CodeSimpleIcon,
  CurrencyCircleDollarIcon,
  ReceiptIcon,
  MapPinIcon,
  CheckIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
  ListIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { IconProps } from "@phosphor-icons/react";

const ICONS = {
  stack: StackIcon,
  database: DatabaseIcon,
  devices: DevicesIcon,
  "code-simple": CodeSimpleIcon,
  "currency-circle-dollar": CurrencyCircleDollarIcon,
  receipt: ReceiptIcon,
  "map-pin": MapPinIcon,
  check: CheckIcon,
  "github-logo": GithubLogoIcon,
  "linkedin-logo": LinkedinLogoIcon,
  "whatsapp-logo": WhatsappLogoIcon,
  list: ListIcon,
  x: XIcon,
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({ name, ...props }: { name: IconName } & IconProps) {
  const Component = ICONS[name];
  return <Component {...props} />;
}
