import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  redBackground: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    marginTop: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrow: {
  },
  body: {
    width: '100%',
    height: 'auto',
    marginTop: 30,
    padding: 10,
  },
  bodyText: {
    color: '#2F2A4E',
    fontSize: 18,
    paddingLeft: 30,
    paddingBottom: 20,
    paddingTop: 10,
  },
  containerMain: {
    height:'95%',
    flexDirection: 'column',
  },
  buttonContainerExpertise: {
    marginLeft: 15,
    flexDirection: 'column',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    width: '90%',
    height: 95,
    borderRadius:10,
    borderColor:'#B5AEAE',
    borderWidth: 0.5,
    marginBottom:10
  },
  buttonImageText: {
    flex: 1,
    flexDirection: 'row',
    width:'100%'
  },
  buttonContainerTexts: {
    marginLeft: 20,
    marginTop: 15,
    width: '80%',
  },
  buttonTitleText: {
    color: '#150A0A',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSubtitleText: {
    color: '#C84734',
    fontSize: 16,
    marginTop: 12,
    fontWeight:'bold'
  },
  buttonImage:{
    marginTop:15 ,
    width:22,
    height:16,
    
  },
  progressBar: {
    width: '87%',
    marginLeft: 20,
    borderRadius: 10,
    marginBottom: 10
  }
});

export default styles;
