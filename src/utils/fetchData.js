// src/utils/fetchData.js
export const fetchPatternData = async (pattern) => {
  const basePath = `/data/${pattern}`;

  // get file list
  const manifestRes = await fetch(`${basePath}/manifest.json`);
  const files = await manifestRes.json();

  const datasets = await Promise.all(
    files.map(async (file) => {
      const res = await fetch(`${basePath}/${file}`);
      const data = await res.json();
      return {
        name: file.replace(".json", ""),
        data,
      };
    })
  );

  return datasets;
};
