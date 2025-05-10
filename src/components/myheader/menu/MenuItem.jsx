"use client";
import React from "react";
import styles from "./MenuItem.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = (props) => {
	const { label, path, onClick } = props;
	const activePath = usePathname();
	const isActive = activePath === path;

	return (
		<li
			onClick={onClick}
			className={`${styles.menuItem} ${isActive && styles.active}`}
			style={{ background: isActive && styles.active }}
		>
			<Link href={path}>{label}</Link>
		</li>
	);
};

export default MenuItem;
