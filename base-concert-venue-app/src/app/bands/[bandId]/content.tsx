"use client";

import Image from "next/image";
import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { QueryError } from "@/components/_common/QueryError";
import { LoadingSpinner } from "@/components/_common/LoadingSpinner";

export default function BandIdPageContent({ error, band }: any) {
  if (error)
    return <QueryError message={`Could not retrieve band data: ${error}`} />;

  return (
    <Box m={5} pt={5} textAlign="center">
      {!band ? (
        <LoadingSpinner display={!!band} />
      ) : (
        <VStack display={band ? "inherit" : "none"}>
          <Heading>{band.name}</Heading>
          <Text fontSize="xl" pb={5}>
            {band.description}
          </Text>
          <Box minW="70%" h="30em" pos="relative" textAlign="center">
            <Image
              src={`/band-images/${band.image.fileName}`}
              alt="band photo"
              fill
            />
          </Box>

          <Text
            fontStyle="italic"
            color="gray.300"
            fontFamily="Lato"
            fontSize="sm"
          >
            photo by{" "}
            <Link href={band.image.authorLink} isExternal>
              {band.image.authorName}
            </Link>
          </Text>
        </VStack>
      )}
    </Box>
  );
}
