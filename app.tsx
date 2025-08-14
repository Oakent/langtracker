import * as SQLite from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { contentTable } from "./db/schema";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "./drizzle/migrations";

const expo = SQLite.openDatabaseSync("db.db");

const db = drizzle(expo);
