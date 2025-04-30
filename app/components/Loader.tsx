import styles from "@/lib/styles"
import { ActivityIndicator, View } from "react-native"

const Loader = () => {
    return (
        <View style={styles.loaderArea}>
            <ActivityIndicator
                size={'large'}
                color={'#AB8BFF'}
            />
        </View>
    )
}
export default Loader