import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';

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
  useEffect(() => {
    const subscription1 = Notifications.addNotificationReceivedListener((notification) => {
      console.log('notification received');
      console.log(notification);
      const username = notification.request.content.data.userName;
      console.log(username);
    });

    const subscription2 = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log('notification response received');
      console.log(response);
    });

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);
  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      trigger: {
        seconds: 2
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
