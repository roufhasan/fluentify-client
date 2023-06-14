import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";

const Blog = () => {
  return (
    <div className="mb-20">
      <div className="text-center my-20">
        <h3 className="text-center font-semibold text-[#6a6f73]">Our Blog</h3>
        <h2 className="text-3xl font-bold text-blue-700">
          Latest Blog & Articles
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Slide>
          <div className="border shadow-xl shadow-[#5754f7]/30">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt=""
                className="h-64 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                8 Most Asked Questions About The Ielts Exam
              </h2>
              <p>
                If you are prepearing yourself for IELTS here are some common
                qustion that might help you.
              </p>
              <div className="card-actions justify-end">
                <motion.a whileHover={{ scale: 1.09 }}>
                  <button className="btn Read More">Read More</button>
                </motion.a>
              </div>
            </div>
          </div>
        </Slide>
        <div className="border shadow-xl shadow-[#5754f7]/30">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1565022536102-f7645c84354a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
              alt=""
              className="h-64 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Why Are You Thinking About Learning Better English?
            </h2>
            <p>
              Are you trying to improve your english laguage? In this blog I am
              going to explain..
            </p>
            <div className="card-actions justify-end">
              <motion.a whileHover={{ scale: 1.09 }}>
                <button className="btn Read More">Read More</button>{" "}
              </motion.a>
            </div>
          </div>
        </div>
        <Slide>
          <div className="border shadow-xl shadow-[#5754f7]/30">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className="h-64 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                How To Learn Any Launguage Fast & Learing Process
              </h2>
              <p>
                We need to learn a lot of things in our life. The most used
                thing in our life is language..
              </p>
              <div className="card-actions justify-end">
                <motion.a whileHover={{ scale: 1.09 }}>
                  <button className="btn">Read More</button>{" "}
                </motion.a>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Blog;
