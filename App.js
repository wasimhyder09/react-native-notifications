import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';
import { Button, StyleSheet, Text, View } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    };
  }
});

export default function App() {
  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      trigger: {
        seconds: 5
      },
      content: {
        title: 'My first local notification',
        body: 'This is body of notification',
        data: { userName: 'Wasim' }
      },

    });
  }
  return (
    <View style={styles.container}>
      <Button title='Schedule Notification' onPress={scheduleNotificationHandler} />
      <StatusBar style="auto" />
    </View>
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
