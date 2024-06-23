import { type MutationTuple, gql, useMutation } from "@apollo/client";

// import type { Response } from "@/schema/messages";
import type { MutationOptions } from "../hooks/type";

const MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

interface Data {
  login: {
    token: String;
  };
}

interface Variables {
  username: String;
  password: String;
}

type Options = MutationOptions<Data, Variables>;

/** - 登入 */
export default function useMutaionLogin(
  options?: Options
): MutationTuple<Data, Variables> {
  const tuple = useMutation<Data, Variables>(MUTATION, options);
  return tuple;
}
