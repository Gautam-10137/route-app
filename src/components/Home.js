import homeImage from "../img/home.png"
const Home = () => {
    return <>
       <div className="container">
         <div className="content">Welcome to <b>G&P Designers</b> - Elevating User Experiences through Design
         <br></br>

At <b>G&P Designers</b>,we are passionate about the art and science<br></br> 
of creating exceptional user interfaces and user experiences.<br></br> 
We understand that the digital world is constantly evolving,<br></br>
 and user expectations are higher than ever. <br></br>
 That's why we are dedicated to crafting designs that <br></br>
 not only captivate users but also drive results for your business.<br></br>
  With a team of seasoned UI/UX designers, we blend <br></br>
  creativity, strategy, and technology to transform your<br></br> 
  vision into intuitive and visually stunning digital solutions.<br></br> 
  Explore our portfolio, learn about our design philosophy, and<br></br> 
  discover how we can help you leave a lasting impression in the digital landscape.</div>
         <img src={homeImage} alt="UI/UX Design"></img>
       </div>
       </>;
  };
  
  export default Home;