/**
 * useMemo
 * @param cb ,dependency[];
 * @return val --> memoized
 */

import {useEffect, useRef} from 'react'

const areEqual = (prevDeps, nextDeps) => {
  if (prevDeps === undefined) return false
  if (prevDeps === null) return false
  if (nextDeps.length !== prevDeps.length) {
    return false
  }
  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== nextDeps[i]) {
      return false
    }
  }
  return true
}

const useCustomMemo = (cb, deps) => {
  /**
   * Persist the data in re-renders
   */
  const memoizeValue = useRef(null)

  /**
   * if it is unique --> Perform Memoization
   */
  if (!memoizeValue.current || !areEqual(memoizeValue.current.deps, deps)) {
    memoizeValue.current = {
      value: cb(),
      deps,
    }
  }

  /**
   * Clean up when component gets unmount
   */
  useEffect(() => {
    return () => {
      memoizeValue.current = null
    }
  }, [])
  /**
   * return the memoized value
   */
  return memoizeValue.current.value
}

export default useCustomMemo
