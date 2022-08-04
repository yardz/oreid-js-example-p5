import { OreId } from "oreid-js";
import { WebPopup } from "oreid-webpopup";

document.addEventListener("DOMContentLoaded", function () {
  const oreId = new OreId({
    appName: "ORE ID Sample App",
    appId: "t_d58e1ccf22144eebb25d3d9fd92fc82d",
    plugins: {
      popup: WebPopup()
    }
  });
  oreId.init().then(() => {
    console.log('oreId loaded');
    window.oreId = oreId;
  }).catch(() => { console.log('oreId load fail') })
});


