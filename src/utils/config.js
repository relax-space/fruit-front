export const backendAddr = (() => {
  const env = process.env.STAGE_ENV
  switch (env) {
    case 'staging': return {
      "fruit-api":"",
    };
    case 'production': return {
      "fruit-api":"",
    };
    default: return {
      "fruit-api":"",
    };
  }
})();
