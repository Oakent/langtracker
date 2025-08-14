import * as SQLite from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { contentTable } from "../db/schema";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../drizzle/migrations";
import { Modal } from "react-native";

const expo = SQLite.openDatabaseSync("db.db");

const db = drizzle(expo);

export default function Index() {
  const [isModalVisible, setModalVisibility] = useState(false);
  const toggleModal = () => {
    setModalVisibility(!isModalVisible);
  };
  const { success, error } = useMigrations(db, migrations);
  const [items, setItems] = useState<
    (typeof contentTable.$inferSelect)[] | null
  >(null);

  useEffect(() => {
    if (!success) return;

    (async () => {
      await db.insert(contentTable).values([
        {
          content_description: "Test content",
          content_type: "Podcast",
          length: 15,
        },
      ]);

      const content = await db.select().from(contentTable);
      setItems(content);
    })();
  }, [success]);

  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }

  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  if (items === null || items.length === 0) {
    return (
      <View>
        <Text>Data is empty</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Viewing stored data</Text>

      {items.map((item) => (
        <Text key={item.id}>{item.content_description}</Text>
      ))}
    </View>
  );
}
