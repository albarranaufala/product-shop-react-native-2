import React, { useState } from 'react'
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Keyboard,
} from 'react-native'

function ProductForm(props) {
	const [name, onChangeName] = React.useState('');
	const [price, onChangePrice] = React.useState('');
	const addProduct = () => {
		if (name && price) {
			props.handleAddProduct(name, price)
			onChangeName('')
			onChangePrice('')
			Keyboard.dismiss()
		}
	}
	return (
		<View style={{ padding: 16, backgroundColor: 'white', elevation: 4 }}>
			<TextInput
				style={styles.textInput}
				onChangeText={text => onChangeName(text)}
				value={name}
				placeholder='Nama produk'
			/>
			<TextInput
				style={styles.textInput}
				onChangeText={text => onChangePrice(text)}
				value={price}
				placeholder='Harga produk'
			/>
			<TouchableOpacity style={styles.button} onPress={addProduct}>
				<Text style={{ color: 'white', fontWeight: 'bold' }}>Tambah Produk</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	textInput: {
		borderColor: 'lightblue',
		borderWidth: 1,
		borderRadius: 4,
		padding: 8,
		marginBottom: 8
	},
	button: {
		padding: 12,
		alignItems: 'center',
		backgroundColor: 'blue',
		borderRadius: 4,
	},
})

export default ProductForm