import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { changeLang } from "../redux/actions";

export default function LangChange() {
  const dispatch = useDispatch();

  return (
    <>
      <Form.Select
        onChange={(e) => {
          dispatch(changeLang(e.target.value));
        }}
      >
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </Form.Select>
    </>
  );
}
