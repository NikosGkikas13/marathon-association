import Image from "next/image";
import styles from "./Photo.module.css";

type Props = {
  src?: string;
  alt: string;
  /** Caption shown in the empty frame while a photograph is still to come. */
  pending?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** Fills its parent (which sets the size or aspect ratio) with a cover-cropped photo. */
export function Photo({ src, alt, pending, sizes, priority, className }: Props) {
  return (
    <div className={`${styles.frame} ${className ?? ""}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={styles.img} />
      ) : (
        <div className={styles.empty} role="img" aria-label={alt}>
          {pending ? <span className={styles.caption}>{pending}</span> : null}
        </div>
      )}
    </div>
  );
}
