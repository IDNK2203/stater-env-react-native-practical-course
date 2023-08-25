import { useLayoutEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import { colorPallete } from "../utils/colors";
import { useExpenseContext } from "../store/expenseContext";
import ExpenseForm from "../components/ExpenseForm/ExpenseForm";
import {
  useDeleteExpense,
  usePostExpense,
  useUpdateExpense,
} from "../hooks/expenses";
import Loader from "../components/Loader";
import ErrorOverlay from "../components/ErrorOverlay";

const ManageExpense = ({ navigation, route }) => {
  const { mutate, error, isError, status } = usePostExpense();
  console.log(error, isError, status);
  // const [isFetching, setIsFetching] = useState(false);
  // const [isError, setIsError] = useState({ error: false, message: "" });

  const { dispatch } = useExpenseContext();
  const expenseId = route.params?.expenseId;
  const formMode = !!expenseId;

  const onDeleteHandler = async () => {
    try {
      setIsFetching(true);
      await useDeleteExpense(expenseId);
      dispatch({ type: "DELETE_EXPENSE", payload: { id: expenseId } });
      navigation.goBack();
    } catch (error) {
      setIsError((e) => ({ error: true, message: error.message }));
    } finally {
      setIsFetching(false);
    }
  };
  const onAddHandler = async (submissionData) => {
    mutate(submissionData, {
      onSuccess: navigation.goBack(),
      onError: console.log("an error occured"),
    });
  };

  const onUpdateHandler = async (submissionData) => {
    try {
      setIsFetching(true);
      const data = await useUpdateExpense(submissionData, expenseId);
      dispatch({
        type: "UPDATE_EXPENSE",
        payload: submissionData,
      });
      navigation.goBack();
    } catch (error) {
      setIsError((e) => ({ error: true, message: error.message }));
    } finally {
      setIsFetching(false);
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

  if (isError) {
    return (
      <ErrorOverlay
        eventHandler={() => {
          navigation.navigate("AllExpenses");
        }}
        title={error.message}
        // message={isError.status}
      />
    );
  }

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
