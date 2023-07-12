import { dummyBlog } from "../data/dummyBlog.js";

export default function BlogCard() {
  return (
    <div>
      {dummyBlog.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}
