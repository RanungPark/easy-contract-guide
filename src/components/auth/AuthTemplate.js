import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { Link } from 'react-router-dom';
import logoImg from '../../mock/img/logo3.png'

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    color: ${palette.gray[6]};
  }
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;

  .logoImg {
    width: 5rem;
    height: 5rem;
  }
`

const AuthTemplate = ({children}) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className='logo-area'>
          <Link to='/'>
            <div className='logoWrapper'>
              <img src={logoImg} alt="logo" className='logoImg'/>
              <div>Easy Contract Guide</div>
            </div>
          </Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock >
  );
};

export default AuthTemplate;