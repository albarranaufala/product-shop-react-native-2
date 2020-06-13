import React, { useState } from 'react'
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native'

function Product(props) {

	const upQty = () => {
		props.handleUpQty(props.index)
	}

	const downQty = () => {
		props.handleDownQty(props.index)
	}

	const deleteProduct = () => {
		props.handleDeleteProduct(props.index)
	}

	return (
		<View style={styles.productContainer}>
			<View>
				<Text style={{ fontWeight: 'bold' }}>{props.product.name}</Text>
				<Text>${props.product.price}</Text>
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<TouchableOpacity style={{ backgroundColor: 'red', padding: 2, paddingLeft: 8, paddingRight: 8, borderRadius: 4 }} onPress={deleteProduct}>
					<Text style={{ color: 'white' }}>Hapus</Text>
				</TouchableOpacity>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<TouchableOpacity style={styles.qtyButton} onPress={downQty} disabled={props.product.qty? false : true}>
						<Text style={{ color: 'white' }}>-</Text>
					</TouchableOpacity>
					<Text style={{ paddingLeft: 8, paddingRight: 8 }}>{props.product.qty}</Text>
					<TouchableOpacity style={styles.qtyButton} onPress={upQty}>
						<Text style={{ color: 'white' }}>+</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	productContainer: {
		height: 100,
		justifyContent: 'space-between',
		backgroundColor: 'white',
		marginBottom: 8,
		borderRadius: 4,
		padding: 10,
		elevation: 2
	},
	qtyButton: {
		width: 24,
		backgroundColor: 'blue',
		padding: 2,
		alignItems: 'center',
		borderRadius: 4
	}
})

export default Product