"use client";

import {
  Stack,
  Heading,
  List,
  ListItem,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import router from "next/router";

import { LoadingSpinner } from "@/components/_common/LoadingSpinner";
import { BandLinkHeading } from "@/components/bands/BandLinkHeading";
import { formatDate } from "@/lib/features/shows/utils";
import { Show } from "@/lib/features/shows/types";
import useSWR from "swr";
import { axiosInstance } from "@/lib/axios/axiosInstance";
import { routes } from "@/lib/axios/routes";

const THIRTY_SECONDS = 30 * 1000;

const getShowsViaAPI = async () => {
  const { data } = await axiosInstance.get(`/api/${routes.shows}`);
  return data.shows;
};

interface ShowsContentPageProps {
  isrShows: Array<Show>;
}

export default function ShowsContentPage({ isrShows }: ShowsContentPageProps) {
  const { data: shows, isValidating } = useSWR<Array<Show>>(
    "/api/shows",
    getShowsViaAPI,
    {
      fallbackData: isrShows,
      refreshInterval: THIRTY_SECONDS,
    }
  );

  return (
    <Stack align="center" spacing={10}>
      <LoadingSpinner display={isValidating && !shows} />
      <Heading mt={10}>Upcoming Shows</Heading>
      <List width="100%" alignContent="center" pb={10}>
        {shows?.map((show) => (
          <ListItem
            key={show.id}
            width="100%"
            display="flex"
            mb={10}
            alignItems="center"
          >
            <Box mr={5} width="30%" textAlign="right">
              {formatDate(show.scheduledAt)}
            </Box>
            <Box width="10%" textAlign="center">
              {show.availableSeatCount <= 0 ? (
                <Heading size="md" color="red.500">
                  sold out
                </Heading>
              ) : (
                <Button onClick={() => router.push(`/reservations/${show.id}`)}>
                  tickets
                </Button>
              )}
            </Box>
            <Box>
              <BandLinkHeading band={show.band} />
              <Text fontStyle="italic" color="gray.400" fontFamily="Lato">
                {show.band.description}
              </Text>
            </Box>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
