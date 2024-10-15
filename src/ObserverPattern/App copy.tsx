import React from 'react'
import { ChatRoom } from './Chatroom'
import { ChatUser } from './ChatUser'

const App = () => {
  const chatRoom = new ChatRoom()

  const user1 = new ChatUser('Alice')
  const user2 = new ChatUser('Bob')

  chatRoom.addUser(user1)
  chatRoom.addUser(user2)

  chatRoom.sendMessage('Vítejte v chatovací místnosti!')
  // Alice a Bob obdrží zprávu "Vítejte v chatovací místnosti!"
  chatRoom.sendMessage('Dnes je krásný den!')

  return <React.StrictMode></React.StrictMode>
}

export default App
