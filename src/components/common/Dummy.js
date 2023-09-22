import React, { useState } from 'react';
import FileViewForm from '../file/FileViewForm';

const Dummy = ({imageUrls}) => {

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
    itemsPerPage = {itemsPerPage}
    page = {page}
    handleChangePage = {handleChangePage}
    currentPageImages={currentPageImages}
    imageUrlsPages = {imageUrlsPages}
  />
  );
};

export default Dummy;