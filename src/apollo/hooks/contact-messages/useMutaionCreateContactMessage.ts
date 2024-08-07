import { type MutationTuple, gql, useMutation } from "@apollo/client";

// import type { Response } from "@/schema/messages";
import type { MutationOptions } from "../type";

const MUTATION = gql`
  mutation createContactMessage($body: JSON!) {
    createContactMessage(body: $body) {
      # "成功"
      success
      # "訊息"
      message
    }
  }
`;

interface Data {
  createContactMessage: object;
}

interface Variables {
  body: Object;
}

type Options = MutationOptions<Data, Variables>;

/** - 建立建立聯絡訊息 */
export default function useMutaionCreateContactMessage(
  options?: Options
): MutationTuple<Data, Variables> {
  const tuple = useMutation<Data, Variables>(MUTATION, options);
  return tuple;
}
