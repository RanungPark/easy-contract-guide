import React from 'react';
import { styled } from 'styled-components';
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import palette from '../../libs/styles/palette';
import { changeImgUrl, toggleSwitch } from '../../modules/menu';

const MenuStandardBlock = styled.div``;

const MenuHeader = styled.div`
  background: #3DA5F5;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  color: white;
  padding: 0.7rem;
  justify-content: space-between;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

const MenuBody = styled.div`
  background: ${palette.gray[1]};
  font-weight: bold;
  font-size: 1rem;
  color: ${palette.gray[7]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem;
  height: 5rem;
  border-bottom: 1px solid #3DA5F5;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
const PdfImage = styled.img`
  height: 100%;
`

const MenuStandard = () => {
  const imageUrls = [
    `https://contract-guide.s3.ap-northeast-2.amazonaws.com/7c15e51b-9b14-4c3e-91e2-755de566bb61_2023-%ED%91%9C%EC%A4%80%EC%9E%84%EB%8C%80%EC%B0%A8%EA%B3%84%EC%95%BD%EC%84%9C-%EC%96%91%EC%8B%9D-PDF-1.pdf.png`,
    `https://contract-guide.s3.ap-northeast-2.amazonaws.com/21ad259b-88be-4c02-a3de-ccc0d2503110_2023-%ED%91%9C%EC%A4%80%EC%9E%84%EB%8C%80%EC%B0%A8%EA%B3%84%EC%95%BD%EC%84%9C-%EC%96%91%EC%8B%9D-PDF-2.pdf.png`,
    `https://contract-guide.s3.ap-northeast-2.amazonaws.com/6362eb0f-0efb-4d58-a289-25633a0fd040_2023-%ED%91%9C%EC%A4%80%EC%9E%84%EB%8C%80%EC%B0%A8%EA%B3%84%EC%95%BD%EC%84%9C-%EC%96%91%EC%8B%9D-PDF-3.pdf.png`,
    `https://contract-guide.s3.ap-northeast-2.amazonaws.com/382fed93-df6b-4db4-b797-0ba17e477c2c_2023-%ED%91%9C%EC%A4%80%EC%9E%84%EB%8C%80%EC%B0%A8%EA%B3%84%EC%95%BD%EC%84%9C-%EC%96%91%EC%8B%9D-PDF-4.pdf.png`
  ];

  const dispatch = useDispatch();
  const { standardMenu } = useSelector(({ menu }) => ({
    standardMenu: menu.standardMenu,
  }))

  const { standardToggle } = standardMenu;

  const handleClick = (e) => {
    dispatch(
      toggleSwitch({
        form: 'standardMenu',
        key: 'standardToggle',
        value: !standardToggle,
      }))
  }

  return (
    <MenuStandardBlock>
      <MenuHeader onClick={handleClick}>
        <div>표준계약서 보기</div>
        {
          standardToggle === false ? <AiOutlineDown /> : <AiOutlineUp />
        }
      </MenuHeader>
      {
        standardToggle === true && <>
          {imageUrls.map((imageUrl, index) => (
            <>
              <MenuBody onClick={() =>
                dispatch(
                  changeImgUrl({
                    form: 'standardMenu',
                    key: 'standardImgUrl',
                    value: imageUrl,
                  }),
                )
              }>
                <div>표준계약서 {index + 1}p 보기</div>
                <PdfImage key={index} src={imageUrl} alt={`Image ${index}`} />
              </MenuBody>
            </>
          ))} </>
      }
    </MenuStandardBlock >
  );
};

export default MenuStandard;