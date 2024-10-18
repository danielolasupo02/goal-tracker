import {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText(''); 
    }


      console.log("Execute first...");
      console.log(enteredGoalText);
      console.log("Execute afterwards...");

      
    return (
      <Modal visible={props.visible} animationType="slide">
          <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/images/goal.png')} />

          <TextInput 
          style={styles.textInput} 
          placeholder='Your course goal!' 
          onChangeText={goalInputHandler} 
          value={enteredGoalText}
          color={'#ffffff'}/>

          <View style={styles.buttonContainer}>
             <View style={styles.button}>
                <Button  title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
             </View>

             <View style={styles.button}>
                <Button  title='Cancel' onPress={props.onCancel} color="#f31282"/>
              </View>
          </View> 

          </View> 

          

      </Modal>
    );

}

export default GoalInput;


const styles = StyleSheet.create({
    

  inputContainer: {
    // backgroundColor: 'red',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '100%',
    backgroundColor: '#311b6b'
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    color: '#120348',
    width: '90%', 
    padding: 8
  },

  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  image: {
    width: 100,
    height: 100,
    margin: 20
  },

  button: {
    width: 100,
    marginHorizontal: 8
  }
});