import { Home, Route, Sofa, Refrigerator, Trash2, Dumbbell, Package, type LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = { Home, Route, Sofa, Refrigerator, Trash2, Dumbbell };

export function ServiceIcon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const Icon = map[name] ?? Package;
  return <Icon className={className} aria-hidden="true" />;
}
