import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="p-0">
      <Navbar />
      <div className="w-100">
        <img src="/home.jpg" className="img-fluid" />
      </div>
      <div className="container my-5">
        <div className="row">
          <Card src="https://images.pexels.com/photos/397096/pexels-photo-397096.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Card src="https://images.pexels.com/photos/629162/pexels-photo-629162.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Card src="https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Card src="https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Card src="https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
          <Card src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </div>
      </div>
      <div className="py-3 text-white text-center w-100 bg-dark">
        <p>A PWA Web App built on Next.js</p>
      </div>
    </div>
  );
}
