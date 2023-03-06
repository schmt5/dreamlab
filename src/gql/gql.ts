/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation BlockCreateMutation($data: BlockCreateInput!) {\n        blockCreate(data: $data) {\n            id\n            content\n            canStudentEdit\n        }\n    }\n": types.BlockCreateMutationDocument,
    "\n    mutation BlockUpdateMutation($data: BlockUpdateInput!) {\n        blockUpdate(data: $data) {\n            id\n            content\n        }\n    }\n": types.BlockUpdateMutationDocument,
    "\n   mutation CourseCreateMutation($data: CourseCreateInput!) {\n        courseCreate(data: $data) {\n            id\n        }\n    }\n": types.CourseCreateMutationDocument,
    "\n   mutation CourseUpdateMutation($data: CourseUpdateInput!) {\n        courseUpdate(data: $data) {\n            id\n        }\n    }\n": types.CourseUpdateMutationDocument,
    "\n    mutation PageCreateMutation($data: PageCreateInput!) {\n        pageCreate(data: $data) {\n            id\n        }\n    }\n": types.PageCreateMutationDocument,
    "\n    query BlocksByPageQuery($pageId: String!) {\n        blocksList(filter: { pagesId: { equals: $pageId } }) {\n            __typename\n            count\n            items {\n                id\n                content\n                canStudentEdit\n                pagesId\n            }\n        }\n    }\n": types.BlocksByPageQueryDocument,
    "\n   query CourseByIdQuery($id: ID!)  {\n        course(id: $id) {\n            id\n            name\n            description\n            pages {\n                count\n                items {\n                    id\n                    name\n                }\n            }\n        }\n    }\n": types.CourseByIdQueryDocument,
    "\n    query CoursesQuery {\n        coursesList {\n            __typename\n            items {\n                id\n                name\n            }\n        }\n    }\n": types.CoursesQueryDocument,
    "\n    query PageByIdQuery($id: ID!) {\n        page(id: $id) {\n            id\n            name\n        }\n    }\n": types.PageByIdQueryDocument,
    "\n    query PagesByCourseQuery($courseId: String!) {\n        pagesList(filter: { coursesId: { equals: $courseId } }) {\n            __typename\n            count\n            items {\n                id\n                name\n            }\n        }\n    }\n": types.PagesByCourseQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation BlockCreateMutation($data: BlockCreateInput!) {\n        blockCreate(data: $data) {\n            id\n            content\n            canStudentEdit\n        }\n    }\n"): (typeof documents)["\n    mutation BlockCreateMutation($data: BlockCreateInput!) {\n        blockCreate(data: $data) {\n            id\n            content\n            canStudentEdit\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation BlockUpdateMutation($data: BlockUpdateInput!) {\n        blockUpdate(data: $data) {\n            id\n            content\n        }\n    }\n"): (typeof documents)["\n    mutation BlockUpdateMutation($data: BlockUpdateInput!) {\n        blockUpdate(data: $data) {\n            id\n            content\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   mutation CourseCreateMutation($data: CourseCreateInput!) {\n        courseCreate(data: $data) {\n            id\n        }\n    }\n"): (typeof documents)["\n   mutation CourseCreateMutation($data: CourseCreateInput!) {\n        courseCreate(data: $data) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   mutation CourseUpdateMutation($data: CourseUpdateInput!) {\n        courseUpdate(data: $data) {\n            id\n        }\n    }\n"): (typeof documents)["\n   mutation CourseUpdateMutation($data: CourseUpdateInput!) {\n        courseUpdate(data: $data) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation PageCreateMutation($data: PageCreateInput!) {\n        pageCreate(data: $data) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation PageCreateMutation($data: PageCreateInput!) {\n        pageCreate(data: $data) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query BlocksByPageQuery($pageId: String!) {\n        blocksList(filter: { pagesId: { equals: $pageId } }) {\n            __typename\n            count\n            items {\n                id\n                content\n                canStudentEdit\n                pagesId\n            }\n        }\n    }\n"): (typeof documents)["\n    query BlocksByPageQuery($pageId: String!) {\n        blocksList(filter: { pagesId: { equals: $pageId } }) {\n            __typename\n            count\n            items {\n                id\n                content\n                canStudentEdit\n                pagesId\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query CourseByIdQuery($id: ID!)  {\n        course(id: $id) {\n            id\n            name\n            description\n            pages {\n                count\n                items {\n                    id\n                    name\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n   query CourseByIdQuery($id: ID!)  {\n        course(id: $id) {\n            id\n            name\n            description\n            pages {\n                count\n                items {\n                    id\n                    name\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query CoursesQuery {\n        coursesList {\n            __typename\n            items {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query CoursesQuery {\n        coursesList {\n            __typename\n            items {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query PageByIdQuery($id: ID!) {\n        page(id: $id) {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    query PageByIdQuery($id: ID!) {\n        page(id: $id) {\n            id\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query PagesByCourseQuery($courseId: String!) {\n        pagesList(filter: { coursesId: { equals: $courseId } }) {\n            __typename\n            count\n            items {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query PagesByCourseQuery($courseId: String!) {\n        pagesList(filter: { coursesId: { equals: $courseId } }) {\n            __typename\n            count\n            items {\n                id\n                name\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;