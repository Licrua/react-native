import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import { View, StyleSheet, Text } from 'react-native';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
        <Text style={styles.text}>dasdasdajsdas</Text>
      </View>
      <View>
        <Button label="LEJAKй" />
        <Button label="LEJAKй" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  imageContainer: {
    flex: 1,
  },
});
