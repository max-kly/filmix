import { icons } from "@/lib/icons"
import styles from "@/lib/styles"
import { Film } from "@/lib/types"
import { Link } from "expo-router"
import { View, Image, Text, TouchableOpacity } from "react-native"

const FilmCard = ({ id, poster_path, title, vote_average, release_date }: Film) => {
    return (
        <Link href={`/films/${id}`} asChild>
            <TouchableOpacity style={styles.filmCard}>
                <Image source={{
                    uri: poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
                }} style={styles.filmCover}
                    resizeMode="cover" />
                <Text style={styles.filmTitle} numberOfLines={1}>{title}</Text>
                <View style={styles.filmRating}>
                    <Image source={icons.star} style={styles.ratingIcon} />
                    <Text style={styles.text}>{Math.round(vote_average)}</Text>
                </View>
                <View>
                    <Text style={[styles.text, styles.textOpacity, styles.filmReleaseDate]}>{release_date.split('-')[0]}</Text>
                </View>
            </TouchableOpacity>
        </Link>
    )
}
export default FilmCard