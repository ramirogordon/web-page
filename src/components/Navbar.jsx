import React from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link 
              to="/"
            >Home</Link>
          </li>
          <li>
            <Link 
              to="/characters"
            >Characters</Link>
          </li>
          <li>
            <Link 
              to="/equipment"
            >Equipment</Link>
          </li>
          <li>
            <Link 
              to="/abilities"
            >Abilities</Link>
          </li>
        </ul>
      </nav>
      <div className="login-link">
        <Link to="/login">
          <div className="login-name">
            Login 
          </div>
          <div className="login-img">
            <img alt="default_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAE40lEQVR4Ae2bA7DmWBCFe2zb5j8vL/ecte3S2PZMYVlc27ZtG6W1rbFte+7a+5Lb+W/eZKrynTJOR1edbsnJycnJyfFH2AW9zWm8AS/wI/7IpdyJrVjGafwIL/AGcxp6s5NkkUJtDsbdnEcbL8zFPWZgtzqSFUwpb+UmWp2wAbeHoexZWMUMwvu0yYX3OZhVZE9Q0oDnYBmtBy3BuSUNpFypYEZzFa1HrTBjpIKUD0EvfkSbgj4Kekn6oDc306akzegtqVIRF9OmK3NJap9S++p4kbYc9FL76uIf0wSf0JaP8EmhofilpCPm0pajZpZ0FH+wBefTqrSKd4UnsXuhdrc6QTecwruwWukw37T09/FMV4WeZyb+d3UtVDUTuUDlMy1o6mXo8gtV2OfaVy/bC0+rvL7wMJxxkyrk9RIDrtX44SYpDnOMKtyLDnN4BTxPq9Bxkhw25gr3UFjImuIAa2KhwnU5G0tS8KBqDR0ujpjhGl88IMkIj1CFmSMVxZWKnE2r0JGSgMq6ILhWFOA6WoVmJTj0cLJy+T9eFPA4WpUm65//Yl2I0q6ioLQrrfIDrSwaMIpWp851RUHnulp/jBQNnKYNUKitTMNYpaaJO+ZwpXnyT0ghc5i4ggd01voVMzxWH8F5PQhqYWsC+2tEAa6hVWtLUEtcMH1o9cIcUcDZSWKYPuICbqRNIgwVRzA0YYQbxQV+o7dWbuYW0SbSNxJPoSFtUuF5p+10EbkNh8O+OZq2CF2v3wVpZI72vgfSHSn5nN5RuSfi9bRFah4n/Xf32LkaJykO9YnfsOA1Wg9ahbtxCrt3qxOTVlEKr0kc/Jo2w/pa4sBc2uwKcyUOrM70DayWOLA70zewS+LAtkzfwDaJgytpM6yVEgfmZPoNzCm3aRS7OR9v4Sacxwt5P97nUj/TaMoLGabjNkwNT0KPQtX/HpSCXmYQ7sD0IvxflTh4Q7LBhUcxxPWXhGnJyfg0ra3EVJ0lNuJBDA3rixrTEzdznTLaFL85s+28yzSRImhdA+M1KbTwWImjeyNHsx28qtBcPMCauBy7PGaf8JXLLzhQPGL2cRna+EqiUAzjH01L8UxQy+HPzQ1+0ipLS1tJChSq4gMvaZWgFrdELVDhwZISph02RkTeGtQSN3hfhM2DkiLmkog3cJ+7zWERN3BouvV3niJzmj4z46mQTZde1//gMKMlRczosuJilKiojEVlDSUEkhIsKTMvvljziylmT4S5YX1JAdYru3AWU0ULq/DHMu0+LdT2X/sbsT/9USqLnvCgiBnhA9YUj7Bm1CJmDpRk4IHImtsWHueed1IoNRBhYyyPytHwOPEAu0eew1foiz0UpwPcXGxJEoZiQ1QEc0zKBU+Ywf2TP3u+qy940pecfR6XLeOdQQdREnTAHdxJG6nPFe838ow2LT7lh8fNga41t6X74TGHM9i07o3ED6alW9klluFe9I4Ka1riLE7zX3bpu/B1Hp/kOZjCwTghPOIX4ShM4f38wTV1jLnstFeXHpsme3HxN15UDl0FFdIvv8fFKXdysB83ZawBQp8STKsFxfTMm4A0O0icm802LAWsgiH4oKgh+wGGsIrsWcIQt2NjklZElkhW6FaHg3mXvhk0u+24L/7ZjrsNyzgNH+NF3GhOQ++wi3gjJycnJyfnJ72qZW7HC1zkAAAAAElFTkSuQmCC" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
