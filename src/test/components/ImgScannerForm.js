import React, { useState } from 'react';
import imgUrl from '../../mock/image/3f78bde9-2dc5-4965-a186-42ababa09492_2023-표준임대차계약서-양식-PDF.pdf-2.png'
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
            <Image src={imgUrl}/>
          </figure>
        </TransformComponent>
      </TransformWrapper>
    </ImageContainer>
  );
};

export default ImgScannerForm;
