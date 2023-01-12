const isUndefined = (v: any): boolean => {
  if (typeof v === "undefined") {
    return true;
  }

  return false;
};

export { isUndefined };
