import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
// styled-components 는 페이지에서 어떤 컴포넌트가 렌더링 됐는지 추적해서 style을 주입한다.
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';
import useInput from '../hooks/useInput';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch(); // store.dispatch와 마찬가지
  const { logInLoading } = useSelector(state => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  // Virtual DOM
  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <br />
        <Input
          name="user-email"
          type="email"
          value={email}
          onChange={onChangeEmail}
          required
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={logInLoading}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;

/* 리렌더링 최적화를 위해 styled-components를 사용하고 싶지 않으면,
    useMemo를 이용하여 같은 객체를 유지하게 만들 수도 있다.
  
    useMemo -> 값을 캐싱

    const style = useMemo(() => ({ marginTop: 10 }, []));

    <div style={style}> ... </div> 이런 식으로 넣을 수 있다.
  */
