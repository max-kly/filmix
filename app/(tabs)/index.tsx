import { icons } from "@/lib/icons";
import { images } from "@/lib/images";
import styles from "@/lib/styles";
import { useRouter } from "expo-router";
import { Text, View, Image, ScrollView, ActivityIndicator, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import useFetch from "@/services/useFetch";
import { fetchFilms } from "@/services/api";
import FilmCard from "../components/FilmCard";
import Loader from "../components/Loader";

export default function Index() {
  const router = useRouter()
  const { data: films, loading, error } = useFetch(() => fetchFilms({ query: '' }))
  return (
    <View style={styles.container}>
      <Image source={images.bg} style={styles.bg} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.mainArea}>
        <Image source={icons.logo} style={styles.headerLogo} />
        {loading ?
          <Loader />
          : error ?
            <Text style={styles.error}>Something happened 😢{"\n"}{error.message}</Text>
            : <View>
              <SearchBar placeholder={'Search through 300+ films online'} onPress={() => router.push('/search')} />
              <Text style={styles.title}>Popular films</Text>
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
              />
            </View>}
      </ScrollView>
    </View>
  );
}
