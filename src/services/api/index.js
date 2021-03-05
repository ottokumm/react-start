import { Api } from 'constants/api';
import { Request } from 'utils/api';

const { get } = Request;

const postsAPI = {
  getPosts: () => get(Api.Blog.GET_POSTS),
};

export { postsAPI };
