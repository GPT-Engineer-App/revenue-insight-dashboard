import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Heading } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={6}>
        Business Dashboard
      </Heading>
      <SimpleGrid columns={2} spacing={10}>
        <StatBox icon={FaDollarSign} title="Revenue" amount="$30,000" percentage="4.5%" />
        <StatBox icon={FaShoppingCart} title="Sales" amount="1,500" percentage="3.8%" />
        <StatBox icon={FaUsers} title="New Customers" amount="80" percentage="2.0%" />
        <StatBox icon={FaChartLine} title="Growth" amount="7.2%" percentage="1.1%" />
        <StatBox icon={FaChartLine} title="Churn" amount="5%" percentage="0.5%" />
      </SimpleGrid>
    </Box>
  );
};

const StatBox = ({ icon: Icon, title, amount, percentage }) => (
  <Stat p={5} shadow="md" border="1px" borderColor="gray.200">
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
