"use client";

import { useRef } from "react";
import { Photo } from "./Photo";
import styles from "./ZoomPhoto.module.css";

type Props = {
  src?: string;
  alt: string;
  pending?: string;
  sizes: string;
  priority?: boolean;
  closeLabel: string;
};

/** A Photo that opens full-size in a modal on click. Empty frames stay inert. */
export function ZoomPhoto({ closeLabel, ...photo }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  if (!photo.src) return <Photo {...photo} />;

  return (
    <>
      <button type="button" className={styles.trigger} aria-label={photo.alt} onClick={() => dialog.current?.showModal()}>
        <Photo {...photo} />
      </button>
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-label={photo.alt}
        onClick={(e) => {
          if (e.target === e.currentTarget || (e.target as HTMLElement).tagName === "IMG") dialog.current?.close();
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- full-size original, loaded only on open */}
        <img src={photo.src} alt={photo.alt} className={styles.full} loading="lazy" />
        <button type="button" className={styles.close} aria-label={closeLabel} onClick={() => dialog.current?.close()}>
          ×
        </button>
      </dialog>
    </>
  );
}
