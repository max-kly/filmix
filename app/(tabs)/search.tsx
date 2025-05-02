import styles from "@/lib/styles"
import { images } from "@/lib/images"
import { icons } from "@/lib/icons"
import { View, Text, ScrollView, Image, FlatList } from "react-native"
import useFetch from "@/services/useFetch"
import { fetchFilms } from "@/services/api"
import SearchBar from "../components/SearchBar"
import FilmCard from "../components/FilmCard"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
const Search = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const { data: films, loading, error, refetch, reset } = useFetch(() => fetchFilms({ query: searchTerm }), false)
    useEffect(() => {
        const searchFilms = async () => {
            if (searchTerm?.trim()) {
                await refetch()
            }
            else {
                reset()
            }
        }
        searchFilms()
    }, [searchTerm])
    return (
        <View style={styles.container}>
            <Image source={images.bg} style={styles.bg} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.mainArea}>
                <Image source={icons.logo} style={styles.headerLogo} />
                <SearchBar
                    placeholder={'Search through 300+ films online'}
                    value={searchTerm ? searchTerm : ''}
                    onChangeText={(text: string) => setSearchTerm(text)}
                    autoFocus={true}
                />
                {loading &&
                    <Loader />
                }
                {error &&
                    <Text style={styles.error}>Something happened 😢{"\n"}{error.message}</Text>
                }
                {!loading && !error && searchTerm?.trim() && films?.length > 0 &&
                    <Text style={styles.title}>Search results for{' '}<Text style={styles.titleSearchTerm}>{searchTerm}</Text></Text>
                }
                <View>
                    <FlatList
                        data={films}
                        style={styles.filmList}
                        renderItem={({ item }) =>
                            <FilmCard {...item} />
                        }
                        keyExtractor={(item) => item.id}
                        scrollEnabled={false}
                        numColumns={3}
                        columnWrapperStyle={{
                            justifyContent: 'flex-start',
                            gap: 15,
                            marginBottom: 20,
                        }}
                        ListEmptyComponent={
                            !loading && !error && searchTerm ?
                                <Text style={[styles.error, styles.textOpacity]}>Nothing was found for{"\n"}{<Text style={styles.titleSearchTerm}>{searchTerm}</Text>}{"\n"}search term</Text>
                                : null
                        }
                    />
                </View>
            </ScrollView>
        </View>
    )
}
export default Search