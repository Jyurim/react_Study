import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  return (
    <>
      <div>Blog Detail {id}</div>
    </>
  );
};

export default BlogDetail;
