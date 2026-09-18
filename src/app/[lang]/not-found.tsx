import Link from "next/link";
import styles from "./not-found.module.css";

// Rendered inside the [lang] layout; the locale isn't passed to not-found
// files, so the copy is set in both languages.
export default function NotFound() {
  return (
    <main className={`page ${styles.wrap}`}>
      <p className="eyebrow">404</p>
      <h1 className={styles.title}>Η σελίδα δεν βρέθηκε</h1>
      <p className={styles.alt} lang="en">Page not found</p>
      <Link href="/el" className="rule-link">Αρχική</Link>{" "}
      <Link href="/en" className="rule-link" lang="en">Home</Link>
    </main>
  );
}
