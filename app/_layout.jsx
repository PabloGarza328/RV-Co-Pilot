import React from 'react'
import { Text } from 'react-native'
import { Tabs } from 'expo-router'

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 74,
          paddingTop: 3,
          paddingBottom: 15,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Map',
          tabBarLabel: 'Map',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 18 }}>{'🗺'}</Text>
          ),
        }}
      />

      <Tabs.Screen
        name="route"
        options={{
          title: 'Routes',
          tabBarLabel: 'Routes',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 18 }}>{'🛣'}</Text>
          ),
        }}
      />

        <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarLabel: 'Account',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 18 }}>{'👤'}</Text>
          ),
        }}
      />

    </Tabs>
  )
}