import { useRouter } from "next/router";
const Students = () => {
  const router = useRouter();
  const {studentid, coursid} = router.query
  console.log({studentid, coursid});
  return (
    <>
      <h1>Details of course {coursid} and Student ID {studentid}</h1>
    </>
  );
};

export default Students;
