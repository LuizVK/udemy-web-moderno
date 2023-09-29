const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    return gulp.src('src/**/*.js') // pega todos os arquivos *.js da pasta e subpastas dentro de 'src'
        .pipe(babel({
            comments: false,
            presets: ["env"]
        })) // Vai transpilar os arquivos *.js para uma versão mais compatível com os navegadores
        .pipe(uglify()) // irá minificar os arquivos
        .on('error', err => console.log(err)) // caso ocorra o evento 'error' irá chamar a função informada
        .pipe(concat('codigo.min.js')) // irá concatenar todos os arquivos em um só com o nome 'codigo.min.js'
        .pipe(gulp.dest('build')) // irá enviar os arquivos para a pasta de destino 'build'

    // return cb()
}

function fim (cb) {
    console.log('Fim!!!')
    return cb()
}

module.exports.default = series(transformacaoJS, fim)