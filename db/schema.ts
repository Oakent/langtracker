import { timestamp } from "drizzle-orm/singlestore-core";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const contentTable = sqliteTable("content_watched", {
  id: int().primaryKey({ autoIncrement: true }),
  content_description: text(),
  content_type: text().notNull(),
  length: int().notNull(),
});
