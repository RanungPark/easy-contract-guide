import React, { useState } from 'react';
import FileViewForm from '../components/file/FileViewForm';
import { useSelector } from 'react-redux';

const ContractFileForm = () => {
  const {contract} = useSelector(({file}) => ({
    contract: file.contract,
  }))

  const {file} = contract;

  const imageUrls = file.urls.map(item => item);

  const itemsPerPage = 1; 
  
  const [page, setPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const imageUrlsPages = file.pages;

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

export default ContractFileForm;