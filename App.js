import { StyleSheet, Text, View } from 'react-native';
import Container from './src/components/navigations/Container';
import { UserContextProvider } from './src/components/contexts/UserContext';

export default function App() {
  return (
    <UserContextProvider>
      <Container />
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
