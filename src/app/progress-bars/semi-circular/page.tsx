"use client";

import styles from "./progress-bar.module.css";
import { cn } from "@/lib/utils";

type Props = {};

export default function SemiCircularProgressBarPage({}: Props) {
  const progress: number = 40;

  return (
    <div className={cn(styles.container)}>
      <h1 className={cn(styles["heading"])}>Semi Circular Progress Bar</h1>

      <div
        className={cn(
          "mt-10",
          styles["progress-bar"],
          styles["progress-bar::before"]
        )}
        style={{ "--value": progress } as React.CSSProperties}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
}
