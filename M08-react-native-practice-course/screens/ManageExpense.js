import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import { colorPallete } from "../utils/colors";
import Button from "../components/Button";
import { useExpenseContext } from "../store/expenseContext";

const ManageExpense = ({ navigation, route }) => {
  const { dispatch, state } = useExpenseContext();
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  const onDeleteHandler = () => {
    dispatch({ type: "DELETE_EXPENSE", payload: { id: expenseId } });
    console.log(state);
    navigation.goBack();
  };
  const onAddHandler = () => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: {
        description: "A pair of Vans 👟",
        amount: 79.99,
        date: new Date("2023-07-31"),
      },
    });

    navigation.goBack();
  };

  const onUpdateHandler = () => {
    dispatch({
      type: "UPDATE_EXPENSE",
      payload: {
        id: expenseId,
        description: "A pair of Jordans 👟",
        amount: 90.0,
        date: new Date("2023-07-28"),
      },
    });

    navigation.goBack();
  };
  const onCancelHandler = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : " Add Expense",
      headerRight: ({}) =>
        isEditing && (
          <IconButton
            onPresshandler={onDeleteHandler}
            iconTitle='trash'
            color={colorPallete.Claret}
            size={24}
          />
        ),
    });
  }, [isEditing, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <Button
          mode={"flat"}
          style={styles.btnContainerIn}
          onPresshandler={onCancelHandler}
        >
          Cancel
        </Button>
        <Button
          style={styles.btnContainerIn}
          onPresshandler={isEditing ? onUpdateHandler : onAddHandler}
        >
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  btnContainerIn: {
    borderRadius: 6,
  },
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
