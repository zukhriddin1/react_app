// const onIncrement = () => {
//   setCounter(counter + 1);
// };

// const onDecrement = () => {
//   setCounter(counter - 1);
// };

// const onIncrement = () => {
//   setCounter((prevState) => prevState + 1);
// };
// const [counter, setCounter] = useState(0);
// const [active, setActive] = useState(true);

// const onIncrement = () => setCounter((prevState) => prevState + 1);
// const onToggle = () => setActive((prevState) => !prevState);

// const colors = {
//   color: active ? "red" : "green",
// };
// const onDecrement = () => {
//   setCounter((prevState) => prevState - 1);
// };

// const reStart = () => {
//   setCounter(0);
// };

// const onToggleLogin = () => {
//   setLogin((prevState) => !prevState);
// };
// const counterGenerate = useCallback(() => {
//   return new Array(counter)
//     .fill("")
//     .map((_, ind) => `Counter number ${ind + 1}`);
// }, [counter]);

// const [cartNumber, setCartnumber] = useState(" ");
// const cvcRef = useRef(null);
// const handleInput = (e) => {
//   const val = e.target.value;
//   setCartnumber(val);
//   if (val.length === 16) {
//     cvcRef.current.focus();
//   }
// };

// const [firstname, setfirstname] = useState(" ");
// const [lastName, setlastName] = useState(" ");

// const vlidateInput = (text) => {
//   if (text.search(/\d/) > 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const validateColorFirst = vlidateInput(firstname) ? "text-danger" : null;
// const validateColorlast = vlidateInput(lastName) ? "text-danger" : null;
