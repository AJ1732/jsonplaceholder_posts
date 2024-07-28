import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  title: string;
  description?: number;
  content: string | React.ReactNode;
  footer?: string | React.ReactNode;
  className?: string;
  user?: string;
}

const CardDemo = ({
  title,
  description,
  content,
  footer,
  className,
  user,
}: Props) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="max-w-96 first-letter:capitalize">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {typeof content === "string" ? (
          <p className="first-letter:capitalize">{content}</p>
        ) : (
          content
        )}
      </CardContent>
      <CardFooter>
        <CardDescription>
          post by <span className="italic">{user}</span>
        </CardDescription>
        {typeof footer === "string" ? <p>{footer}</p> : footer}
      </CardFooter>
    </Card>
  );
};
export default CardDemo;
