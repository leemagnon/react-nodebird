/**
 * 모든 페이지에서 공통인 것은 _app.js에 넣는다. pages들의 공통 부분.
 */

import PropTypes from 'prop-types';
import Head from 'next/head'; // head를 수정할 수 있게 Head 컴포넌트 제공
import 'antd/dist/antd.css'; // 웹팩이 알아서 style 태그로 변경해서 처리해줌.

import wrapper from '../store/configureStore';

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired, // <Component />처럼 JSX로 쓸 수 있는 것들을 elementType이라고 한다.
};

export default wrapper.withRedux(NodeBird);
