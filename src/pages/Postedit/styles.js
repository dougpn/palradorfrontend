import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 50
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 15,
    color: '#737380'
  },

  headerTextBold: {
    fontWeight: 'bold'
  },
  container2: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  actionpostButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  actionpostButton2: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10%'
  },


  actionpostButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold'
  },
})