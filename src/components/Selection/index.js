import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Button } from "react-native";
// import SizeSelection from "./components/SizeSelection";
import ToppingsSelection from "./components/ToppingsSelection";
import MeatSelection from "./components/MeatSelection";
import CheeseSelection from "./components/CheeseSelection";
import SizeSelection from "./components/SizeSelection";
import OrderList from "./components/OrderList";
import { pizzaBuilder } from "../../constants";
export default class Selection extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      sizeList: pizzaBuilder.size,
      vegetableToppingsList: pizzaBuilder.vegetable_toppings,
      meatToppingsList: pizzaBuilder.non_vegetable_toppings,
      cheeseList: pizzaBuilder.cheese,
      selectedSize: null,
      selectedVegetableToppings: [],
      selectedMeatToppings: [],
      selectedCheese: [],
      selected: null,
      orderListDisplay: false,
      total: null
    };
  }

  handleToggleVegetable = index => {
    this.handleUpdateState(
      index,
      "toppings",
      "vegetableToppingsList",
      "selectedVegetableToppings"
    );
  };

  handleToggleMeat = index => {
    this.handleUpdateState(
      index,
      "toppings",
      "meatToppingsList",
      "selectedMeatToppings"
    );
  };

  handleToggleCheese = index => {
    this.handleUpdateState(index, "name", "cheeseList", "selectedCheese");
  };

  handleUpdateState = (selected, compareValue,itemNameList, selectedNameList ) => {
    let itemList = this.state[itemNameList];
    itemList[selected] = {
      ...itemList[selected],
      selected: !itemList[selected].selected
    };

    itemList =  {
      toppings: "Tomatoes",
      value: 60,
      selected: false // true
    },

    if (itemList[selected].selected) {
      this.setState({
        [selectedNameList]: [
          ...this.state[selectedNameList],
          itemList[selected]
        ],
        orderListDisplay: false
      });
    } else {
      this.setState({
        [selectedNameList]: this.state[selectedNameList].filter(
          item => item[compareValue] !== itemList[selected][compareValue]
        ),
        orderListDisplay: false
      });
    }
  };

  handleSelectSize = id => {
    this.setState({
      selectedSize: id,
      orderListDisplay: false
    });
  };

  handleSendOrder = () => {
    let {
      selectedSize,
      selectedVegetableToppings,
      selectedMeatToppings,
      selectedCheese
    } = this.state;

    let subTotal = {
      vegetable: this.handleSumValue(selectedVegetableToppings, selectedSize),
      meat: this.handleSumValue(selectedMeatToppings, selectedSize),
      cheese: this.handleSumValue(selectedCheese, selectedSize)
    };
    const sumValues = Object.values(subTotal).reduce(
      (a, b) => Number(a) + Number(b)
    );

    // alert(`${sumValues} + ${subTotal.vegetable } + ${subTotal.meat } + ${subTotal.cheese }`);

    this.setState({
      total: sumValues,
      orderListDisplay: true
    });
  };

  handleSumValue = (list, size) => {
    let initialValue = 0;
    let subTotat = list.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value * size,
      initialValue
    );
    if (list.length > 0 && size) {
      return subTotat.toFixed(2);
    } else {
      return null;
    }
  };

  render() {
    const { sizeList, selectedSize } = this.state;
    console.log(this.state.selectedVegetableToppings, "SSSSS");

    return (
      <ScrollView>
        <View style={styles.SelectionList}>
          <Text style={styles.Title}>Pizza Builder</Text>
          <SizeSelection
            title="Size"
            sizeList={this.state.sizeList}
            selectedSize={this.state.selectedSize}
            handleSelectSize={this.handleSelectSize}
          />

          <ToppingsSelection
            title="Vegetable Toppings"
            dataList={this.state.vegetableToppingsList}
            handleCheck={this.handleToggleVegetable}
          />

          <MeatSelection
            title="Non Vegetable Toppings"
            dataList={this.state.meatToppingsList}
            handleCheck={this.handleToggleMeat}
          />

          <CheeseSelection
            title="Cheese"
            dataList={this.state.cheeseList}
            handleCheck={this.handleToggleCheese}
          />

          <Button
            onPress={this.handleSendOrder}
            title="Send Order"
            color="#1b96ff"
            style={styles.SendButton}
            disabled={!this.state.selectedSize ? true : false}
          />
          {this.state.orderListDisplay && (
            <OrderList
              title="Order List"
              selectedSize={this.state.selectedSize}
              selectedVegetableToppings={this.state.selectedVegetableToppings}
              selectedMeatToppings={this.state.selectedMeatToppings}
              selectedCheese={this.state.selectedCheese}
              total={this.state.total}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MainWrap: {
    width: "100%"
  },
  SelectionList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
    width: "100%"
  },
  SelectionItem: {
    flexDirection: "row"
  },
  Title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  SendButton: {
    fontSize: 24,
    padding: 30,
    height: 100
  }
});
