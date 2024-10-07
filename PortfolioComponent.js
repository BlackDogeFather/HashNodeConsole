import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

const mockProjects = [
  { id: 1, title: "Project Alpha", description: "First project description" },
  { id: 2, title: "Project Beta", description: "Second project description" },
  { id: 3, title: "Project Gamma", description: "Third project description" }
];

function PortfolioComponent() {
  return (
    <Box>
      <Heading color="brand.green">Your Portfolio</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={5} mt={4}>
        {mockProjects.map((project) => (
          <Box
            key={project.id}
            p={4}
            bg="brand.darkGray"
            borderRadius="md"
            color="brand.white"
          >
            <Text fontWeight="bold" color="brand.blue">{project.title}</Text>
            <Text color="brand.lightGray">{project.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default PortfolioComponent;