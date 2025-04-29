import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        minWidth: 112,
        minHeight: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        overflow: 'hidden',
        marginTop: 19,
    },
    navIcon: {
        tintColor: '#A8B5DB'
    },
    navTitle: {
        marginLeft: 10,
        color: '#A8B5DB'
    },
    navIconActive: {
        tintColor: '#151312'
    },
    navTitleActive: {
        color: '#151312'
    },
    container: {
        backgroundColor: '#030014',
        height: '100%'
    },
    bg: {
        zIndex: 0,
        width: '100%',
        position: 'absolute',
    },
    mainArea: {
        paddingRight: 20,
        paddingLeft: 20,
    },
    headerLogo: {
        margin: 'auto',
        marginTop: 80
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#030014',
        borderRadius: 20,
        padding: 15,
        borderWidth: 1,
        borderColor: '#AB8BFF',
        marginTop: 40,
        boxShadow: '0px 10px 50px #000'
    },
    searchBarIcon: {
        tintColor: '#AB8BFF',
        marginRight: 20
    },
    searchBarInput: {
        color: '#FFF',
        fontWeight: 500,
        fontSize: 16,
        marginRight: 55
    },
    text: {
        color: '#FFF',
        fontSize: 16
    },
    error: {
        color: '#FFF',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 20
    },
    title: {
        color: '#FFF',
        fontWeight: 700,
        fontSize: 30,
        marginTop: 40,
        marginBottom: 40
    },
    filmList: {
        paddingBottom: 100,
    },
    filmCard: {
        width: '30%',
    },
    filmTitle: {
        color: '#FFF',
        fontWeight: 700
    },
    filmCover: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20
    },
    filmRating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    ratingIcon: {
        height: 16,
        width: 16,
        marginRight: 5
    },
    textOpacity: {
        opacity: 0.5
    },
    filmReleaseDate: {
        marginTop: 10,
        fontSize: 12
    }
});
export default styles