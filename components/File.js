import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
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
import { faPause } from "@fortawesome/free-solid-svg-icons/";
import songs from "../model/data";

const { width, height } = Dimensions.get("window");
const File = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState(0);
  useEffect(() => {
    scrollX.addListener(({ value }) => {
      console.log("scrollx", scrollX);
      console.log("device width", width);
      const index = Math.round(value / width);
      console.log("index", index);
      setSongIndex(index);
    });
  }, []);
  const renderSongs = ({ index, item }) => {
    return (
      <Animated.View
        style={{
          // paddingLeft: 20,
          width: 330,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={styles.imgStyle}
            source={item.image}
          />
        </View>
      </Animated.View>
    );
  };
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
        <Animated.FlatList
          data={songs}
          renderItem={renderSongs}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
        />

        <View style={styles.descText}>
          <Text style={styles.nameText}>{songs[songIndex].title}</Text>
          <Text
            style={[
              styles.nameText,
              { color: "grey", fontFamily: "Lato_900Black_Italic" },
            ]}
          >
            {songs[songIndex].artisit}
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
            <Ionicons
              name="play-skip-back-outline"
              color={"#FAC213"}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.circleButton, { backgroundColor: "#FAC213" }]}
          >
            <FontAwesomeIcon icon={faPause} color={"#262C45"} size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleButton}>
            <Ionicons
              name="play-skip-forward-outline"
              color={"#FAC213"}
              size={30}
            />
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
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    width: "100%",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 340,
    // marginTop: 50,
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
    alignSelf: "center",
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
