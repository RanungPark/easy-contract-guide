import { Pagination } from '@mui/material';
import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';

const CommentFormBlock = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
`;

const PaginationPosition = styled(Pagination)`
  display: flex;
  justify-content: center;
  bottom: 0;
`
const CommentBox = styled.div`
  height:18rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display:none;
  }

  & {
  -ms-overflow-style: none;
  scrollbar-width: none;
  }
`;


const Comment = styled.div`
  font-size: 1.12rem;
  margin: 1rem;
  white-space: pre-wrap;

  span {
    color: #ef6681;
    font-weight: 800;
  }

  b {
    font-size: 1.25rem;
    color: #3DA5F5;
  }
`

const CommentForm = ({currentPageComments, commentsPage, itemsPerPage, page, handleChange}) => {
  return (
    <CommentFormBlock>
      <CommentBox>
        {
          currentPageComments.map((comment, index) => (
            <Comment key={index} dangerouslySetInnerHTML={ {__html: comment} }></Comment>
          ))
        }
      </CommentBox>
      <PaginationPosition
        count={Math.ceil(commentsPage / itemsPerPage)}
        page={page}
        onChange={handleChange}
        color="primary" 
      />
    </CommentFormBlock >
  );
};

export default CommentForm;