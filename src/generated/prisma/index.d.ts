
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model Checkout_info
 * 
 */
export type Checkout_info = $Result.DefaultSelection<Prisma.$Checkout_infoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orders
 * const orders = await prisma.orders.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Orders
   * const orders = await prisma.orders.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkout_info`: Exposes CRUD operations for the **Checkout_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checkout_infos
    * const checkout_infos = await prisma.checkout_info.findMany()
    * ```
    */
  get checkout_info(): Prisma.Checkout_infoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Orders: 'Orders',
    Checkout_info: 'Checkout_info'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "orders" | "checkout_info"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Checkout_info: {
        payload: Prisma.$Checkout_infoPayload<ExtArgs>
        fields: Prisma.Checkout_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Checkout_infoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Checkout_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Checkout_infoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Checkout_infoPayload>
          }
          findFirst: {
            args: Prisma.Checkout_infoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Checkout_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Checkout_infoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Checkout_infoPayload>
          }
          findMany: {
            args: Prisma.Checkout_infoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Checkout_infoPayload>[]
          }
          create: {
            args: Prisma.Checkout_infoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Checkout_infoPayload>
          }
          createMany: {
            args: Prisma.Checkout_infoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Checkout_infoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Checkout_infoPayload>[]
          }
          delete: {
            args: Prisma.Checkout_infoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Checkout_infoPayload>
          }
          update: {
            args: Prisma.Checkout_infoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Checkout_infoPayload>
          }
          deleteMany: {
            args: Prisma.Checkout_infoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Checkout_infoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Checkout_infoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Checkout_infoPayload>[]
          }
          upsert: {
            args: Prisma.Checkout_infoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Checkout_infoPayload>
          }
          aggregate: {
            args: Prisma.Checkout_infoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckout_info>
          }
          groupBy: {
            args: Prisma.Checkout_infoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Checkout_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Checkout_infoCountArgs<ExtArgs>
            result: $Utils.Optional<Checkout_infoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    orders?: OrdersOmit
    checkout_info?: Checkout_infoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Checkout_infoCountOutputType
   */

  export type Checkout_infoCountOutputType = {
    orders: number
  }

  export type Checkout_infoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Checkout_infoCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * Checkout_infoCountOutputType without action
   */
  export type Checkout_infoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout_infoCountOutputType
     */
    select?: Checkout_infoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Checkout_infoCountOutputType without action
   */
  export type Checkout_infoCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    category: string | null
    name: string | null
    type: string | null
    image: string | null
    price: string | null
    amount: string | null
    total: string | null
    created: Date | null
    UserId: string | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    category: string | null
    name: string | null
    type: string | null
    image: string | null
    price: string | null
    amount: string | null
    total: string | null
    created: Date | null
    UserId: string | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    category: number
    name: number
    type: number
    image: number
    price: number
    amount: number
    total: number
    created: number
    UserId: number
    _all: number
  }


  export type OrdersMinAggregateInputType = {
    id?: true
    category?: true
    name?: true
    type?: true
    image?: true
    price?: true
    amount?: true
    total?: true
    created?: true
    UserId?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    category?: true
    name?: true
    type?: true
    image?: true
    price?: true
    amount?: true
    total?: true
    created?: true
    UserId?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    category?: true
    name?: true
    type?: true
    image?: true
    price?: true
    amount?: true
    total?: true
    created?: true
    UserId?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: string
    category: string
    name: string
    type: string
    image: string
    price: string
    amount: string
    total: string
    created: Date
    UserId: string
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    name?: boolean
    type?: boolean
    image?: boolean
    price?: boolean
    amount?: boolean
    total?: boolean
    created?: boolean
    UserId?: boolean
    User?: boolean | Checkout_infoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    name?: boolean
    type?: boolean
    image?: boolean
    price?: boolean
    amount?: boolean
    total?: boolean
    created?: boolean
    UserId?: boolean
    User?: boolean | Checkout_infoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    name?: boolean
    type?: boolean
    image?: boolean
    price?: boolean
    amount?: boolean
    total?: boolean
    created?: boolean
    UserId?: boolean
    User?: boolean | Checkout_infoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    category?: boolean
    name?: boolean
    type?: boolean
    image?: boolean
    price?: boolean
    amount?: boolean
    total?: boolean
    created?: boolean
    UserId?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "name" | "type" | "image" | "price" | "amount" | "total" | "created" | "UserId", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Checkout_infoDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Checkout_infoDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Checkout_infoDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      User: Prisma.$Checkout_infoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: string
      name: string
      type: string
      image: string
      price: string
      amount: string
      total: string
      created: Date
      UserId: string
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Checkout_infoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Checkout_infoDefaultArgs<ExtArgs>>): Prisma__Checkout_infoClient<$Result.GetResult<Prisma.$Checkout_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'String'>
    readonly category: FieldRef<"Orders", 'String'>
    readonly name: FieldRef<"Orders", 'String'>
    readonly type: FieldRef<"Orders", 'String'>
    readonly image: FieldRef<"Orders", 'String'>
    readonly price: FieldRef<"Orders", 'String'>
    readonly amount: FieldRef<"Orders", 'String'>
    readonly total: FieldRef<"Orders", 'String'>
    readonly created: FieldRef<"Orders", 'DateTime'>
    readonly UserId: FieldRef<"Orders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model Checkout_info
   */

  export type AggregateCheckout_info = {
    _count: Checkout_infoCountAggregateOutputType | null
    _min: Checkout_infoMinAggregateOutputType | null
    _max: Checkout_infoMaxAggregateOutputType | null
  }

  export type Checkout_infoMinAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    phone: string | null
    cep: string | null
    street: string | null
    number: string | null
    city: string | null
    state: string | null
    created: Date | null
  }

  export type Checkout_infoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    phone: string | null
    cep: string | null
    street: string | null
    number: string | null
    city: string | null
    state: string | null
    created: Date | null
  }

  export type Checkout_infoCountAggregateOutputType = {
    id: number
    name: number
    cpf: number
    phone: number
    cep: number
    street: number
    number: number
    city: number
    state: number
    created: number
    _all: number
  }


  export type Checkout_infoMinAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    phone?: true
    cep?: true
    street?: true
    number?: true
    city?: true
    state?: true
    created?: true
  }

  export type Checkout_infoMaxAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    phone?: true
    cep?: true
    street?: true
    number?: true
    city?: true
    state?: true
    created?: true
  }

  export type Checkout_infoCountAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    phone?: true
    cep?: true
    street?: true
    number?: true
    city?: true
    state?: true
    created?: true
    _all?: true
  }

  export type Checkout_infoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkout_info to aggregate.
     */
    where?: Checkout_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkout_infos to fetch.
     */
    orderBy?: Checkout_infoOrderByWithRelationInput | Checkout_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Checkout_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkout_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkout_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checkout_infos
    **/
    _count?: true | Checkout_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Checkout_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Checkout_infoMaxAggregateInputType
  }

  export type GetCheckout_infoAggregateType<T extends Checkout_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckout_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckout_info[P]>
      : GetScalarType<T[P], AggregateCheckout_info[P]>
  }




  export type Checkout_infoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Checkout_infoWhereInput
    orderBy?: Checkout_infoOrderByWithAggregationInput | Checkout_infoOrderByWithAggregationInput[]
    by: Checkout_infoScalarFieldEnum[] | Checkout_infoScalarFieldEnum
    having?: Checkout_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Checkout_infoCountAggregateInputType | true
    _min?: Checkout_infoMinAggregateInputType
    _max?: Checkout_infoMaxAggregateInputType
  }

  export type Checkout_infoGroupByOutputType = {
    id: string
    name: string
    cpf: string
    phone: string
    cep: string
    street: string
    number: string
    city: string
    state: string
    created: Date
    _count: Checkout_infoCountAggregateOutputType | null
    _min: Checkout_infoMinAggregateOutputType | null
    _max: Checkout_infoMaxAggregateOutputType | null
  }

  type GetCheckout_infoGroupByPayload<T extends Checkout_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Checkout_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Checkout_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Checkout_infoGroupByOutputType[P]>
            : GetScalarType<T[P], Checkout_infoGroupByOutputType[P]>
        }
      >
    >


  export type Checkout_infoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    phone?: boolean
    cep?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    created?: boolean
    orders?: boolean | Checkout_info$ordersArgs<ExtArgs>
    _count?: boolean | Checkout_infoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkout_info"]>

  export type Checkout_infoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    phone?: boolean
    cep?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    created?: boolean
  }, ExtArgs["result"]["checkout_info"]>

  export type Checkout_infoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    phone?: boolean
    cep?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    created?: boolean
  }, ExtArgs["result"]["checkout_info"]>

  export type Checkout_infoSelectScalar = {
    id?: boolean
    name?: boolean
    cpf?: boolean
    phone?: boolean
    cep?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    created?: boolean
  }

  export type Checkout_infoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cpf" | "phone" | "cep" | "street" | "number" | "city" | "state" | "created", ExtArgs["result"]["checkout_info"]>
  export type Checkout_infoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Checkout_info$ordersArgs<ExtArgs>
    _count?: boolean | Checkout_infoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Checkout_infoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Checkout_infoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Checkout_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checkout_info"
    objects: {
      orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cpf: string
      phone: string
      cep: string
      street: string
      number: string
      city: string
      state: string
      created: Date
    }, ExtArgs["result"]["checkout_info"]>
    composites: {}
  }

  type Checkout_infoGetPayload<S extends boolean | null | undefined | Checkout_infoDefaultArgs> = $Result.GetResult<Prisma.$Checkout_infoPayload, S>

  type Checkout_infoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Checkout_infoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Checkout_infoCountAggregateInputType | true
    }

  export interface Checkout_infoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Checkout_info'], meta: { name: 'Checkout_info' } }
    /**
     * Find zero or one Checkout_info that matches the filter.
     * @param {Checkout_infoFindUniqueArgs} args - Arguments to find a Checkout_info
     * @example
     * // Get one Checkout_info
     * const checkout_info = await prisma.checkout_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Checkout_infoFindUniqueArgs>(args: SelectSubset<T, Checkout_infoFindUniqueArgs<ExtArgs>>): Prisma__Checkout_infoClient<$Result.GetResult<Prisma.$Checkout_infoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Checkout_info that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Checkout_infoFindUniqueOrThrowArgs} args - Arguments to find a Checkout_info
     * @example
     * // Get one Checkout_info
     * const checkout_info = await prisma.checkout_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Checkout_infoFindUniqueOrThrowArgs>(args: SelectSubset<T, Checkout_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Checkout_infoClient<$Result.GetResult<Prisma.$Checkout_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checkout_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Checkout_infoFindFirstArgs} args - Arguments to find a Checkout_info
     * @example
     * // Get one Checkout_info
     * const checkout_info = await prisma.checkout_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Checkout_infoFindFirstArgs>(args?: SelectSubset<T, Checkout_infoFindFirstArgs<ExtArgs>>): Prisma__Checkout_infoClient<$Result.GetResult<Prisma.$Checkout_infoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checkout_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Checkout_infoFindFirstOrThrowArgs} args - Arguments to find a Checkout_info
     * @example
     * // Get one Checkout_info
     * const checkout_info = await prisma.checkout_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Checkout_infoFindFirstOrThrowArgs>(args?: SelectSubset<T, Checkout_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Checkout_infoClient<$Result.GetResult<Prisma.$Checkout_infoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checkout_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Checkout_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checkout_infos
     * const checkout_infos = await prisma.checkout_info.findMany()
     * 
     * // Get first 10 Checkout_infos
     * const checkout_infos = await prisma.checkout_info.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkout_infoWithIdOnly = await prisma.checkout_info.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Checkout_infoFindManyArgs>(args?: SelectSubset<T, Checkout_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Checkout_infoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Checkout_info.
     * @param {Checkout_infoCreateArgs} args - Arguments to create a Checkout_info.
     * @example
     * // Create one Checkout_info
     * const Checkout_info = await prisma.checkout_info.create({
     *   data: {
     *     // ... data to create a Checkout_info
     *   }
     * })
     * 
     */
    create<T extends Checkout_infoCreateArgs>(args: SelectSubset<T, Checkout_infoCreateArgs<ExtArgs>>): Prisma__Checkout_infoClient<$Result.GetResult<Prisma.$Checkout_infoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checkout_infos.
     * @param {Checkout_infoCreateManyArgs} args - Arguments to create many Checkout_infos.
     * @example
     * // Create many Checkout_infos
     * const checkout_info = await prisma.checkout_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Checkout_infoCreateManyArgs>(args?: SelectSubset<T, Checkout_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checkout_infos and returns the data saved in the database.
     * @param {Checkout_infoCreateManyAndReturnArgs} args - Arguments to create many Checkout_infos.
     * @example
     * // Create many Checkout_infos
     * const checkout_info = await prisma.checkout_info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checkout_infos and only return the `id`
     * const checkout_infoWithIdOnly = await prisma.checkout_info.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Checkout_infoCreateManyAndReturnArgs>(args?: SelectSubset<T, Checkout_infoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Checkout_infoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Checkout_info.
     * @param {Checkout_infoDeleteArgs} args - Arguments to delete one Checkout_info.
     * @example
     * // Delete one Checkout_info
     * const Checkout_info = await prisma.checkout_info.delete({
     *   where: {
     *     // ... filter to delete one Checkout_info
     *   }
     * })
     * 
     */
    delete<T extends Checkout_infoDeleteArgs>(args: SelectSubset<T, Checkout_infoDeleteArgs<ExtArgs>>): Prisma__Checkout_infoClient<$Result.GetResult<Prisma.$Checkout_infoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Checkout_info.
     * @param {Checkout_infoUpdateArgs} args - Arguments to update one Checkout_info.
     * @example
     * // Update one Checkout_info
     * const checkout_info = await prisma.checkout_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Checkout_infoUpdateArgs>(args: SelectSubset<T, Checkout_infoUpdateArgs<ExtArgs>>): Prisma__Checkout_infoClient<$Result.GetResult<Prisma.$Checkout_infoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checkout_infos.
     * @param {Checkout_infoDeleteManyArgs} args - Arguments to filter Checkout_infos to delete.
     * @example
     * // Delete a few Checkout_infos
     * const { count } = await prisma.checkout_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Checkout_infoDeleteManyArgs>(args?: SelectSubset<T, Checkout_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkout_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Checkout_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checkout_infos
     * const checkout_info = await prisma.checkout_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Checkout_infoUpdateManyArgs>(args: SelectSubset<T, Checkout_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkout_infos and returns the data updated in the database.
     * @param {Checkout_infoUpdateManyAndReturnArgs} args - Arguments to update many Checkout_infos.
     * @example
     * // Update many Checkout_infos
     * const checkout_info = await prisma.checkout_info.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Checkout_infos and only return the `id`
     * const checkout_infoWithIdOnly = await prisma.checkout_info.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Checkout_infoUpdateManyAndReturnArgs>(args: SelectSubset<T, Checkout_infoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Checkout_infoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Checkout_info.
     * @param {Checkout_infoUpsertArgs} args - Arguments to update or create a Checkout_info.
     * @example
     * // Update or create a Checkout_info
     * const checkout_info = await prisma.checkout_info.upsert({
     *   create: {
     *     // ... data to create a Checkout_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checkout_info we want to update
     *   }
     * })
     */
    upsert<T extends Checkout_infoUpsertArgs>(args: SelectSubset<T, Checkout_infoUpsertArgs<ExtArgs>>): Prisma__Checkout_infoClient<$Result.GetResult<Prisma.$Checkout_infoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Checkout_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Checkout_infoCountArgs} args - Arguments to filter Checkout_infos to count.
     * @example
     * // Count the number of Checkout_infos
     * const count = await prisma.checkout_info.count({
     *   where: {
     *     // ... the filter for the Checkout_infos we want to count
     *   }
     * })
    **/
    count<T extends Checkout_infoCountArgs>(
      args?: Subset<T, Checkout_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Checkout_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checkout_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Checkout_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Checkout_infoAggregateArgs>(args: Subset<T, Checkout_infoAggregateArgs>): Prisma.PrismaPromise<GetCheckout_infoAggregateType<T>>

    /**
     * Group by Checkout_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Checkout_infoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Checkout_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Checkout_infoGroupByArgs['orderBy'] }
        : { orderBy?: Checkout_infoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Checkout_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckout_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Checkout_info model
   */
  readonly fields: Checkout_infoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Checkout_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Checkout_infoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Checkout_info$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Checkout_info$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Checkout_info model
   */
  interface Checkout_infoFieldRefs {
    readonly id: FieldRef<"Checkout_info", 'String'>
    readonly name: FieldRef<"Checkout_info", 'String'>
    readonly cpf: FieldRef<"Checkout_info", 'String'>
    readonly phone: FieldRef<"Checkout_info", 'String'>
    readonly cep: FieldRef<"Checkout_info", 'String'>
    readonly street: FieldRef<"Checkout_info", 'String'>
    readonly number: FieldRef<"Checkout_info", 'String'>
    readonly city: FieldRef<"Checkout_info", 'String'>
    readonly state: FieldRef<"Checkout_info", 'String'>
    readonly created: FieldRef<"Checkout_info", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Checkout_info findUnique
   */
  export type Checkout_infoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout_info
     */
    select?: Checkout_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout_info
     */
    omit?: Checkout_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Checkout_infoInclude<ExtArgs> | null
    /**
     * Filter, which Checkout_info to fetch.
     */
    where: Checkout_infoWhereUniqueInput
  }

  /**
   * Checkout_info findUniqueOrThrow
   */
  export type Checkout_infoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout_info
     */
    select?: Checkout_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout_info
     */
    omit?: Checkout_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Checkout_infoInclude<ExtArgs> | null
    /**
     * Filter, which Checkout_info to fetch.
     */
    where: Checkout_infoWhereUniqueInput
  }

  /**
   * Checkout_info findFirst
   */
  export type Checkout_infoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout_info
     */
    select?: Checkout_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout_info
     */
    omit?: Checkout_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Checkout_infoInclude<ExtArgs> | null
    /**
     * Filter, which Checkout_info to fetch.
     */
    where?: Checkout_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkout_infos to fetch.
     */
    orderBy?: Checkout_infoOrderByWithRelationInput | Checkout_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkout_infos.
     */
    cursor?: Checkout_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkout_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkout_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkout_infos.
     */
    distinct?: Checkout_infoScalarFieldEnum | Checkout_infoScalarFieldEnum[]
  }

  /**
   * Checkout_info findFirstOrThrow
   */
  export type Checkout_infoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout_info
     */
    select?: Checkout_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout_info
     */
    omit?: Checkout_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Checkout_infoInclude<ExtArgs> | null
    /**
     * Filter, which Checkout_info to fetch.
     */
    where?: Checkout_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkout_infos to fetch.
     */
    orderBy?: Checkout_infoOrderByWithRelationInput | Checkout_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkout_infos.
     */
    cursor?: Checkout_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkout_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkout_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkout_infos.
     */
    distinct?: Checkout_infoScalarFieldEnum | Checkout_infoScalarFieldEnum[]
  }

  /**
   * Checkout_info findMany
   */
  export type Checkout_infoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout_info
     */
    select?: Checkout_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout_info
     */
    omit?: Checkout_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Checkout_infoInclude<ExtArgs> | null
    /**
     * Filter, which Checkout_infos to fetch.
     */
    where?: Checkout_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkout_infos to fetch.
     */
    orderBy?: Checkout_infoOrderByWithRelationInput | Checkout_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checkout_infos.
     */
    cursor?: Checkout_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkout_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkout_infos.
     */
    skip?: number
    distinct?: Checkout_infoScalarFieldEnum | Checkout_infoScalarFieldEnum[]
  }

  /**
   * Checkout_info create
   */
  export type Checkout_infoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout_info
     */
    select?: Checkout_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout_info
     */
    omit?: Checkout_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Checkout_infoInclude<ExtArgs> | null
    /**
     * The data needed to create a Checkout_info.
     */
    data: XOR<Checkout_infoCreateInput, Checkout_infoUncheckedCreateInput>
  }

  /**
   * Checkout_info createMany
   */
  export type Checkout_infoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checkout_infos.
     */
    data: Checkout_infoCreateManyInput | Checkout_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checkout_info createManyAndReturn
   */
  export type Checkout_infoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout_info
     */
    select?: Checkout_infoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout_info
     */
    omit?: Checkout_infoOmit<ExtArgs> | null
    /**
     * The data used to create many Checkout_infos.
     */
    data: Checkout_infoCreateManyInput | Checkout_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checkout_info update
   */
  export type Checkout_infoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout_info
     */
    select?: Checkout_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout_info
     */
    omit?: Checkout_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Checkout_infoInclude<ExtArgs> | null
    /**
     * The data needed to update a Checkout_info.
     */
    data: XOR<Checkout_infoUpdateInput, Checkout_infoUncheckedUpdateInput>
    /**
     * Choose, which Checkout_info to update.
     */
    where: Checkout_infoWhereUniqueInput
  }

  /**
   * Checkout_info updateMany
   */
  export type Checkout_infoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checkout_infos.
     */
    data: XOR<Checkout_infoUpdateManyMutationInput, Checkout_infoUncheckedUpdateManyInput>
    /**
     * Filter which Checkout_infos to update
     */
    where?: Checkout_infoWhereInput
    /**
     * Limit how many Checkout_infos to update.
     */
    limit?: number
  }

  /**
   * Checkout_info updateManyAndReturn
   */
  export type Checkout_infoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout_info
     */
    select?: Checkout_infoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout_info
     */
    omit?: Checkout_infoOmit<ExtArgs> | null
    /**
     * The data used to update Checkout_infos.
     */
    data: XOR<Checkout_infoUpdateManyMutationInput, Checkout_infoUncheckedUpdateManyInput>
    /**
     * Filter which Checkout_infos to update
     */
    where?: Checkout_infoWhereInput
    /**
     * Limit how many Checkout_infos to update.
     */
    limit?: number
  }

  /**
   * Checkout_info upsert
   */
  export type Checkout_infoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout_info
     */
    select?: Checkout_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout_info
     */
    omit?: Checkout_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Checkout_infoInclude<ExtArgs> | null
    /**
     * The filter to search for the Checkout_info to update in case it exists.
     */
    where: Checkout_infoWhereUniqueInput
    /**
     * In case the Checkout_info found by the `where` argument doesn't exist, create a new Checkout_info with this data.
     */
    create: XOR<Checkout_infoCreateInput, Checkout_infoUncheckedCreateInput>
    /**
     * In case the Checkout_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Checkout_infoUpdateInput, Checkout_infoUncheckedUpdateInput>
  }

  /**
   * Checkout_info delete
   */
  export type Checkout_infoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout_info
     */
    select?: Checkout_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout_info
     */
    omit?: Checkout_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Checkout_infoInclude<ExtArgs> | null
    /**
     * Filter which Checkout_info to delete.
     */
    where: Checkout_infoWhereUniqueInput
  }

  /**
   * Checkout_info deleteMany
   */
  export type Checkout_infoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkout_infos to delete
     */
    where?: Checkout_infoWhereInput
    /**
     * Limit how many Checkout_infos to delete.
     */
    limit?: number
  }

  /**
   * Checkout_info.orders
   */
  export type Checkout_info$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Checkout_info without action
   */
  export type Checkout_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout_info
     */
    select?: Checkout_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout_info
     */
    omit?: Checkout_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Checkout_infoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    category: 'category',
    name: 'name',
    type: 'type',
    image: 'image',
    price: 'price',
    amount: 'amount',
    total: 'total',
    created: 'created',
    UserId: 'UserId'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const Checkout_infoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpf: 'cpf',
    phone: 'phone',
    cep: 'cep',
    street: 'street',
    number: 'number',
    city: 'city',
    state: 'state',
    created: 'created'
  };

  export type Checkout_infoScalarFieldEnum = (typeof Checkout_infoScalarFieldEnum)[keyof typeof Checkout_infoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: StringFilter<"Orders"> | string
    category?: StringFilter<"Orders"> | string
    name?: StringFilter<"Orders"> | string
    type?: StringFilter<"Orders"> | string
    image?: StringFilter<"Orders"> | string
    price?: StringFilter<"Orders"> | string
    amount?: StringFilter<"Orders"> | string
    total?: StringFilter<"Orders"> | string
    created?: DateTimeFilter<"Orders"> | Date | string
    UserId?: StringFilter<"Orders"> | string
    User?: XOR<Checkout_infoScalarRelationFilter, Checkout_infoWhereInput>
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    type?: SortOrder
    image?: SortOrder
    price?: SortOrder
    amount?: SortOrder
    total?: SortOrder
    created?: SortOrder
    UserId?: SortOrder
    User?: Checkout_infoOrderByWithRelationInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    category?: StringFilter<"Orders"> | string
    name?: StringFilter<"Orders"> | string
    type?: StringFilter<"Orders"> | string
    image?: StringFilter<"Orders"> | string
    price?: StringFilter<"Orders"> | string
    amount?: StringFilter<"Orders"> | string
    total?: StringFilter<"Orders"> | string
    created?: DateTimeFilter<"Orders"> | Date | string
    UserId?: StringFilter<"Orders"> | string
    User?: XOR<Checkout_infoScalarRelationFilter, Checkout_infoWhereInput>
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    type?: SortOrder
    image?: SortOrder
    price?: SortOrder
    amount?: SortOrder
    total?: SortOrder
    created?: SortOrder
    UserId?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Orders"> | string
    category?: StringWithAggregatesFilter<"Orders"> | string
    name?: StringWithAggregatesFilter<"Orders"> | string
    type?: StringWithAggregatesFilter<"Orders"> | string
    image?: StringWithAggregatesFilter<"Orders"> | string
    price?: StringWithAggregatesFilter<"Orders"> | string
    amount?: StringWithAggregatesFilter<"Orders"> | string
    total?: StringWithAggregatesFilter<"Orders"> | string
    created?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    UserId?: StringWithAggregatesFilter<"Orders"> | string
  }

  export type Checkout_infoWhereInput = {
    AND?: Checkout_infoWhereInput | Checkout_infoWhereInput[]
    OR?: Checkout_infoWhereInput[]
    NOT?: Checkout_infoWhereInput | Checkout_infoWhereInput[]
    id?: StringFilter<"Checkout_info"> | string
    name?: StringFilter<"Checkout_info"> | string
    cpf?: StringFilter<"Checkout_info"> | string
    phone?: StringFilter<"Checkout_info"> | string
    cep?: StringFilter<"Checkout_info"> | string
    street?: StringFilter<"Checkout_info"> | string
    number?: StringFilter<"Checkout_info"> | string
    city?: StringFilter<"Checkout_info"> | string
    state?: StringFilter<"Checkout_info"> | string
    created?: DateTimeFilter<"Checkout_info"> | Date | string
    orders?: OrdersListRelationFilter
  }

  export type Checkout_infoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    created?: SortOrder
    orders?: OrdersOrderByRelationAggregateInput
  }

  export type Checkout_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Checkout_infoWhereInput | Checkout_infoWhereInput[]
    OR?: Checkout_infoWhereInput[]
    NOT?: Checkout_infoWhereInput | Checkout_infoWhereInput[]
    name?: StringFilter<"Checkout_info"> | string
    cpf?: StringFilter<"Checkout_info"> | string
    phone?: StringFilter<"Checkout_info"> | string
    cep?: StringFilter<"Checkout_info"> | string
    street?: StringFilter<"Checkout_info"> | string
    number?: StringFilter<"Checkout_info"> | string
    city?: StringFilter<"Checkout_info"> | string
    state?: StringFilter<"Checkout_info"> | string
    created?: DateTimeFilter<"Checkout_info"> | Date | string
    orders?: OrdersListRelationFilter
  }, "id">

  export type Checkout_infoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    created?: SortOrder
    _count?: Checkout_infoCountOrderByAggregateInput
    _max?: Checkout_infoMaxOrderByAggregateInput
    _min?: Checkout_infoMinOrderByAggregateInput
  }

  export type Checkout_infoScalarWhereWithAggregatesInput = {
    AND?: Checkout_infoScalarWhereWithAggregatesInput | Checkout_infoScalarWhereWithAggregatesInput[]
    OR?: Checkout_infoScalarWhereWithAggregatesInput[]
    NOT?: Checkout_infoScalarWhereWithAggregatesInput | Checkout_infoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Checkout_info"> | string
    name?: StringWithAggregatesFilter<"Checkout_info"> | string
    cpf?: StringWithAggregatesFilter<"Checkout_info"> | string
    phone?: StringWithAggregatesFilter<"Checkout_info"> | string
    cep?: StringWithAggregatesFilter<"Checkout_info"> | string
    street?: StringWithAggregatesFilter<"Checkout_info"> | string
    number?: StringWithAggregatesFilter<"Checkout_info"> | string
    city?: StringWithAggregatesFilter<"Checkout_info"> | string
    state?: StringWithAggregatesFilter<"Checkout_info"> | string
    created?: DateTimeWithAggregatesFilter<"Checkout_info"> | Date | string
  }

  export type OrdersCreateInput = {
    id?: string
    category: string
    name: string
    type: string
    image: string
    price: string
    amount: string
    total: string
    created?: Date | string
    User: Checkout_infoCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: string
    category: string
    name: string
    type: string
    image: string
    price: string
    amount: string
    total: string
    created?: Date | string
    UserId: string
  }

  export type OrdersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: Checkout_infoUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    UserId?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersCreateManyInput = {
    id?: string
    category: string
    name: string
    type: string
    image: string
    price: string
    amount: string
    total: string
    created?: Date | string
    UserId: string
  }

  export type OrdersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    UserId?: StringFieldUpdateOperationsInput | string
  }

  export type Checkout_infoCreateInput = {
    id?: string
    name: string
    cpf: string
    phone: string
    cep: string
    street: string
    number: string
    city: string
    state: string
    created?: Date | string
    orders?: OrdersCreateNestedManyWithoutUserInput
  }

  export type Checkout_infoUncheckedCreateInput = {
    id?: string
    name: string
    cpf: string
    phone: string
    cep: string
    street: string
    number: string
    city: string
    state: string
    created?: Date | string
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
  }

  export type Checkout_infoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateManyWithoutUserNestedInput
  }

  export type Checkout_infoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Checkout_infoCreateManyInput = {
    id?: string
    name: string
    cpf: string
    phone: string
    cep: string
    street: string
    number: string
    city: string
    state: string
    created?: Date | string
  }

  export type Checkout_infoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Checkout_infoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Checkout_infoScalarRelationFilter = {
    is?: Checkout_infoWhereInput
    isNot?: Checkout_infoWhereInput
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    type?: SortOrder
    image?: SortOrder
    price?: SortOrder
    amount?: SortOrder
    total?: SortOrder
    created?: SortOrder
    UserId?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    type?: SortOrder
    image?: SortOrder
    price?: SortOrder
    amount?: SortOrder
    total?: SortOrder
    created?: SortOrder
    UserId?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    type?: SortOrder
    image?: SortOrder
    price?: SortOrder
    amount?: SortOrder
    total?: SortOrder
    created?: SortOrder
    UserId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Checkout_infoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    created?: SortOrder
  }

  export type Checkout_infoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    created?: SortOrder
  }

  export type Checkout_infoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    cep?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    created?: SortOrder
  }

  export type Checkout_infoCreateNestedOneWithoutOrdersInput = {
    create?: XOR<Checkout_infoCreateWithoutOrdersInput, Checkout_infoUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: Checkout_infoCreateOrConnectWithoutOrdersInput
    connect?: Checkout_infoWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Checkout_infoUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<Checkout_infoCreateWithoutOrdersInput, Checkout_infoUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: Checkout_infoCreateOrConnectWithoutOrdersInput
    upsert?: Checkout_infoUpsertWithoutOrdersInput
    connect?: Checkout_infoWhereUniqueInput
    update?: XOR<XOR<Checkout_infoUpdateToOneWithWhereWithoutOrdersInput, Checkout_infoUpdateWithoutOrdersInput>, Checkout_infoUncheckedUpdateWithoutOrdersInput>
  }

  export type OrdersCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Checkout_infoCreateWithoutOrdersInput = {
    id?: string
    name: string
    cpf: string
    phone: string
    cep: string
    street: string
    number: string
    city: string
    state: string
    created?: Date | string
  }

  export type Checkout_infoUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    cpf: string
    phone: string
    cep: string
    street: string
    number: string
    city: string
    state: string
    created?: Date | string
  }

  export type Checkout_infoCreateOrConnectWithoutOrdersInput = {
    where: Checkout_infoWhereUniqueInput
    create: XOR<Checkout_infoCreateWithoutOrdersInput, Checkout_infoUncheckedCreateWithoutOrdersInput>
  }

  export type Checkout_infoUpsertWithoutOrdersInput = {
    update: XOR<Checkout_infoUpdateWithoutOrdersInput, Checkout_infoUncheckedUpdateWithoutOrdersInput>
    create: XOR<Checkout_infoCreateWithoutOrdersInput, Checkout_infoUncheckedCreateWithoutOrdersInput>
    where?: Checkout_infoWhereInput
  }

  export type Checkout_infoUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Checkout_infoWhereInput
    data: XOR<Checkout_infoUpdateWithoutOrdersInput, Checkout_infoUncheckedUpdateWithoutOrdersInput>
  }

  export type Checkout_infoUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Checkout_infoUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateWithoutUserInput = {
    id?: string
    category: string
    name: string
    type: string
    image: string
    price: string
    amount: string
    total: string
    created?: Date | string
  }

  export type OrdersUncheckedCreateWithoutUserInput = {
    id?: string
    category: string
    name: string
    type: string
    image: string
    price: string
    amount: string
    total: string
    created?: Date | string
  }

  export type OrdersCreateOrConnectWithoutUserInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersCreateManyUserInputEnvelope = {
    data: OrdersCreateManyUserInput | OrdersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrdersUpsertWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUserInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUserInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: StringFilter<"Orders"> | string
    category?: StringFilter<"Orders"> | string
    name?: StringFilter<"Orders"> | string
    type?: StringFilter<"Orders"> | string
    image?: StringFilter<"Orders"> | string
    price?: StringFilter<"Orders"> | string
    amount?: StringFilter<"Orders"> | string
    total?: StringFilter<"Orders"> | string
    created?: DateTimeFilter<"Orders"> | Date | string
    UserId?: StringFilter<"Orders"> | string
  }

  export type OrdersCreateManyUserInput = {
    id?: string
    category: string
    name: string
    type: string
    image: string
    price: string
    amount: string
    total: string
    created?: Date | string
  }

  export type OrdersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}