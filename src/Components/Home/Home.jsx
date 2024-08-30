import Faq from "../Faq/Faq";
import Reviews from "../Reviews/Reviews";
import Slider from "../Slider/Slider";
import WhyChoiceUs from "../WhyChoiceUs/WhyChoiceUs";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Faq></Faq>
            <WhyChoiceUs></WhyChoiceUs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;