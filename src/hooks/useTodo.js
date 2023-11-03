/**
 * useTodo
 *
 * @package hooks
 */
import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../store/todo';

/**
 * useTodo
 */
export const useTodo = () => {
  /* store */
  const dispatch = useDispatch();
  const handleAddTodo = (value) => {
    dispatch(addTodo(value));
  };
  const todolist = useSelector((state) => state.todo.todos);

  /* local state */
  /* 追加するTodoのテキスト */
  const [todoVal, setTodoVal] = useState('');
  /* 検索するTodoのテキスト */
  const [searchVal, setSerchVal] = useState('');

  /* 表示するTodoリスト */
  // useMemo は、値に変更がある時発火し、画面描写に変更がない場合はキャッシュを使う(処理軽減)
  const showTodolist = useMemo(() => {
    // 検索キーワードに前方一致したTodoのみ返す
    return todolist.filter((todo) => {
      ////////////////
      // RegExp は、正規表現のオブジェクト
      // "^" + searchVal は、前方から searchVal の値と一致しているか
      // , "i" は、大文字、小文字を区別しない　の意味
      ////////////////
      const regexp = new RegExp('^' + searchVal, 'i');
      return todo.text.match(regexp);
    });
  });

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleTodoVal = (e) => {
    setTodoVal(e.target.value);
  };

  const handleSearchVal = (e) => {
    setSerchVal(e.target.value);
  };

  const states = {
    todoVal,
    searchVal,
    showTodolist,
  };

  const actions = {
    handleTodoVal,
    handleSearchVal,
    handleAddTodo,
    handleDeleteTodo,
  };

  return [states, actions];
};
