import { TypeShuffle } from "../effects/typeShuffleEffect";

export default class TypeShuffleManager {
    constructor() {
        this.init();
    }

    init() {
        // Function to apply the effect to a specific element by ID
        window.applyTextShuffle = function (elementId) {
            const textElement = document.getElementById(elementId);
            if (textElement) {
                const ts = new TypeShuffle(textElement);
                ts.trigger();
            } else {
                console.warn(
                    'Element with ID "' + elementId + '" was not found.'
                );
            }
        };
    }
}
