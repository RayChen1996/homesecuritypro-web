import type {
  NoInfer,
  QueryHookOptions,
  LazyQueryHookOptions,
  MutationHookOptions,
} from '@apollo/client';

/** - 查詢選項 */
export type QueryOptions<TData, TVariables> = QueryHookOptions<
  NoInfer<TData>,
  NoInfer<TVariables>
>;

/** - 惰性查詢選項 */
export type LazyQueryOptions<TData, TVariables> = LazyQueryHookOptions<
  NoInfer<TData>,
  NoInfer<TVariables>
>;

/** - 寫入選項 */
export type MutationOptions<TData, TVariables> = MutationHookOptions<
  NoInfer<TData>,
  NoInfer<TVariables>
>;
