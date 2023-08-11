import { useLayoutEffect } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import { colorPallete } from "../utils/colors";
import { useExpenseContext } from "../store/expenseContext";
import ExpenseForm from "../components/ExpenseForm/ExpenseForm";

const ManageExpense = ({ navigation, route }) => {
  const { dispatch } = useExpenseContext();
  const expenseId = route.params?.expenseId;
  const formMode = !!expenseId;
  console.log(expenseId);
  const onDeleteHandler = () => {
    dispatch({ type: "DELETE_EXPENSE", payload: { id: expenseId } });
    navigation.goBack();
  };
  const onAddHandler = (submissionData) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: submissionData,
    });

    navigation.goBack();
  };

  const onUpdateHandler = (submissionData) => {
    dispatch({
      type: "UPDATE_EXPENSE",
      payload: submissionData,
    });

    navigation.goBack();
  };
  const onCancelHandler = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: formMode ? "Edit Expense" : " Add Expense",
      headerRight: ({}) =>
        formMode && (
          <IconButton
            onPresshandler={onDeleteHandler}
            iconTitle='trash'
            color={colorPallete.Claret}
            size={24}
          />
        ),
    });
  }, [formMode, navigation]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ExpenseForm
          formMode={formMode}
          expenseId={expenseId}
          onUpdateHandler={onUpdateHandler}
          onAddHandler={onAddHandler}
          onCancelHandler={onCancelHandler}
        />
      </ScrollView>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colorPallete.Richblack,
    width: "100%",
  },
});
