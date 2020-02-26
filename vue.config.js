module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Alex Wood';
                args[0].meta = {
                    viewport: 'width=device-width,initial-scale=1,user-scalable=no',
                    description: "Brister Mitten's Portfolio",
                    author: 'Alexander Wood',
                    keywords: 'Java, Kotlin, Spigot, Bukkit, BristerMitten, Developer, Plugins, Minecraft'
                };

                return args;
            })
    }
}
