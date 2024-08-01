import { cn } from "@/lib/utils";
interface TextLineProps {
  text: string;
  className: string;
}

const TextLine: React.FC<TextLineProps> = ({ text, className }) => {
  return (
    <div className="relative w-fit">
      <div className="absolute -left-1 bottom-1 -z-[1] h-0.5 w-12 bg-custom"></div>
      <h3 className={cn("first-letter:capitalize", className)}>{text}</h3>
    </div>
  );
};
export default TextLine;
