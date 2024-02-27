import { List, ListItem, ListIcon, OrderedList, UnorderedList, } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

function ListProducts (){

    return (
        <Box w='280px' h='400px' bg='gray.200' borderRadius={5}>
            <UnorderedList>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
        </Box>
    )

}

export default ListProducts