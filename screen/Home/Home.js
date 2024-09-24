import { View, Text, SafeAreaView, SafeAreaViewBase } from 'react-native'
import React from 'react'
import TopHeader from '../../components/Header/TopHeader'
import Carasoul from '../../components/Carasoul/Carasoul'
import Layout from '../../components/Layout/Layout'

export default function Home() {
  return (
    <Layout>
      <TopHeader />
      <Carasoul />
    </Layout>
  )
}