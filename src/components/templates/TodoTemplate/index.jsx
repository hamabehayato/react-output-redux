/**
 * TodoTemplate
 *
 * @package components
 */
import { InputForm } from "../../atoms/InputForm"
import { TodoList } from "../../organisms/TodoList"
import { useTodo } from "../../../hooks/useTodo"
import styles from "./styles.module.css"

export const TodoTemplate = () => {
  const [
    { todoVal, searchVal, showTodolist },
    {
      handleTodoVal,
      handleSearchVal,
      handleAddTodo,
      handleDeleteTodo
    },
  ] = useTodo();

/**
 * TodoTemplate
 * @returns {JSX.Element}
 * @constructor
 */
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
      <h1>Todo List</h1>
      <h2>ADD TODO</h2>
      </div>

      <InputForm todoVal={todoVal} placeholder={"New Todo"} handleTodoVal={handleTodoVal} handleAddTodo={handleAddTodo} />
      <InputForm serchVal={searchVal} placeholder={"Search Todo"} handleTodoVal={handleSearchVal}/>

      { showTodolist.length > 0 && ((
        <TodoList todoList={showTodolist} handleDeleteTodo={handleDeleteTodo} />
      ))}
    </div>
  )
}
