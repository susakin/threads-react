import { useRequest } from 'ahooks';
import { Options, Result, Service } from 'ahooks/lib/useRequest/src/types';
import { Response } from '@utils/request';
import Toast from '@components/Toast';

export const useFetch = <TData, TParams extends any[]>(
  service: Service<Response<TData>, TParams>,
  options?: Omit<Options<Response<TData>, TParams>, 'onSuccess'> & {
    ignoreErrorMsg?: boolean;
    onSuccess?: (data: TData, params: TParams) => void;
  },
): Result<Response<TData>, TParams> => {
  return useRequest<Response<TData>, TParams>(service, {
    ...options,
    onSuccess({ msg, code, data }, params) {
      if (code === 200) {
        options?.onSuccess?.(data, params);
      } else {
        if (!options?.ignoreErrorMsg) {
          Toast.show(msg);
        }
        options?.onError?.(new Error(msg), params);
      }
    },
    onError(error: any, params) {
      options?.onError?.(error, params);
      if (!options?.ignoreErrorMsg) {
        Toast.show(error?.response?.data?.msg || error.message);
      }
    },
  });
};
