"use client";

import { Box, Heading, List, ListItem, Stack, Text } from "@chakra-ui/react";
import { BandLinkHeading } from "@/components/bands/BandLinkHeading";

export default function BandPageContent({ data }: any) {
  return (
    <Stack align="center" spacing={10}>
      <Heading mt={10}>Our Illustrious Performers</Heading>
      <List alignContent="center" pb={10}>
        {data.map((item: any) => (
          <ListItem key={item.id} display="flex" mb={10} alignItems="center">
            <Box>
              <BandLinkHeading band={item} />
              <Text fontStyle="italic" color="gray.400" fontFamily="Lato">
                {item.description}
              </Text>
            </Box>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
