import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 50,
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
  post: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,        
  },

  postProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },

  postValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },
    
  actionpostButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  actionpostButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold'
  },
})