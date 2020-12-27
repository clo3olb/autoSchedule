const useLocalStorage = (dataKey: string) => {
  const LS = window.localStorage
  const get = () => {
    const item = LS.getItem(dataKey)
    if (item !== null) {
      return JSON.parse(item)
    }
    return console.error(`${dataKey} Not Found`)
  }
  const set = (value: any) => {
    LS.setItem(dataKey, JSON.stringify(value))
  }
  const remove = () => {
    LS.removeItem(dataKey)
  }
  const clear = () => {
    LS.clear()
  }
  return { get, set, remove, clear }
}

export default useLocalStorage
