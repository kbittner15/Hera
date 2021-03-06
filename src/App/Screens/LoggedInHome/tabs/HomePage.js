import * as React from 'react';
import styles from '../../Styles/styles.js'
import { Text, View, Button } from 'react-native'
import { connect, actions } from '@hera/ares'
import CreateNewMedModal from './features/CreateNewMedModal'
import ViewMedModal from './features/ViewMedModal'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

const HomePage = ({ 
  navigation ,
  currentUser,
  medications,
  setSelectedMed,
  GetMedications,
}) =>  {

  React.useEffect(()=>{
    GetMedications()
  },[])
  const [isCreateNewMedModalVisible, setCreateNewMedModalVisible] = React.useState(false)
  const [isViewModalVisible, setViewModalVisible] = React.useState(false)
  
  const handleView = (medication) => {
    setSelectedMed(medication)
    setViewModalVisible(true)
  }

  //<Text>{`Welcome! ${currentUser.firstname}`}</Text>
  //<Text>{medications[i].name}</Text>
  //<Text>{day}</Text>
  //<Text>{time}</Text>  
  //<Text>{medications[i].takeFrequency}</Text>

    return (
      <View style={styles.toolBarIcons}>
        <ScrollView>
        <Text style={styles.heading3}>{`Welcome! ${currentUser.firstname}`}</Text>
        
        <View style = {{paddingTop:100}}>
          <Text style={styles.subHeading}>Today's Reminders</Text>
        </View>


        <View style = {{paddingTop:50, flex: 'column'}}>
          <Button style={{width: '100%'}} title="Add new medication" width = "100%" color = "#A1A4B2" onPress={() => {setCreateNewMedModalVisible(true)}}/>
        </View>

        {!!medications && medications.length>0 && (
          <View>
        {medications.map((medication,i) => (
       
         <TouchableHighlight 
         key = {i}
         style = {{alignSelf:'center',borderWidth:1, borderColor:'black', borderRadius:15, width:'80%', marginTop: 10, backgroundColor: '#023E8A'}}
         onPress = {()=> handleView(medications[i]) }>
         <View >
            <Text style={styles.subHeading3}>{medications[i].name}</Text>
            <View>
            {medication.days.map(day => (
                <Text style={styles.subHeading1}>{day}</Text>
            ))}
            </View>
            {medication.atTimesToTake.map(time => (
                <Text style={styles.subHeading1}>{`Time: ${time}`}</Text>
            ))}
           
            <Text style={styles.subHeading1}>{`Frequency: ${medications[i].takeFrequency}`}</Text>
          </View>
          </TouchableHighlight>
        ))}
        </View>
        )}
        <View style = {{marginBottom:30}}></View>
        </ScrollView>
     
      <CreateNewMedModal
      isCreateNewMedModalVisible = {isCreateNewMedModalVisible}
      setCreateNewMedModalVisible = {setCreateNewMedModalVisible}
      ></CreateNewMedModal>

    <ViewMedModal
      isViewModalVisible = {isViewModalVisible}
      setViewModalVisible = {setViewModalVisible}
      ></ViewMedModal>


      </View>
      
   

    );
  }

  export default connect(
    ({userReducer, medicationsReducer}) => ({
      currentUser: userReducer.currentUser,
      medications: medicationsReducer.medications
    }),

     (dispatch, ownProps) => ({
      setSelectedMed: (medication) => dispatch(actions.medications.SetSelectedMed(medication)),
      GetMedications: () => dispatch (actions.medications.GetMedications()),
      ...ownProps,
    }),
  )(HomePage)