import React from "react";
import styles from "./progress-bar.module.css";
import { cn } from "@/lib/utils";

type Props = {};

export default function ProgressBarPage({}: Props) {
  return (
    <div className={cn(styles.container)}>
      <h1 className={cn(styles["heading"])}>Progress Bar</h1>

      <div
        className={cn(
          "mt-10",
          styles["progress-bar"],
          styles["progress-bar::before"]
        )}
        style={{ '--value': 72 } as React.CSSProperties}
        role="progressbar"
        aria-valuenow={72}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
}
