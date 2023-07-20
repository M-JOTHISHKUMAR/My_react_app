import {Stack,Flex,Heading,Spacer,HStack,Button,} from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Stack
            p={5}
            bg={'gray.50'}
            as='header'
        >
            <Flex
                w='full'
                alignItems={'center'}
            >
                <Heading as='h3' size='lg' color='purple' style={{ fontFamily: "Pacifico" }}>PORTFOLIO  BUILDER  APPLICATION</Heading>
                <Spacer> </Spacer>
                <HStack spacing={10}as='nav' style={{ fontFamily: 'Poppins' }}>
                    <Button 
                
                                as={'a'}
                                href={'/login'}
                                rounded={'md'}
                                size={'lg'}
                                px={6}
                                colorScheme={'green'}
                                Build Resume>login
                                
                            </Button>
                </HStack>
            </Flex>

        </Stack>
    )
}

export default Navbar
