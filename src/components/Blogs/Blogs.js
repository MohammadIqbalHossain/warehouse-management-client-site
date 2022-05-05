import React from 'react';

const Blogs = () => {
    return (
        <div className="flex justify-center">
            <div className="text-left md:w-[600px] m-5 md:order-2 order-1">
                
                    <h1 className="text-3xl text-gray-500 my-4">Difference between authorization and authentication</h1>
                    <p className="text-lg font-serif"> <strong>authorization: </strong> 
                    The authorization is actually verifyin the user and give him access to use a specific service, the user usually can't chnage anything, autorization proccess is just about just knwing who the user is.</p>
                    <strong>Authentication: </strong> Authentication is actually some a specific features or data user acces to change, 
                    <h1 className="text-3xl text-gray-500 my-4">Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <p className="text-lg font-serif">firebase is a very auhentication system to use, it's has multiple features, it's provides backend services, hosting, anlytics, many types of authentications like email/password and google, github, facebook and much more. So, it's a better option to use. 
                    <br />
                    <strong>Some alternative of firebase.</strong>
                    <li>Back4App</li>
                    <li>Oauth</li>
                    <li>flutter</li>
                    <li>AWS Amplify. </li>
                    <li>Kuzzle.</li>
                    </p>

                    <h1 className="text-3xl text-gray-500 my-4">What other services does firebase provide other than authentication</h1>
                    <p className="text-lg font-serif">Firebase base provides other that authentication, like, storage, realtime database, hosting, machine learning, anlytics, firebse database, firebase can be used for multiple system like, Web, Ios development, android development, unity game development and many more. </p>
                </div>
        </div>
    );
};

export default Blogs;