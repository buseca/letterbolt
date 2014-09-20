$(document).ready(function(){





	function arrayMe(string) {

			var target = $(".lb");

			// For all matching elements
			target.each(function() {

				// Get contents of string
				var myStr = $(this).text();

				// Split myStr into an array of characters
				myStr = myStr.split("");


				// setting variables for with the svg
				var lb_a = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"37px\" height=\"56px\" viewBox=\"0 0 37 56\" enable-background=\"new 0 0 37 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M4.336,47l14.416-30 l14.001,30.083 M8.752,41h20\"/> </svg> </div>";
				var lb_b = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"38px\" height=\"56px\" viewBox=\"0 0 38 56\" enable-background=\"new 0 0 38 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M8.5,29h14.375 c0,0,10.167,0.041,10.167,9.042S22.958,47,22.958,47H6.5V15h16.458c0,0,8.75-0.508,8.75,6.001c0,7.499-9.062,7.749-9.062,7.749\"/> </svg> </div>";
				var lb_c = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"36px\" height=\"56px\" viewBox=\"0 0 36 56\" enable-background=\"new 0 0 36 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M31.503,42.905 c-2.423,2.315-6.04,3.97-11.386,3.97c-13.703,0-15.516-10.746-15.516-16c0,0-0.125-15.906,15.625-15.906 c4.91,0,8.539,1.27,10.891,3.23\"/> </svg> </div>";
				var lb_d = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"38px\" height=\"56px\" viewBox=\"0 0 38 56\" enable-background=\"new 0 0 38 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M17.896,15 c0,0,14.5,0.334,14.5,16.084S18.062,47,18.062,47h-12V15H17.896z\"/> </svg> </div>";
				var lb_e = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"39px\" height=\"56px\" viewBox=\"0 0 39 56\" enable-background=\"new 0 0 39 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M32.938,47h-26V15h26 M32.938,29h-21\"/> </svg> </div>";
				var lb_f = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"32px\" height=\"56px\" viewBox=\"0 0 32 56\" enable-background=\"new 0 0 32 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M6.5,47V15h21 M23.5,29h-16\"/> </svg> </div>";

				var lb_g = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"42px\" height=\"56px\" viewBox=\"0 0 42 56\" enable-background=\"new 0 0 42 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M24.312,31h12.914 c0,5-2.344,15.875-16.047,15.875s-15.516-10.746-15.516-16c0,0-0.125-15.906,15.625-15.906c4.91,0,8.414,1.27,10.766,3.23\"/> </svg> </div>";
				var lb_h = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"37px\" height=\"56px\" viewBox=\"0 0 37 56\" enable-background=\"new 0 0 37 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M6.062,15v32 M31.062,15v32 M7.062,29h23\"/> </svg> </div>";
				var lb_i = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"18px\" height=\"56px\" viewBox=\"0 0 18 56\" enable-background=\"new 0 0 18 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M9.003,15v32\"/> </svg> </div>";
				var lb_j = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"28px\" height=\"56px\" viewBox=\"0 0 28 56\" enable-background=\"new 0 0 28 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M21.688,15v23 c0,0,0,8.686-8.686,8.686C4.938,46.686,4.938,41,4.938,41\"/> </svg> </div>";
				var lb_k = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"36px\" height=\"56px\" viewBox=\"0 0 36 56\" enable-background=\"new 0 0 36 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M5.938,15v32 M30.665,14.692 L6.272,33.334 M31.582,46.692l-18-18\"/> </svg> </div>";
				var lb_l = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"29px\" height=\"56px\" viewBox=\"0 0 29 56\" enable-background=\"new 0 0 29 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M24.251,47h-18V15\"/> </svg> </div>";

				var lb_m = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"43px\" height=\"56px\" viewBox=\"0 0 43 56\" enable-background=\"new 0 0 43 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M37.406,15.083L21.313,45 L5.406,15 M5.406,47V15 M37.406,15v32\"/> </svg> </div>";
				var lb_n = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"37px\" height=\"56px\" viewBox=\"0 0 37 56\" enable-background=\"new 0 0 37 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M5.542,47V15l26,31.917V15\"/> </svg> </div>";
				var lb_o = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"40px\" height=\"56px\" viewBox=\"0 0 40 56\" enable-background=\"new 0 0 40 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M4.212,30.938 c0,0-0.125-15.938,15.625-15.938s15.938,14.188,15.938,16.25c0,4.941-2.344,15.75-16.047,15.75S4.212,36.191,4.212,30.938z\"/> </svg> </div>";
				var lb_p = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"34px\" height=\"56px\" viewBox=\"0 0 34 56\" enable-background=\"new 0 0 34 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M6.586,47V15h15 c0,0,8.083,0.333,8.083,7.166C29.669,29,21.586,29,21.586,29h-14\"/> </svg> </div>";
				var lb_q = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"42px\" height=\"56px\" viewBox=\"0 0 42 56\" enable-background=\"new 0 0 42 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M5.125,30.938 C5.125,30.938,5,15,20.75,15s15.938,14.188,15.938,16.25c0,4.941-2.344,15.75-16.047,15.75S5.125,36.191,5.125,30.938z M36.438,51.188c-14.562,0-15.125-14.996-15.125-14.996\"/> </svg> </div>";
				var lb_r = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"36px\" height=\"56px\" viewBox=\"0 0 36 56\" enable-background=\"new 0 0 36 56\" xml:space=\"preserve\"> <path d=\"M30.083,47\"/> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M7,47V15h15 c0,0,8.083,0.333,8.083,7.166C30.083,29,22,29,22,29H8 M7,29h14.25c8.701,0,8.75,9.833,8.75,9.833V47\"/> </svg> </div>";

				var lb_s = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"37px\" height=\"56px\" viewBox=\"0 0 37 56\" enable-background=\"new 0 0 37 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M6.838,39.497 c0,4.941,4.116,7.503,12.346,7.503c3.017,0,5.469-0.469,7.357-1.419c2.267-1.132,3.396-3.217,3.396-5.094 c0-2.911-1.329-5.504-4.926-6.58c-3.358-1.005-13.09-3.603-14.327-4.305c-3.01-1.707-3.88-3.628-3.88-5.948 c0-5.704,4.039-8.561,12.124-8.561c8.468,0,10.985,3.074,10.985,8.195\"/> </svg> </div>";
				var lb_t = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"37px\" height=\"56px\" viewBox=\"0 0 37 56\" enable-background=\"new 0 0 37 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M4.586,15h28 M18.586,47V15\"/> </svg> </div>";
				var lb_u = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"38px\" height=\"56px\" viewBox=\"0 0 38 56\" enable-background=\"new 0 0 38 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M31.627,15v20 c0,0,0,12-11.958,12C6.627,47,6.627,35,6.627,35V15\"/> </svg> </div>";
				var lb_v = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"38px\" height=\"56px\" viewBox=\"0 0 38 56\" enable-background=\"new 0 0 38 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M33.188,15.082 L18.773,45.083L4.771,14.999\"/> </svg> </div>";
				var lb_w = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"53px\" height=\"56px\" viewBox=\"0 0 53 56\" enable-background=\"new 0 0 53 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M47.558,14.667 L35.125,44.584l-13.01-29.916 M26.189,25.564l-8.064,19.02L5.115,14.668\"/> </svg> </div>";
				var lb_x = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"36px\" height=\"56px\" viewBox=\"0 0 36 56\" enable-background=\"new 0 0 36 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M5.021,15l25.715,31.686 M30.736,15L5.021,46.686\"/> </svg> </div>";

				var lb_y = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"37px\" height=\"56px\" viewBox=\"0 0 37 56\" enable-background=\"new 0 0 37 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M4.809,14.833l13.944,13.833 V47 M32.336,14.667l-13.583,14\"/> </svg> </div>";
				var lb_z = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"36px\" height=\"56px\" viewBox=\"0 0 36 56\" enable-background=\"new 0 0 36 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M31.333,47H5.166l26-32H5.333\"/> </svg> </div>";
				var lb_1 = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"20px\" height=\"56px\" viewBox=\"0 0 20 56\" enable-background=\"new 0 0 20 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M5.718,23.75L13.906,18v31\"/> </svg> </div>";
				var lb_2 = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"32px\" height=\"56px\" viewBox=\"0 0 32 56\" enable-background=\"new 0 0 32 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M6.25,28c0-15.335,18-11.666,20.083-5.832c2.319,6.496-3.046,10.08-11.833,15.165S6,49,6,49h21\"/> </svg> </div>";
				var lb_3 = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"32px\" height=\"56px\" viewBox=\"0 0 32 56\" enable-background=\"new 0 0 32 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M6.632,21.961C7.875,17.37,12.152,17,16.75,17c14,0,10.75,14.581-0.5,14.581 M5.801,42.23C6.852,45.116,9.602,49,16.749,49 c13.188,0,13.563-17.419-0.5-17.419\"/> </svg> </div>";
				var lb_4 = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"38px\" height=\"56px\" viewBox=\"0 0 38 56\" enable-background=\"new 0 0 38 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M24.688,17v32 M32.688,39H5.312l9.438-19.875\"/> </svg> </div>";
				
				var lb_5 = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"34px\" height=\"56px\" viewBox=\"0 0 34 56\" enable-background=\"new 0 0 34 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M26.834,17h-20v14c0,0,21.5-7.5,21.5,7c0,15.812-21.5,12.086-21.5,4.012\"/> </svg> </div>";
				var lb_6 = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"31.333px\" height=\"56px\" viewBox=\"0 0 31.333 56\" enable-background=\"new 0 0 31.333 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M6,36c0-1.293,0.388-7,10-7 c11.62,0,9.916,10.166,9.916,10.166S25.37,47,16,47C6.084,47,6,36,6,36V25.085C6,25.085,6.333,15,16.25,15 c4.96,0,7.522,2.521,8.844,5.045\"/> </svg> </div>";
				var lb_7 = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"32.333px\" height=\"56px\" viewBox=\"0 0 32.333 56\" enable-background=\"new 0 0 32.333 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M4.917,15h22L11.501,46.834\"/> </svg> </div>";
				var lb_8 = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"35px\" height=\"56px\" viewBox=\"0 0 35 56\" enable-background=\"new 0 0 35 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M17.373,29c-5.038,0-9.121-2.801-9.121-6.583S12.335,15,17.373,15s9.121,3.635,9.121,7.417S22.41,29,17.373,29z M17.373,47 c-6.5,0-11.77-3.601-11.77-8.464S10.872,29,17.373,29s11.77,4.673,11.77,9.536S23.873,47,17.373,47z\"/> </svg> </div>";
				var lb_9 = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"30px\" height=\"56px\" viewBox=\"0 0 30 56\" enable-background=\"new 0 0 30 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M14.688,32.195c-4.748,0-8.598-3.85-8.598-8.598S9.939,15,14.688,15c4.749,0,8.598,3.85,8.598,8.598S19.437,32.195,14.688,32.195z M23.25,24v15.25c0,0,0.62,7.828-8.88,7.828c-6.717,0-8.517-3.835-8.995-6.082\"/> </svg> </div>";
				var lb_0 = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"33px\" height=\"56px\" viewBox=\"0 0 33 56\" enable-background=\"new 0 0 33 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M5.562,29.125 c0,0-0.306-12.125,11.035-12.125s10.84,12.125,10.84,12.125L27.44,37c0,0,0.306,12.125-11.035,12.125S5.565,37,5.565,37 L5.562,29.125z\"/> </svg> </div>";
				
				var lb_comma = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"11px\" height=\"56px\" viewBox=\"0 0 11 56\" enable-background=\"new 0 0 11 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M6.42,46.796l-1.962,5.822\"/> </svg> </div>";
				var lb_dot = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"8px\" height=\"56px\" viewBox=\"0 0 8 56\" enable-background=\"new 0 0 8 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M3.002,46.796L3.002,46.796\"/> </svg> </div>";
				var lb_dots = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"8px\" height=\"56px\" viewBox=\"0 0 8 56\" enable-background=\"new 0 0 8 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M4.086,39.796L4.086,39.796 M4.086,23.796L4.086,23.796\"/> </svg> </div>";
				var lb_space = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"28px\" height=\"56px\" viewBox=\"0 0 8 56\" enable-background=\"new 0 0 8 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"\" stroke-width=\"0\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M3.002,46.796L3.002,46.796\"/> </svg> </div>";
				var lb_apostrofo = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"9px\" height=\"56px\" viewBox=\"0 0 9 56\" enable-background=\"new 0 0 9 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M5.292,4.796l-1.963,5.822\"/> </svg> </div>";
				var lb_quotes = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"17px\" height=\"56px\" viewBox=\"0 0 17 56\" enable-background=\"new 0 0 17 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M6.129,4.796l-1.963,5.822 M13.129,4.796l-1.963,5.822\"/> </svg> </div> ";

				var lb_plus = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"31px\" height=\"56px\" viewBox=\"0 0 31 56\" enable-background=\"new 0 0 31 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M15.583,18v20 M5.583,28h20\"/> </svg> </div>";
				var lb_minus = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"32.125px\" height=\"56px\" viewBox=\"0 0 32.125 56\" enable-background=\"new 0 0 32.125 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M6,28h20\"/> </svg> </div> ";
				var lb_equal = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"36px\" height=\"56px\" viewBox=\"0 0 36 56\" enable-background=\"new 0 0 36 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M8,23h20 M8,34h20\"/> </svg> </div>";
				var lb_per = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"34px\" height=\"56px\" viewBox=\"0 0 34 56\" enable-background=\"new 0 0 34 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M8.301,19.246l17.346,9.937 M25.6,19.246L8.301,29.29 M17,15v18\"/> </svg> </div>";
				var lb_question = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"29px\" height=\"56px\" viewBox=\"0 0 29 56\" enable-background=\"new 0 0 29 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M5.188,23.562c0,0,0.243-8.562,9.562-8.562c9,0,9.125,6.562,9.125,9.188c0,6.314-9.125,6.688-9.125,13.25\"/> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M15.25,47L15.25,47\"/> </svg> </div> ";
				var lb_esclamativo = "<div class=\"letterbolt\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"14px\" height=\"56px\" viewBox=\"0 0 14 56\" enable-background=\"new 0 0 14 56\" xml:space=\"preserve\"> <path class=\"path\" fill=\"none\" stroke=\"#000000\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M7.062,15v18 M7.062,44v3\"/> </svg> </div>";


				// Build an html string of characters wrapped in  tags with classes
				var myContents = "";
				for (var i = 0, len = myStr.length; i < len; i++) {
					if ( myStr[i] === 'a') {
						myContents += '' + lb_a + '';
					} else if ( myStr[i] === 'b' ) {
						myContents += '' + lb_b + '';
					} else if ( myStr[i] === 'c' ) {
						myContents += '' + lb_c + '';
					} else if ( myStr[i] === 'd' ) {
						myContents += '' + lb_d + '';
					} else if ( myStr[i] === 'e' ) {
						myContents += '' + lb_e + '';
					} else if ( myStr[i] === 'f' ) {
						myContents += '' + lb_f + '';
					} else if ( myStr[i] === 'g' ) {
						myContents += '' + lb_g + '';
					} else if ( myStr[i] === 'h' ) {
						myContents += '' + lb_h + '';
					} else if ( myStr[i] === 'i' ) {
						myContents += '' + lb_i + '';
					} else if ( myStr[i] === 'j' ) {
						myContents += '' + lb_j + '';
					} else if ( myStr[i] === 'k' ) {
						myContents += '' + lb_k + '';
					} else if ( myStr[i] === 'l' ) {
						myContents += '' + lb_l + '';
					} else if ( myStr[i] === 'm' ) {
						myContents += '' + lb_m + '';
					} else if ( myStr[i] === 'n' ) {
						myContents += '' + lb_n + '';
					} else if ( myStr[i] === 'o' ) {
						myContents += '' + lb_o + '';
					} else if ( myStr[i] === 'p' ) {
						myContents += '' + lb_p + '';
					} else if ( myStr[i] === 'q' ) {
						myContents += '' + lb_q + '';
					} else if ( myStr[i] === 'r' ) {
						myContents += '' + lb_r + '';
					} else if ( myStr[i] === 's' ) {
						myContents += '' + lb_s + '';
					} else if ( myStr[i] === 't' ) {
						myContents += '' + lb_t + '';
					} else if ( myStr[i] === 'u' ) {
						myContents += '' + lb_u + '';
					} else if ( myStr[i] === 'v' ) {
						myContents += '' + lb_v + '';
					} else if ( myStr[i] === 'w' ) {
						myContents += '' + lb_w + '';
					} else if ( myStr[i] === 'x' ) {
						myContents += '' + lb_x + '';
					} else if ( myStr[i] === 'y' ) {
						myContents += '' + lb_y + '';
					} else if ( myStr[i] === 'z' ) {
						myContents += '' + lb_z + '';

					} else if ( myStr[i] === '1' ) {
						myContents += '' + lb_1 + '';
					} else if ( myStr[i] === '2' ) {
						myContents += '' + lb_2 + '';
					} else if ( myStr[i] === '3' ) {
						myContents += '' + lb_3 + '';
					} else if ( myStr[i] === '4' ) {
						myContents += '' + lb_4 + '';
					} else if ( myStr[i] === '5' ) {
						myContents += '' + lb_5 + '';
					} else if ( myStr[i] === '6' ) {
						myContents += '' + lb_6 + '';
					} else if ( myStr[i] === '7' ) {
						myContents += '' + lb_7 + '';
					} else if ( myStr[i] === '8' ) {
						myContents += '' + lb_8 + '';
					} else if ( myStr[i] === '9' ) {
						myContents += '' + lb_9 + '';
					} else if ( myStr[i] === '0' ) {
						myContents += '' + lb_0 + '';

					} else if ( myStr[i] === ',' ) {
						myContents += '' + lb_comma + '';
					} else if ( myStr[i] === '.' ) {
						myContents += '' + lb_dot + '';
					} else if ( myStr[i] === ':' ) {
						myContents += '' + lb_dots + '';
					} else if ( myStr[i] === ' ' ) {
						myContents += '' + lb_space + '';
					} else if ( myStr[i] === '\'' ) {
						myContents += '' + lb_apostrofo + '';
					} else if ( myStr[i] === '\"' ) {
						myContents += '' + lb_quotes + '';
					} else if ( myStr[i] === '+' ) {
						myContents += '' + lb_plus + '';
					} else if ( myStr[i] === '-' ) {
						myContents += '' + lb_minus + '';
					} else if ( myStr[i] === '=' ) {
						myContents += '' + lb_equal + '';
					} else if ( myStr[i] === '*' ) {
						myContents += '' + lb_per + '';
					} else if ( myStr[i] === '?' ) {
						myContents += '' + lb_question + '';
					} else if ( myStr[i] === '!' ) {
						myContents += '' + lb_esclamativo + '';
					} else {
						myContents += '' + '[wrong character]' +'';
					}

					// Replace original string with constructed html string
					$(this).html(myContents);
					// alert (myContents);
				}

			});
	}

	$( "button" ).click(function() {
		// Calling arrayMe on page load, on class "sample-text"
		// var myStringType = $('.sample-text');
		arrayMe();
	});





	// SCRIPT PER LETTERE

	$(window).scroll(function (event) {

		$(".letterbolt").each(function(){

			//VARIABILI PER SELEZIONARE GLI OGGETTI
			var path = this.querySelector('.path');
			var fill = this.querySelector('.fill');

			//VARIABILI RELATIVE AL PATH
			var length = path.getTotalLength();
			var offset = path.getTotalLength();
			var color = $(this).find('.path').css('stroke');

			//VARIABILI PER IL CALCOLO DELLO SCROLLING
			var altitude = $(window).height() / 100 * 70;
			var positionNow = $(this).position().top;
			var altitudeNow = $(window).scrollTop() + $(window).height() - positionNow -30 ;

			//IMPOSTO LA SITUAZIONE INIZIALE
			$(this).find('.path').css('stroke-dasharray', length);
			$(this).find('.path').css('stroke-dashoffset', offset);
			$(this).find('.fill').css('fill',color);

			positionNow = $(this).position().top;
			altitudeNow = $(window).scrollTop() + $(window).height() - positionNow -30 ;
			if( altitudeNow > 0 && altitudeNow <= altitude){
				offset = length - (altitudeNow * length / altitude) ;
				$(this).find('.path').css('stroke-dashoffset', offset );
				$(this).find('.fill').css('opacity','0');
				$(this).find('.path').css('opacity','1');
			} else if ( altitudeNow > altitude ) {
				$(this).find('.path').css('stroke-dashoffset','0');
				$(this).find('.fill').css('opacity','1');
				$(this).find('.path.outline').css('opacity','0');
			}
		});

	});






	// SCRIPT PER ICONE

	$(window).scroll(function (event) {

		$(".iconbolt .path-box").each(function(){

			//VARIABILI PER SELEZIONARE GLI OGGETTI
			var path = this.querySelector('.path');

			//VARIABILI RELATIVE AL PATH
			var length = path.getTotalLength();
			var offset = path.getTotalLength();

			//VARIABILI PER IL CALCOLO DELLO SCROLLING
			var altitude = $(window).height() / 100 * 40;
			var positionNow = $(this).position().top;
			var altitudeNow = $(window).scrollTop() + $(window).height() - positionNow -30 ;

			//IMPOSTO LA SITUAZIONE INIZIALE
			$(this).find('.path').css('stroke-dasharray', length);
			$(this).find('.path').css('stroke-dashoffset', offset);

			positionNow = $(this).position().top;
			altitudeNow = $(window).scrollTop() + $(window).height() - positionNow -30 ;
			if( altitudeNow > 0 && altitudeNow <= altitude){
				offset = length - (altitudeNow * length / altitude) ;
				$(this).find('.path').css('stroke-dashoffset', offset );
				$(this).find('.fill').css('opacity','0');
			} else if ( altitudeNow > altitude ) {
				$(this).find('.path').css('stroke-dashoffset','0');
				$(this).find('.fill').css('opacity','1');
			}
		});

		$(".iconbolt .fill-box").each(function(){

			//VARIABILI PER SELEZIONARE GLI OGGETTI
			var fill = this.querySelector('.fill');
			var color = $(this).siblings('.path-box').find('.path').css('stroke');

			//VARIABILI PER IL CALCOLO DELLO SCROLLING
			var altitude = $(window).height() / 100 * 40;
			var positionNow = $(this).position().top;
			var altitudeNow = $(window).scrollTop() + $(window).height() - positionNow -30 ;

			positionNow = $(this).position().top;
			altitudeNow = $(window).scrollTop() + $(window).height() - positionNow -30 ;
			if( altitudeNow > 0 && altitudeNow <= altitude){
				$(this).find('.fill').css('opacity','0');
			} else if ( altitudeNow > altitude ) {
				$(this).find('.fill').css('opacity','1');
			}

		});

	});






});