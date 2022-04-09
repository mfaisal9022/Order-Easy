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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import RoundButton from '../../component/RoundButton';

export default function MenuGroupScreen({ navigation }) {

  const renderList = () => {
      return (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('MenuItem')}
            style={{
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.1,
              elevation: 4
            }}>
            <View style={styles.item}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: perfectSize(4)}}>
                  <Entypo name="star" size={22} color={c_primary_red} style={{paddingLeft: perfectSize(12)}} />
                  <Text style={[globalStyle.midText, {fontWeight: 'bold', paddingLeft: perfectSize(10)}]}>{'Menu Link Name'}</Text>
                </View>
                <Text style={{opacity: 0.7, paddingLeft: perfectSize(20), fontSize: perfectSize(12), width: perfectSize(280)}}>
                  {'lorem ipsum dolor sit amet lorem ipsum do\nlor sit amet lorem ipsum dolor sit amet'}
                </Text>
              </View>
              <Image source={require('../../../assets/images/cat1.jpg')} style={{width: perfectSize(100), height: perfectSize(100)}} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('MenuItem')}
            style={{
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.1,
              elevation: 4
            }}>
            <View style={styles.item}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: perfectSize(4)}}>
                  <Entypo name="star" size={22} color={c_primary_red} style={{paddingLeft: perfectSize(12)}} />
                  <Text style={[globalStyle.midText, {fontWeight: 'bold', paddingLeft: perfectSize(10)}]}>{'Menu Link Name'}</Text>
                </View>
                <Text style={{opacity: 0.7, paddingLeft: perfectSize(20), fontSize: perfectSize(12), width: perfectSize(280)}}>
                  {'lorem ipsum dolor sit amet lorem ipsum do\nlor sit amet lorem ipsum dolor sit amet'}
                </Text>
              </View>
              <Image source={require('../../../assets/images/cat1.jpg')} style={{width: perfectSize(100), height: perfectSize(100)}} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('MenuItem')}
            style={{
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.1,
              elevation: 4
            }}>
            <View style={styles.item}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: perfectSize(4)}}>
                  <Entypo name="star" size={22} color={c_primary_red} style={{paddingLeft: perfectSize(12)}} />
                  <Text style={[globalStyle.midText, {fontWeight: 'bold', paddingLeft: perfectSize(10)}]}>{'Menu Link Name'}</Text>
                </View>
                <Text style={{opacity: 0.7, paddingLeft: perfectSize(20), fontSize: perfectSize(12), width: perfectSize(280)}}>
                  {'lorem ipsum dolor sit amet lorem ipsum do\nlor sit amet lorem ipsum dolor sit amet'}
                </Text>
              </View>
              <Image source={require('../../../assets/images/cat1.jpg')} style={{width: perfectSize(100), height: perfectSize(100)}} />
            </View>
          </TouchableOpacity>
        </View>
      )
  }

  return (
    <View style={globalStyle.mainContainer}>
      <SafeAreaView style={{ backgroundColor: c_second_grey, flex: 1}} >
        <View style={styles.headerBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={26} color={c_primary_black} />
          </TouchableOpacity>

          <Text style={[globalStyle.normalText, { fontWeight: 'bold' }]}>Menu Group</Text>

          <TouchableOpacity>
            <Ionicons name="md-search-sharp" size={20} color={c_primary_black} />
          </TouchableOpacity>
        </View>

        <View style={{paddingVertical: perfectSize(20), backgroundColor: c_ligth_red, paddingLeft: perfectSize(20), marginBottom: perfectSize(10)}}>
          <Text style={[globalStyle.midText, { color: c_dark_red }]}>Gluten free crust available in medium size only</Text>
        </View>

        {/** List */}
        <ScrollView style={{flex: 1, backgroundColor: c_second_grey}}>
          <View style={{flex: 1,}}>
          {renderList()}
          </View>
        </ScrollView>

        <View style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: c_white,
          marginBottom: perfectSize(0),
          paddingHorizontal: perfectSize(50),
					// shadowColor: c_primary_black,
					// shadowOffset: { width: 0, height: -3},
					// shadowOpacity: 0.3,          
					borderTopColor: '#00000022',
					borderTopWidth: 2,
        }}>
          <RoundButton
            onPress={() => navigation.navigate('Cart')}
            backgroundColor={c_primary_black}
            height={perfectSize(56)}
            borderRadius={perfectSize(30)}
            isShadow={true}
            title={'View Order'}
            marginVertical={perfectSize(10)}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

let perfectSize = create(getDesignDimension());

const styles = {
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: c_white,
    margin: perfectSize(10),
    marginVertical: perfectSize(5),
    borderRadius: perfectSize(8),
    overflow: 'hidden',
  },
}