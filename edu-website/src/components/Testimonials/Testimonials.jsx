import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";2
const Testimonials = () => {
// making slider moving 
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
if (tx > -50) {
    tx -= 25;
}
slider.current.style.transform = `translateX(${tx}%)`;
    }


    const slideBackward = () => {
        if (tx < 0) {
            tx += 25
        }
slider.current.style.transform = `translateX(${tx}%)`;
    }
    
    return (
        <div className="testimonials">
            <img src={next_icon} alt='' className="next-btn" onClick={slideForward}/>
            <img src={back_icon} alt='' className="back-btn" onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Jessica Newton  </h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                When I started my first class, it was a big surprise to me because both the professors
                                 and advisors are very caring and very nice.
                                 They're always here to help us.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of
                                the best decisions I have ever made. 
                                The supportive community, state-of-the-art facilities, 
                                and commitment to academic excellence have truly exceeded
                                my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Amanda Peterson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                            Our advisor is really nice, and is really concerned about us.
                             She asks about our lives, classes, and studies. 
                            It's quite comfortable to study here.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Christopher Boid</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                            I enjoy the topics of discussion in my courses.
                             Centring social justice within education allows for an interdisciplinary, 
                            critical approach toward education to inform better 
                            education practice, thought, pedagogy, theory, and more.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
export default Testimonials;