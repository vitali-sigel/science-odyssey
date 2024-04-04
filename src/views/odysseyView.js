import OdysseyGalleryManager from "../modules/odysseyGallery";
import OdysseyStoryManager from "../modules/odysseyStory";
import OdysseyIntro from "../modules/odysseyIntro";

let odysseyIntro = null;

export const setupOdysseyView = (data) => {
    console.log("setup odyssey view");
    odysseyIntro = new OdysseyIntro();
    new OdysseyStoryManager();
    new OdysseyGalleryManager();
};

export const cleanupOdysseyView = (data) => {
    if (odysseyIntro) {
        odysseyIntro.dispose();
    }
};
