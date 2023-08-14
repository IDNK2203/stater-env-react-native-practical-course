import { useLayoutEffect } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import { colorPallete } from "../utils/colors";
import { useExpenseContext } from "../store/expenseContext";
import ExpenseForm from "../components/ExpenseForm/ExpenseForm";
import { useDeleteExpense, useUpdateExpense } from "../hooks/expenses";

const ManageExpense = ({ navigation, route }) => {
  const { dispatch } = useExpenseContext();
  const expenseId = route.params?.expenseId;
  const formMode = !!expenseId;
  console.log(expenseId);
  const onDeleteHandler = async () => {
    try {
      await useDeleteExpense(expenseId);
      dispatch({ type: "DELETE_EXPENSE", payload: { id: expenseId } });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };
  const onAddHandler = (submissionData) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: submissionData,
    });

    navigation.goBack();
  };

  const onUpdateHandler = async (submissionData) => {
    try {
      const data = await useUpdateExpense(submissionData, expenseId);
      dispatch({
        type: "UPDATE_EXPENSE",
        payload: submissionData,
      });

      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
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
