import loadStory ,
{
  /* Constants */
  REQUEST_STORY,
  RECEIVE_STORY,
  RECEIVE_STORY_FAILURE,
  REGISTER_TEMP_USER
} from '../Actions';
import Fetch from '../../store/Fetch';

describe("<Story /> > Actions", () =>{

  it("loadStory > FAIL", async () => {
    const url = '/api/stories?id=1';

    Fetch.POST = jest.fn(() => {
      return {
      }
    });

    const action = { id: 1 };

    const gen = loadStory(action); // POST call.
    gen.next();

    const callFail = gen.throw({message: "error!"});
    const failType = callFail.value.payload.action;

    expect(failType).toStrictEqual({
      type: RECEIVE_STORY_FAILURE,
      error: { message: "error!" }
    });
  })

  it("loadStory > SUCESS", async () => {
    const url = '/api/stories?id=1';

    Fetch.GET = jest.fn(() => {
      return {
      }
    });

    const action = { id: 1 };

    const gen = loadStory(action); // POST call.
    gen.next();

    const callSuccess = gen.next();
    const sucessType = callSuccess.value.payload.action;

    expect(sucessType.type).toStrictEqual(RECEIVE_STORY);
  })


})
