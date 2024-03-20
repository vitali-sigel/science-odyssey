import Lenis from "@studio-freight/lenis";

export default class LenisManager {
    constructor() {
        this.lenis = this.init();
    }

    init() {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return lenis;
    }
}
