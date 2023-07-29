import { useRouter } from "next/router";
const Articles = () => {
  const router = useRouter();
  const slugs = router.query.slugs || [];
  if (slugs.length>1) {
    return <h3>This article written by {slugs[0]} at {slugs[1]}/{slugs[2]}/{slugs[3]}, and the name of the article is {slugs[4]}</h3>
    
  }
  return (
    <>
      <h1>Article</h1>
    </>
  );
};

export default Articles;
