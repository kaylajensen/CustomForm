import * as actions from '../actions'

describe('actions', () => {
  it('should create an action to update user information', () => {
    let name = "firstName";
    let info = "Corbin";
    const expectedAction = {
      type: 'UPDATE_USER_INFO',
      name,
      info
    }
    expect(actions.updateUserInfo(name, info)).toEqual(expectedAction)
  })
})
