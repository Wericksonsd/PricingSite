import { Box } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { List, ListItem, ListIcon, OrderedList, UnorderedList, } from '@chakra-ui/react'

function Header (){

    return (
        <Box w='100vw' h='80px' bg='gray.500' align='center' justify='center' p={10}> 
            <Flex w='80%' h='100%' align='center' justify='space-between'>
                <Box bg='red.200' minW='25%'>IAMGEM</Box>
                <Box bg='red.400' flex='1'>
                    <Flex align='center' justify='space-evenly'>
                        <Text>Product</Text>
                        <Text>Templates</Text>
                        <Text>Pricing</Text>
                        <Text>Reviews</Text>
                    </Flex>
                </Box>
                <Box bg='red.600' minW='25%'>OPÇÕES</Box>
            </Flex>
        </Box>
    )

}

export default Header