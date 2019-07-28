import React from 'react';

function Footer() {
  return (
  	<footer>
      <div className="footer_section pad_40">
      	<div className="container footer_box"> 
      		<div className="footer_content">
	      		Contact me!
	      	</div>

	      	<div className="footer_links">
	      		<a href="mailto: jhhchen@uwaterloo.ca"> jhhchen@uwaterloo.ca 
	      		</a>

	      		<ul class="list social_media">
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

					<li className="last">
						<a href="https://twitter.com/jonnychenny" target="_blank">
							<i class="fa fa-twitter">
							</i>
						</a> 
					</li>

				</ul>
	      	</div>
      	</div>	
      </div>

    </footer>
  );
}

export default Footer;
