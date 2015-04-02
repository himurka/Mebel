module.exports = function(grunt) {
  //подгружаем модули
  grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['concat','uglify','cssmin']);
  
  grunt.initConfig({
	//склеиваем js
	concat: {
		main: {
			//пути к файлам которые надо склеить
			src:['public/javascripts/video.js', 'public/javascripts/holst.js'],
			//куда склеивать
			dest:'public/javascripts/gtuntfile.js'
		}
	},
	uglify: {
		main: {
			files: {'public/javascripts/gtuntfile.min.js':'<%=concat.main.dest%>'}
			//сжимает результат скливания (убирает пробелы, всякую ненужную шляпу)
		}
	},
	cssmin: {
		combine: {
			files: {'public/css/videoAndGallery.min.css':['public/css/video.css','public/css/gallery.css']}
						//указываем итоговый файл сжатия		указываем файл которые сжимать
		}
	}
  
  });
};