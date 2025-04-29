import { Text } from "react-native"
import { useLocalSearchParams } from "expo-router"

const Details = () => {
    const { id } = useLocalSearchParams()
    return (
        <Text>{id}</Text>
    )
}
export default Details