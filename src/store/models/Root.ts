import { types } from 'mobx-state-tree';

import commentsStore from './Comments';
import getId from '../../utils/getId';

export const RootModel = types.model({
  commentsStore
});

export const initialState = RootModel.create({
  commentsStore: {
    comments: [
      {
        id: getId(),
        text: 'The trailer contains the worst bit',
        author: 'Elon Musk',
        avatar:
          'data:image/jpeg;base64,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',
        // two days ago
        date: new Date().setDate(new Date().getDate() - 2),
        rating: 0,
        hidden: false
      },
      {
        id: getId(),
        text: 'Funny and entertaining version by Guy Ritchie',
        author: 'Fica Pacianskiy',
        avatar: null,
        // 45 minutes ago
        date: new Date().setMinutes(new Date().getMinutes() - 45),
        rating: 3,
        hidden: false
      }
    ]
  }
});