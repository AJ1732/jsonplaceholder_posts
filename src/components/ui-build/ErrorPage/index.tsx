"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components";
import { ErrorFig } from "@/components/svgs";
import { Contrail_One } from "next/font/google";
import Link from "next/link";

const contrail_one = Contrail_One({ weight: ["400"], subsets: ["latin"] });

const ErrorPage = ({ message }: { message: string }) => {
  const router = useRouter();

  return (
    <div className="mx-auto flex size-full max-w-3xl items-center justify-between gap-10 py-16 max-lg:flex-col-reverse lg:pb-5">
      <div className="flex flex-col gap-4">
        <h3
          className={`text-5xl font-extrabold lg:text-7xl ${contrail_one.className}`}
        >
          Oops!
        </h3>
        <p className="text-lg lg:text-xl">
          Something went wrong, <br />
          {message} <br /> <br />
        </p>
        <Link href="/">
          <Button className="py-6 text-lg" onClick={() => router.push(`/`)}>
            Go Home
          </Button>
        </Link>
      </div>

      <ErrorFig className="h-fit max-w-60" />
    </div>
  );
};
export default ErrorPage;
