const checkSpam = (str) => {
  let strNew = str.toLowerCase();
  return strNew.includes("xxx") || strNew.includes("viagra");
};
