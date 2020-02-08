import loadCategory,
{
  /* Functions */
  requestCategory,

  /* Constants */
  REQUEST_CATEGORY,
  RECEIVE_CATEGORY,
  RECEIVE_CATEGORY_FAILURE,
  REQUEST_CATEGORY_STORIES,
  RECEIVE_CATEGORY_STORIES,
  RECEIVE_CATEGORY_STORIES_FAILURE,
} from '../Actions';
import Fetch from '../../store/Fetch';

describe("Login > Actions", () => {

  it("requestCategory()", () => {
    const result = {
      type: REQUEST_CATEGORY,
      id: 1
    };

    expect(requestCategory(1)).toStrictEqual(result);
  })

  it("loadCategory > FAIL", async () => {
    const url = '/api/categories/1/1';
    const dispatched = [];

    Fetch.POST = jest.fn(() => {
      return {
      }
    });

    const action = { id: 1 };

    const gen = loadCategory(action); // POST call.
    gen.next();

    const callFail = gen.throw({message: "error!"});
    const failType = callFail.value.payload.action;

    expect(failType.type).toStrictEqual(RECEIVE_CATEGORY_FAILURE);
  })

  it("loadCategory > LOAD SUCESS > REQUEST CATEGORIES FAIL", async () => {
    const url = '/api/categories/1/1';
    const dispatched = [];

    Fetch.POST = jest.fn(() => {
      return {
      }
    });

    Fetch.GET = jest.fn(() => {
      return {
      }
    });

    const action = { id: 1 };

    const gen = loadCategory(action); // POST call.
    gen.next();

    const callSuccess = gen.next();
    const sucessType = callSuccess.value.payload.action;

    expect(sucessType.type).toStrictEqual(RECEIVE_CATEGORY);

    const nextCall = gen.next();
    gen.next();

  })

})
