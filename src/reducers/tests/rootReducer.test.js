import reducer from '../rootReducer'

describe('root reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        updateUserInfo: {}
      }
    )
  });

  it('should handle UPDATE_USER_INFO', () => {
    expect(
      reducer({}, {
        type: 'UPDATE_USER_INFO',
        name: 'firstName',
        info: 'Corbin'
      })
    ).toEqual(
      {"updateUserInfo": {"firstName": "Corbin"}}
    )
  });
});
