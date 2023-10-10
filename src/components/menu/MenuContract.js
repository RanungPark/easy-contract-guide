import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { AiOutlineUp, AiOutlineDown} from "react-icons/ai";
import { changeImgUrl, toggleSwitch } from '../../modules/menu';
import { useDispatch, useSelector } from 'react-redux';


const MenuContractBlock = styled.div``;

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

const MenuContract = () => {

  
  const dispatch = useDispatch();
  const {contractMenu, contract} = useSelector(({menu, file}) => ({
    contractMenu : menu.contractMenu,
    contract: file.contract,
  }))

  const {contractToggle} = contractMenu;
  const {file} = contract;

  let imageUrls
  if(file !== null) {
    imageUrls = file.urls.map(item => item);
  }

  const handleClick = (e) => {
    dispatch(
      toggleSwitch({
        form: 'contractMenu',
        key: 'contractToggle',
        value: !contractToggle,
      }))
  }


  return (
    <MenuContractBlock>
      <MenuHeader onClick={handleClick}>
        <div>임대차계약서 보기</div>
        {
          contractToggle === false ? <AiOutlineDown /> : <AiOutlineUp />
        }
      </MenuHeader>
        {
          contractToggle === true && <>
          {imageUrls.map((imageUrl, index) => (
            <>
              <MenuBody onClick={() => 
                dispatch(
                  changeImgUrl({
                    form: 'contractMenu',
                    key: 'contractImgUrl',
                    value: imageUrl,
                  }),
                )
              }>
                <div>임대차계약서 {index + 1}p 보기</div>
                <PdfImage key={index} src={imageUrl} alt={`Image ${index}`} />
              </MenuBody>
            </>
            ))} </>
        }
    </MenuContractBlock >
  );
};

export default MenuContract;