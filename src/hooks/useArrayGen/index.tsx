const useArrayGen = (limit: number) => {
  const rows = new Array(limit);
  for (let i = 1; i <= limit; i++) rows[i] = i;

  return rows;
};

export default useArrayGen;
