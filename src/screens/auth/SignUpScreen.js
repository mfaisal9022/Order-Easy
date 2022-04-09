import React from 'react';
import {
  getDesignDimension
} from '../../variables/constants';
import {
  c_primary_black,
  c_light_grey,
  c_light_blue,
} from '../../variables/colors';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { globalStyle } from '../../variables/styles';
import { create } from 'react-native-pixel-perfect';
import { Form, Item, Input, Label, CheckBox, Body } from 'native-base';
import { CommonActions } from '@react-navigation/native';
import RoundButton from '../../component/RoundButton';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';

export default function SignUpScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyle.mainContainer}>
      <KeyboardAvoidingScrollView>
        <View style={{ padding: perfectSize(40) }}>

          <Text style={globalStyle.headerTitle}>Sign Up</Text>

          <Form style={[globalStyle.floatForm, { marginVertical: perfectSize(30) }]}>
            <Item stackedLabel style={globalStyle.floatItem}>
              <Label style={{ color: c_light_blue }}>First Name</Label>
              <Input
                style={globalStyle.floatInput}
                placeholder={'Your first name'}
                placeholderTextColor={c_light_grey}
              />
            </Item>
            <Item stackedLabel style={globalStyle.floatItem}>
              <Label style={{ color: c_light_blue }}>Last Name</Label>
              <Input
                style={globalStyle.floatInput}
                placeholder={'Your last name'}
                placeholderTextColor={c_light_grey}
              />
            </Item>
            <Item stackedLabel style={globalStyle.floatItem}>
              <Label style={{ color: c_light_blue }}>Phone</Label>
              <Input
                style={globalStyle.floatInput}
                placeholder={'Your phone number'}
                placeholderTextColor={c_light_grey}
              />
            </Item>
            <Item stackedLabel style={globalStyle.floatItem}>
              <Label style={{ color: c_light_blue }}>Email</Label>
              <Input
                style={globalStyle.floatInput}
                placeholder={'Your email address'}
                placeholderTextColor={c_light_grey}
              />
            </Item>
            <Item stackedLabel style={globalStyle.floatItem}>
              <Label style={{ color: c_light_blue }}>Password</Label>
              <Input
                style={globalStyle.floatInput}
                placeholder={'Your password'}
                placeholderTextColor={c_light_grey}
              />
            </Item>
          </Form>

          <View style={{ flexDirection: 'row', marginTop: perfectSize(30) }}>
            <CheckBox checked={false} color={c_primary_black} style={styles.checkbox} />
            <Body>
              <Text style={styles.text}>
                I agree to the <Text style={styles.terms}>Terms of Services </Text>
                and <Text style={styles.terms}>Privacy Policy.</Text>
              </Text>
            </Body>
          </View>
          <View style={{ flexDirection: 'row', marginTop: perfectSize(10) }}>
            <CheckBox checked={false} color={c_primary_black} style={styles.checkbox} />
            <Body>
              <Text style={styles.text}>
                I agree to the receive marketing and promotions.
              </Text>
            </Body>
          </View>

          <RoundButton
            onPress={() => navigation.navigate('Activation')}
            backgroundColor={c_primary_black}
            height={perfectSize(56)}
            borderRadius={perfectSize(5)}
            isShadow={true}
            title={'Continue'}
            marginVertical={perfectSize(30)}
          />

          <View style={styles.haveAccount}>
            <Text style={[globalStyle.greyText, { fontSize: perfectSize(20) }]}>
              Forgot Password?
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [
                      {
                        name: 'SignIn',
                      },
                    ],
                  })
                )
              }>
              <Text style={[globalStyle.headerTitle, { fontSize: perfectSize(20), marginLeft: perfectSize(10) }]}>
                Sign In
            </Text>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAvoidingScrollView>
    </SafeAreaView>
  )
}

let perfectSize = create(getDesignDimension());

const styles = {
  haveAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  terms: {
    fontSize: perfectSize(18),
    fontWeight: 'bold',
    color: c_primary_black
  },
  text: {
    fontSize: perfectSize(18),
    color: c_primary_black,
    lineHeight: perfectSize(26),
    paddingLeft: perfectSize(20)
  },
  checkbox: {
    width: 18,
    height: 18,
    fontSize: 20,
    borderRadius: perfectSize(3)
  }
}