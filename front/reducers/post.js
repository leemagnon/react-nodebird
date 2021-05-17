export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '쥐돌이',
      },
      content: '첫번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src:
            'https://user-images.githubusercontent.com/43109681/118350925-0c3c5580-b594-11eb-904a-cfa35809a4d5.png',
        },
        {
          src:
            'https://user-images.githubusercontent.com/43109681/118350925-0c3c5580-b594-11eb-904a-cfa35809a4d5.png',
        },
        {
          src:
            'https://user-images.githubusercontent.com/43109681/118350925-0c3c5580-b594-11eb-904a-cfa35809a4d5.png',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'nero',
          },
          content: '우와앙',
        },
        {
          User: {
            nickname: '마크',
          },
          content: 'nct127입니당',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니당',
  User: {
    id: 1,
    nickname: '쥐돌이',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
