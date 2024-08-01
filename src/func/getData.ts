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
  const postResponse = await fetch(urlParams, {
    // method: "GET",
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    // },
  });

  if (!postResponse.ok) {
    throw new Error("failed to fetch");
  }

  return await postResponse.json();
};

export const getSinglePost = async (id: number): Promise<PostsProps> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
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
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  if (!res.ok) {
    throw new Error("failed to fetch");
  }

  return await res.json();
};

// https://jsonplaceholder.typicode.com/posts/1/comments

interface PostComments {
  postId: number
  id: number;
  name: string;
  email: string;
  body: string;
}

export const getPostComments = async (id: number): Promise<PostComments[]> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  if (!res.ok) {
    throw new Error("failed to fetch");
  }

  return await res.json();
};
