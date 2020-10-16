import Fetch from '../store/Fetch';

export function deleteStory(id) {
  try{
    Fetch.DELETE(`/api/stories/${id}`, [], null, {});
  }
  catch(error){
    console.log(error);
  }
}
