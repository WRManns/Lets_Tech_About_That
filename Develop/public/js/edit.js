const editPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#edit-title').value.trim();
    const blog_text = document.querySelector('#edit-post-text').value.trim();
  
    if (event.target.hasAttribute('data-id') && title && blog_text) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ id, title, blog_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };

  
document
.querySelector('.edit-blog-form')
.addEventListener('submit', editPostHandler);  
