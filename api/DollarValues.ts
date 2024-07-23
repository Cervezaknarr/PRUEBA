export const DollarValues = async () => {
  const dollar = await fetch("https://dolarapi.com/v1/dolares").then(
    (response) => response.json(),
  );
  return dollar;
};
