import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
import {
	CalendarIcon,
	MapPinIcon,
	UsersIcon,
	ChartBarIcon,
	ShareIcon,
} from "@heroicons/react/20/solid";

const Card = ({
	id,
	date = "Sunday, 12 April | 10:00 am",
	title = "Event Conference 2025",
	location = "Toronto, Canada",
	imageUrl,
}) => {
	return (
		<div className={styles.card}>
			{/* Header avec image qui occupe toute la largeur */}
			<div className={styles.cardHeader}>
				{imageUrl && (
					<Image src={imageUrl} alt="Event" fill className={styles.cardImage} />
				)}
			</div>

			{/* Contenu */}
			<div className={styles.cardContent}>
				<div className={styles.eventDate}>
					<CalendarIcon className="h-5 w-5 text-gray-400" />
					<span>{date}</span>
				</div>

				<h3 className={styles.eventTitle}>{title}</h3>

				<div className={styles.eventLocation}>
					<MapPinIcon className="h-5 w-5 text-gray-400" />
					<span>{location}</span>
				</div>
			</div>

			{/* Footer avec icônes */}
			<div className={styles.cardFooter}>
				<UsersIcon className="h-5 w-5 text-gray-400" />
				<ChartBarIcon className="h-5 w-5 text-gray-400" />
				<ShareIcon className="h-5 w-5 text-gray-400" />
			</div>

			{/* Bouton "Voir Détails" */}
			<div className={styles.cardActions}>
				<Link href={`/events/${id}`} className={styles.detailsButton}>
					VOIR DÉTAILS
				</Link>
			</div>
		</div>
	);
};

export default Card;
