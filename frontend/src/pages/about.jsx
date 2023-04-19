import image from '../../0-6.jpg'
import "./small.css"
export default function About() 
{

    return (

        <div classname = "pic">
            <img
              className="mx-auto h-60 w-auto"
              src={image}
              alt="You"
            />
        <h3 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Hi. I'm new to the world of frontend and backend web design.
        </h3>
      </div>
    
    );
}
  