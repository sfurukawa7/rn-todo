import { useState } from 'react';
import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo, RemoveTodo } from './ducks/actions';
import { TodoState } from './ducks/types';
import { styles } from './styles';

const Todo = () => {
  const [todoValue, setTodoValue] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state: TodoState): string[] => state.todos);

  const addTodo = () => {
    if (todos && !todos.includes(todoValue)) {
      dispatch(AddTodo(todoValue));
      setTodoValue('');
    } else {
      alert(`${todoValue} already added in Tod List`);
    }
  };

  const removeTodo = (item: string) => {
    const todoIndex = todos.indexOf(item);
    if (todoIndex > -1) {
      dispatch(RemoveTodo(item));
    } else {
      alert(`${todoValue} is not in the Todo List`);
    }
  };

  const renderTodoList = () => {
    return (
      <FlatList
        data={todos}
        renderItem={({ item }: { item: string }) => (
          <View style={styles.todoView}>
            <View style={styles.todoList}>
              <Text>{item}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeTodo}
              onPress={() => removeTodo(item)}
            >
              <Text> X </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.mainInput}
        onChangeText={setTodoValue}
        placeholder={'Add your toto here'}
        value={todoValue}
      />
      <Button title="Add Todo" onPress={addTodo} />
      <Text style={{ alignSelf: 'stretch', paddingLeft: 40 }}>
        List of Todos :
      </Text>
      {renderTodoList()}
    </View>
  );
};

export default Todo;
