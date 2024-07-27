import { Card } from "@/components";
import { PostBg } from "@/components/svgs";
import { getSinglePost, getSingleUser } from "@/func/getData";
import { Contrail_One } from "next/font/google";
const contrail_one = Contrail_One({ weight: ["400"], subsets: ["latin"] });

type Props = {
  params: {
    id: number;
  };
};

const SinglePost = async ({ params }: Props) => {
  const post = await getSinglePost(params.id);

  const { userId, id, title, body } = post;
  const { name } = await getSingleUser(userId);

  // console.log(post);

  return (
    <section className="my-10 flex items-center justify-center">
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
    </section>
  );
};
export default SinglePost;
