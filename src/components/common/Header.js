import React from 'react';
import { styled } from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';
import palette from '../../libs/styles/palette';
import { ResponsiveBig } from './Responsive';
import { useSelector } from 'react-redux';
import logoImg from '../../mock/img/logo3.png';

const HeaderBlock = styled.div`
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(ResponsiveBig)`
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .logoImg {
    width: 2.5rem;
    height: 2.5rem;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .headerList {
    font-weight: 800;
    color: ${palette.gray[8]};
    &:hover {
      color: ${palette.cyan[5]};
    }
  }
  .logoWrapper{
    display:flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: ${palette.gray[7]};
    }
  }
`
const UserIndo = styled.div`
  font-weight: 800;
  margin: 0 0.5rem;
`

const Header = () => {
  const {user} = useSelector(({user}) => 
  ({
    user: user.user,
  }));

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/standard" className='logo'>
            <div className='logoWrapper'>
              <img src={logoImg} alt="logo" className='logoImg'/>
              <div>Easy Contract Guide</div>
            </div>
          </Link>
          <Link to="/standard" className='headerList'>표준 계약서와 비교</Link>
          <Link to="/building" className='headerList'>건축물 대장과 비교</Link>
          <Link to="/register" className='headerList'>등기부 등본과 비교</Link>
          <Link to="/upload/contract" className='headerList'>계약서 추가</Link>
          <Link to="/test" className='headerList'>계약서 작성 가이드</Link>
          <Link to="/guide" className='headerList'>사용자 사용 가이드</Link>
          {
            user ? (
              <div className='right'>
                <UserIndo>{user.username}</UserIndo>
                <Button cyan>로그아웃</Button>
              </div>
            ) :(
              <div className='right'>
                <Button to="/" cyan>로그인</Button>
              </div>
            )
          }
        </Wrapper>
      </HeaderBlock >
    </>
  );
};

export default Header;