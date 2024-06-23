"use client";

import React from "react";
import { ApolloProvider } from "@apollo/client";

import client from "@/apollo/client";

export default function Apollo({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
