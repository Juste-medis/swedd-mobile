import React from "react";
import { View, Text } from "react-native";
import { styleCommentComplete as styles } from "../../../Ressources/Styles";
import { monthDiff, showStars } from "../../../Helpers/Utils";

export default CommentItem = React.memo((route) => {
  let { item } = route;
  let per = monthDiff(new Date(item.date), new Date());
  return (
    <View style={styles.comments_container}>
      <Text style={styles.comment_author}>{item.author}</Text>
      <View style={styles.stars_cont}>{showStars(item.stars)}</View>
      <Text style={styles.comment_date}>
        {per === 0 ? "Ce mois" : `il y a ${per} mois`}
      </Text>
      <Text style={styles.comment_content}>{item.content}</Text>
    </View>
  );
});
