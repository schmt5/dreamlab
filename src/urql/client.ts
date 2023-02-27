import { createClient, debugExchange, fetchExchange } from "urql";
import { cacheExchange } from '@urql/exchange-graphcache';
import { PagesByCourseQuery } from "./queries/pagesByCourseQuery";
import { BlocksByPageQuery } from "./queries/blocksByPageQuery";

export const client = createClient({
    url: import.meta.env.VITE_APP_WORKSPACE_ENDPOINT,
    exchanges: [
        debugExchange,
        cacheExchange({
            keys: {
                CourseListResponse: (data) => data.__typename,
                PageListResponse: (data) => data.__typename,
                BlockListResponse: (data) => data.__typename,
            },
            updates: {
                Mutation: {
                    pageCreate: (result, args, cache, info) => {
                        // cache.invalidate({ __typename: 'PageListResponse' });

                        const courseId = (args.data as any).coursesId;
                        const variables = { courseId: courseId };

                        cache.updateQuery({ query: PagesByCourseQuery, variables }, (data: any) => {
                            if (data === null) return null;

                            data.pagesList.items.push(result.pageCreate);
                            data.pagesList.count++;
                            return data;
                        });
                    },
                    blockCreate: (result, args, cache, info) => {
                        // cache.invalidate({ __typename: 'BlockListResponse' });

                        const pageId = (args.data as any).pagesId;
                        const variables = { pageId: pageId };

                        cache.updateQuery({ query: BlocksByPageQuery, variables }, (data: any) => {
                            if (data === null) return null;

                            data.blocksList.items.push(result.blockCreate);
                            data.blocksList.count++;
                            return data;
                        });
                    },
                }
            },
        }),
        fetchExchange
    ],
    suspense: true,
    requestPolicy: 'cache-and-network',
});
