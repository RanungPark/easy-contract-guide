import React, { useState } from 'react';
import styled from 'styled-components';
import { css } from '@emotion/react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
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
