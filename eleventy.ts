import { Event } from "@components/IndexPage.11ty";

export type ViewProps = {
  content: string;
  title: string;
  events?: Event[];
  version?: {
    version: string;
    hash: string;
  };
};
