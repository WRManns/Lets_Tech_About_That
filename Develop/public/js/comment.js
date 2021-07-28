  const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const comment_text = document.querySelector('#comment-text').value.trim();

    const blog_id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1]

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
        document.location.replace`/post/${id}`;
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  // $('.new-comment-form').on('submit', newCommentHandler());
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);
  
  