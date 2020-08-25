import React from 'react';
import { UserResponse, BaseActivityGroupResponse } from '../types';
declare type Props = {
    activityGroup: any;
    onClickNotification?: (activityGroup: BaseActivityGroupResponse) => unknown;
    onClickUser?: (input: UserResponse) => unknown;
    onMarkAsRead?: (group: true | BaseActivityGroupResponse | ReadonlyArray<BaseActivityGroupResponse>) => Promise<unknown> | null | undefined;
};
declare const _default: React.FC<Props>;
export default _default;
