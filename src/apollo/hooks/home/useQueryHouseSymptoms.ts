import { type QueryResult, gql, useQuery } from "@apollo/client";

import type { QueryOptions } from "../type";
import { houseSymptoms } from "@/schema/houseSymptoms";

const QUERY = gql`
  query HouseSymptoms {
    houseSymptoms {
      createDT
      id
      labelName
      updateDT
    }
  }
`;

interface Data {
  houseSymptoms: houseSymptoms[];
}

interface Variables {
  id: string;
}

type Options = QueryOptions<Data, Variables>;

/** -   */
export default function useQueryHouseSymptoms(
  options?: Options
): QueryResult<Data, Variables> {
  const { data, ...result } = useQuery<Data, Variables>(QUERY, options);

  return { data, ...result };
}
