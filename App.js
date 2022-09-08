import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CaroTable from './src/components/screens/caros/CaroTable';
import Hello from './src/components/screens/hellos/Hello';
import PvsP from './src/components/screens/PvsP/PvsP';
import Socket from './src/components/screens/Socket/Socket';

export default function App() {
  return (
    // <CaroTable />
    // <Socket />
    // <PvsP />
    <Hello />
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
