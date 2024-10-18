import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';



export default function App() {
 
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startGoalHandler () {
    setModalIsVisible(true);
  }

  function endAddGoalHandler () {
    setModalIsVisible(false);
  }

  function addGoalHandler (enteredGoalText) {
    console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, 
      {text: enteredGoalText, key: Math.random().toString()}
    ]);
    endAddGoalHandler();

  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
   });
  }

  console.log("This is how it should be done!")
  // console.log(enteredGoalText);

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={startGoalHandler} />
      {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>}

      <View style={styles.goalsContainer}>
        <FlatList alwaysBounceVertical={false}
           data={courseGoals}
 
           renderItem={itemData => {
             return <GoalItem text={itemData.item.text} 
                              id={itemData.item.id}
                              onDeleteItem={deleteGoalHandler}
                              />;
           }}

           keyExtractor={(item) => item.key}
           
        />
      </View>
    
    </View>
    </>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#1e085a',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 4
  },


});
 