import { Squid } from "@0xsquid/sdk";

const getSDK = (): Squid => {
  const squid = new Squid({
    baseUrl: "https://testnet.api.0xsquid.com", // for mainnet use "https://api.0xsquid.com"
  });
  return squid;
};

(async () => {
  // instantiate the SDK
  const squid = getSDK();
  // init the SDK
  await squid.init();
  console.log("Squid inited");
  console.log(squid.chains);
})();
