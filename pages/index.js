import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello-world!</h1>
      <ul>
        <li>
          <Link href="/courses">
            Go to Courses
          </Link>
        </li>
        <li>
          <Link href="/users">
            Go to Users
          </Link>
        </li>
      </ul>
    </div>
  );
}
