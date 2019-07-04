import * as React from 'react';
import { CommentEntity } from '../models';
export interface Props {
    comment: CommentEntity;
    showAsIs?: boolean;
    reactRouter: boolean;
}
declare const Comment: React.StatelessComponent<Props>;
export default Comment;
