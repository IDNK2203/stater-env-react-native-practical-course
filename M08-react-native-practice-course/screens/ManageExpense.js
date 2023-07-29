import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import { colorPallete } from "../utils/colors";
import Button from "../components/Button";

const ManageExpense = ({ navigation, route }) => {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  const onDeleteHandler = () => {
    navigation.goBack();
  };
  const onAddHandler = () => {
    navigation.goBack();
  };
  const onCancelHandler = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : " Add Expense",
    });
  }, [isEditing, navigation]);

  return (
    <View style={styles.container}>
      {isEditing && (
        <>
          <View style={styles.btnContainer}>
            <Button mode={"flat"} onPresshandler={onCancelHandler}>
              Cancel
            </Button>
            <Button onPresshandler={onAddHandler}>Add</Button>
          </View>
          <View style={styles.deleteBtnContainer}>
            <IconButton
              onPresshandler={onDeleteHandler}
              iconTitle='trash'
              color={colorPallete.Claret}
              size={32}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    width: "100%",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  deleteBtnContainer: {
    height: 75,
    width: "100%",
    borderColor: colorPallete.accent500,
    borderTopWidth: 2,
    alignItems: "center",
  },
});
