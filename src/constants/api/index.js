export const API_HOST = 'http://localhost:5000';

const BLOG = 'blog';

const Blog = {
  GET_POSTS: `${BLOG}/posts`,
  GET_POST: `${BLOG}/post/:id`,
};

export const Api = {
  Blog,
};
