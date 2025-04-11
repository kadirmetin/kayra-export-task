import { configureStore } from "@reduxjs/toolkit";
import { fakeStoreApi } from "./api";

// Store'u yapılandır
export const store = configureStore({
  reducer: {
    // Üretilen reducer'ı özel bir ana düzey kesite (slice) olarak ekleyin
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
  },
  // api middleware'i eklemek, önbellekleme, geçersiz kılma, anketleme ve`rtk-query`'nin diğer faydalı özelliklerini etkinleştirir.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeStoreApi.middleware),
});
