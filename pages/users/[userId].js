import { useRouter } from "next/router";
const USer = () => {
  const router = useRouter();
  const id = router.query.userId;
  console.log(router);
  return (
    <>
      <h1>Users # {id}</h1>
    </>
  );
};

export default USer;
<>
  <h1>Users #number</h1>
</>;
