import { TodoType } from "./types/todo";


export const Todo:React.VFC<Omit<TodoType, "id">> = (props) => {
  const {title, userId, completed} = props;
  const completeMark = completed? "[完]" : "[未]"
  return (
    <p>
      {`${completeMark} ${title}(ユーザー：${userId})`}
    </p>
  )
}
