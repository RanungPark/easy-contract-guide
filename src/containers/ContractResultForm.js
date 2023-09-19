import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Button from '../components/common/Button';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { contractResultFailure, contractResultSuccess } from '../modules/result';
import CommentForm from '../components/comment/CommentForm';
import PieChartForm from '../components/comment/PieChartForm';

const ContractResultFormBlock = styled.div`
  width: 100%;
`;


const ContractResultForm = () => {
  const {contractResult, contractId} = useSelector(({result, file}) => ({
    contractResult : result.contractResult,
    contractId: file.contractId,
  }))

  const {result} = contractResult;

  const [result1, setResults1] = useState({});
  const [result2, setResults2] = useState({});
  const [result3, setResults3] = useState({});
  const [result4, setResults4] = useState({});

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    console.log('결과보기');

    const formData = new FormData();
    formData.append('contractId', contractId);
    axios.post('http://localhost:8080/result/contract', formData)
    .then(function (response) {
      dispatch(
        contractResultSuccess({
          form: 'contractResult',
          key: 'result',
          value: response.data.data
        })
      )
    })
    .catch(function (error) {
      dispatch(
        contractResultFailure({
          form: 'contractResult',
          key: 'result',
          value: error.response.data
        })
      )
    })
  }

    useEffect(() => {
      const {result, error} = contractResult;

      if(result) {
        const {resultFields} = result;
        const [resultFields1, resultFields2, resultFields3 ,resultFields4] = resultFields
        setResults1(resultFields1);
        setResults2(resultFields2);
        setResults3(resultFields3);
        setResults4(resultFields4);
      }
      if(error) {
        return;
      }
   
    },[contractResult]);


    const comments = []
    comments.push(result1.comment)
    comments.push(result2.comment)
    comments.push(result3.comment)
    comments.push(result4.comment)

    const itemsPerPage = 1;

    const [page, setPage] = useState(1);

    const handleChange = (event, newPage) => {
      setPage(newPage);
    }

    const commentsPage = comments.length

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageComments  = comments.slice(startIndex, endIndex);
  

  return (
    <ContractResultFormBlock>
      {result === null ? <>
        <form onSubmit={onSubmit}>
        <Button Button fullWidth>
          결과보기
        </Button>
        </form>
      </> : <>
      <PieChartForm />
      <CommentForm
        currentPageComments = {currentPageComments}
        commentsPage = {commentsPage}
        itemsPerPage = {itemsPerPage}
        page = {page}
        handleChange = {handleChange}
      />
      </>
      }
    </ContractResultFormBlock >
  );
};

export default ContractResultForm;