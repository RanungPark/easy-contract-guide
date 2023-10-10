import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import MenuStandard from './MenuStandard';
import MenuContract from './MenuContract';
import MenuStandardResult from './MenuStandardResult';

const MenuTemplateBlock = styled.div`
  height: 93vh;
  background: ${palette.gray[3]};
  display: flex;
  padding: 2rem;
  align-items: center;
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
  flex-direction: column;
  padding-top: 1rem;
  overflow: scroll;


  &::-webkit-scrollbar {
    display:none;
  }

  & {
  -ms-overflow-style: none;
  scrollbar-width: none;
  }
`;

const MenuWrapper = styled.div`
  width:21vw;
`


const MenuTemplate = ({type}) => {
 
  return (
    <MenuTemplateBlock>
      {type === 'standard' && <>
        <MenuWrapper>
          <MenuStandard />
          <MenuContract />
          <MenuStandardResult />
        </MenuWrapper>
      </>}

      <MenuWrapper>
        {/* <MenuHeader>
          <div>나의계약서 보기</div>
          <AiOutlineDown />
        </MenuHeader> */}
      </MenuWrapper>

      <MenuWrapper>
        {/* <MenuHeader>
          <div>계약서 결과 보기</div>
          <AiOutlineEllipsis />
        </MenuHeader> */}
      </MenuWrapper>
      <MenuWrapper>
        {/* <MenuHeader>
          <div>분석 결과</div>
          <AiOutlineDown />
        </MenuHeader> */}
      </MenuWrapper>

    </MenuTemplateBlock >
  );
};

export default MenuTemplate;