/* When a route has children, and you're at the parent route's path  ('/'), 
the <Outlet> has nothing to render because no children match.
 You can think of index routes as the default child route to fill in that space.*/

 // <img src={logoLarge} />
 import logoLarge from "../images/logo_large.png"; 
 export default function Index() {
    return (
      <p id="index-page">
        <img src={logoLarge} />
        <br />
      </p>
    );
  }
  
