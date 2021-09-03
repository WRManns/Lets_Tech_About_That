  const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const comment_text = document.querySelector('#comment-text').value.trim();

    const blog_id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1]

      console.log(blog_id);
    if (comment_text && blog_id) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ blog_id, comment_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log(comment_text);
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };

  //comment to test the purging of the db

  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);
  
  