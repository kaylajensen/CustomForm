export const UPDATE_USER_INFO = 'UPDATE_USER_INFO'

export function updateUserInfo(name, info) {
  return {
    type: UPDATE_USER_INFO,
    name,
    info
  }
}
