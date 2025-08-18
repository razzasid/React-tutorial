import useAppContext from "../contexts/useAppContext";

function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  expenses,
  rowId,
}) {
  const { setExpense, setEditingRowId } = useAppContext();

  if (!menuPosition?.left) return;
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          setEditingRowId(rowId);

          const { title, category, amount } = expenses.find(
            (item) => item.id === rowId
          );

          setExpense({ title, category, amount });

          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}

export default ContextMenu;
