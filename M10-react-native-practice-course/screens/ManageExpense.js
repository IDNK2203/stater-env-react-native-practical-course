import { useLayoutEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import IconButton from "../components/IconButton";
import { colorPallete } from "../utils/colors";
import ExpenseForm from "../components/ExpenseForm/ExpenseForm";
import {
  useDeleteExpense,
  usePostExpense,
  useUpdateExpense,
} from "../hooks/expenses";
// import Loader from "../components/Loader";
import ErrorOverlay from "../components/ErrorOverlay";

const ManageExpense = ({ navigation, route }) => {
  const { mutate: postMutation, error: postError } = usePostExpense();
  const { mutate: updateMutation, error: updateError } = useUpdateExpense();
  const { mutate: deleteMutation, error: deleteError } = useDeleteExpense();

  // const { dispatch } = useExpenseContext();
  const expenseId = route.params?.expenseId;
  const formMode = !!expenseId;

  const onDeleteHandler = () => {
    deleteMutation(expenseId, {
      onSuccess: () => navigation.goBack(),
    });
  };
  const onAddHandler = (submissionData) => {
    postMutation(submissionData, {
      onSuccess: () => navigation.goBack(),
    });
  };

  const onUpdateHandler = async (submissionData) => {
    updateMutation(submissionData, {
      onSuccess: () => navigation.goBack(),
    });
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

  if (postError || updateError || deleteError) {
    const errorMsg = postError
      ? postError.message
      : updateError
      ? updateError.message
      : deleteError
      ? deleteError.message
      : "no error";
    return (
      <ErrorOverlay
        eventHandler={() => {
          navigation.navigate("AllExpenses");
        }}
        title={errorMsg}
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
