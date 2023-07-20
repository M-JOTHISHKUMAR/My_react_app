import {Button,Image,Heading,Stack,Flex,Box,Container,} from '@chakra-ui/react';
import hero from '../../images/1.webp';
const Header = () => {

    return (
        <>
            <Container maxW='9xl' as='main'>

                <Stack
                    py={{ base: 8, md: 20 }}
                    spacing={{ base: 4, md: 10 }}
                    direction={{ base: 'column', md: 'row' }}
                    align='left'>

                    <Stack flex={1} direction={'column'} spacing={6}>
                        <Heading
                            fontSize={{ base: '3xl', md: '5xl' }}
                            bgGradient="linear(to-r, red.500, green.600)"
                            bgClip="text">
                            Create Your Own Resume
                        </Heading>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: 'column', sm: 'row' }}
                        >
                            <Button
                                as={'a'}
                                href={'#builder'}
                                rounded={'md'}
                                size={'lg'}
                                px={6}
                                colorScheme={'green'}
                            >
                                Build Resume
                            </Button>
                        </Stack>

                    </Stack>

                    <Flex
                        flex={1}
                    >
                        <Box
                            position={'relative'}
                            height={'600px'}
                            width={'full'}
                            overflow={'hidden'}
                        >
                            <Image
                                fit={'contain'}
                                align={'center'}
                                src={hero}
                            />
                        </Box>
                    </Flex>
                </Stack>

            </Container>
        </>
    )
}

export default Header