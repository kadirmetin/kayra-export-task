import { fakeStoreApi } from "../store/api";

const productsApi = fakeStoreApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<Product[], void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
