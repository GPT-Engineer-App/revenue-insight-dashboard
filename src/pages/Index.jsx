import React from 'react';
import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Heading, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers, FaChartLine } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalData, setModalData] = React.useState({});

  const handleStatClick = (data) => {
    setModalData(data);
    onOpen();
  };

  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={6}>
        Business Dashboard
      </Heading>
      <SimpleGrid columns={2} spacing={10}>
        <StatBox icon={FaDollarSign} title="Revenue" amount="$30,000" percentage="4.5%" />
        <StatBox icon={FaShoppingCart} title="Sales" amount="1,500" percentage="3.8%" onClick={() => handleStatClick({ title: "Sales", thisMonth: "800", previousMonth: "700", total: "4500" })} />
        <StatBox icon={FaUsers} title="New Customers" amount="80" percentage="2.0%" />
        <StatBox icon={FaChartLine} title="Growth" amount="7.2%" percentage="1.1%" />
        <StatBox icon={FaChartLine} title="Churn" amount="5%" percentage="0.5%" />
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalData.title} Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>This Month: {modalData.thisMonth}</Text>
            <Text>Previous Month: {modalData.previousMonth}</Text>
            <Text>Total: {modalData.total}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const StatBox = ({ icon: Icon, title, amount, percentage, onClick }) => (
  <Stat p={5} shadow="md" border="1px" borderColor="gray.200" onClick={onClick} cursor="pointer">
    <Flex alignItems="center">
      <Box fontSize="3xl" as={Icon} mr={2} />
      <StatLabel fontWeight="medium">{title}</StatLabel>
    </Flex>
    <StatNumber fontSize="2xl">{amount}</StatNumber>
    <StatHelpText>
      <StatArrow type="increase" />
      {percentage}
    </StatHelpText>
  </Stat>
);

export default Index;
