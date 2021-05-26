// import React from 'react'; <- Next는 이 구문이 필요 없다.
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(
    state => state.post
  );

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      // scrollY: 얼마나 내렸는지, clientHeight: 화면 보이는 길이, scrollHeight: 총 길이. scrollY + clientHeight = scrollHeight
      console.log(
        window.scrollY,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight
      );
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        // 스크롤을 끝까지 내리면
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts]);

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;

/**
 * pages 폴더는 무조건 이름이 pages 여야 한다.
 * 그래야 nextjs가 pages 폴더를 인식하고, 그 안에 있는 파일들을 개별적인 페이지 컴포넌트로 만들어 준다.
 * pages 안에 들어 있어야 코드 스플리팅이 된다.
 */
