import { useState } from 'react'
import Header from './Header/Header.jsx'
import { Box } from '@chakra-ui/react'
import ListProducts from './Header/ListProducts.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box w='100vw' h='100vh'>
      <Header/>
      <ListProducts/>
    </Box>
  )
}

export default App
