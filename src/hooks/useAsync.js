import { useCallback, useEffect, useState } from 'react';

// Runs `load` when `key` changes (and on reload()), keeping the last result.
// `data` is undefined until the first load finishes.
export function useAsync(load, key) {
  const [state, setState] = useState({ key: undefined, data: undefined, error: null });
  const [version, setVersion] = useState(0);

  useEffect(() => {
    let cancelled = false;
    load()
      .then((data) => !cancelled && setState({ key, data, error: null }))
      .catch((error) => !cancelled && setState((prev) => ({ ...prev, key, error })));
    return () => {
      cancelled = true;
    };
    // `load` is recreated every render; `key` and `version` decide when to refetch.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, version]);

  const reload = useCallback(() => setVersion((v) => v + 1), []);

  return {
    data: state.data,
    error: state.error,
    loading: state.key !== key,
    reload,
  };
}
