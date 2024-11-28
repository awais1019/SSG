import { getPostData } from '../libs/posts';

export default function Home({ postData }) {
  const { data, content } = postData;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

// Fetch the data on the server during build time
export async function getStaticProps() {
  const postData = getPostData();

  return {
    props: {
      postData,
    },
  };
}
