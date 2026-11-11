import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Welcome to Micro Blog",
    body: "This is a tiny blogging app used for the Kiro workshop.",
  },
  {
    id: 2,
    title: "Attachments in Kiro",
    body: "You can attach an image and reference files with # for context.",
  },
];

function Home() {
  return (
    <section>
      <h1>Latest posts</h1>

      {posts.map((post) => (
        <article key={post.id} className="post-card">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}

      <div style={{ marginTop: 24 }}>
        {/* This is the reference button style you can ask Kiro to match */}
        <Link to="/create">
          <button className="btn-primary">Create a post</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
