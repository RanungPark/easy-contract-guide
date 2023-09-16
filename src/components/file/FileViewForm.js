import { Pagination } from '@mui/material';
import React from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { styled } from 'styled-components';

const FileViewFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PdfImage = styled.img`
  width: 100%;
  height: 100%;
`

const PaginationPosition = styled(Pagination)`
  display: flex;
  justify-content: center;
`
const FileViewForm = ({ itemsPerPage, page, handleChangePage, currentPageImages, imageUrlsPages}) => {
  return (
    <FileViewFormBlock>
      {currentPageImages.map((imageUrl, index) => (
        <>
          <TransformWrapper initialScale={1} minScale={1} maxScale={3}>
            <TransformComponent>
              <figure>
                <PdfImage key={index} src={imageUrl} alt={`Image ${index}`} />
              </figure>
            </TransformComponent>
          </TransformWrapper>
        </>
      ))}
      <PaginationPosition
        count={Math.ceil(imageUrlsPages / itemsPerPage)}
        page={page}
        onChange={handleChangePage}
        color="primary" 
      />
    </FileViewFormBlock >
  );
};

export default FileViewForm;