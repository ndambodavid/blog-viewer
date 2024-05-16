import { Center } from '@chakra-ui/react';
import { ErrorBox } from '@/common/UIElements';
import { Post, MoreArticles } from './components';
import { Comment } from '@/common/components/misc';

const PostPage = ({ post, posts, error }) => {
  return (
    <>
      {error ? (
        <Center mt={8}>
          <ErrorBox error={error} />
        </Center>
      ) : (
        <>
          <Post post={post} error={error} />
          <Comment />
          <MoreArticles posts={posts} />
        </>
      )}
    </>
  );
};

export default PostPage;
