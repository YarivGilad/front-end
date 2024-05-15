const { VITE_API_URL } = import.meta.env;

// https://mongoose-crud-multi.onrender.com/api/stories

export async function getStories() {
  return await (await fetch(`${VITE_API_URL}/api/stories`)).json();
}


