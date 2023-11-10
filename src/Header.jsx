import React from 'react';
import { Center, Container, Box, Button, Image, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <Container maxW="container.lg">
      <Center>
        <Box mt="8" textAlign="center">
         {/* <Heading as="h1" size="2xl" color="aliceblue">
            Bienvenido
          </Heading> */}
          <Box position="relative" textAlign="center" style={{ position: 'relative' }}>
            <Image
              src="/ada_icon.jpg"
              alt="Ada Icon"
              className="header-image"
            />
            <Box
              className="header-buttons no-border"
            >
              <Heading as="h2" size="md" color="black" mb="2">
                DOMINA TUS LÍMITES
              </Heading>
              <Box display="flex" gap="4">
                <Button
                  variant="outline"
                  colorScheme="teal"
                  opacity="0.9"
                  _hover={{ bg: 'teal.400', color: 'white', opacity: '1' }}
                >
                  VER DETALLE
                </Button>
                <Button
                  variant="outline"
                  colorScheme="blue"
                  opacity="0.9"
                  _hover={{ bg: 'blue.400', color: 'white', opacity: '1' }}
                >
                  VER VIDEO
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Center>
    </Container>
  );
};

export default Header;
