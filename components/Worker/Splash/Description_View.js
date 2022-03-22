import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import Globals from "../../../Ressources/Globals";
import AutoHeightWebView from "react-native-autoheight-webview";
import { Dimensions } from "react-native";

export default function Description_View(route) {
  let { data, formator } = route;
  let split_data = data ? data.split("¤¤-¤¤") : undefined;

  const [expanded, setexpended] = React.useState(true);
  const [web_hei, setweb_hei] = React.useState(500);
  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  React.useEffect(() => {
    setexpended(false);
    return () => {};
  }, []);

  function onShouldStartLoadWithRequest(navigator) {
    if (navigator.url.indexOf("sedami.com") === -1) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <View style={styles.main_container}>
      <AutoHeightWebView
        originWhitelist={["*"]}
        style={{
          width: Dimensions.get("window").width,
          height: expanded ? web_hei : formator ? 100 : 300,
        }}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        textZoom={90}
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        customStyle={customStyle}
        source={{
          html: `
          <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body>
${
  data
    ? ` <div>${split_data[0]}</div>
            <br />
            <div class="divider"></div>
            <div>${split_data[1]}</div>`
    : formator
}
          </body>
        </html>        
        `,
        }}
        scalesPageToFit={true}
        onSizeUpdated={(size) => {
          setweb_hei(size.height);
        }}
      />
      <TouchableOpacity
        style={styles.touchable_more}
        activeOpacity={0.3}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setexpended(!expanded);
        }}
      >
        <Text
          style={{
            color: Globals.COLORS.primary_pure,
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {expanded ? "Voir moins" : "Voir plus"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const customStyle = `
body,
html,
#height-calculator {
  margin: 0;
  padding: 0;
  user-select: none;
  font-family: Arial, Helvetica, sans-serif !important;
}
.divider {
  border-bottom: 1px dashed #393f4a;
  margin-bottom: 10px;
}
#collapsible {
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  font-weight: bold;
  color: #204b9bff;
  background-color: white;
}
#content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
}
`,
  styles = StyleSheet.create({
    main_container: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      maxWidth: "90%",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: 56,
      alignItems: "center",
      backgroundColor: "#ffffff",
    },
    touchable_more: {
      marginTop: 30,
      display: "flex",
      justifyContent: "center",
    },
  });
