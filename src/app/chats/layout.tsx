import { Sidebar } from "@/ui/cards/chats/Sidebar";
import { PageContainer } from "@/ui/PageContainer";
import { Grid, GridItem } from "@chakra-ui/react";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Chats | Chatie",
  description: "",
};

export default function ChatsLayout({ children }: PropsWithChildren) {
  return (
    <PageContainer>
      <Grid templateColumns="5fr 11fr" height="100%">
        <GridItem>
          <Sidebar />
        </GridItem>
        <GridItem>{children}</GridItem>
      </Grid>
    </PageContainer>
  );
}
