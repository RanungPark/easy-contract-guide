import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { changeImgUrl, toggleSwitch } from '../../modules/menu';
import { AiOutlineUp, AiOutlineDown} from "react-icons/ai";
import palette from '../../libs/styles/palette';

const MenuRegisterBlock = styled.div``;

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

const MenuRegister = () => {

  const dispatch = useDispatch();
  const {registerMenu, register} = useSelector(({menu, file}) => ({
    registerMenu : menu.registerMenu,
    register: file.register,
  }))

  const {registerToggle} = registerMenu;
  const {file} = register;

  let imageUrls
  if(file !== null) {
    imageUrls = file.urls.map(item => item);
  }

  const handleClick = (e) => {
    dispatch(
      toggleSwitch({
        form: 'registerMenu',
        key: 'registerToggle',
        value: !registerToggle,
      }))
  }

  return (
    <MenuRegisterBlock>
      <MenuHeader onClick={handleClick}>
        <div>등기부등본 보기</div>
        {
          registerToggle === false ? <AiOutlineDown /> : <AiOutlineUp />
        }
      </MenuHeader>
        {
          registerToggle === true && <>
          {imageUrls.map((imageUrl, index) => (
            <>
              <MenuBody onClick={() => 
                dispatch(
                  changeImgUrl({
                    form: 'registerMenu',
                    key: 'registerImgUrl',
                    value: imageUrl,
                  }),
                )
              }>
                <div>등기부등본 {index + 1}p 보기</div>
                <PdfImage key={index} src={imageUrl} alt={`Image ${index}`} />
              </MenuBody>
            </>
            ))} </>
        }
    </MenuRegisterBlock >
  );
};

export default MenuRegister;