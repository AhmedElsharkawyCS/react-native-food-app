import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

export default function CategoryCard({ id, name, color, navigate }) {
  return (
    <Card elevation={3} onPress={() => navigate("CategoryMeals", { categoryId: id })} style={{ ...styles.card, ...{ backgroundColor: color } }}>
      <Card.Title style={styles.cardTitle} title={name} />
      {/* <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content> */}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
  },
  cardTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right",
  },
});
