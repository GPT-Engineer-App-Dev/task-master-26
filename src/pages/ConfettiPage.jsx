import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { Box, Button, Container, Heading, VStack } from '@chakra-ui/react';

const ConfettiPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Confetti for 3 seconds
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h2" size="xl" mb={6}>Celebrate with Confetti!</Heading>
        <Button colorScheme="teal" onClick={handleConfetti}>Launch Confetti</Button>
        {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      </VStack>
    </Container>
  );
};

export default ConfettiPage;