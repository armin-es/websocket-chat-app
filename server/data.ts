import {Message} from '../types';

export const data: {[key: string]: Message[]} = {
    'News': [
        {userName: 'User A', text: 'news message 1', time: new Date('2021-01-01')},
        {userName: 'User B', text: 'news message 2', time: new Date('2021-02-01')},
        {userName: 'User C', text: 'news message 3', time: new Date('2021-03-01')}
    ],
    'Entertainment': [
        {userName: 'User A', text: 'entertainment message 1', time: new Date('2021-01-01')},
        {userName: 'User B', text: 'entertainment message 2', time: new Date('2021-02-01')},
    ],
    'Sports': [
        {userName: 'User A', text: 'sports message 1', time: new Date('2021-01-01')},
        {userName: 'User B', text: 'sports message 2', time: new Date('2021-02-01')},
        {userName: 'User C', text: 'sports message 3', time: new Date('2021-03-01')},
        {userName: 'User D', text: 'sports message 4', time: new Date('2021-04-01')}
    ]
};