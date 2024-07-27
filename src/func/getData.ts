export const getPosts = async (
  page: number,
  limit: number,
) => {
  const urlParams = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;
  const postResponse = await fetch(urlParams, { cache: "no-store"  });

  if (!postResponse.ok) {
    throw new Error("failed to fetch");
  }

  return await postResponse.json();
};