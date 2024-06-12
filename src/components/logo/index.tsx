import clsx from "clsx";
import React from "react";
import styles from "./logo.module.scss";

export type LogoProps = React.HTMLAttributes<HTMLDivElement>;

export default function Logo({ className, ...props }: LogoProps) {
	return <div className={clsx(styles.wrapper, className)} {...props}></div>;
}
