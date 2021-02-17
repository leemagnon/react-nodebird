import React, { useState, useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
// styled-components 는 페이지에서 어떤 컴포넌트가 렌더링 됐는지 추적해서 style을 주입한다.
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [Id, setId] = useState('');
  const [Password, setPassword] = useState('');

  const onChangeId = useCallback(e => {
    setId(e.target.value);
  }, []);

  // useCallback -> 함수 캐싱
  const onChangePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(Id, Password);
    setIsLoggedIn(true);
  }, [Id, Password]);

  // Virtual DOM
  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={Id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={Password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
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
