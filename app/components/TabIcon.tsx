import { images } from "@/lib/images"
import styles from "@/lib/styles"
import { ImageBackground, Image, Text, View } from "react-native"
const TabIcon = ({ focused, title, icon }: any) => {
    return focused ?
        <ImageBackground style={styles.nav} source={images.highlight} >
            <Image source={icon} tintColor={'#151312'} style={[styles.navIcon, styles.navIconActive]} />
            <Text style={[styles.navTitle, styles.navTitleActive]}>{title}</Text>
        </ImageBackground>
        :
        <View style={styles.nav}>
            <Image source={icon} style={styles.navIcon} />
        </View>
}
export default TabIcon