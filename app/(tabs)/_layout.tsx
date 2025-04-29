import { Tabs } from "expo-router"
import TabIcon from "../components/TabIcon"
import { icons } from "@/lib/icons"

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#0F0D23',
                    borderRadius: 60,
                    marginHorizontal: 20,
                    marginBottom: 30,
                    height: 59,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#0F0D23',
                    alignItems: 'center',
                    boxShadow: '0px 0px 40px #000'
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                            title='Home'
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    headerShown: false,
                    title: 'Search',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.search}
                            title='Search'
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    headerShown: false,
                    title: 'Saved',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.save}
                            title='Saved'
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.person}
                            title='Profile'
                        />
                    ),
                }}
            />
        </Tabs>
    )
}
export default _Layout