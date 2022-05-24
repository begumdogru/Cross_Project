import React from "react";
import { render } from "react-dom";
import { View, Text } from "react-native";

export default function UserDetail({ route }) {
  const { itemUserId, itemId, itemTitle, itemBody } = route.params;

  return (
    <View>
      <Text style={{ color: "green", fontWeight: "bold" }}>
        USERID :{" "}
        <Text style={{ color: "black", fontWeight: "300" }}>{itemUserId}</Text>
      </Text>
      <View
        style={{ height: 1, width: "100%", backgroundColor: "black" }}
      ></View>
      <Text style={{ color: "green", fontWeight: "bold" }}>
        ID:<Text style={{ color: "black", fontWeight: "300" }}>{itemId}</Text>{" "}
      </Text>
      <View
        style={{ height: 1, width: "100%", backgroundColor: "black" }}
      ></View>
      <Text style={{ color: "green", fontWeight: "bold" }}>
        TITLE:{" "}
        <Text style={{ color: "black", fontWeight: "300" }}>{itemTitle}</Text>
      </Text>
      <View
        style={{ height: 1, width: "100%", backgroundColor: "black" }}
      ></View>
      <Text style={{ color: "green", fontWeight: "bold" }}>
        BODY:
        <Text style={{ color: "black", fontWeight: "300" }}>{itemBody}</Text>{" "}
      </Text>
      <View
        style={{ height: 1, width: "100%", backgroundColor: "black" }}
      ></View>
    </View>
  );
}
