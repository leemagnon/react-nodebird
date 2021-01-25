// import React from 'react'; <- Next는 이 구문이 필요 없다.
import AppLayout from '../components/AppLayout';

const Home = () => {
  return (
    <AppLayout>
      <div>Hello, What!</div>
    </AppLayout>
  );
};

export default Home;

/**
 * pages 폴더는 무조건 이름이 pages 여야 한다.
 * 그래야 nextjs가 pages 폴더를 인식하고, 그 안에 있는 파일들을 개별적인 페이지 컴포넌트로 만들어 준다.
 * pages 안에 들어 있어야 코드 스플리팅이 된다.
 */
