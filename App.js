import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native'
//Import Components
import ProductForm from './components/ProductForm.js'
import Product from './components/Product.js'
import Total from './components/Total.js'

function App() {
  const [products, setProducts] = useState([
    {
      name: 'Samsung',
      price: 120,
      qty: 1,
    },
    {
      name: 'Apple',
      price: 240,
      qty: 1,
    },
    {
      name: 'Xiaomi',
      price: 70,
      qty: 1,
    },
  ])

  const total = (products) => {
    let total = 0
    products.forEach(product => {
      total += product.price * product.qty
    })
    return total
  }

  const addProduct = (name, price) => {
    setProducts(products.concat({
      name: name,
      price: price,
      qty: 1
    }))
  }

  const upQty = (index) => {
    setProducts(products.map((product, i) => {
      product.qty = index === i ? product.qty + 1 : product.qty
      return product
    }))
  }

  const downQty = (index) => {
    setProducts(products.map((product, i) => {
      product.qty = index === i && product.qty ? product.qty - 1 : product.qty
      return product
    }))
  }

  const deleteProduct = (index) => {
    setProducts(products.filter((product, i) => {
      if (index != i) return product
    }))
  }

  const productsDom = (products) => {
    return products.map((product, index) => {
      return <Product key={index} index={index} product={product} handleUpQty={upQty} handleDownQty={downQty} handleDeleteProduct={deleteProduct} />
    })
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <ProductForm handleAddProduct={addProduct} />
        <ScrollView>
          <View style={{ padding: 16, paddingBottom: 8 }}>
            {productsDom(products)}
          </View>
        </ScrollView>
        <Total total={total(products)} />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  productContainer: {
    height: 100,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginBottom: 8,
    borderRadius: 4,
    padding: 10,
    elevation: 2
  },
  totalContainer: {
    height: 64,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 16,
  },
  qtyButton: {
    width: 24,
    backgroundColor: 'blue',
    padding: 2,
    alignItems: 'center',
    borderRadius: 4
  }
})

export default App
