# RumRum cars - Buy & Sell Cars website.

### Built using MERN Stack


<div style="display: flex;">
<img src="https://raw.githubusercontent.com/Lautaroef/portfolio/c2dfd0e0f764bbac8dad4cb7b91779f6e68c0113/src/images/technologies-svg/react-js.svg" alt="React" width=50 />
<img src="https://raw.githubusercontent.com/Lautaroef/portfolio/c2dfd0e0f764bbac8dad4cb7b91779f6e68c0113/src/images/technologies-svg/redux.svg" alt="Redux" width=50 />
<img src="https://raw.githubusercontent.com/Lautaroef/portfolio/c2dfd0e0f764bbac8dad4cb7b91779f6e68c0113/src/images/technologies-svg/sass.svg" alt="Sass" width=50 />
<img src="https://raw.githubusercontent.com/Lautaroef/portfolio/c2dfd0e0f764bbac8dad4cb7b91779f6e68c0113/src/images/technologies-svg/material-ui.svg" alt="MaterialUI" height=50/>
<img src="https://raw.githubusercontent.com/Lautaroef/portfolio/c2dfd0e0f764bbac8dad4cb7b91779f6e68c0113/src/images/technologies-svg/mongodb.svg" alt="MongoDB" width=55 style="margin-top: 20px;"/>
<img src="https://raw.githubusercontent.com/Lautaroef/portfolio/c2dfd0e0f764bbac8dad4cb7b91779f6e68c0113/src/images/technologies-svg/node-js.svg" alt="Node.js" height=50/>
<img src="https://raw.githubusercontent.com/Lautaroef/portfolio/c2dfd0e0f764bbac8dad4cb7b91779f6e68c0113/src/images/technologies-svg/express.svg" alt="Express.js" height=50/>
<img src="https://raw.githubusercontent.com/Lautaroef/portfolio/75fd78e851b20caec56970a836eccd83cc39ce92/src/images/technologies-svg/firebase.svg" alt="Firebase" height=50/> 
<br/><br/>
</div>

This website is my first one where i applied **Backend technologies** like MongoDB - Express - NodeJS.<br/>
In the **Frontend development** i used React and Redux for the state.<br/>
For **styling** and organizing all the CSS i choosed the Sass preprocessor. Also the MaterialUI library was used for some responsive components.

[**React hook form**](https://react-hook-form.com/ "React Hook Form website") was used to handle errors on the "Sell a Car" page and for the Firebase authentication form.

## Firebase
Used Firebase services to implement **User Authentication** on the website and **Firebase hosting** to host the Front and Backend.

## Image storing on the cloud.
And for posting and receiving the car images i used [Cloudinary](https://cloudinary.com/ "Cloudinary website") service.
> At first a system for posting and receiving images was made using only [Multer](https://github.com/expressjs/multer "Multer website") where the images were stored in a private file on my workspace, but i wanted to improve as this method has some cons in the long run.

### About functionality
The user can select a car which he likes most, he click on the "Buy this car" button and the delete method is triggered.<br/>
Also the part i like the most is when you want to sell a car and all the process that is shown until the car is finally uploaded with all it's description and image.
