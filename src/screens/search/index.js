import React from 'react';
import {
  getDesignDimension
} from '../../variables/constants';
import {
  c_primary_black,
  c_white,
  c_second_grey,
  c_light_grey,
  c_grey,
  c_black,
  c_light_blue,
  c_primary_red
} from '../../variables/colors';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { globalStyle } from '../../variables/styles';
import { create } from 'react-native-pixel-perfect';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import RoundButton from '../../component/RoundButton';

export default function SearchScreen({ navigation }) {

  const array = ['1', '2', '3', '4', '5']

  const renderList = () => {
    return array.map(item => {
      return (
        <View key={item} style={styles.item}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <Text style={[globalStyle.normalText, { fontWeight: 'bold' }]}>
              Mazzio's Tulsa, OK 96003
            </Text>
            <Text style={{ fontSize: perfectSize(14), color: c_light_blue }}>3.5 miles</Text>
          </View>
          <Text style={[globalStyle.midText, { color: c_grey }]}>{'1340 Churn Creek Rd STE C10\nRedding, CA 96003'}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', marginTop: perfectSize(10) }}>
            <View>
              <Text style={[globalStyle.midText, { color: c_primary_red, marginBottom: perfectSize(4) }]}>
                Delivery
              </Text>
              <Text style={[globalStyle.midText]}>Tue 10:00am - 11:30pm</Text>
            </View>
            <View style={{
              backgroundColor: c_primary_red,
              padding: perfectSize(10),
              paddingVertical: perfectSize(6),
              borderRadius: perfectSize(3)
            }}>
              <Text style={{ color: c_white, fontSize: perfectSize(14) }}>45 min</Text>
            </View>
          </View>
        </View>
      )
    })
  }

  return (
    <View style={globalStyle.mainContainer}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.headerBar}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Entypo name="list" size={26} color={c_primary_black} />
          </TouchableOpacity>

          <Text style={[globalStyle.normalText, { fontWeight: 'bold' }]}>Find a Store</Text>

          <TouchableOpacity>
            <Foundation name="target-two" size={perfectSize(30)} color={c_light_grey} />
          </TouchableOpacity>
        </View>

        <View style={styles.contentHeader}>

          {/** Search Box */}
          <View
            style={styles.searchBox}>
            <Ionicons name="md-search-sharp" size={20} color={c_primary_black} style={{ paddingHorizontal: perfectSize(4) }} />
            {/* <Text style={[globalStyle.normalText, { paddingLeft: perfectSize(10) }]}> */}
              <TextInput style={[globalStyle.normalText, { paddingLeft: perfectSize(10), paddingVertical: 0 }]} placeholder={"Search stores by address or zip..."} />
              {/* <Text style={{ fontWeight: 'bold' }}>Search stores</Text> by address or zip... */}
            {/* </Text> */}
          </View>
          {/** Group Button */}
          <View style={styles.groupButton}>
            <TouchableOpacity style={[
              styles.groupButtonItem,
              { backgroundColor: c_primary_black }
            ]}>
              <Text style={[
                globalStyle.midText,
                { color: c_white }
              ]}>Delivery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[
              styles.groupButtonItem,
              styles.splitBorder,
              { backgroundColor: 'transparent' },
            ]}>
              <Text style={globalStyle.midText}>Dine In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[
              styles.groupButtonItem,
              { backgroundColor: 'transparent' }
            ]}>
              <Text style={globalStyle.midText}>Pickup</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/** List */}
        <ScrollView style={{ backgroundColor: c_second_grey }}>
          <View>
            {renderList()}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

let perfectSize = create(getDesignDimension());

const styles = {
  resendCode: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerBar: {
    flexDirection: 'row',
    paddingHorizontal: perfectSize(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    height: perfectSize(58),
    backgroundColor: c_white,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    elevation: 4,
  },
  contentHeader: {
    width: '100%',
    backgroundColor: c_second_grey,
    paddingHorizontal: perfectSize(16),
    paddingVertical: perfectSize(30)
  },
  searchBox: {
    borderWidth: 1,
    borderColor: c_light_grey,
    borderRadius: perfectSize(30),
    backgroundColor: c_white,
    padding: perfectSize(10),
    alignItems: 'center',
    flexDirection: 'row'
  },
  groupButton: {
    marginTop: perfectSize(10),
    borderWidth: 1,
    borderColor: c_light_grey,
    borderRadius: perfectSize(30),
    height: perfectSize(36),
    flexDirection: 'row',
    overflow: 'hidden',
  },
  groupButtonItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splitBorder: {
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderColor: c_light_grey
  },
  item: {
    backgroundColor: c_white,
    paddingVertical: perfectSize(20),
    paddingHorizontal: perfectSize(40),
    marginBottom: perfectSize(20),
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    elevation: 4,
  },
}