import useSWR from "swr";

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const useDummies = () => {
  const fetcher = async (url: string) => {
    const res = await fetch(url);

    await sleep(2000);

    if (!res.ok) {
      throw Error(res.statusText);
    }

    return await res.json();
  };

  const { data, error } = useSWR("http://localhost:3000/api/dummies", fetcher, {
    suspense: true,
    revalidateOnFocus: false,
  });

  return {
    items: data?.data,
    error,
  };
};

export { useDummies };
