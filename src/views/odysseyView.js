import OdysseyGalleryManager from "../modules/odysseyGalleryManager";
import OdysseyStoryManager from "../modules/odysseyStoryManager";
import OdysseyIntro from "../modules/odysseyIntro";

export const setupOdysseyView = (data) => {
    // new OdysseyIntro();
    new OdysseyStoryManager();
    new OdysseyGalleryManager();
};
