import { Pagination } from '@mui/material';
import React from 'react';
import { styled } from 'styled-components';

const CommentFormBlock = styled.div`
  display: flex;
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
  height:36.5rem;
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
  font-size: 1.125rem;
  margin: 1rem;
`

const CommentForm = ({currentPageComments, commentsPage, itemsPerPage, page, handleChange}) => {
  return (
    <CommentFormBlock>
      <CommentBox>
        {
          currentPageComments.map((comment, index) => (
            <Comment key={index}>{comment}</Comment>
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