import React from 'react';
import { connect } from 'react-redux';
import { Post } from 'components/post/post';
import * as actions from 'store/reducers/posts/actions';
import { useStyles } from './styles';

const LandingPageComponent = ({ posts, add, fetchPosts }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    add(value);
    setValue('');
  };

  return (
    <div className={classes.page}>
      <form>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
      <div>
        {posts.map((item) => (
          <Post text={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ posts: state.posts });
const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(actions.add(value)),
  fetchPosts: () => dispatch(actions.fetch()),
});

export const LandingPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPageComponent);
