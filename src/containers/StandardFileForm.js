import React, { useState } from 'react';
import FileViewForm from '../components/file/FileViewForm';

const StandardFileForm = () => {
  const imageUrls = [
    `https://weaver-contractproject-159651426016-ap-northeast-2.s3.ap-northeast-2.amazonaws.com/a1397f9c-a8f1-4784-8235-0e1f9001916f_%ED%91%9C%EC%A4%80%EC%9E%84%EB%8C%80%EC%B0%A8%EA%B3%84%EC%95%BD%EC%84%9C.pdf.png`,
    `https://weaver-contractproject-159651426016-ap-northeast-2.s3.ap-northeast-2.amazonaws.com/a1397f9c-a8f1-4784-8235-0e1f9001916f_%ED%91%9C%EC%A4%80%EC%9E%84%EB%8C%80%EC%B0%A8%EA%B3%84%EC%95%BD%EC%84%9C.pdf-2.png`,
    `https://weaver-contractproject-159651426016-ap-northeast-2.s3.ap-northeast-2.amazonaws.com/a1397f9c-a8f1-4784-8235-0e1f9001916f_%ED%91%9C%EC%A4%80%EC%9E%84%EB%8C%80%EC%B0%A8%EA%B3%84%EC%95%BD%EC%84%9C.pdf-3.png`,
    `https://weaver-contractproject-159651426016-ap-northeast-2.s3.ap-northeast-2.amazonaws.com/a1397f9c-a8f1-4784-8235-0e1f9001916f_%ED%91%9C%EC%A4%80%EC%9E%84%EB%8C%80%EC%B0%A8%EA%B3%84%EC%95%BD%EC%84%9C.pdf-4.png`
  ];

  const itemsPerPage = 1; 
  
  const [page, setPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const imageUrlsPages = imageUrls.length

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageImages  = imageUrls.slice(startIndex, endIndex);

  return (
    <FileViewForm 
      type = '표준계약서'
      imageUrls = {imageUrls}
      itemsPerPage = {itemsPerPage}
      page = {page}
      handleChangePage = {handleChangePage}
      currentPageImages={currentPageImages}
      imageUrlsPages = {imageUrlsPages}
    />
  );
};

export default StandardFileForm;