import Blog from "../Blog/Blog";
import PopularClasse from "../PopularClasses/PopularClasse";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import TopSlider from "../TopSlider/TopSlider";

const Home = () => {
  return (
    <div className="mt-6">
      <TopSlider></TopSlider>
      <PopularClasse></PopularClasse>
      <PopularInstructor></PopularInstructor>
      <Blog></Blog>
    </div>
  );
};

export default Home;
