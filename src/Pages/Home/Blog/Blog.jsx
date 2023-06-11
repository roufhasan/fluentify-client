import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="mb-20">
      <div className="text-center my-20">
        <h3>Our Blog</h3>
        <h2 className="text-3xl font-bold text-blue-700">
          Latest Blog & Articles
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <motion.a whileHover={{ scale: 1.09 }}>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                8 Most Asked Questions About The Ielts Exam
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </motion.a>
        <motion.a whileHover={{ scale: 1.09 }}>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                How To Set Yourself Up For Success A New Career
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </motion.a>
        <motion.a whileHover={{ scale: 1.09 }}>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1565022536102-f7645c84354a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Why Are You Thinking About Learning Better English?
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default Blog;
