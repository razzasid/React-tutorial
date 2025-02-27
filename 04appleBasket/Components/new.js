const totalAppleCount = 10;
const [rightAppleCount, setRightAppleCount] = useState(0);
const [leftAppleCount, setLeftAppleCount] = useState(
  totalAppleCount - rightAppleCount
);
const leftClickHandler = () => {
  if (rightAppleCount > 0) {
    setRightAppleCount(rightAppleCount - 1);
    setLeftAppleCount(leftAppleCount + 1);
  }
};
const rightClickHandler = () => {
  if (leftAppleCount > 0) {
    setRightAppleCount(rightAppleCount + 1);
    setLeftAppleCount(leftAppleCount - 1);
  }
};

const totalAppleCount = 10;
  const [rightAppleCount, setRightAppleCount] = useState(0);
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalAppleCount - rightAppleCount
  );
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1);
      setLeftAppleCount(leftAppleCount + 1);
      // root.render(<AppleCounter root={root} />);
    }
  };
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setRightCount(rightAppleCount + 1);
      setLeftCount(leftAppleCount - 1);
      // root.render(<AppleCounter root={root} />);
    }
  };