'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// This doesnt work for some reason
// import { Sound } from 'react-native-sound';

const Sound = require('react-native-sound');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    // backgroundColor: '#c0c0c0',
    padding: 5,
  },
});

function handleError(error) {
  if (error) {
    console.log('failed to load the sound', error);
  } else { // loaded successfully
    console.log('duration in seconds: ' + soundFile.getDuration() +
        'number of channels: ' + soundFile.getNumberOfChannels());
  }
}


//Load Sound file
const soundFile = new Sound('advertising.mp3', Sound.MAIN_BUNDLE, handleError);

class MainView extends Component {

  render() {
    return(
      <View style={styles.container}>

               <TouchableOpacity onPress={this.handlePlay}>
                 <Text style={styles.button}>Play</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={this.handleStop}>
                 <Text style={styles.button}>Stop</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={this.handlePause}>
                 <Text style={styles.button}>Pause</Text>
               </TouchableOpacity>

             </View>
    )
  }

  handlePlay(){
      soundFile.play();
  }

  handleStop(){
    soundFile.stop();
  }

  handlePause(){
    soundFile.pause();
  }
}

export default MainView;
