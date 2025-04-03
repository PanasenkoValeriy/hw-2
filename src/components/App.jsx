import { Button } from "./Button/Button";
import { Greeting } from "./Greeting/Greeting";
import { Message } from "./Message/Message";

export const App = () => {
  return (
    <>
      <Greeting name="Валерій" />
      <Message text="Laugh and the world laughs with you. Weep and you weep alone" />
      <Button onClick={onHandleClick} />
    </>
  );
};
function onHandleClick() {
  console.log("На кнопку натиснули");
};