import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

const AddContent = () => {
  const [contentType, setContentType] = useState("Video");
  const [value, setValue] = useState(0);

  return (
    <View>
      <Text>Add content</Text>
      <View>
        <TextInput placeholder="Content description" />
        <Picker
          selectedValue={contentType}
          onValueChange={(currentContentType) =>
            setContentType(currentContentType)
          }
        >
          <Picker.Item label="Video" value="Video" />
          <Picker.Item label="Show" value="Show" />
          <Picker.Item label="Podcast" value="Podcast" />
          <Picker.Item label="Movie" value="Movie" />
        </Picker>
        <Text>Contnet type: {contentType}</Text>
      </View>
    </View>
  );
};
