import { useState } from 'react';
import { LRUCache } from 'lru-cache';
import { useUpdateEffect } from 'ahooks';

const cache = new LRUCache({
  ttl: 5 * 60 * 1000,
  ttlAutopurge: true,
});

const useCacheState = <T>(
  initialValue: T,
  cacheKey?: string,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    if (cacheKey) {
      const cached = cache.get(cacheKey);
      if (cached) {
        return cached;
      }
    }
    if (typeof initialValue === 'function') {
      return initialValue();
    }
    return initialValue;
  });

  useUpdateEffect(() => {
    cacheKey && cache.set(cacheKey, value as any);
  }, [value]);

  useUpdateEffect(() => {
    const cached = cache.get(cacheKey as string);
    if (cached) {
      setValue(cached as any);
    } else {
      const value =
        typeof initialValue === 'function' ? initialValue() : initialValue;
      setValue(value);
    }
  }, [cacheKey]);

  return [value, setValue];
};

export default useCacheState;
