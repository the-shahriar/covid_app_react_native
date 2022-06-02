import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.layout}>
          <View style={styles.dFlex}>
            <MaterialIcons name="menu" size={32} color="white" />
            <Ionicons name="notifications-outline" size={26} color="white" />
          </View>
          <View style={[styles.dFlex, { marginTop: 45 }]}>
            <Text preset="h2">Covid-19</Text>

            <View
              style={[
                styles.dFlex,
                {
                  backgroundColor: colors.white,
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                  borderRadius: 20,
                },
              ]}
            >
              <Image
                style={{ marginRight: 10 }}
                source={require("../../assets/usaFlag.png")}
              />
              <Text style={{ color: colors.black }}>USA</Text>
              <MaterialIcons name="arrow-drop-down" size={30} color="black" />
            </View>
          </View>
          <View style={{ marginTop: 60 }}>
            <Text preset="h4">Are you feeling sick ?</Text>
            <Text preset="h6" style={{ marginTop: 30 }}>
              If you feel sick with any of covid-19 symptoms
            </Text>
            <Text preset="h6">please call or SMS us immediately for help.</Text>
            <View style={[styles.dFlex, { marginTop: 40 }]}>
              <View style={styles.callNow}>
                <Ionicons
                  name="call"
                  size={22}
                  color="white"
                  style={{ marginRight: 10 }}
                />
                <Text preset="h5">Call Now</Text>
              </View>
              <View style={styles.sendSMS}>
                <Feather
                  name="message-circle"
                  size={22}
                  color="white"
                  style={{ marginRight: 10 }}
                />

                <Text preset="h5">Send SMS</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.default}>
          <Text
            preset="h3"
            style={{ color: colors.black, fontSize: 23, marginTop: 5 }}
          >
            Prevention
          </Text>
          <Image
            style={{ width: 345 }}
            source={require("../../assets/1.png")}
          />
          <Image
            style={{ marginTop: 25, width: 345 }}
            source={require("../../assets/2.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  default: {
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[6],
  },
  layout: {
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[10],
    backgroundColor: colors.navyBlue,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  dFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  callNow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.mateOrange,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendSMS: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
