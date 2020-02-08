import postNewStory,
{
  /* Functions */
  requestEditStory,
  createNewStory,
  editStory,
  clearComposer,

  /* Constants */
  SEND_STORY,
  SEND_STORY_OK,
  SEND_STORY_FAILURE,
  REQUEST_STORY_EDIT,
  EDIT_STORY,
  EDIT_STORY_OK,
  EDIT_STORY_FAILURE,
  CLEAR_COMPOSER
} from '../Actions';

const emptyStory = "{\"blocks\":[{\"key\":\"99rvf\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}";
const category = { id:1, name: "category" };


describe("Composer > Actions", () => {

  it("requestEditStory()", () => {
    const result =  {
      type: EDIT_STORY,
      id: 1,
      title: "title",
      category:  {id:1, name: "category" },
      tags: [],
      content: emptyStory,
      isDraft: false
    };

    const storyObj = {
      id: 1,
      title: "title",
      category: category,
      tags:[],
      content: emptyStory,
      isDraft: false
    };

    expect(requestEditStory(storyObj)).toStrictEqual(result);
  })

  it("createNewStory()", () => {
    const result =  {
      type: SEND_STORY,
      title: "title",
      category: category,
      tags: [],
      content: emptyStory,
      isDraft: false
    };

    const newStoryObj = {
     title: "title",
     category: category,
     tags: [],
     content: emptyStory,
     isDraft: false
    };

    expect(createNewStory(newStoryObj)).toStrictEqual(result);
  })

  it("clearComposer()", () => {
    const result =  { type: CLEAR_COMPOSER };
    expect(clearComposer()).toStrictEqual(result);
  })

})
