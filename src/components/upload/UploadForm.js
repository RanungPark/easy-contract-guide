import React from 'react';
import { styled } from 'styled-components';
import { LuFileUp } from 'react-icons/lu';
import palette from '../../libs/styles/palette';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const UploadFormBlock = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  margin-top: 2rem;
  flex-direction:column;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  .text {
    font-size: 1rem;
    color: ${palette.gray[7]};
    margin-top: 1rem;
  }
  .filename{
    font-size: 0.85rem;
    color: ${palette.gray[7]};
    margin-top: 1rem;
  }
  display:flex;
  justify-content:center;
  align-items: center;
  flex-direction:column;
  margin-top: 1rem;
  color: ${palette.gray[7]};
  font-size: 5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border: 0.10rem dashed ${palette.gray[5]};
  border-radius: 25px;
  padding: 2rem;
  width: 18rem;
  height: 18rem;

  &:hover {
    color: ${palette.gray[6]};
  }
`

const Footer = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  width: 100%;

  .oneLink{
    justify-content: center;
  }

  a {
    height: 2.5rem;
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${palette.gray[6]};
    border-radius: 4px;
    padding: 0.5rem;
    &:hover {
      color: ${palette.gray[5]};
    }
  }
`

const ButtonWithMarginTop = styled(Button)`
  margin-top:1rem;
`

const MessageMessage = styled.div`
  color: ${palette.cyan[7]};
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`

const UploadForm = ({type, onChange, onSubmit, text, message}) => {
  return (
    <UploadFormBlock>
      <form onSubmit={onSubmit}>
        <StyledInput id='upload' type='file' onChange={onChange} accept='.pdf'/>
        <StyledLabel htmlFor='upload'>
          <LuFileUp />
          {text === '' ? (
          <div className='text'>Drop your file here or Click to browse</div>
          ) : (
          <div className='filename'>{text}</div>
          )}
        </StyledLabel>
        <ButtonWithMarginTop fullWidth >{"업로드하기"}</ButtonWithMarginTop>
          
        {message && <MessageMessage>{message}</MessageMessage>}
      </form>
      <Footer>
        {type === 'contract' ? (
          <>
           <Link to='/upload/building'>
              건축물 대장
            </Link>
            <Link to='/upload/register'>
              등기부 등본
            </Link>
          </>
        ) : (type === 'building' ? (
            <Link to='/upload/register'>
              등기부 등본
            </Link>
        ) : (
          <>
            <Link to='/upload/building'>
              건축물 대장
            </Link>
          </>
        ))}
      </Footer>
    </UploadFormBlock >
  );
};

export default UploadForm;