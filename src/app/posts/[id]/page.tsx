import { Card } from "@/components";
import { PostBg, QuoteIcon } from "@/components/svgs";
import { getPostComments, getSinglePost, getSingleUser } from "@/func/getData";
import { Contrail_One } from "next/font/google";

const contrail_one = Contrail_One({ weight: ["400"], subsets: ["latin"] });

type Props = {
  params: {
    id: number;
  };
};

const SinglePost = async ({ params }: Props) => {
  const post = await getSinglePost(params.id);
  const comments = await getPostComments(params.id);

  const { userId, id, title, body } = post;
  const { name } = await getSingleUser(userId);

  return (
    <section className="my-10 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-between gap-10 max-lg:flex-col">
          <div className="relative flex h-[22.875rem] w-96 items-center justify-center overflow-hidden rounded-lg">
            <p className={`z-10 pt-4 text-[240px] ${contrail_one.className}`}>
              {id}
            </p>
            <PostBg className={`absolute`} />
          </div>

          <Card
            title={title}
            description={id}
            content={body}
            user={name}
            className="mb-auto h-fit w-full max-w-lg border-0 shadow-none"
          />
        </div>

        <hr className="text-primary" />

        <div className="w-full max-w-5xl space-y-6 p-12 text-left lg:p-24">
          <h3>Comments</h3>

          <div className="w-full space-y-6">
            {comments.map(({ id, email, body }) => (
              <blockquote
                key={id}
                className="flex flex-col text-sm font-light italic text-gray-900 dark:text-white"
              >
                <div>
                  <QuoteIcon />
                  <p className="first-letter:capitalize">{body}</p>
                </div>

                <cite className="ml-auto font-mono">- {email}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SinglePost;
