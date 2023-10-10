import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { useDispatch, useSelector } from 'react-redux';
import { changeImgUrl, toggleSwitch } from '../../modules/menu';
import { AiOutlineUp, AiOutlineDown} from "react-icons/ai";

const MenuBuildingBlock = styled.div``;

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

const MenuBuilding = () => {

  const dispatch = useDispatch();
  const {buildingMenu, building} = useSelector(({menu, file}) => ({
    buildingMenu : menu.buildingMenu,
    building: file.building,
  }))

  const {buildingToggle} = buildingMenu;
  const {file} = building;

  let imageUrls
  if(file !== null) {
    imageUrls = file.urls.map(item => item);
  }

  const handleClick = (e) => {
    dispatch(
      toggleSwitch({
        form: 'buildingMenu',
        key: 'buildingToggle',
        value: !buildingToggle,
      }))
  }

  return (
    <MenuBuildingBlock>
      <MenuHeader onClick={handleClick}>
        <div>건축물대장 보기</div>
        {
          buildingToggle === false ? <AiOutlineDown /> : <AiOutlineUp />
        }
      </MenuHeader>
        {
          buildingToggle === true && <>
          {imageUrls.map((imageUrl, index) => (
            <>
              <MenuBody onClick={() => 
                dispatch(
                  changeImgUrl({
                    form: 'buildingMenu',
                    key: 'buildingImgUrl',
                    value: imageUrl,
                  }),
                )
              }>
                <div>건축물대장 {index + 1}p 보기</div>
                <PdfImage key={index} src={imageUrl} alt={`Image ${index}`} />
              </MenuBody>
            </>
            ))} </>
        }
    </MenuBuildingBlock >
  );
};

export default MenuBuilding;