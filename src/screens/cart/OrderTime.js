import React, { useState } from 'react';
import {
	getDesignDimension
} from '../../variables/constants';
import {
	c_primary_black,
	c_light_blue,
	c_light_grey,
	c_second_grey,
	c_white,
	c_grey
} from '../../variables/colors';
import {
	SafeAreaView,
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import { globalStyle } from '../../variables/styles';
import { create } from 'react-native-pixel-perfect';
import { Form, Item, Input, Label } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CommonActions } from '@react-navigation/native';
import RoundButton from '../../component/RoundButton';
import RadioButtonRN from 'radio-buttons-react-native';
import {
	WheelPicker,
	TimePicker,
	DatePicker
} from '@delightfulstudio/react-native-wheel-picker-android';

export default function OrderTimeScreen({ navigation }) {

	const [orderType, setOrderType] = useState(false);
	const [date, setDate] = useState(new Date());

	const data = [
		{
			id: 0,
			label: ''
		},
		{
			id: 1,
			label: ''
		}
	];

	return (
		<SafeAreaView style={globalStyle.mainContainer}>
			<TouchableOpacity
				onPress={() => navigation.goBack()}
				style={{ margin: perfectSize(20) }}>
				<AntDesign name="arrowleft" size={26} color={c_primary_black} />
			</TouchableOpacity>

			<View style={{ margin: perfectSize(40), marginTop: perfectSize(0) }}>
				<Text style={globalStyle.headerTitle}>Select Order Time</Text>
				<Text style={[globalStyle.greyText, { marginTop: perfectSize(10) }]}>
					Where would you like your order?
        </Text>

				{/** order time */}
				<View style={styles.optional}>
					<Text style={[globalStyle.normalText, { paddingLeft: perfectSize(20) }]}>Order Time</Text>
				</View>

				{/** order */}
				<View style={{ flexDirection: 'row', marginTop: perfectSize(20) }}>
					<RadioButtonRN
						data={data}
						selectedBtn={(e) => e.id === 0 ? setOrderType(false) : setOrderType(true)}							
						boxStyle={{
							borderColor: c_white,
							paddingTop: perfectSize(0),
							paddingBottom: perfectSize(34),
							marginTop: 0,
							height: perfectSize(80),
							alignItems: 'flex-start'
						}}
						activeColor={c_primary_black}
						circleSize={10}
					/>
					<View>
						<View style={{height: perfectSize(80)}}>
							<Text style={[globalStyle.normalText, { fontWeight: 'bold' }]}>
								ASAP
							</Text>
							<Text style={styles.radioSubText}>
								{'sned my order right away!\n'}
							</Text>
						</View>
						<View>
							<Text style={[globalStyle.normalText, { fontWeight: 'bold' }]}>
								Scheduled Time
							</Text>
							<Text style={styles.radioSubText}>
								{'I would like to choose the time.'}
							</Text>
						</View>
					</View>
				</View>

				{
					orderType &&
					<View style={{ alignItems: 'center' }}>
						<DatePicker
                date={ new Date() }
                mode="datetime"
                onDateChange={ date => console.log(date) }/>
					</View>
				}

				<RoundButton
					onPress={() => { }}
					backgroundColor={c_primary_black}
					height={perfectSize(56)}
					borderRadius={perfectSize(5)}
					isShadow={true}
					title={'Continue'}
					marginTop={perfectSize(30)}
				/>
			</View>
		</SafeAreaView>
	)
}

let perfectSize = create(getDesignDimension());

const styles = {
	resendCode: {
		justifyContent: 'center',
		flexDirection: 'row',
	},
	optional: {
		marginVertical: perfectSize(20),
		backgroundColor: c_second_grey,
		paddingVertical: perfectSize(5),
		marginHorizontal: perfectSize(-40),
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.1,
		elevation: 4,
	},
	radioSubText: {
		fontSize: perfectSize(14),
		color: c_grey,
		marginTop: perfectSize(4),
	}
}