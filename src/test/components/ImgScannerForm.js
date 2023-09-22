import React from 'react';
import styled from 'styled-components';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
`
const ImgScannerForm = () => {

  return (
    <ImageContainer>
      <TransformWrapper initialScale={1} minScale={1} maxScale={3}>
        <TransformComponent>
          <figure>
          </figure>
        </TransformComponent>
      </TransformWrapper>
    </ImageContainer>
  );
};

export default ImgScannerForm;
