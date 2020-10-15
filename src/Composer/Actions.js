import Fetch from '../store/Fetch';

export const postStory = async (props) => {

    const {
      isDraft,
      title,
      tags,
      content,
      category,
      userId
    } = props;

    const categoryId = (category === null ? null : category.id);
    const jsonData = JSON.stringify({
       is_draft: isDraft,
       title: title,
       tags: tags,
       content: content,
       author: userId,
       category: categoryId
    });

    console.log(jsonData);

    try {
      const data = await Fetch.POST('/api/stories', [], jsonData, {});
      return data;
    }
    catch(error) {
      console.log(error);
    }
}

export const editStory = async (props) => {

  const {
    id,
    isDraft,
    title,
    tags,
    content,
    category,
    userId
  } = props;

  const categoryId = (category === null ? null : category.id);
  const jsonData = JSON.stringify({
     is_draft: isDraft,
     title: title,
     tags: tags,
     content: content,
     author: userId,
     category: categoryId
  });

  try {
    const data = await Fetch.PUT(`/api/stories/${id}`, [], jsonData, {});
    return data;
  }
  catch(error) {
    console.log("Error");
  }
}
