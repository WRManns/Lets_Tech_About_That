// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const title = document.querySelector('#blog-title').value.trim();
//   const blog_text = document.querySelector('#blog-post-text').value.trim();

//   if (title && blog_text) {
//     const response = await fetch(`/api/posts`, {
//       method: 'POST',
//       body: JSON.stringify({ title, blog_text }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create post');
//     }
//   }
// };

const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const blog_text = document.querySelector('#blog-post-text').value.trim();

  if (title && blog_text) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, blog_text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newPostHandler);

document
  .querySelector('.blogPost-list')
  .addEventListener('click', delButtonHandler);
