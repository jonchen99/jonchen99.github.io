import React from 'react';

const $mainPhoto = require('/Users/jonathanchen/jonchen99.github.io/src/img/mainPhoto.jpeg')
const $interset = require('/Users/jonathanchen/jonchen99.github.io/src/img/interset_icon.png')
const $blackberry = require('/Users/jonathanchen/jonchen99.github.io/src/img/blackberry_icon.png')
const $psc = require('/Users/jonathanchen/jonchen99.github.io/src/img/psc_icon.png')
const $league = require('/Users/jonathanchen/jonchen99.github.io/src/img/league_icon.png')
const $altairix = require('/Users/jonathanchen/jonchen99.github.io/src/img/altairix_icon.png')
const $odaia = require('/Users/jonathanchen/jonchen99.github.io/src/img/odaia.png') 


function Homepage() {
  return (
  	<home_body>
	  <section className="homepage_area">
	  	<div className="container homepage_box">
	  		<div className="inner_banner d-flex align-items-center">
	  			<div className = "box_content">
	  				<div className = "media">
		  				<div className="d-flex">
		  					<img src= {$mainPhoto} alt=""/>
		  				</div>
		  				<div className="media-body">
		  					<div className="media_text">
		  						<h6> Hi, I'm </h6>
		  						<h2> Jonathan Chen </h2>
		  						<h4> Systems Design Engineering | University of Waterloo </h4>

		  						<p> I am a Systems Design Engineering student at the University of Waterloo that is passionate about using my technical experience to create efficient solutions to the problems that I encounter. 
		  						</p>

		  						<ul className="list work_experiences">
		  							<li> 
										<img src = {$odaia}/> 
										<a href="https://odaia.ai/" target="_blank"> 
											Odaia 
										</a>

										<p> May - Aug 2021 </p>
		  							</li>
		  							<li> 
										<img src = {$altairix}/> 
										<a href="https://www.altairix.com/" target="_blank"> 
											Altairix 
										</a>

										<p> Sep - Dec 2020 </p>
		  							</li>

		  							<li> 
										<img src = {$league}/> 
										<a href="https://www.league.com" target="_blank"> 
											League 
										</a>

										<p> Jan - Apr 2020 </p>
		  							</li>

		  							<li> 
										<img src = {$blackberry}/> 
										<a href="https://www.blackberry.com" target="_blank"> 
											BlackBerry 
										</a>

										<p> May - Aug 2019 </p>
		  							</li>

		  							<li> 
		  								<img src = {$interset}/>
		  								<a href="https://interset.com/" target="_blank">
		  									Interset
		  								</a>
		  								 <p> Sept - Dec 2018 </p>
		  							</li>

		  							<li> 
		  								<img src = {$psc}/>
		  								<a href="https://www.canada.ca/en/public-service-commission.html" target="_blank">
		  									Public Service Commission of Canada
		  								</a>
		  								<p> Jan - Apr 2018 </p>
		  							</li>

		  						</ul>

		  						<ul className="list social_media">
		  							<li>
		  								<a href="/jonathanchen.pdf" target="_blank"> 
		  									<i class="fa fa-file">
		  									</i>
		  								</a> 
		  							</li>
		  							<li>
		  								<a href="https://www.linkedin.com/in/jonathan-hh-chen/" target="_blank">
		  									<i class="fa fa-linkedin">
		  									</i>
		  								</a>
		  							</li>

		  							<li>
		  								<a href="mailto: jhhchen@uwaterloo.ca">
		  									<i class="fa fa-envelope">
		  									</i>
		  								</a> 
		  							</li>

		  							<li>
		  								<a href="https://twitter.com/jonnychenny" target="_blank">
		  									<i class="fa fa-twitter">
		  									</i>
		  								</a> 
		  							</li>

		  						</ul>
			  				</div>
			  			</div>
			  		</div>
	  			</div>
	  		</div>
		</div>

	  </section>

	  <section className="about_section p_120">
	  	<div className="container about_box">
	  		<div className="about_class">
	  		<div className="container" id="about">
	  			<h3>About Me </h3>
  					<p>
  						I am currently in my fourth year at the University of Waterloo. I am constantly asked, "what is Systems Design?" Well, for me Systems Design Engineering is a program that allows you to think critically about all products, whether it be a water bottle or a web application, and provides you with the knowledge necessary to solve the problems that may exist. Systems, in essence, is who I am. I constantly seek to learn and understand new technologies, then apply my knowledge to create efficient and secure solutions to the challenges that I face. <br/> <br/>

  						Through my previous internships and school courses, I gained experience developing in Java, Python, Golang, R, and Bash. Most recently, I have just completed an internship as a Software Engineering Intern at Odaia where I designed and developed instrumentation reports for the machine learning models used Odaia's Maptual product. These reports contained data visualizations that were used to validate the ML predictions, which lead to the surfacing of 30+ critical bugs and also aided in the tuning of the paramaters of the models. <br/><br/>

  						My other experiences include working as a Software Developer at Altairix, where I developed a custom reporting feature for their newly created questionnaire. These reports were generated on a weekly basis and helped the organization and their clients understand the demographics of the questionnaire respondents in order to create highly targeted marketing campaigns. Additionally, I also worked as a Security Engineer at League Inc. where I was responsible for protecting the integrity of the League application. As a result, I developed the authentication flow for users signing into the app as well as investigated and presented new security applications for the entire engineering team to use. Prior to League, I was a Security Software Developer on an innovation team at BlackBerry that was responsible for investigating new ideas for the organization. One of my main projects was to develop a prototype of an Android application that emulates a car key using Bluetooth. Before BlackBerry, I was a Quality Engineering Intern at Interset, where I was responsible for automating the product installer using Bash, developing unit tests in Java, and performing regression tests on the latest product release. Finally, in the winter of 2018, I worked at the Public Service Commission of Canada (PSC) as an IT Security Analyst. My role at the PSC was to prevent, manage, and mitigate IT security incidents. I accomplished this by researching new security tools and creating a knowledge base on how to handle security incidents for future employees. <br/> <br/>

						In my free time, I enjoy everything sports related. I have been playing soccer since I was six years old, and recently I have developed a love for ultimate frisbee and badminton. I am also passionate about the Ottawa Senators (even through the dark times), and avidly watch the Premier League. Beyond that, I enjoy playing chess and challenging my friends in Sporcle.

  					</p> 
  				</div>
	  		</div>
	  	</div>
	  </section>

	</home_body>
  );
}

export default Homepage;
