import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import ICommentList from '../../core/interface/ICommentList';

interface ICommentListProps {
  comments: ICommentList
  compact?: boolean
  stacked?: boolean
  depth?: number
}

/**
 * Component for displaying list of comments.
 */
const CommentList = ({ comments, compact, stacked, depth = 0 }: ICommentListProps) => {
  return (
    <Wrapper depth={depth}>
      {comments.map<ReactNode>((comment, i) => {
        return <Comment key={i} comment={comment} compact={compact} stacked={stacked} depth={depth}/>
      })}
    </Wrapper>
  )
};

interface StyledProps {
  depth: number
}

const Wrapper = styled.div<StyledProps>`
  padding: ${props => props.depth === 0 ? 10 : 0}px;
`;

export default CommentList;