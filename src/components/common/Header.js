import React from 'react';
import { styled } from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';
import palette from '../../libs/styles/palette';
import { ResponsiveBig } from './Responsive';
import { useSelector } from 'react-redux';

const HeaderBlock = styled.div`
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(ResponsiveBig)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .headerList {
    font-weight: 800;
    color: ${palette.gray[8]};
    &:hover {
      color: ${palette.cyan[7]};
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
          Easy Contract Guide  
          </Link>
          <Link to="/standard" className='headerList'>표준 계약서와 비교</Link>
          <Link to="/standard" className='headerList'>건축물 대장과 비교</Link>
          <Link to="/standard" className='headerList'>등기부 등본과 비교</Link>
          <Link to="/guide" className='headerList'>가이드</Link>
          <Link to="/upload/contract" className='headerList'>계약서 추가</Link>
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