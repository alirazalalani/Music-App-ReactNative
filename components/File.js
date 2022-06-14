import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import {
  useFonts,
  Lato_700Bold,
  Lato_900Black_Italic,
} from "@expo-google-fonts/lato";
import Slider from "react-native-slider";
import AppLoading from "expo-app-loading";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons/";

const { width, height } = Dimensions.get("window");
const File = () => {
  let [fontsLoaded, error] = useFonts({
    Lato_700Bold,
    Lato_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            source={require("../assets/pic.jpg")}
            style={styles.imgStyle}
          />
        </View>
        <View style={styles.descText}>
          <Text style={styles.nameText}>Punjabi</Text>
          <Text
            style={[
              styles.nameText,
              { color: "grey", fontFamily: "Lato_900Black_Italic" },
            ]}
          >
            Arijit Singh
          </Text>
        </View>
        <View style={styles.sliderStyle}>
          <Slider
            value={50}
            minimumValue={10}
            maximumValue={100}
            maximumTrackTintColor={"grey"}
            thumbTintColor={"#FAC213"}
            minimumTrackTintColor={"#FAC213"}
          />
        </View>

        <View style={styles.trackNumber}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            0:00
          </Text>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            3:55
          </Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.circleButton}>
            <FontAwesomeIcon icon={faAnglesLeft} color={"#FAC213"} size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.circleButton, { backgroundColor: "#FAC213" }]}
          >
            <FontAwesomeIcon icon={faPause} color={"#262C45"} size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleButton}>
            <FontAwesomeIcon icon={faAnglesRight} color={"#FAC213"} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomControls}>
          <TouchableOpacity>
            <FontAwesome name="heart-o" color={"grey"} size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="repeat" color={"grey"} size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" color={"grey"} size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-horizontal" color={"grey"} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262C45",
    justifyContent: "space-between",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    width: "100%",
  },
  imageContainer: {
    width: 300,
    height: 340,
    marginTop: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 15, //for android
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  descText: {
    marginTop: 20,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    letterSpacing: 1,
    textAlign: "center",
    // fontWeight: "500",
    color: "white",
    fontSize: 20,
    fontFamily: "Lato_700Bold",
  },
  sliderStyle: {
    width: "100%",
    // flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    // alignItems: "stretch",
    // justifyContent: "center",
  },
  trackNumber: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  circleButton: {
    // borderWidth: 1,
    padding: 15,
    borderRadius: 50,
  },
  bottomContainer: {
    borderTopColor: "#393E46",
    borderTopWidth: 1,
    width: width,
    alignItems: "center",
    paddingVertical: 15,
  },
  bottomControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});
export default File;
