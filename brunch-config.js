module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
        'app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: 'app.css'/*{
        'vendor.css': /^(?!app)/,
        'app.js': /^app/
      }*/
    },
    templates: {
      joinTo: 'app.js'
    }
  },
  plugins: {
    babel: {
      presets: ['latest', 'stage-3']
    },
    vue: {
      extractCSS: false
    },
    sass: {
      mode: "native",
      precision: 8,
      options: {
        includePaths: [
          'node_modules/bulma'
        ]
      }
    },
    copycat: {
      'fonts': ['node_modules/font-awesome/fonts']
    }
  },
  npm: {
    styles: {
      'izitoast': ['dist/css/iziToast.css'],
      'font-awesome': ['css/font-awesome.css'],
      'animate.css': ['animate.css']
    }
  }
}
