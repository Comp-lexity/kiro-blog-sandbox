import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In the real app this would persist the post.
    console.log("New post:", { title, body });
    navigate("/");
  };

  return (
    <section>
      <h1>Create a new post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your post a title"
          />
        </div>

        <div className="form-field">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="What's on your mind?"
          />
        </div>

        {/* NOTE: This "Post" button is intentionally unstyled.
            Practice the workshop exercise by attaching an image and asking
            Kiro to match the .btn-primary style from this app. */}
        <button type="submit">Post</button>
      </form>
    </section>
  );
}

export default CreatePost;
