import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    // Homescreen Styles
    toolBarIcons: {
     height:'100%',
     width:'100%',
    marginTop:'20%'
    },
   

    
    // Welcomescreen Styles
    background: {
        backgroundColor: '#FFFFFF',
        position: 'relative'
    },
    title: {
        position: 'absolute',
        width: 322,
        height: 116,
        left: 23,
        top: 275,
        fontWeight: 'normal',
        fontSize: 89,
        lineHeight: 130,
        textAlign: 'center',
        color: "#05AFF2",
        zIndex: 999
    },
    loginContainter: {
        backgroundColor: '#023E8A',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        position: 'absolute',
        height: 51,
        left: 16,
        right: 16,
        top: 550,
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 100,
    },
    signupContainter: {
        backgroundColor: '#023E8A',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        position: 'absolute',
        height: 51,
        left: 16,
        right: 16,
        top: 620,
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 100,
    },
    signupText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        fontFamily: 'HelveticaNeue',
    },
    loginText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        fontFamily: 'HelveticaNeue',
    },
    ellipseOne:{
        position: 'absolute',
        width: 409.56,
        height: 308.85,
        left: 188.5,
        top: 295.34
    },
    vectorOne: {
        position: 'absolute',
        width: 481.45,
        height: 355.29,
        left: -104,
        top: 20,
    },

      //New Reminder Styles
    newReminderTitle: {
        fontWeight: 'normal',
        fontSize: 50,
        lineHeight: 130,
        textAlign: 'center',
        color: "#05AFF2",
        zIndex: 999

    },
    
    modalToggle: {
        marginTop: 30,
        marginRight: 30,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-end'
    },

    modalClose:{
        marginTop: 30,
        marginRight: 30,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-end'
    },

    modalForm: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '25%'
    },

    inputStyle: {
        backgroundColor: '#eeeeee',
        alignContent: 'flex-start',
        width: '90%',
        height: '20%',
        borderRadius: 30,
        left: 20,
    },

    //additions
    top: {
        flex: 1,
    },
    signupContainter1: {
        backgroundColor: '#023E8A',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        position: 'absolute',
        height: 51,
        left: 16,
        right: 16,
        top: 640,
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 100,
    },
    inputStyle1: {
        backgroundColor: '#eeeeee',
        alignContent: 'flex-start',
        width: '90%',
        height: '10%',
        borderRadius: 30,
        left: 20,
    },
    heading: {
        position: 'absolute',
        width: 322,
        height: 116,
        left: 35,
        top: 300,
        fontWeight: 'bold',
        fontSize: 89,
        lineHeight: 130,
        textAlign: 'center',
        color: '#F1D661',
        fontFamily: 'HelveticaNeue',
        zIndex: 999,
    },
    heading1: {
        position: 'absolute',
        width: 322,
        height: 116,
        left: 35,
        top: 30,
        fontWeight: 'bold',
        fontSize: 40,
        lineHeight: 130,
        textAlign: 'center',
        color: '#F1D661',
        fontFamily: 'HelveticaNeue',
        zIndex: 999,
    },
    heading2: {
        position: 'absolute',
        width: 322,
        height: 116,
        left: 35,
        top: 30,
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 130,
        textAlign: 'center',
        color: '#F1D661',
        fontFamily: 'HelveticaNeue',
        zIndex: 999,
    },
    subHeading: {
        fontFamily: 'HelveticaNeue',
        fontSize: 30,
        fontWeight: '300',
        lineHeight: 26,
        textAlign: 'center',
        color: '#A1A4B2',
        marginTop: 10,
        position: 'absolute',
        zIndex: 999,
        width: 322,
        height: 116,
        left: 35,
        top: 100,
    },
    nameText: {
        textAlign: 'left',
        marginTop: 20,
        marginBottom: 5,
        fontFamily: 'HelveticaNeue',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 30,
        color: '#A1A4B2',
        left: 20,
    },
    emailText: {
        textAlign: 'left',
        marginTop: 30,
        marginBottom: 5,
        fontFamily: 'HelveticaNeue',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 30,
        color: '#A1A4B2',
        left: 20,
    },
    passText: {
        textAlign: 'left',
        marginTop: 25,
        marginBottom: 5,
        fontFamily: 'HelveticaNeue',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 30,
        color: '#A1A4B2',
        left: 20,
    },
});

export default styles;