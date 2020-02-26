<template>
    <div class="text-center" id="main">
        <HelloWorld msg="Alexander Wood"/>
        <Separator color="#324A5F"></Separator>
        <AboutMe></AboutMe>
        <Separator color="#324A5F"></Separator>
        <Projects></Projects>
        <Separator color="#324A5F"></Separator>
        <Contact></Contact>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HelloWorld from './components/Hello.vue';
    import Separator from "@/components/Separator.vue";
    import AboutMe from "@/components/AboutMe.vue";
    import Projects from "@/components/Projects.vue";
    import Contact from "@/components/Contact.vue";

    const importantComponents: Array<HTMLElement> = [];

    @Component({
        components: {
            Contact,
            Projects, AboutMe,
            HelloWorld, Separator
        },
    })
    export default class App extends Vue {
        constructor() {
            super();
            Vue.directive('important', {
                bind: function (el) {
                    importantComponents.push(el);
                }
            });
        }
    }
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let timeout = false;
    let currentIndex = 0;

    function getElementY(element: any) {
        return window.pageYOffset + element.getBoundingClientRect().top
    }

    function doScrolling(element: any, duration: number) {
        const startingY = window.pageYOffset;
        const elementY = getElementY(element);
        // If element is close to page's bottom then window will scroll only to some position above the element.
        const targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;
        const diff = targetY - startingY;
        // Easing function: easeInOutCubic
        // From: https://gist.github.com/gre/1650294
        const easing = function (t: number) {
            return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        };
        let start: number;

        if (!diff) return;

        // Bootstrap our animation - it will get called right before next frame shall be rendered.
        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;
            // Elapsed milliseconds since start of scrolling.
            const time = timestamp - start;
            // Get percent of completion in range [0, 1].
            let percent = Math.min(time / duration, 1);
            // Apply the easing.
            // It can cause bad-looking slow frames in browser performance tool, so be careful.
            percent = easing(percent);

            window.scrollTo(0, startingY + diff * percent);

            // Proceed with animation as long as we wanted it to.
            if (time < duration) {
                window.requestAnimationFrame(step)
            }
        });
    }

    let isMobile = false; //initiate as false
    // device detection
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    if (!isMobile)
        document.onscroll = function () {

            // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            const st = window.pageYOffset || document.documentElement.scrollTop;

            const down = st > lastScrollTop;
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

            if (timeout) return;

            if (down) {
                //going down
                if (currentIndex == importantComponents.length) {
                    return;
                }
                currentIndex++;

            } else {
                if (currentIndex == 0) {
                    return;
                }
                currentIndex--;
            }

            const nextElement = importantComponents[currentIndex];
            if (!nextElement) return;
            timeout = true;
            doScrolling(nextElement, 1000);
            setTimeout(() => timeout = false, 1050);
        };
</script>

<!--suppress CssUnusedSymbol -->
<style>
    @import url('https://fonts.googleapis.com/css?family=Signika&display=swap');

    #main {
        font-family: Signika, Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #011C27;
        background: #A3D5FF !important;
    }

    html body #main {
        background: #A3D5FF !important;
    }

    .box {
        padding-top: 10rem;
        padding-bottom: 8rem;
    }
</style>
