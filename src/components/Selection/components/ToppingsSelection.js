import React from "react";
import { Text, View, CheckBox, StyleSheet, FlatList } from "react-native";

const ToppingsSelection = props => {
  return (
    <View style={styles.checkboxWrap}>
        <Text style={styles.title}>{props.title}</Text>
      {
        props.dataList.map((item, i) => (
          <View key={i} style={styles.checkboxItem}>
            <CheckBox value={item.selected} onValueChange={() => props.handleCheck(i)} />
            <Text style={styles.label}>{item.toppings}</Text>
          </View>
        ))
      }

 

    </View>
  );
};

const styles = StyleSheet.create({
  checkboxWrap: {
    flex: 1,
    flexDirection: "column", 
    marginBottom: 30,
    width: "100%"
  },
  checkboxItem: {
    flexDirection: "row"
  },
  label: {
    paddingTop: 8,
    marginLeft: 5
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  }
});

export default ToppingsSelection;
