module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
	      css: {
	      	files: ['css/*.css','css/pages/*.css'],
	      	tasks: ['transport','concat','cssmin','uglify']
	      },
	      js: {
	      	files: ['js/*.js'],
	      	tasks: ['transport','concat','cssmin','uglify']
	      }
	    },
		minPath:{
			js:'../../html/mobile/js/',
			css:'../../html/mobile/css/'
		},
		transport: {
	        mobile_js: {
	        	options : {
		            idleading : '/mobile/js/',
		            debug:false
		        },
	            files: [{
	            		expand: true,
						cwd: './js',
	                	src:  ['*.js'],
	                	dest: './build'
	            	}
	            ]
	        },
	        options : {
		        alias: {
		            'zepto': 'zepto'
		        }
		    }
	    },
		clean: {
		  expected: ['./build']
		},
		concat: {
			css: {  
			 	src: ['css/reset.css',
					  'css/common.css',
					  'css/iconfont.css',
					  'css/pages/*.css'
			 	],
			 	dest: './css/main-contact.css'
			},
			js:{ 
				src:[
					'./build/*.js'
				],
				dest:'<%=minPath.js%>/init-concat.js'		
			}
			
		},
		// css 压缩
		cssmin: {
			css: {
				files: {
					'<%=minPath.css%>main.css':'<%=concat.css.dest%>',  //压缩后:压缩前
				}
			}
		},

		uglify: {
			js:{
				files: {
					'<%=minPath.js%>init.js':'<%=concat.js.dest%>'
				}
			}
		},

		connect: {
		    server: {
		      options: {
		        port: 8000,
		        hostname: '*',
		        onCreateServer: function(server, connect, options) {
		          var io = require('socket.io').listen(server);
		          io.sockets.on('connection', function(socket) {
		            // do something with socket
		          });
		        }
		      }
		    }
		}
	});
	
	grunt.loadNpmTasks('grunt-cmd-transport');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	// grunt.loadNpmTasks('grunt-contrib-copy');
 	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
 	grunt.registerTask('default', ['watch']);
	//grunt.registerTask('default', ['transport','concat', 'uglify','clean','cssmin']);

};