import {
  /* Functions */
  markNotificationsAsRead,
  dismissNotifications,

  /* Constants */
  MARK_ALL_NOTIFICATIONS_READ,
  DISMISS_NOTIFICATIONS
} from '../Actions';

describe("Navbar > Actions", () => {

  it("markNotificationsAsRead()", () => {
    const result = { type: MARK_ALL_NOTIFICATIONS_READ };
    expect(markNotificationsAsRead()).toStrictEqual(result);
  })

  it("dismissNotifications()", () => {
    const result = { type: DISMISS_NOTIFICATIONS };
    expect(dismissNotifications()).toStrictEqual(result);
  })

})
