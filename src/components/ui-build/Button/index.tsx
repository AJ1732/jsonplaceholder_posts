import { Button } from "@/components/ui/button";

interface ButtonProps {
  className?: string;
  children: React.ReactNode
  onClick?: () => void
}

export default function ButtonDemo({ className, children, onClick }: ButtonProps) {
  return <Button className={className} onClick={onClick}>{children}</Button>;
}
