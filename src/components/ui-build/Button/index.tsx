import { Button } from "@/components/ui/button";

interface ButtonProps {
  className?: string;
  children: React.ReactNode
}

export default function ButtonDemo({ className, children }: ButtonProps) {
  return <Button className={className}>{children}</Button>;
}
