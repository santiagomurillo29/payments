
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
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Customers
 * 
 */
export type Customers = $Result.DefaultSelection<Prisma.$CustomersPayload>
/**
 * Model Transactions
 * 
 */
export type Transactions = $Result.DefaultSelection<Prisma.$TransactionsPayload>
/**
 * Model Deliveries
 * 
 */
export type Deliveries = $Result.DefaultSelection<Prisma.$DeliveriesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransactionStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  DECLINED: 'DECLINED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const DeliveryStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  DELIVERED: 'DELIVERED'
};

export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus]

}

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type DeliveryStatus = $Enums.DeliveryStatus

export const DeliveryStatus: typeof $Enums.DeliveryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.products.findMany()
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
   * // Fetch zero or more Products
   * const products = await prisma.products.findMany()
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
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **Customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.CustomersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **Transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.TransactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveries`: Exposes CRUD operations for the **Deliveries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.deliveries.findMany()
    * ```
    */
  get deliveries(): Prisma.DeliveriesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    Products: 'Products',
    Customers: 'Customers',
    Transactions: 'Transactions',
    Deliveries: 'Deliveries'
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
      modelProps: "products" | "customers" | "transactions" | "deliveries"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Customers: {
        payload: Prisma.$CustomersPayload<ExtArgs>
        fields: Prisma.CustomersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          findFirst: {
            args: Prisma.CustomersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          findMany: {
            args: Prisma.CustomersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>[]
          }
          create: {
            args: Prisma.CustomersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          createMany: {
            args: Prisma.CustomersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>[]
          }
          delete: {
            args: Prisma.CustomersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          update: {
            args: Prisma.CustomersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          deleteMany: {
            args: Prisma.CustomersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>[]
          }
          upsert: {
            args: Prisma.CustomersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.CustomersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      Transactions: {
        payload: Prisma.$TransactionsPayload<ExtArgs>
        fields: Prisma.TransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findFirst: {
            args: Prisma.TransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findMany: {
            args: Prisma.TransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          create: {
            args: Prisma.TransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          createMany: {
            args: Prisma.TransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          delete: {
            args: Prisma.TransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          update: {
            args: Prisma.TransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          deleteMany: {
            args: Prisma.TransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          upsert: {
            args: Prisma.TransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.TransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      Deliveries: {
        payload: Prisma.$DeliveriesPayload<ExtArgs>
        fields: Prisma.DeliveriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          findFirst: {
            args: Prisma.DeliveriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          findMany: {
            args: Prisma.DeliveriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>[]
          }
          create: {
            args: Prisma.DeliveriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          createMany: {
            args: Prisma.DeliveriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>[]
          }
          delete: {
            args: Prisma.DeliveriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          update: {
            args: Prisma.DeliveriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          deleteMany: {
            args: Prisma.DeliveriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>[]
          }
          upsert: {
            args: Prisma.DeliveriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          aggregate: {
            args: Prisma.DeliveriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveries>
          }
          groupBy: {
            args: Prisma.DeliveriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveriesCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveriesCountAggregateOutputType> | number
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
    products?: ProductsOmit
    customers?: CustomersOmit
    transactions?: TransactionsOmit
    deliveries?: DeliveriesOmit
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
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    transactions: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | ProductsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    transactions: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CustomersCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    price: Decimal | null
    stock: number | null
  }

  export type ProductsSumAggregateOutputType = {
    price: Decimal | null
    stock: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock: number | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock: number | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    stock: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ProductsSumAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    createAt?: true
    updatedAt?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    createAt?: true
    updatedAt?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    name: string
    description: string
    price: Decimal
    stock: number
    createAt: Date
    updatedAt: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    createAt?: boolean
    updatedAt?: boolean
    transactions?: boolean | Products$transactionsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "stock" | "createAt" | "updatedAt", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Products$transactionsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price: Prisma.Decimal
      stock: number
      createAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends Products$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Products$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'String'>
    readonly name: FieldRef<"Products", 'String'>
    readonly description: FieldRef<"Products", 'String'>
    readonly price: FieldRef<"Products", 'Decimal'>
    readonly stock: FieldRef<"Products", 'Int'>
    readonly createAt: FieldRef<"Products", 'DateTime'>
    readonly updatedAt: FieldRef<"Products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.transactions
   */
  export type Products$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model Customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    address: string | null
    city: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    address: string | null
    city: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    address: number
    city: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    city?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    city?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    city?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to aggregate.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type CustomersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomersWhereInput
    orderBy?: CustomersOrderByWithAggregationInput | CustomersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: CustomersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    id: string
    name: string
    email: string
    address: string
    city: string
    createdAt: Date
    updatedAt: Date
    _count: CustomersCountAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends CustomersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type CustomersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactions?: boolean | Customers$transactionsArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type CustomersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customers"]>

  export type CustomersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customers"]>

  export type CustomersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "address" | "city" | "createdAt" | "updatedAt", ExtArgs["result"]["customers"]>
  export type CustomersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Customers$transactionsArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customers"
    objects: {
      transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      address: string
      city: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type CustomersGetPayload<S extends boolean | null | undefined | CustomersDefaultArgs> = $Result.GetResult<Prisma.$CustomersPayload, S>

  type CustomersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface CustomersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customers'], meta: { name: 'Customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {CustomersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomersFindUniqueArgs>(args: SelectSubset<T, CustomersFindUniqueArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomersFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomersFindFirstArgs>(args?: SelectSubset<T, CustomersFindFirstArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomersFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomersFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomersFindManyArgs>(args?: SelectSubset<T, CustomersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers.
     * @param {CustomersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends CustomersCreateArgs>(args: SelectSubset<T, CustomersCreateArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomersCreateManyArgs>(args?: SelectSubset<T, CustomersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomersCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomersCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customers.
     * @param {CustomersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends CustomersDeleteArgs>(args: SelectSubset<T, CustomersDeleteArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers.
     * @param {CustomersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomersUpdateArgs>(args: SelectSubset<T, CustomersUpdateArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomersDeleteManyArgs>(args?: SelectSubset<T, CustomersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomersUpdateManyArgs>(args: SelectSubset<T, CustomersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomersUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomersUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customers.
     * @param {CustomersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends CustomersUpsertArgs>(args: SelectSubset<T, CustomersUpsertArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomersCountArgs>(
      args?: Subset<T, CustomersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersGroupByArgs} args - Group by arguments.
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
      T extends CustomersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomersGroupByArgs['orderBy'] }
        : { orderBy?: CustomersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customers model
   */
  readonly fields: CustomersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends Customers$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Customers$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customers model
   */
  interface CustomersFieldRefs {
    readonly id: FieldRef<"Customers", 'String'>
    readonly name: FieldRef<"Customers", 'String'>
    readonly email: FieldRef<"Customers", 'String'>
    readonly address: FieldRef<"Customers", 'String'>
    readonly city: FieldRef<"Customers", 'String'>
    readonly createdAt: FieldRef<"Customers", 'DateTime'>
    readonly updatedAt: FieldRef<"Customers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customers findUnique
   */
  export type CustomersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers findUniqueOrThrow
   */
  export type CustomersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers findFirst
   */
  export type CustomersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * Customers findFirstOrThrow
   */
  export type CustomersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * Customers findMany
   */
  export type CustomersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * Customers create
   */
  export type CustomersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * The data needed to create a Customers.
     */
    data: XOR<CustomersCreateInput, CustomersUncheckedCreateInput>
  }

  /**
   * Customers createMany
   */
  export type CustomersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomersCreateManyInput | CustomersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customers createManyAndReturn
   */
  export type CustomersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomersCreateManyInput | CustomersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customers update
   */
  export type CustomersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * The data needed to update a Customers.
     */
    data: XOR<CustomersUpdateInput, CustomersUncheckedUpdateInput>
    /**
     * Choose, which Customers to update.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers updateMany
   */
  export type CustomersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomersUpdateManyMutationInput, CustomersUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomersWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customers updateManyAndReturn
   */
  export type CustomersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomersUpdateManyMutationInput, CustomersUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomersWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customers upsert
   */
  export type CustomersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * The filter to search for the Customers to update in case it exists.
     */
    where: CustomersWhereUniqueInput
    /**
     * In case the Customers found by the `where` argument doesn't exist, create a new Customers with this data.
     */
    create: XOR<CustomersCreateInput, CustomersUncheckedCreateInput>
    /**
     * In case the Customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomersUpdateInput, CustomersUncheckedUpdateInput>
  }

  /**
   * Customers delete
   */
  export type CustomersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter which Customers to delete.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers deleteMany
   */
  export type CustomersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomersWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customers.transactions
   */
  export type Customers$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Customers without action
   */
  export type CustomersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
  }


  /**
   * Model Transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    quantity: number | null
    baseFee: Decimal | null
    deliveryFee: Decimal | null
    totalAmount: Decimal | null
  }

  export type TransactionsSumAggregateOutputType = {
    quantity: number | null
    baseFee: Decimal | null
    deliveryFee: Decimal | null
    totalAmount: Decimal | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    productId: string | null
    quantity: number | null
    baseFee: Decimal | null
    deliveryFee: Decimal | null
    totalAmount: Decimal | null
    status: $Enums.TransactionStatus | null
    wompiTransactionId: string | null
    referenceCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    productId: string | null
    quantity: number | null
    baseFee: Decimal | null
    deliveryFee: Decimal | null
    totalAmount: Decimal | null
    status: $Enums.TransactionStatus | null
    wompiTransactionId: string | null
    referenceCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    customerId: number
    productId: number
    quantity: number
    baseFee: number
    deliveryFee: number
    totalAmount: number
    status: number
    wompiTransactionId: number
    referenceCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    quantity?: true
    baseFee?: true
    deliveryFee?: true
    totalAmount?: true
  }

  export type TransactionsSumAggregateInputType = {
    quantity?: true
    baseFee?: true
    deliveryFee?: true
    totalAmount?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    customerId?: true
    productId?: true
    quantity?: true
    baseFee?: true
    deliveryFee?: true
    totalAmount?: true
    status?: true
    wompiTransactionId?: true
    referenceCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    customerId?: true
    productId?: true
    quantity?: true
    baseFee?: true
    deliveryFee?: true
    totalAmount?: true
    status?: true
    wompiTransactionId?: true
    referenceCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    customerId?: true
    productId?: true
    quantity?: true
    baseFee?: true
    deliveryFee?: true
    totalAmount?: true
    status?: true
    wompiTransactionId?: true
    referenceCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to aggregate.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type TransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithAggregationInput | TransactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: TransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: string
    customerId: string
    productId: string
    quantity: number
    baseFee: Decimal
    deliveryFee: Decimal
    totalAmount: Decimal
    status: $Enums.TransactionStatus
    wompiTransactionId: string | null
    referenceCode: string
    createdAt: Date
    updatedAt: Date
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends TransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type TransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    productId?: boolean
    quantity?: boolean
    baseFee?: boolean
    deliveryFee?: boolean
    totalAmount?: boolean
    status?: boolean
    wompiTransactionId?: boolean
    referenceCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    deliveries?: boolean | Transactions$deliveriesArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    productId?: boolean
    quantity?: boolean
    baseFee?: boolean
    deliveryFee?: boolean
    totalAmount?: boolean
    status?: boolean
    wompiTransactionId?: boolean
    referenceCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    productId?: boolean
    quantity?: boolean
    baseFee?: boolean
    deliveryFee?: boolean
    totalAmount?: boolean
    status?: boolean
    wompiTransactionId?: boolean
    referenceCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectScalar = {
    id?: boolean
    customerId?: boolean
    productId?: boolean
    quantity?: boolean
    baseFee?: boolean
    deliveryFee?: boolean
    totalAmount?: boolean
    status?: boolean
    wompiTransactionId?: boolean
    referenceCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "productId" | "quantity" | "baseFee" | "deliveryFee" | "totalAmount" | "status" | "wompiTransactionId" | "referenceCode" | "createdAt" | "updatedAt", ExtArgs["result"]["transactions"]>
  export type TransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    deliveries?: boolean | Transactions$deliveriesArgs<ExtArgs>
  }
  export type TransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type TransactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $TransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transactions"
    objects: {
      customer: Prisma.$CustomersPayload<ExtArgs>
      product: Prisma.$ProductsPayload<ExtArgs>
      deliveries: Prisma.$DeliveriesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      productId: string
      quantity: number
      baseFee: Prisma.Decimal
      deliveryFee: Prisma.Decimal
      totalAmount: Prisma.Decimal
      status: $Enums.TransactionStatus
      wompiTransactionId: string | null
      referenceCode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type TransactionsGetPayload<S extends boolean | null | undefined | TransactionsDefaultArgs> = $Result.GetResult<Prisma.$TransactionsPayload, S>

  type TransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface TransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transactions'], meta: { name: 'Transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {TransactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionsFindUniqueArgs>(args: SelectSubset<T, TransactionsFindUniqueArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionsFindFirstArgs>(args?: SelectSubset<T, TransactionsFindFirstArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionsFindManyArgs>(args?: SelectSubset<T, TransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {TransactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends TransactionsCreateArgs>(args: SelectSubset<T, TransactionsCreateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionsCreateManyArgs>(args?: SelectSubset<T, TransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transactions.
     * @param {TransactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends TransactionsDeleteArgs>(args: SelectSubset<T, TransactionsDeleteArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {TransactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionsUpdateArgs>(args: SelectSubset<T, TransactionsUpdateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionsDeleteManyArgs>(args?: SelectSubset<T, TransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionsUpdateManyArgs>(args: SelectSubset<T, TransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionsUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transactions.
     * @param {TransactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends TransactionsUpsertArgs>(args: SelectSubset<T, TransactionsUpsertArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionsCountArgs>(
      args?: Subset<T, TransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsGroupByArgs} args - Group by arguments.
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
      T extends TransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transactions model
   */
  readonly fields: TransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomersDefaultArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deliveries<T extends Transactions$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$deliveriesArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transactions model
   */
  interface TransactionsFieldRefs {
    readonly id: FieldRef<"Transactions", 'String'>
    readonly customerId: FieldRef<"Transactions", 'String'>
    readonly productId: FieldRef<"Transactions", 'String'>
    readonly quantity: FieldRef<"Transactions", 'Int'>
    readonly baseFee: FieldRef<"Transactions", 'Decimal'>
    readonly deliveryFee: FieldRef<"Transactions", 'Decimal'>
    readonly totalAmount: FieldRef<"Transactions", 'Decimal'>
    readonly status: FieldRef<"Transactions", 'TransactionStatus'>
    readonly wompiTransactionId: FieldRef<"Transactions", 'String'>
    readonly referenceCode: FieldRef<"Transactions", 'String'>
    readonly createdAt: FieldRef<"Transactions", 'DateTime'>
    readonly updatedAt: FieldRef<"Transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transactions findUnique
   */
  export type TransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findUniqueOrThrow
   */
  export type TransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findFirst
   */
  export type TransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findFirstOrThrow
   */
  export type TransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findMany
   */
  export type TransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions create
   */
  export type TransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Transactions.
     */
    data: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
  }

  /**
   * Transactions createMany
   */
  export type TransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transactions createManyAndReturn
   */
  export type TransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions update
   */
  export type TransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Transactions.
     */
    data: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
    /**
     * Choose, which Transactions to update.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions updateMany
   */
  export type TransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transactions updateManyAndReturn
   */
  export type TransactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions upsert
   */
  export type TransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Transactions to update in case it exists.
     */
    where: TransactionsWhereUniqueInput
    /**
     * In case the Transactions found by the `where` argument doesn't exist, create a new Transactions with this data.
     */
    create: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
    /**
     * In case the Transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
  }

  /**
   * Transactions delete
   */
  export type TransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter which Transactions to delete.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions deleteMany
   */
  export type TransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transactions.deliveries
   */
  export type Transactions$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    where?: DeliveriesWhereInput
  }

  /**
   * Transactions without action
   */
  export type TransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
  }


  /**
   * Model Deliveries
   */

  export type AggregateDeliveries = {
    _count: DeliveriesCountAggregateOutputType | null
    _min: DeliveriesMinAggregateOutputType | null
    _max: DeliveriesMaxAggregateOutputType | null
  }

  export type DeliveriesMinAggregateOutputType = {
    id: string | null
    transactionId: string | null
    deliveryAddress: string | null
    deliveryStatus: $Enums.DeliveryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliveriesMaxAggregateOutputType = {
    id: string | null
    transactionId: string | null
    deliveryAddress: string | null
    deliveryStatus: $Enums.DeliveryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliveriesCountAggregateOutputType = {
    id: number
    transactionId: number
    deliveryAddress: number
    deliveryStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeliveriesMinAggregateInputType = {
    id?: true
    transactionId?: true
    deliveryAddress?: true
    deliveryStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliveriesMaxAggregateInputType = {
    id?: true
    transactionId?: true
    deliveryAddress?: true
    deliveryStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliveriesCountAggregateInputType = {
    id?: true
    transactionId?: true
    deliveryAddress?: true
    deliveryStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeliveriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to aggregate.
     */
    where?: DeliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliveries
    **/
    _count?: true | DeliveriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveriesMaxAggregateInputType
  }

  export type GetDeliveriesAggregateType<T extends DeliveriesAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveries[P]>
      : GetScalarType<T[P], AggregateDeliveries[P]>
  }




  export type DeliveriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveriesWhereInput
    orderBy?: DeliveriesOrderByWithAggregationInput | DeliveriesOrderByWithAggregationInput[]
    by: DeliveriesScalarFieldEnum[] | DeliveriesScalarFieldEnum
    having?: DeliveriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveriesCountAggregateInputType | true
    _min?: DeliveriesMinAggregateInputType
    _max?: DeliveriesMaxAggregateInputType
  }

  export type DeliveriesGroupByOutputType = {
    id: string
    transactionId: string
    deliveryAddress: string
    deliveryStatus: $Enums.DeliveryStatus
    createdAt: Date
    updatedAt: Date
    _count: DeliveriesCountAggregateOutputType | null
    _min: DeliveriesMinAggregateOutputType | null
    _max: DeliveriesMaxAggregateOutputType | null
  }

  type GetDeliveriesGroupByPayload<T extends DeliveriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveriesGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveriesGroupByOutputType[P]>
        }
      >
    >


  export type DeliveriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    deliveryAddress?: boolean
    deliveryStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaction?: boolean | TransactionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveries"]>

  export type DeliveriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    deliveryAddress?: boolean
    deliveryStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaction?: boolean | TransactionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveries"]>

  export type DeliveriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    deliveryAddress?: boolean
    deliveryStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaction?: boolean | TransactionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveries"]>

  export type DeliveriesSelectScalar = {
    id?: boolean
    transactionId?: boolean
    deliveryAddress?: boolean
    deliveryStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeliveriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transactionId" | "deliveryAddress" | "deliveryStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["deliveries"]>
  export type DeliveriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionsDefaultArgs<ExtArgs>
  }
  export type DeliveriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionsDefaultArgs<ExtArgs>
  }
  export type DeliveriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionsDefaultArgs<ExtArgs>
  }

  export type $DeliveriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deliveries"
    objects: {
      transaction: Prisma.$TransactionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transactionId: string
      deliveryAddress: string
      deliveryStatus: $Enums.DeliveryStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deliveries"]>
    composites: {}
  }

  type DeliveriesGetPayload<S extends boolean | null | undefined | DeliveriesDefaultArgs> = $Result.GetResult<Prisma.$DeliveriesPayload, S>

  type DeliveriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveriesCountAggregateInputType | true
    }

  export interface DeliveriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deliveries'], meta: { name: 'Deliveries' } }
    /**
     * Find zero or one Deliveries that matches the filter.
     * @param {DeliveriesFindUniqueArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveriesFindUniqueArgs>(args: SelectSubset<T, DeliveriesFindUniqueArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deliveries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveriesFindUniqueOrThrowArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveriesFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesFindFirstArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveriesFindFirstArgs>(args?: SelectSubset<T, DeliveriesFindFirstArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliveries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesFindFirstOrThrowArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveriesFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.deliveries.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.deliveries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveriesWithIdOnly = await prisma.deliveries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveriesFindManyArgs>(args?: SelectSubset<T, DeliveriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deliveries.
     * @param {DeliveriesCreateArgs} args - Arguments to create a Deliveries.
     * @example
     * // Create one Deliveries
     * const Deliveries = await prisma.deliveries.create({
     *   data: {
     *     // ... data to create a Deliveries
     *   }
     * })
     * 
     */
    create<T extends DeliveriesCreateArgs>(args: SelectSubset<T, DeliveriesCreateArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliveries.
     * @param {DeliveriesCreateManyArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const deliveries = await prisma.deliveries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveriesCreateManyArgs>(args?: SelectSubset<T, DeliveriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deliveries and returns the data saved in the database.
     * @param {DeliveriesCreateManyAndReturnArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const deliveries = await prisma.deliveries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deliveries and only return the `id`
     * const deliveriesWithIdOnly = await prisma.deliveries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveriesCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deliveries.
     * @param {DeliveriesDeleteArgs} args - Arguments to delete one Deliveries.
     * @example
     * // Delete one Deliveries
     * const Deliveries = await prisma.deliveries.delete({
     *   where: {
     *     // ... filter to delete one Deliveries
     *   }
     * })
     * 
     */
    delete<T extends DeliveriesDeleteArgs>(args: SelectSubset<T, DeliveriesDeleteArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deliveries.
     * @param {DeliveriesUpdateArgs} args - Arguments to update one Deliveries.
     * @example
     * // Update one Deliveries
     * const deliveries = await prisma.deliveries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveriesUpdateArgs>(args: SelectSubset<T, DeliveriesUpdateArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliveries.
     * @param {DeliveriesDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.deliveries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveriesDeleteManyArgs>(args?: SelectSubset<T, DeliveriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const deliveries = await prisma.deliveries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveriesUpdateManyArgs>(args: SelectSubset<T, DeliveriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries and returns the data updated in the database.
     * @param {DeliveriesUpdateManyAndReturnArgs} args - Arguments to update many Deliveries.
     * @example
     * // Update many Deliveries
     * const deliveries = await prisma.deliveries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deliveries and only return the `id`
     * const deliveriesWithIdOnly = await prisma.deliveries.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeliveriesUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deliveries.
     * @param {DeliveriesUpsertArgs} args - Arguments to update or create a Deliveries.
     * @example
     * // Update or create a Deliveries
     * const deliveries = await prisma.deliveries.upsert({
     *   create: {
     *     // ... data to create a Deliveries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deliveries we want to update
     *   }
     * })
     */
    upsert<T extends DeliveriesUpsertArgs>(args: SelectSubset<T, DeliveriesUpsertArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.deliveries.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends DeliveriesCountArgs>(
      args?: Subset<T, DeliveriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeliveriesAggregateArgs>(args: Subset<T, DeliveriesAggregateArgs>): Prisma.PrismaPromise<GetDeliveriesAggregateType<T>>

    /**
     * Group by Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesGroupByArgs} args - Group by arguments.
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
      T extends DeliveriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveriesGroupByArgs['orderBy'] }
        : { orderBy?: DeliveriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeliveriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deliveries model
   */
  readonly fields: DeliveriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deliveries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends TransactionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionsDefaultArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Deliveries model
   */
  interface DeliveriesFieldRefs {
    readonly id: FieldRef<"Deliveries", 'String'>
    readonly transactionId: FieldRef<"Deliveries", 'String'>
    readonly deliveryAddress: FieldRef<"Deliveries", 'String'>
    readonly deliveryStatus: FieldRef<"Deliveries", 'DeliveryStatus'>
    readonly createdAt: FieldRef<"Deliveries", 'DateTime'>
    readonly updatedAt: FieldRef<"Deliveries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deliveries findUnique
   */
  export type DeliveriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where: DeliveriesWhereUniqueInput
  }

  /**
   * Deliveries findUniqueOrThrow
   */
  export type DeliveriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where: DeliveriesWhereUniqueInput
  }

  /**
   * Deliveries findFirst
   */
  export type DeliveriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Deliveries findFirstOrThrow
   */
  export type DeliveriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Deliveries findMany
   */
  export type DeliveriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliveries.
     */
    cursor?: DeliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Deliveries create
   */
  export type DeliveriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Deliveries.
     */
    data: XOR<DeliveriesCreateInput, DeliveriesUncheckedCreateInput>
  }

  /**
   * Deliveries createMany
   */
  export type DeliveriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveriesCreateManyInput | DeliveriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deliveries createManyAndReturn
   */
  export type DeliveriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveriesCreateManyInput | DeliveriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deliveries update
   */
  export type DeliveriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Deliveries.
     */
    data: XOR<DeliveriesUpdateInput, DeliveriesUncheckedUpdateInput>
    /**
     * Choose, which Deliveries to update.
     */
    where: DeliveriesWhereUniqueInput
  }

  /**
   * Deliveries updateMany
   */
  export type DeliveriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveriesUpdateManyMutationInput, DeliveriesUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveriesWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
  }

  /**
   * Deliveries updateManyAndReturn
   */
  export type DeliveriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveriesUpdateManyMutationInput, DeliveriesUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveriesWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deliveries upsert
   */
  export type DeliveriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Deliveries to update in case it exists.
     */
    where: DeliveriesWhereUniqueInput
    /**
     * In case the Deliveries found by the `where` argument doesn't exist, create a new Deliveries with this data.
     */
    create: XOR<DeliveriesCreateInput, DeliveriesUncheckedCreateInput>
    /**
     * In case the Deliveries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveriesUpdateInput, DeliveriesUncheckedUpdateInput>
  }

  /**
   * Deliveries delete
   */
  export type DeliveriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter which Deliveries to delete.
     */
    where: DeliveriesWhereUniqueInput
  }

  /**
   * Deliveries deleteMany
   */
  export type DeliveriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to delete
     */
    where?: DeliveriesWhereInput
    /**
     * Limit how many Deliveries to delete.
     */
    limit?: number
  }

  /**
   * Deliveries without action
   */
  export type DeliveriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
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


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    stock: 'stock',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    address: 'address',
    city: 'city',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    productId: 'productId',
    quantity: 'quantity',
    baseFee: 'baseFee',
    deliveryFee: 'deliveryFee',
    totalAmount: 'totalAmount',
    status: 'status',
    wompiTransactionId: 'wompiTransactionId',
    referenceCode: 'referenceCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const DeliveriesScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    deliveryAddress: 'deliveryAddress',
    deliveryStatus: 'deliveryStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeliveriesScalarFieldEnum = (typeof DeliveriesScalarFieldEnum)[keyof typeof DeliveriesScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'DeliveryStatus'
   */
  export type EnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus'>
    


  /**
   * Reference to a field of type 'DeliveryStatus[]'
   */
  export type ListEnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: StringFilter<"Products"> | string
    name?: StringFilter<"Products"> | string
    description?: StringFilter<"Products"> | string
    price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Products"> | number
    createAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
    transactions?: TransactionsListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    name?: StringFilter<"Products"> | string
    description?: StringFilter<"Products"> | string
    price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Products"> | number
    createAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
    transactions?: TransactionsListRelationFilter
  }, "id">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Products"> | string
    name?: StringWithAggregatesFilter<"Products"> | string
    description?: StringWithAggregatesFilter<"Products"> | string
    price?: DecimalWithAggregatesFilter<"Products"> | Decimal | DecimalJsLike | number | string
    stock?: IntWithAggregatesFilter<"Products"> | number
    createAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
  }

  export type CustomersWhereInput = {
    AND?: CustomersWhereInput | CustomersWhereInput[]
    OR?: CustomersWhereInput[]
    NOT?: CustomersWhereInput | CustomersWhereInput[]
    id?: StringFilter<"Customers"> | string
    name?: StringFilter<"Customers"> | string
    email?: StringFilter<"Customers"> | string
    address?: StringFilter<"Customers"> | string
    city?: StringFilter<"Customers"> | string
    createdAt?: DateTimeFilter<"Customers"> | Date | string
    updatedAt?: DateTimeFilter<"Customers"> | Date | string
    transactions?: TransactionsListRelationFilter
  }

  export type CustomersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type CustomersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomersWhereInput | CustomersWhereInput[]
    OR?: CustomersWhereInput[]
    NOT?: CustomersWhereInput | CustomersWhereInput[]
    name?: StringFilter<"Customers"> | string
    email?: StringFilter<"Customers"> | string
    address?: StringFilter<"Customers"> | string
    city?: StringFilter<"Customers"> | string
    createdAt?: DateTimeFilter<"Customers"> | Date | string
    updatedAt?: DateTimeFilter<"Customers"> | Date | string
    transactions?: TransactionsListRelationFilter
  }, "id">

  export type CustomersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomersCountOrderByAggregateInput
    _max?: CustomersMaxOrderByAggregateInput
    _min?: CustomersMinOrderByAggregateInput
  }

  export type CustomersScalarWhereWithAggregatesInput = {
    AND?: CustomersScalarWhereWithAggregatesInput | CustomersScalarWhereWithAggregatesInput[]
    OR?: CustomersScalarWhereWithAggregatesInput[]
    NOT?: CustomersScalarWhereWithAggregatesInput | CustomersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customers"> | string
    name?: StringWithAggregatesFilter<"Customers"> | string
    email?: StringWithAggregatesFilter<"Customers"> | string
    address?: StringWithAggregatesFilter<"Customers"> | string
    city?: StringWithAggregatesFilter<"Customers"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customers"> | Date | string
  }

  export type TransactionsWhereInput = {
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    id?: StringFilter<"Transactions"> | string
    customerId?: StringFilter<"Transactions"> | string
    productId?: StringFilter<"Transactions"> | string
    quantity?: IntFilter<"Transactions"> | number
    baseFee?: DecimalFilter<"Transactions"> | Decimal | DecimalJsLike | number | string
    deliveryFee?: DecimalFilter<"Transactions"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"Transactions"> | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFilter<"Transactions"> | $Enums.TransactionStatus
    wompiTransactionId?: StringNullableFilter<"Transactions"> | string | null
    referenceCode?: StringFilter<"Transactions"> | string
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    updatedAt?: DateTimeFilter<"Transactions"> | Date | string
    customer?: XOR<CustomersScalarRelationFilter, CustomersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    deliveries?: XOR<DeliveriesNullableScalarRelationFilter, DeliveriesWhereInput> | null
  }

  export type TransactionsOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    baseFee?: SortOrder
    deliveryFee?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    wompiTransactionId?: SortOrderInput | SortOrder
    referenceCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomersOrderByWithRelationInput
    product?: ProductsOrderByWithRelationInput
    deliveries?: DeliveriesOrderByWithRelationInput
  }

  export type TransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referenceCode?: string
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    customerId?: StringFilter<"Transactions"> | string
    productId?: StringFilter<"Transactions"> | string
    quantity?: IntFilter<"Transactions"> | number
    baseFee?: DecimalFilter<"Transactions"> | Decimal | DecimalJsLike | number | string
    deliveryFee?: DecimalFilter<"Transactions"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"Transactions"> | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFilter<"Transactions"> | $Enums.TransactionStatus
    wompiTransactionId?: StringNullableFilter<"Transactions"> | string | null
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    updatedAt?: DateTimeFilter<"Transactions"> | Date | string
    customer?: XOR<CustomersScalarRelationFilter, CustomersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    deliveries?: XOR<DeliveriesNullableScalarRelationFilter, DeliveriesWhereInput> | null
  }, "id" | "referenceCode">

  export type TransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    baseFee?: SortOrder
    deliveryFee?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    wompiTransactionId?: SortOrderInput | SortOrder
    referenceCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionsCountOrderByAggregateInput
    _avg?: TransactionsAvgOrderByAggregateInput
    _max?: TransactionsMaxOrderByAggregateInput
    _min?: TransactionsMinOrderByAggregateInput
    _sum?: TransactionsSumOrderByAggregateInput
  }

  export type TransactionsScalarWhereWithAggregatesInput = {
    AND?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    OR?: TransactionsScalarWhereWithAggregatesInput[]
    NOT?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transactions"> | string
    customerId?: StringWithAggregatesFilter<"Transactions"> | string
    productId?: StringWithAggregatesFilter<"Transactions"> | string
    quantity?: IntWithAggregatesFilter<"Transactions"> | number
    baseFee?: DecimalWithAggregatesFilter<"Transactions"> | Decimal | DecimalJsLike | number | string
    deliveryFee?: DecimalWithAggregatesFilter<"Transactions"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalWithAggregatesFilter<"Transactions"> | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusWithAggregatesFilter<"Transactions"> | $Enums.TransactionStatus
    wompiTransactionId?: StringNullableWithAggregatesFilter<"Transactions"> | string | null
    referenceCode?: StringWithAggregatesFilter<"Transactions"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
  }

  export type DeliveriesWhereInput = {
    AND?: DeliveriesWhereInput | DeliveriesWhereInput[]
    OR?: DeliveriesWhereInput[]
    NOT?: DeliveriesWhereInput | DeliveriesWhereInput[]
    id?: StringFilter<"Deliveries"> | string
    transactionId?: StringFilter<"Deliveries"> | string
    deliveryAddress?: StringFilter<"Deliveries"> | string
    deliveryStatus?: EnumDeliveryStatusFilter<"Deliveries"> | $Enums.DeliveryStatus
    createdAt?: DateTimeFilter<"Deliveries"> | Date | string
    updatedAt?: DateTimeFilter<"Deliveries"> | Date | string
    transaction?: XOR<TransactionsScalarRelationFilter, TransactionsWhereInput>
  }

  export type DeliveriesOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    deliveryAddress?: SortOrder
    deliveryStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaction?: TransactionsOrderByWithRelationInput
  }

  export type DeliveriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transactionId?: string
    AND?: DeliveriesWhereInput | DeliveriesWhereInput[]
    OR?: DeliveriesWhereInput[]
    NOT?: DeliveriesWhereInput | DeliveriesWhereInput[]
    deliveryAddress?: StringFilter<"Deliveries"> | string
    deliveryStatus?: EnumDeliveryStatusFilter<"Deliveries"> | $Enums.DeliveryStatus
    createdAt?: DateTimeFilter<"Deliveries"> | Date | string
    updatedAt?: DateTimeFilter<"Deliveries"> | Date | string
    transaction?: XOR<TransactionsScalarRelationFilter, TransactionsWhereInput>
  }, "id" | "transactionId">

  export type DeliveriesOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    deliveryAddress?: SortOrder
    deliveryStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeliveriesCountOrderByAggregateInput
    _max?: DeliveriesMaxOrderByAggregateInput
    _min?: DeliveriesMinOrderByAggregateInput
  }

  export type DeliveriesScalarWhereWithAggregatesInput = {
    AND?: DeliveriesScalarWhereWithAggregatesInput | DeliveriesScalarWhereWithAggregatesInput[]
    OR?: DeliveriesScalarWhereWithAggregatesInput[]
    NOT?: DeliveriesScalarWhereWithAggregatesInput | DeliveriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deliveries"> | string
    transactionId?: StringWithAggregatesFilter<"Deliveries"> | string
    deliveryAddress?: StringWithAggregatesFilter<"Deliveries"> | string
    deliveryStatus?: EnumDeliveryStatusWithAggregatesFilter<"Deliveries"> | $Enums.DeliveryStatus
    createdAt?: DateTimeWithAggregatesFilter<"Deliveries"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deliveries"> | Date | string
  }

  export type ProductsCreateInput = {
    id?: string
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock?: number
    createAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock?: number
    createAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyInput = {
    id?: string
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock?: number
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomersCreateInput = {
    id?: string
    name: string
    email: string
    address: string
    city: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionsCreateNestedManyWithoutCustomerInput
  }

  export type CustomersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    address: string
    city: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUpdateManyWithoutCustomerNestedInput
  }

  export type CustomersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomersCreateManyInput = {
    id?: string
    name: string
    email: string
    address: string
    city: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateInput = {
    id?: string
    quantity?: number
    baseFee: Decimal | DecimalJsLike | number | string
    deliveryFee: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    wompiTransactionId?: string | null
    referenceCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomersCreateNestedOneWithoutTransactionsInput
    product: ProductsCreateNestedOneWithoutTransactionsInput
    deliveries?: DeliveriesCreateNestedOneWithoutTransactionInput
  }

  export type TransactionsUncheckedCreateInput = {
    id?: string
    customerId: string
    productId: string
    quantity?: number
    baseFee: Decimal | DecimalJsLike | number | string
    deliveryFee: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    wompiTransactionId?: string | null
    referenceCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: DeliveriesUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    baseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    wompiTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomersUpdateOneRequiredWithoutTransactionsNestedInput
    product?: ProductsUpdateOneRequiredWithoutTransactionsNestedInput
    deliveries?: DeliveriesUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    baseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    wompiTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveriesUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionsCreateManyInput = {
    id?: string
    customerId: string
    productId: string
    quantity?: number
    baseFee: Decimal | DecimalJsLike | number | string
    deliveryFee: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    wompiTransactionId?: string | null
    referenceCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    baseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    wompiTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    baseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    wompiTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveriesCreateInput = {
    id?: string
    deliveryAddress: string
    deliveryStatus?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction: TransactionsCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveriesUncheckedCreateInput = {
    id?: string
    transactionId: string
    deliveryAddress: string
    deliveryStatus?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionsUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveriesCreateManyInput = {
    id?: string
    transactionId: string
    deliveryAddress: string
    deliveryStatus?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type TransactionsListRelationFilter = {
    every?: TransactionsWhereInput
    some?: TransactionsWhereInput
    none?: TransactionsWhereInput
  }

  export type TransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type CustomersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CustomersScalarRelationFilter = {
    is?: CustomersWhereInput
    isNot?: CustomersWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type DeliveriesNullableScalarRelationFilter = {
    is?: DeliveriesWhereInput | null
    isNot?: DeliveriesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    baseFee?: SortOrder
    deliveryFee?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    wompiTransactionId?: SortOrder
    referenceCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    baseFee?: SortOrder
    deliveryFee?: SortOrder
    totalAmount?: SortOrder
  }

  export type TransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    baseFee?: SortOrder
    deliveryFee?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    wompiTransactionId?: SortOrder
    referenceCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    baseFee?: SortOrder
    deliveryFee?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    wompiTransactionId?: SortOrder
    referenceCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionsSumOrderByAggregateInput = {
    quantity?: SortOrder
    baseFee?: SortOrder
    deliveryFee?: SortOrder
    totalAmount?: SortOrder
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type TransactionsScalarRelationFilter = {
    is?: TransactionsWhereInput
    isNot?: TransactionsWhereInput
  }

  export type DeliveriesCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    deliveryAddress?: SortOrder
    deliveryStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveriesMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    deliveryAddress?: SortOrder
    deliveryStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveriesMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    deliveryAddress?: SortOrder
    deliveryStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type TransactionsCreateNestedManyWithoutProductInput = {
    create?: XOR<TransactionsCreateWithoutProductInput, TransactionsUncheckedCreateWithoutProductInput> | TransactionsCreateWithoutProductInput[] | TransactionsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutProductInput | TransactionsCreateOrConnectWithoutProductInput[]
    createMany?: TransactionsCreateManyProductInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<TransactionsCreateWithoutProductInput, TransactionsUncheckedCreateWithoutProductInput> | TransactionsCreateWithoutProductInput[] | TransactionsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutProductInput | TransactionsCreateOrConnectWithoutProductInput[]
    createMany?: TransactionsCreateManyProductInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransactionsUpdateManyWithoutProductNestedInput = {
    create?: XOR<TransactionsCreateWithoutProductInput, TransactionsUncheckedCreateWithoutProductInput> | TransactionsCreateWithoutProductInput[] | TransactionsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutProductInput | TransactionsCreateOrConnectWithoutProductInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutProductInput | TransactionsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TransactionsCreateManyProductInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutProductInput | TransactionsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutProductInput | TransactionsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<TransactionsCreateWithoutProductInput, TransactionsUncheckedCreateWithoutProductInput> | TransactionsCreateWithoutProductInput[] | TransactionsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutProductInput | TransactionsCreateOrConnectWithoutProductInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutProductInput | TransactionsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TransactionsCreateManyProductInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutProductInput | TransactionsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutProductInput | TransactionsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type TransactionsCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TransactionsCreateWithoutCustomerInput, TransactionsUncheckedCreateWithoutCustomerInput> | TransactionsCreateWithoutCustomerInput[] | TransactionsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutCustomerInput | TransactionsCreateOrConnectWithoutCustomerInput[]
    createMany?: TransactionsCreateManyCustomerInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TransactionsCreateWithoutCustomerInput, TransactionsUncheckedCreateWithoutCustomerInput> | TransactionsCreateWithoutCustomerInput[] | TransactionsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutCustomerInput | TransactionsCreateOrConnectWithoutCustomerInput[]
    createMany?: TransactionsCreateManyCustomerInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TransactionsUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TransactionsCreateWithoutCustomerInput, TransactionsUncheckedCreateWithoutCustomerInput> | TransactionsCreateWithoutCustomerInput[] | TransactionsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutCustomerInput | TransactionsCreateOrConnectWithoutCustomerInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutCustomerInput | TransactionsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TransactionsCreateManyCustomerInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutCustomerInput | TransactionsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutCustomerInput | TransactionsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TransactionsCreateWithoutCustomerInput, TransactionsUncheckedCreateWithoutCustomerInput> | TransactionsCreateWithoutCustomerInput[] | TransactionsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutCustomerInput | TransactionsCreateOrConnectWithoutCustomerInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutCustomerInput | TransactionsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TransactionsCreateManyCustomerInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutCustomerInput | TransactionsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutCustomerInput | TransactionsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type CustomersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CustomersCreateWithoutTransactionsInput, CustomersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CustomersCreateOrConnectWithoutTransactionsInput
    connect?: CustomersWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ProductsCreateWithoutTransactionsInput, ProductsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutTransactionsInput
    connect?: ProductsWhereUniqueInput
  }

  export type DeliveriesCreateNestedOneWithoutTransactionInput = {
    create?: XOR<DeliveriesCreateWithoutTransactionInput, DeliveriesUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: DeliveriesCreateOrConnectWithoutTransactionInput
    connect?: DeliveriesWhereUniqueInput
  }

  export type DeliveriesUncheckedCreateNestedOneWithoutTransactionInput = {
    create?: XOR<DeliveriesCreateWithoutTransactionInput, DeliveriesUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: DeliveriesCreateOrConnectWithoutTransactionInput
    connect?: DeliveriesWhereUniqueInput
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CustomersUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CustomersCreateWithoutTransactionsInput, CustomersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CustomersCreateOrConnectWithoutTransactionsInput
    upsert?: CustomersUpsertWithoutTransactionsInput
    connect?: CustomersWhereUniqueInput
    update?: XOR<XOR<CustomersUpdateToOneWithWhereWithoutTransactionsInput, CustomersUpdateWithoutTransactionsInput>, CustomersUncheckedUpdateWithoutTransactionsInput>
  }

  export type ProductsUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<ProductsCreateWithoutTransactionsInput, ProductsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutTransactionsInput
    upsert?: ProductsUpsertWithoutTransactionsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutTransactionsInput, ProductsUpdateWithoutTransactionsInput>, ProductsUncheckedUpdateWithoutTransactionsInput>
  }

  export type DeliveriesUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<DeliveriesCreateWithoutTransactionInput, DeliveriesUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: DeliveriesCreateOrConnectWithoutTransactionInput
    upsert?: DeliveriesUpsertWithoutTransactionInput
    disconnect?: DeliveriesWhereInput | boolean
    delete?: DeliveriesWhereInput | boolean
    connect?: DeliveriesWhereUniqueInput
    update?: XOR<XOR<DeliveriesUpdateToOneWithWhereWithoutTransactionInput, DeliveriesUpdateWithoutTransactionInput>, DeliveriesUncheckedUpdateWithoutTransactionInput>
  }

  export type DeliveriesUncheckedUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<DeliveriesCreateWithoutTransactionInput, DeliveriesUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: DeliveriesCreateOrConnectWithoutTransactionInput
    upsert?: DeliveriesUpsertWithoutTransactionInput
    disconnect?: DeliveriesWhereInput | boolean
    delete?: DeliveriesWhereInput | boolean
    connect?: DeliveriesWhereUniqueInput
    update?: XOR<XOR<DeliveriesUpdateToOneWithWhereWithoutTransactionInput, DeliveriesUpdateWithoutTransactionInput>, DeliveriesUncheckedUpdateWithoutTransactionInput>
  }

  export type TransactionsCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<TransactionsCreateWithoutDeliveriesInput, TransactionsUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: TransactionsCreateOrConnectWithoutDeliveriesInput
    connect?: TransactionsWhereUniqueInput
  }

  export type EnumDeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryStatus
  }

  export type TransactionsUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<TransactionsCreateWithoutDeliveriesInput, TransactionsUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: TransactionsCreateOrConnectWithoutDeliveriesInput
    upsert?: TransactionsUpsertWithoutDeliveriesInput
    connect?: TransactionsWhereUniqueInput
    update?: XOR<XOR<TransactionsUpdateToOneWithWhereWithoutDeliveriesInput, TransactionsUpdateWithoutDeliveriesInput>, TransactionsUncheckedUpdateWithoutDeliveriesInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type TransactionsCreateWithoutProductInput = {
    id?: string
    quantity?: number
    baseFee: Decimal | DecimalJsLike | number | string
    deliveryFee: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    wompiTransactionId?: string | null
    referenceCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomersCreateNestedOneWithoutTransactionsInput
    deliveries?: DeliveriesCreateNestedOneWithoutTransactionInput
  }

  export type TransactionsUncheckedCreateWithoutProductInput = {
    id?: string
    customerId: string
    quantity?: number
    baseFee: Decimal | DecimalJsLike | number | string
    deliveryFee: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    wompiTransactionId?: string | null
    referenceCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: DeliveriesUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionsCreateOrConnectWithoutProductInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutProductInput, TransactionsUncheckedCreateWithoutProductInput>
  }

  export type TransactionsCreateManyProductInputEnvelope = {
    data: TransactionsCreateManyProductInput | TransactionsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsUpsertWithWhereUniqueWithoutProductInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutProductInput, TransactionsUncheckedUpdateWithoutProductInput>
    create: XOR<TransactionsCreateWithoutProductInput, TransactionsUncheckedCreateWithoutProductInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutProductInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutProductInput, TransactionsUncheckedUpdateWithoutProductInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutProductInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutProductInput>
  }

  export type TransactionsScalarWhereInput = {
    AND?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    OR?: TransactionsScalarWhereInput[]
    NOT?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    id?: StringFilter<"Transactions"> | string
    customerId?: StringFilter<"Transactions"> | string
    productId?: StringFilter<"Transactions"> | string
    quantity?: IntFilter<"Transactions"> | number
    baseFee?: DecimalFilter<"Transactions"> | Decimal | DecimalJsLike | number | string
    deliveryFee?: DecimalFilter<"Transactions"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"Transactions"> | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFilter<"Transactions"> | $Enums.TransactionStatus
    wompiTransactionId?: StringNullableFilter<"Transactions"> | string | null
    referenceCode?: StringFilter<"Transactions"> | string
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    updatedAt?: DateTimeFilter<"Transactions"> | Date | string
  }

  export type TransactionsCreateWithoutCustomerInput = {
    id?: string
    quantity?: number
    baseFee: Decimal | DecimalJsLike | number | string
    deliveryFee: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    wompiTransactionId?: string | null
    referenceCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductsCreateNestedOneWithoutTransactionsInput
    deliveries?: DeliveriesCreateNestedOneWithoutTransactionInput
  }

  export type TransactionsUncheckedCreateWithoutCustomerInput = {
    id?: string
    productId: string
    quantity?: number
    baseFee: Decimal | DecimalJsLike | number | string
    deliveryFee: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    wompiTransactionId?: string | null
    referenceCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: DeliveriesUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionsCreateOrConnectWithoutCustomerInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutCustomerInput, TransactionsUncheckedCreateWithoutCustomerInput>
  }

  export type TransactionsCreateManyCustomerInputEnvelope = {
    data: TransactionsCreateManyCustomerInput | TransactionsCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsUpsertWithWhereUniqueWithoutCustomerInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutCustomerInput, TransactionsUncheckedUpdateWithoutCustomerInput>
    create: XOR<TransactionsCreateWithoutCustomerInput, TransactionsUncheckedCreateWithoutCustomerInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutCustomerInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutCustomerInput, TransactionsUncheckedUpdateWithoutCustomerInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutCustomerInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomersCreateWithoutTransactionsInput = {
    id?: string
    name: string
    email: string
    address: string
    city: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomersUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    email: string
    address: string
    city: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomersCreateOrConnectWithoutTransactionsInput = {
    where: CustomersWhereUniqueInput
    create: XOR<CustomersCreateWithoutTransactionsInput, CustomersUncheckedCreateWithoutTransactionsInput>
  }

  export type ProductsCreateWithoutTransactionsInput = {
    id?: string
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock?: number
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock?: number
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsCreateOrConnectWithoutTransactionsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutTransactionsInput, ProductsUncheckedCreateWithoutTransactionsInput>
  }

  export type DeliveriesCreateWithoutTransactionInput = {
    id?: string
    deliveryAddress: string
    deliveryStatus?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveriesUncheckedCreateWithoutTransactionInput = {
    id?: string
    deliveryAddress: string
    deliveryStatus?: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveriesCreateOrConnectWithoutTransactionInput = {
    where: DeliveriesWhereUniqueInput
    create: XOR<DeliveriesCreateWithoutTransactionInput, DeliveriesUncheckedCreateWithoutTransactionInput>
  }

  export type CustomersUpsertWithoutTransactionsInput = {
    update: XOR<CustomersUpdateWithoutTransactionsInput, CustomersUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CustomersCreateWithoutTransactionsInput, CustomersUncheckedCreateWithoutTransactionsInput>
    where?: CustomersWhereInput
  }

  export type CustomersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CustomersWhereInput
    data: XOR<CustomersUpdateWithoutTransactionsInput, CustomersUncheckedUpdateWithoutTransactionsInput>
  }

  export type CustomersUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomersUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUpsertWithoutTransactionsInput = {
    update: XOR<ProductsUpdateWithoutTransactionsInput, ProductsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ProductsCreateWithoutTransactionsInput, ProductsUncheckedCreateWithoutTransactionsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutTransactionsInput, ProductsUncheckedUpdateWithoutTransactionsInput>
  }

  export type ProductsUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveriesUpsertWithoutTransactionInput = {
    update: XOR<DeliveriesUpdateWithoutTransactionInput, DeliveriesUncheckedUpdateWithoutTransactionInput>
    create: XOR<DeliveriesCreateWithoutTransactionInput, DeliveriesUncheckedCreateWithoutTransactionInput>
    where?: DeliveriesWhereInput
  }

  export type DeliveriesUpdateToOneWithWhereWithoutTransactionInput = {
    where?: DeliveriesWhereInput
    data: XOR<DeliveriesUpdateWithoutTransactionInput, DeliveriesUncheckedUpdateWithoutTransactionInput>
  }

  export type DeliveriesUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveriesUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateWithoutDeliveriesInput = {
    id?: string
    quantity?: number
    baseFee: Decimal | DecimalJsLike | number | string
    deliveryFee: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    wompiTransactionId?: string | null
    referenceCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomersCreateNestedOneWithoutTransactionsInput
    product: ProductsCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutDeliveriesInput = {
    id?: string
    customerId: string
    productId: string
    quantity?: number
    baseFee: Decimal | DecimalJsLike | number | string
    deliveryFee: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    wompiTransactionId?: string | null
    referenceCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionsCreateOrConnectWithoutDeliveriesInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutDeliveriesInput, TransactionsUncheckedCreateWithoutDeliveriesInput>
  }

  export type TransactionsUpsertWithoutDeliveriesInput = {
    update: XOR<TransactionsUpdateWithoutDeliveriesInput, TransactionsUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<TransactionsCreateWithoutDeliveriesInput, TransactionsUncheckedCreateWithoutDeliveriesInput>
    where?: TransactionsWhereInput
  }

  export type TransactionsUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: TransactionsWhereInput
    data: XOR<TransactionsUpdateWithoutDeliveriesInput, TransactionsUncheckedUpdateWithoutDeliveriesInput>
  }

  export type TransactionsUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    baseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    wompiTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomersUpdateOneRequiredWithoutTransactionsNestedInput
    product?: ProductsUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    baseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    wompiTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateManyProductInput = {
    id?: string
    customerId: string
    quantity?: number
    baseFee: Decimal | DecimalJsLike | number | string
    deliveryFee: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    wompiTransactionId?: string | null
    referenceCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionsUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    baseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    wompiTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomersUpdateOneRequiredWithoutTransactionsNestedInput
    deliveries?: DeliveriesUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    baseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    wompiTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveriesUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionsUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    baseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    wompiTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateManyCustomerInput = {
    id?: string
    productId: string
    quantity?: number
    baseFee: Decimal | DecimalJsLike | number | string
    deliveryFee: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    wompiTransactionId?: string | null
    referenceCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionsUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    baseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    wompiTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutTransactionsNestedInput
    deliveries?: DeliveriesUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    baseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    wompiTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveriesUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionsUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    baseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    wompiTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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