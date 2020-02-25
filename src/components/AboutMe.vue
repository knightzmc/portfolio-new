<template>
    <div v-important class="box container-fluid" id="about">
        <div class="row">
            <div class="col-5 text-left">
                <h1 class="display-3">Hey</h1>
                <p>
                    My name is Alex Wood, but online I often go by the name
                    <a href="#" v-b-tooltip.hover title="It's an inside joke!">BristerMitten</a> online.
                    I developed an interest in Minecraft a few years later when I was 11. I started a modest server,
                    but decided I would learn how to make plugins in order to make it stand out.

                    I downloaded a "Learn Java" app on my phone, and used it on the bus to and from school,
                    then set out to make plugins.

                </p>
                <p>
                    As you might expect, it didn't begin well. I encountered the learning curve that Java is known for,
                    and found myself frequently visiting various forums for help.
                </p>
                <p>
                    But I kept going. Within 2 years, I'd become familiar with OOP concepts, Java syntax,
                    and the Spigot API. In the Winter of 2017, I was lucky enough to get an hourly paying job
                    developing a Server Core, which taught me a lot about Collaborative Coding, BungeeCord, and Git.

                    I eventually had to leave the project due to still having school, but it was a fantastic experience.
                </p>
                <p>
                    And I kept learning. I'm now familiar with Java, Kotlin, Spigot, BungeeCord,
                    Spring Boot, Hibernate, JPA, Gradle, Maven, MySQL, MongoDB, YAML, JSON,
                    and probably some more acronyms!
                </p>
            </div>
            <div class="col-6 text-right">
                <i>Since 2017...</i>
                <h1 class="display-6">>30</h1>
                <p>Commissions Taken</p>
                <h1 class="display-6">>50</h1>
                <p>GitHub and GitLab projects I've been involved in</p>
                <h1 class="display-6">>5</h1>
                <p>Public Testimonials about my services</p>
                <h1 class="display-6">>100</h1>
                <p>Fellow developers helped in </p><a href="https://helpch.at/discord" v-b-tooltip.hover
                                                      title="I'm also almost in the top 20 users!">
                HelpChat
            </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutMe"
    }
</script>

<style scoped>

</style>
