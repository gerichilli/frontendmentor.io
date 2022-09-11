function useUnFlattenResults(results) {
  return results.map((item) => {
    const { id, slug, name, flags, population, region, capital } = item;

    return {
      id,
      slug,
      name: { common: name },
      flags: { svg: flags },
      population,
      region: { name: region },
      capital,
    };
  });
}

export default useUnFlattenResults;
