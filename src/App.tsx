import React from 'react'
import { BinarySearchTree as bst } from './DataStructure/BinaryTree'

const App = () => {
  const tree = new bst<number>()
  tree.insert(10)
  tree.insert(5)
  tree.insert(15)
  tree.insert(2)

  console.log(tree.search(5)) // true
  console.log(tree.search(3)) // false
  return <React.StrictMode></React.StrictMode>
}

export default App
