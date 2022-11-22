<script>

export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++;
        }
    }
}
</script>

<template>
    <main id="main-content" class="body-style">
        <section class="page-jumbotron sea-green">
            <h2>Skill Showcase</h2>
            <p>This page is a quick showcase of the various skills that were developed and exercised in this class.
                Below
                you will find examples of HTML, CSS, and JavaScript which cover topics and information taught in the MET
                CS
                601 class.</p>
        </section>

        <section class="page-jumbotron sea-green">
            <h2>HTML Practice (this is a heading tag!)</h2>
            <article>
                <h3>Text elements (another heading tag!)</h3>
                <p>In this section various HTML tags are show n and their purpose is briefly described. This text is
                    displayed in a '&lt;p&gt;' tag!</p>
                <p>Links to other sites can be used with an '&lt;a&gt;' tag like <a href="https://google.com/"
                        target="_blank">this</a>(this link goes to google)!</p>
                <ul>
                    <li>Lists are handy tools to display information in a bullet list or number list format.</li>
                    <ol>
                        <li>Lists can even be nested like this!</li>
                    </ol>
                    <li>Isn't that cool?</li>
                </ul>
            </article>
            <article>
                <h3>Media</h3>
                <p>Images and Videos can also be included in HTML! An example of embedded video can be seen on the
                    homepage.
                </p>
                <!-- Original credit for image: https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png -->
                <img id="web-dev-badges" src="./../assets/media/Web-Dev-Icons.png" alt="Icon badges of HTML5, CSS3, and JS"
                    srcset="./../assets/media/Web-Dev-Icons.png">
            </article>
        </section>

        <section class="page-jumbotron sea-green">
            <h2>CSS Examples</h2>

            <p>CSS is really helpful for adding <span class="text-blue">style</span> and <span
                    class="text-red">personality</span> to websites!</p>

            <p class="text-center">It can also be used for text alignment.</p>

            <p class="padding-left-2 margin-top-2">Adding padding and margins is also achievable through CSS. <span
                    class="text-border">Borders and other <span class="text-decoration">decorations</span> are possible
                    too!</span></p>
        </section>

        <section class="page-jumbotron sea-green">
            <h2>JavaScript Examples!</h2>
            <p>JavaScript add functionality to your website and is useful for capturing and manipulating data. Below are
                a
                few examples of types of javascript capabilities:</p>

            <article>
                <h3>Click Counter Button</h3>
                <p>Every click of this button will trigger a method which increments the counter next to the button!</p>
                <button type="button" @click="increment()">Click Me</button>
                <span class="padding-left-2">Click Count {{ count }}</span>
            </article>
        </section>
    </main>
</template>

<style scoped>
.text-blue {
    color: blue
}

.text-red {
    color: red;
}

.text-border {
    border: 1px black solid;
}

.padding-left-2 {
    padding-left: 2em;
}

.margin-top-2 {
    margin-top: 2em;
}

.text-decoration {
    text-decoration: line-through;
}
</style>