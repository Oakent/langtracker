CREATE TABLE `content_watched` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`content_description` text,
	`content_type` text NOT NULL,
	`length` integer NOT NULL
);
