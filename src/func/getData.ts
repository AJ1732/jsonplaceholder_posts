type PostsProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getPosts = async (
  page: number,
  limit: number,
): Promise<PostsProps[]> => {
  const urlParams = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;
  const postResponse = await fetch(urlParams, { cache: "no-store"  });

  if (!postResponse.ok) {
    throw new Error("failed to fetch");
  }

  return await postResponse.json();
};

export const getSinglePost = async (id: number): Promise<PostsProps> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed to fetch");
  }

  return await res.json();
};
interface SingleUserProps {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const getSingleUser = async (id: number): Promise<SingleUserProps> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed to fetch");
  }

  return await res.json();
};