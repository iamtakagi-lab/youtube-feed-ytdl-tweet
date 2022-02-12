import fs from "fs";
import path from "path";

type Keep = {
  lastVideoLink: string;
};

const getKeep = () => {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "keep.json"), "utf8")
  ) as Keep;
};

const updateKeep = (keep: Keep) => {
  fs.writeFileSync(
    path.join(__dirname, "..", "keep.json"),
    JSON.stringify(keep),
    "utf8"
  );
};

export { getKeep, updateKeep };
