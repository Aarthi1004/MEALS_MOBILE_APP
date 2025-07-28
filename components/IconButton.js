import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.iconBtn,
        pressed && styles.pressed
      ]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconBtn: {
    padding: 6,        // ✅ mandatory to make it tappable
    borderRadius: 24,
  },
  pressed: {
    opacity: 0.5       // visual feedback (optional, but nice)
  }
});

export default IconButton;
