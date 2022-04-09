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
  c_primary_red,
  c_dark_red,
  c_ligth_red
} from '../../variables/colors';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { globalStyle } from '../../variables/styles';
import { create } from 'react-native-pixel-perfect';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import RoundButton from '../../component/RoundButton';

export default function CouponsScreen({ navigation }) {

  const array = ['1', '2', '3', '4', '5']

  const renderList = () => {
    return array.map(item => {
      return (
        <View key={item} style={styles.item}>
          <View style={{flexDirection: 'row', height: perfectSize(140)}}>
            <View style={{flex: 3}}>
              <Text style={[globalStyle.smText, { fontWeight: 'bold' }]}>
                Triple Play Bundle
              </Text>
              <Text style={[globalStyle.normalText, { color: c_primary_red, fontWeight: 'bold' }]}>{'$20'}</Text>
              <Text style={{fontSize: perfectSize(10), color: c_primary_black}}>
                {'Any medium 2-topping pizza thin or Original crust, \nAny Calzone ring & 9” Cheese dippers.'}
              </Text>
              <Text style={{fontSize: perfectSize(10), color: c_grey, fontStyle: 'italic'}}>
                {'Not valid with other promotions or coupons.\nOffer good for Dine-in, Takeout or Delivery.'}
              </Text>
              <View style={{backgroundColor: c_grey, padding: perfectSize(5), paddingVertical: perfectSize(2), marginRight: perfectSize(30), marginTop: perfectSize(8)}}>
                <Text style={{fontSize: perfectSize(12), fontWeight: 'bold', color: c_white}}>Promo Code 8729</Text>
              </View>
              <Text style={{fontSize: perfectSize(10), marginTop: perfectSize(10), textAlign: 'right', marginRight: perfectSize(40)}}>EXPIRES 5-26-22</Text>
            </View>
            <View style={{flex: 1.5, overflow: 'hidden'}}>
              <Image source={require('../../../assets/images/sample1.jpg')} />
            </View>
          </View>
        </View>
      )
    })
  }

  return (
    <View style={globalStyle.mainContainer}>
      <SafeAreaView style={{ backgroundColor: c_second_grey, flex: 1}} >
        <View style={styles.headerBar}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Entypo name="list" size={26} color={c_primary_black} />
          </TouchableOpacity>

          <Text style={[globalStyle.normalText, { fontWeight: 'bold' }]}>Coupons</Text>

          <TouchableOpacity>
            <Ionicons name="md-search-sharp" size={20} color={c_primary_black} />
          </TouchableOpacity>
        </View>

        <View style={{paddingVertical: perfectSize(20), backgroundColor: c_ligth_red, paddingLeft: perfectSize(20), marginBottom: perfectSize(20)}}>
          <Text style={[globalStyle.midText, { color: c_dark_red }]}>Select a coupon to add it to your cart</Text>
        </View>

        {/** List */}
          <ScrollView>
            {renderList()}
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
  item: {
    backgroundColor: c_white,
    padding: perfectSize(10),
    margin: perfectSize(10),
    marginVertical: perfectSize(10),
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    elevation: 4,
    borderColor: c_grey,
    borderStyle: 'dotted',
    borderWidth: 2,
    borderRadius: 1,
  },
}