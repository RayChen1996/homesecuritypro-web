import {
  type QueryResult,
  gql,
  useQuery,
  useLazyQuery,
  LazyQueryResultTuple,
} from "@apollo/client";
import type { QueryOptions } from "../type";
interface Question {
  answer: string;
  id: string;
  question: string;
}
const QUERY = gql`
  query Questions($keyword: String!) {
    questions(keyword: $keyword) {
      answer
      id
      question
    }
  }
`;

interface Data {
  questions: Question[];
}

interface Variables {
  keyword: string;
}

type Options = QueryOptions<Data, Variables>;

/** -   */
export default function useQueryQuestions(
  options?: Options
): LazyQueryResultTuple<Data, Variables> {
  const [query, { data, ...result }] = useLazyQuery<Data, Variables>(
    QUERY,
    options
  );
  return [query, { data: data, ...result }];
}
