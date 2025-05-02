import { icons } from "@/lib/icons"
import styles from "@/lib/styles"
import { SearchBarProps } from "@/lib/types"
import { Image, TextInput, View } from "react-native"

const SearchBar = ({ placeholder, onPress, onChangeText, value, editable, autoFocus }: SearchBarProps) => {
    return (
        <View style={styles.searchBarContainer}>
            <Image
                source={icons.search}
                resizeMode="contain"
                style={styles.searchBarIcon}
            />
            <TextInput
                onPress={onPress}
                value={value}
                onChangeText={onChangeText}
                style={styles.searchBarInput}
                placeholder={placeholder}
                placeholderTextColor={'#A8B5DB'}
                editable={editable}
                autoFocus={autoFocus}
            />
        </View>
    )
}
export default SearchBar